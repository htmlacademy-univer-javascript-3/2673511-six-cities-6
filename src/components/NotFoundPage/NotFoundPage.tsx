import React from 'react';

const NotFoundPage: React.FC = () => (
  <div className="page page--not-found" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    <h1 style={{ fontSize: '4rem', margin: '2rem 0' }}>404 Not Found</h1>
    <p style={{ marginBottom: '2rem' }}>Sorry, the page you are looking for does not exist.</p>
    <a href="/" style={{ color: '#4481c3', textDecoration: 'underline', fontSize: '1.2rem' }}>Go to main page</a>
  </div>
);

export default NotFoundPage;
