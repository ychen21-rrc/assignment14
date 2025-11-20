import React from 'react';

type CardProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <section className="card">
      {title && <h2 className="card-title">{title}</h2>}
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      <div className="card-body">{children}</div>
    </section>
  );
};
