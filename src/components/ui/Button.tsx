import React from 'react';
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  $disabled?: boolean;
  $variant?: 'primary' | 'secondary';
}>`
  padding: 0.6rem 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;

  background: ${({ $variant, $disabled }) => {
    if ($disabled) return '#cccccc';
    return $variant === 'secondary' ? '#374151' : '#1d4ed8';
  }};

  color: ${({ $variant, $disabled }) => {
    if ($disabled) return '#666';
    return $variant === 'secondary' ? '#e5e7eb' : '#fff';
  }};

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  transition: background 150ms ease;
  &:hover {
    background: ${({ $variant, $disabled }) => {
      if ($disabled) return '#cccccc';
      return $variant === 'secondary' ? '#4b5563' : '#2563eb';
    }};
  }

  width: fit-content;
`;

export const Button: React.FC<ButtonProps> = ({
  disabled,
  variant = 'primary',
  children,
  ...rest
}) => {
  return (
    <StyledButton
      aria-disabled={disabled}
      $disabled={disabled}
      $variant={variant}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
