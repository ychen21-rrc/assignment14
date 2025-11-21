import React from 'react';
import styled from 'styled-components';
import type { CardProps } from './Card.types';

const StyledCard = styled.div<{ $disabled?: boolean }>`
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  padding: 16px;
  background: ${({ $disabled }) => ($disabled ? '#fafafa' : 'white')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  margin: 0 0 0.25rem;
  font-size: 1.25rem;
`;

const Subtitle = styled.p`
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  color: #6b7280;
`;

export const Card: React.FC<CardProps> = ({
  disabled,
  title,
  subtitle,
  children,
  ...rest
}) => {
  return (
    <StyledCard $disabled={disabled} {...rest}>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </StyledCard>
  );
};
