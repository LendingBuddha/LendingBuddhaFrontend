// src/components/Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((pathname, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          
          return (
            <li key={to} className={`breadcrumb-item${last ? ' active' : ''}`} aria-current={last ? 'page' : undefined}>
              {last ? pathname : <Link to={to}>{pathname}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
