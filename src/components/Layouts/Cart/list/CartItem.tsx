import { CartItemListType } from '@/types/cart';
import Image from 'next/image';
import * as style from '../cart.css';

const CartItem = (props: CartItemListType) => {
  return (
    <div className={style.cartItemContainer}>
      <input type="checkbox"></input>
      <Image
        src={props.fancy.images[0].url}
        alt={`${props.fancy.name}이미지`}
        width={100}
        height={100}
      />
      <div>
        <div>
          <div>{props.fancy.name}</div>
          <div>_</div>
          <div>{props.fancy.category}</div>
        </div>
        <div>수량: {props.count}개</div>
        {props.fancy.options.map((option, idx) => {
          return (
            <div key={idx}>
              <div>{option.name}</div>
              {option.subOptions[0].name}
            </div>
          );
        })}
        <div>{props.fancy.price}</div>
      </div>
    </div>
  );
};

export default CartItem;
