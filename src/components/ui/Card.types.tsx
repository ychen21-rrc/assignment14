import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  title?: string;
  subtitle?: string;
}
