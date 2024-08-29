import CartContents from '@/components/Layouts/Cart/CartContents';
import Header from '@/components/UI/Header/Header';

const ShoppingCart = () => {
  return (
    <div>
      <Header src="/images/intro_logo.png" />
      <CartContents />
    </div>
  );
};

export default ShoppingCart;
