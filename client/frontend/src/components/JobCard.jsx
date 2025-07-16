import React from 'react';

const JobCard = ({ job }) => {
  const getTimeAgo = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffMs = now - created;

    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return 'Just now';
    if (diffMin < 60) return `${diffMin}m ago`;

    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return `${diffHr}h ago`;

    const diffDay = Math.floor(diffHr / 24);
    return `${diffDay}d ago`;
  };

  const salaryLPA = job.salary_max ? (job.salary_max / 100000).toFixed(1) : 0;
  const displaySalary = `₹${salaryLPA} LPA`;

  return (
  <div className="col-lg-3 col-md-4 col-sm-6 mb-4" style={{ marginTop: '4.5rem' }}>

      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
        <div className="position-relative mb-3">
  {/* Logo */}
  <div
    className="d-flex align-items-center justify-content-center"
    style={{
      width: '83.46px',
      height: '82px',
      background: 'linear-gradient(180deg, #FEFEFD 0%, #F1F1F1 100%)',
      border: '1px solid #FFFFFF',
      boxShadow: '0px 0px 10.25px rgba(148, 148, 148, 0.25)',
      borderRadius: '13.18px',
      fontWeight: 'bold',
      color: '#000',
    }}
  >
    {job.company[0]}
  </div>

  {/* Time badge */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      background: '#B0D9FF',
      borderRadius: '10px',
      padding: '6px 12px',
      fontSize: '14px',
      fontWeight: 500,
      color: '#000',
    }}
  >
    {getTimeAgo(job.created_at)}
  </div>
</div>


          <h5 className="card-title">{job.title}</h5>

        <div className="d-flex gap-3 mb-2 text-muted small">
  <div>🎓 {job.experience} Exp</div>
  <div>🏢 Onsite</div>
  <div>💸 {displaySalary}</div>
</div>


          <ul className="mb-3 ps-3 small">
            {job.description.split('\n').slice(0, 3).map((line, idx) => (
              <li key={idx}>• {line}</li>
            ))}
          </ul>

          <button className="btn btn-success mt-auto align-self-start">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
