import React, { useEffect } from 'react';

const JobModal = ({ form, setForm, onSubmit, onClose }) => {
  const handleSubmit = () => {
    const updatedForm = {
      ...form,
      salaryMin: form.salaryMin * 12,
      salaryMax: form.salaryMax * 12,
    };
    onSubmit(updatedForm);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fields = ['title', 'company', 'location', 'salary', 'deadline', 'experience', 'description'];

      fields.forEach((field) => {
        let value = form[field];
        if (field === 'salary') {
          value = form.salaryMin || form.salaryMax;
        }
        if (field === 'type' && value === 'Select') {
          value = '';
        }
        const label = document.querySelector(`#label-${field}`);
        if (label) {
          label.classList.toggle('fw-bold', Boolean(value && value !== ''));
        }
      });
    }, 0);

    return () => clearTimeout(timeout);
  }, [form]);

  const handleFocus = (field) => {
    

    let value = field === 'salary' ? form.salaryMin || form.salaryMax : form[field];
    if (field === 'type' && value === 'Select') value = '';

    const label = document.querySelector(`#label-${field}`);
    if (label && value && value !== '') {
      label.classList.add('fw-bold');
    }
  };

  return (
    <div
      className="modal d-flex align-items-center justify-content-center show fade"
      tabIndex="-1"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.3)' }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4">
          {/* Close Button */}
          <button type="button" className="btn-close position-absolute end-0 top-0 m-3" aria-label="Close" onClick={onClose}></button>

          {/* Title */}
          <h4 className="text-center mb-4 fw-bold">Create Job Opening</h4>

          {/* Row 1 */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label id="label-title" className="form-label">Job Title</label>
              <input
                className="form-control"
                 placeholder="Eg. Full Stack Developer"
                value={form.title}
                onFocus={() => handleFocus('title')}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
            <div className="col-md-6">
              <label id="label-company" className="form-label">Company Name</label>
              <input
                className="form-control"
                placeholder="Amazon, Microsoft, Swiggy"
                value={form.company}
                onFocus={() => handleFocus('company')}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label id="label-location" className="form-label">Location</label>
              <input
                className="form-control"
                placeholder="Choose Preferred Location"
                value={form.location}
                onFocus={() => handleFocus('location')}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </div>


            
    <div className="col-md-6">
  <label id="label-type" className="form-label">Job Type</label>
  <select
    className="form-select rounded-field"
    value={form.type}
    onFocus={() => handleFocus('type')}
    onChange={(e) => setForm({ ...form, type: e.target.value })}
  >
   {/* ← ✅ placeholder */}
    <option value="Internship">Internship</option>
    <option value="FullTime">FullTime</option>
    <option value="Parttime">Parttime</option>
    <option value="Contract">Contract</option>
    
  </select>
</div>



          </div>

          {/* Row 3 */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label id="label-salary" className="form-label">Salary Range (per month)</label>
              <div className="d-flex gap-2">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Min ₹"
                  value={form.salaryMin}
                  onFocus={() => handleFocus('salary')}
                  onChange={(e) => setForm({ ...form, salaryMin: Number(e.target.value) })}
                />
                <input
                  className="form-control"
                  type="number"
                  placeholder="Max ₹"
                  value={form.salaryMax}
                  onFocus={() => handleFocus('salary')}
                  onChange={(e) => setForm({ ...form, salaryMax: Number(e.target.value) })}
                />
              </div>
            </div>
           <div className="col-md-6">
  <label id="label-deadline" className="form-label">Application Deadline</label>
  <input
    className="form-control"
    type="date"
    value={form.deadline || ''}
    onFocus={() => handleFocus('deadline')}
    onChange={(e) => setForm({ ...form, deadline: e.target.value })}
    placeholder="" // this line is optional, type="date" usually ignores it
  />
</div>

          </div>

          {/* Experience */}
          <div className="mb-3">
            <label id="label-experience" className="form-label">Experience</label>
            <input
              className="form-control"
              placeholder="e.g. 1-3"
              value={form.experience}
              onFocus={() => handleFocus('experience')}
              onChange={(e) => {
                const val = e.target.value.replace(/\s*yr[s.]?$/i, '');
                setForm({ ...form, experience: val });
              }}
              onBlur={() => {
                if (form.experience && !form.experience.toLowerCase().includes('yr')) {
                  setForm({ ...form, experience: `${form.experience} yr` });
                }
              }}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label id="label-description" className="form-label">Job Description</label>
            <textarea
              className="form-control"
              rows={4}
              placeholder="Please share a description to let the candidate know more about the job role"
              value={form.description}
              onFocus={() => handleFocus('description')}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            ></textarea>
          </div>

          {/* Actions */}
          <div className="d-flex justify-content-between">
        <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
  Save Draft
  <div className="d-flex flex-column align-items-center" style={{ lineHeight: '0.8', fontSize: '12px', gap: '0px' }}>
    <i className="fas fa-chevron-down" style={{ marginBottom: '-8px' }}></i>
    <i className="fas fa-chevron-down"></i>
  </div>
</button>






            <button className="btn btn-primary" onClick={handleSubmit}>Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
