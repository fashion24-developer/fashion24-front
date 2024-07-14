'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroTitle = styled(motion.div)`
  text-align: center;
  margin: 5%;
  width: 100%;
  height: 100%;
  cursor: pointer;
  & > :nth-child(1) {
    width: 70%;
    height: 70%;
  }
`;

interface IntroUnitProps {
  width: string;
  height: string;
  color: string;
  show: boolean;
}
/**
 * intro페이지 Unit 글자 box
 * @params {width} : 너비 값
 * @params {height} : 높이 값
 * @params {color} : 기본색상
 * @params {show} : hover시 동작
 */
export const IntroListUnit = styled(motion.div)<IntroUnitProps>`
  cursor: pointer;
  text-align: center;
  width: 75%;
  height: 75%;
  margin: 1%;
  & > :nth-child(1) {
    & > :nth-child(1) {
      width: ${({ width }) => width};
      height: ${({ height }) => height};
      transition: all 0.3s ease-in-out;
      opacity: ${({ show }) => (show ? 0.3 : 1)};
    }
  }
`;

export const HoverGetShowTextBox = styled.div<Partial<IntroUnitProps>>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  color: #000;
  padding: 10px;
  border-radius: 5px;
`;
