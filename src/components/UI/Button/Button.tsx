import React from 'react';
import * as S from './ButtonStyled';

/**
 * Primary UI component for user interaction
 */

export const Button = ({ label }: any) => {
  return <S.Button>{label}</S.Button>;
};
