import React from 'react';
import './JobModal.css';

const JobModal = ({ form, setForm, onSubmit, onClose }) => {
  const handleSubmit = () => {
    const updatedForm = {
      ...form,
      salaryMin: form.salaryMin * 12,
      salaryMax: form.salaryMax * 12,
    };
    onSubmit(updatedForm);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create Job Opening</h2>
        <input placeholder="Job Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
        <input placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
        <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
          <option>FullTime</option>
          <option>Intern</option>
          <option>PartTime</option>
        </select>
       <input
  placeholder="Experience (e.g. 1-3 yr)"
  value={form.experience}
  onChange={e => {
    const val = e.target.value.replace(/\s*yr[s.]?$/i, ''); // Remove any "yr" as you type
    setForm({ ...form, experience: val });
  }}
  onBlur={() => {
    if (form.experience && !form.experience.toLowerCase().includes('yr')) {
      setForm({ ...form, experience: `${form.experience} yr` });
    }
  }}
/>

        <input placeholder="Salary Min (per month)" type="number" value={form.salaryMin} onChange={e => setForm({ ...form, salaryMin: e.target.value })} />
        <input placeholder="Salary Max (per month)" type="number" value={form.salaryMax} onChange={e => setForm({ ...form, salaryMax: e.target.value })} />
        <input type="date" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} />
        <textarea placeholder="Job Description (bullet points supported)" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
        <div className="modal-actions">
          <button onClick={handleSubmit}>Publish</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
