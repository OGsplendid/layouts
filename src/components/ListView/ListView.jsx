import classes from './ListView.module.css';
import { ShopItem } from '../ShopItem/ShopItem';

export const ListView = ({ items }) => {
  return (
    <div className={classes['container']}>
        {items.map((item) => (
            <ShopItem key={item.img} item={item} />
        ))}
    </div>
  )
}
