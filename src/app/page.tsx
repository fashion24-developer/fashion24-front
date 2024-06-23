import MSWProvider from '@/common/MswProvider';
import MockTestComponent from '@/components/MockTestComponent';

export default function Home() {
  return (
    <MSWProvider>
      <MockTestComponent />
    </MSWProvider>
  );
}
