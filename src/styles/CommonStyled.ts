import { ContainerProps } from '@/types/styled';
import styled from 'styled-components';

/**컨테이너 styled
 * @params {display} : flex | block | inline-flex | inline-block | grid
 */
export const Container = styled.div<ContainerProps>`
  display: ${({ display }) => display};
`;
