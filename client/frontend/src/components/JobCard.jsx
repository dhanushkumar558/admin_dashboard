import React from 'react';

const JobCard = ({ job, index }) => {
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

 const salaryRaw = job.salary_max ? job.salary_max / 100000 : 0;
const salaryLPA = Number.isInteger(salaryRaw) ? salaryRaw : salaryRaw.toFixed(1);
const displaySalary = `${salaryLPA}LPA`;


  return (
   <div className="jki" style={{ marginTop: index < 4 ? '4rem' : '0' }}>

      <div
        className="card shadow-sm job-card"
        style={{
          width: '310px',
          height: '320px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '10px',
          margin:'10px'
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
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7 14.75C11.7 12.7618 9.28233 11.15 6.29999 11.15C3.31766 11.15 0.899994 12.7618 0.899994 14.75M15.3 12.05V9.35M15.3 9.35V6.65M15.3 9.35H12.6M15.3 9.35H18M6.29999 8.45C4.31177 8.45 2.69999 6.83822 2.69999 4.85C2.69999 2.86177 4.31177 1.25 6.29999 1.25C8.28822 1.25 9.89999 2.86177 9.89999 4.85C9.89999 6.83822 8.28822 8.45 6.29999 8.45Z" stroke="#5A5A5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                }}
              />
              <span>{job.experience} Exp</span>
            </div>

            <div className="d-flex align-items-center gap-1">
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.76364 16.3408H3.49091M3.49091 16.3408H12.1273M3.49091 16.3408V4.42274C3.49091 3.45538 3.49091 2.97133 3.67918 2.60185C3.84478 2.27684 4.10882 2.0128 4.43383 1.8472C4.80331 1.65894 5.28736 1.65894 6.25472 1.65894H9.36381C10.3312 1.65894 10.8142 1.65894 11.1837 1.8472C11.5087 2.0128 11.7736 2.27684 11.9392 2.60185C12.1273 2.97097 12.1273 3.45443 12.1273 4.4199V9.43166M12.1273 16.3408H17.3091M12.1273 16.3408V9.43166M17.3091 16.3408H19.0364M17.3091 16.3408V9.43166C17.3091 8.62686 17.309 8.22465 17.1775 7.90723C17.0022 7.484 16.6663 7.14754 16.243 6.97223C15.9256 6.84075 15.5228 6.84075 14.718 6.84075C13.9132 6.84075 13.5108 6.84075 13.1933 6.97223C12.7701 7.14754 12.4341 7.484 12.2588 7.90723C12.1273 8.22465 12.1273 8.62685 12.1273 9.43166M6.08182 7.70439H9.53637M6.08182 5.11348H9.53637" stroke="#5A5A5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                }}
              />
              <span>Onsite</span>
            </div>

            <div className="d-flex align-items-center gap-1">
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1728 10.0001L8.99096 15.4546L0.809143 10.0001M17.1728 13.6365L8.99096 19.091L0.809143 13.6365M17.1728 6.36373L8.99096 11.8183L0.809143 6.36373L8.99096 0.90918L17.1728 6.36373Z" stroke="#5A5A5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                }}
              />
              <span>{displaySalary}</span>
             
              
            </div>
          
          </div>
          

          {/* Description */}
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

          {/* Button */}
          <button className="btn btn-primary mt-auto w-100">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
