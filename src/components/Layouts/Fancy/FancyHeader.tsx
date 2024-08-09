import Header from '@/components/UI/Header/Header';
import Banner from '@/components/UI/Banner/Banner';
const FancyHeader = () => {
  return (
    <div>
      <Header src="/images/intro_logo.png" />
      <Banner backGround="/images/intro_fancy.png" description="Office Core" />
    </div>
  );
};

export default FancyHeader;
