import styled from 'styled-components';

export const Button = styled.div`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  padding: 5% 10%;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  &:hover {
    background-color: #f00;
    color: #fff;
  }
`;
