import React from 'react';

const SkipIcon = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size * 0.6}
    viewBox="0 0 64 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="12" width="60" height="20" rx="3" fill="#FBBF24" stroke="#B45309" strokeWidth="2"/>
    <polygon points="2,12 10,2 54,2 62,12" fill="#F59E42" stroke="#B45309" strokeWidth="2"/>
    <rect x="18" y="18" width="28" height="8" rx="2" fill="#FFF" stroke="#B45309" strokeWidth="1"/>
    <text x="32" y="25" textAnchor="middle" fontSize="7" fill="#B45309" fontWeight="bold">SKIP</text>
  </svg>
);

export default SkipIcon; 