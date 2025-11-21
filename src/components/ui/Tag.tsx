import React from 'react';
import styled from 'styled-components';
import type { TagProps } from './Tag.types';

const StyledTag = styled.span<{ $disabled?: boolean }>`
  display: inline-flex;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  font-size: 0.8rem;
  background: #e0f2fe;
  border: 1px solid #bfdbfe;
  color: #1d4ed8;

  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`;

export const Tag: React.FC<TagProps> = ({ label, disabled, ...rest }) => {
  return (
    <StyledTag $disabled={disabled} {...rest}>
      {label}
    </StyledTag>
  );
};
