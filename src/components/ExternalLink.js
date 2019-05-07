import React from 'react';

export default function ExternalLink({ children, to, href = to, ...props }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
      {children}
    </a>
  );
}
