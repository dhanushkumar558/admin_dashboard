import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import JobCard from './components/JobCard';
import JobModal from './components/JobModal';
import JobFilter from './components/JobFilter';

import './index.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSalary, setSelectedSalary] = useState(10000); // ₹10k+

  // Form State
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    type: 'FullTime',
    salaryMin: '',
    salaryMax: '',
    experience: '',
    deadline: '',
    description: ''
  });

  // Fetch jobs from backend
  const fetchJobs = async () => {
    try {
      const res = await axios.get('https://dashboard.boltxgaming.com/api/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Filtering logic
  useEffect(() => {
   const filtered = jobs.filter(job => {
  const salaryMonthly = job.salary_max / 12;

  return (
    (!searchQuery || job.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (!selectedLocation || job.location.toLowerCase() === selectedLocation.toLowerCase()) &&
    (!selectedType || job.type.toLowerCase() === selectedType.toLowerCase()) &&
    (salaryMonthly >= selectedSalary)
  );
});

    setFilteredJobs(filtered);
  }, [jobs, searchQuery, selectedLocation, selectedType, selectedSalary]);

  // Handle submit
  const handleSubmit = async (formData) => {
    try {
      await axios.post('https://dashboard.boltxgaming.com/api/jobs', formData);
      setForm({
        title: '',
        company: '',
        location: '',
        type: 'FullTime',
        salaryMin: '',
        salaryMax: '',
        experience: '',
        deadline: '',
        description: ''
      });
      setShowModal(false);
      fetchJobs();
    } catch (err) {
      console.error('Error posting job:', err);
    }
  };

  return (
    <div>
      <Navbar onCreateClick={() => setShowModal(true)} />

      {/* 🔽 Fix added here */}
      <div className="container ele" style={{ marginTop: '160px' }}>
        <JobFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedSalary={selectedSalary}
          setSelectedSalary={setSelectedSalary}
        />

<div className="container px-0">
  <div className="row gx-4 gy-4" style={{ maxWidth: '1360px', margin: '60px auto 0' }}>
{filteredJobs.map((job, index) => (
  <div className="col-md-3" key={job.id}>
    <JobCard job={job} index={index} />
  </div>
))}
</div>

</div>


      </div>

      {showModal && (
        <JobModal
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;
