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
    <div className="jki" style={{ marginTop: '3.5rem' }}>
      <div
        className="card shadow-sm job-card"
        style={{
          width: '310px',
          height: '330px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '10px',
        }}
      >
        <div className="card-body d-flex flex-column">
          {/* Logo + Time */}
          <div className="position-relative mb-3">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: '83px',
                height: '82px',
                background: 'linear-gradient(180deg, #FEFEFD 0%, #F1F1F1 100%)',
                border: '1px solid #FFFFFF',
                boxShadow: '0px 0px 10px rgba(148,148,148,0.25)',
                borderRadius: '13px',
              }}
            >
              {job.logo_url ? (
                <img
                  src={job.logo_url}
                  alt={`${job.company} logo`}
                  style={{
                    maxWidth: '80%',
                    maxHeight: '80%',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                <span style={{ fontWeight: 'bold', color: '#000' }}>
                  {job.company[0]}
                </span>
              )}
            </div>
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

          <h5 className="card-title fw-bold">{job.title}</h5>

          {/* Icons */}
          <div className="d-flex gap-3 mb-2 text-muted small align-items-center">
            <div className="d-flex align-items-center gap-1">
              <i className="bi bi-person-fill" />
              <span>{job.experience} Exp</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <i className="bi bi-geo-alt" />
              <span>Onsite</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <i className="bi bi-currency-rupee" />
              <span>{displaySalary}</span>
            </div>
          </div>

          {/* Description: 3 lines only */}
          <ul
            className="mb-3 ps-3 small text-muted"
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              lineHeight: '1.4',
            }}
          >
            {job.description
              .split('\n')
              .slice(0, 3)
              .map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
          </ul>

          {/* Apply Button at bottom */}
          <button className="btn btn-primary mt-auto w-100">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
