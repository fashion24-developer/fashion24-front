import Header from '@/components/UI/Header/Header';
import Banner from '@/components/UI/Banner/Banner';
const WhateverHeader = () => {
  return (
    <div>
      <Header src="/images/intro_logo.png" />
      <Banner
        backGround="/images/intro_whatever.png"
        description="Please select the item you want"
      />
    </div>
  );
};

export default WhateverHeader;
