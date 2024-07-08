import 'styled-components';
import { theme } from '@/styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

/**컨테이너 props 타입 */
export interface ContainerProps {
  display: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'grid';
}
