import React from 'react';
import * as style from './button.css';
/**
 * Primary UI component for user interaction
 */

export const Button = ({ label }: any) => {
  return <button className={style.button}>{label}</button>;
};
