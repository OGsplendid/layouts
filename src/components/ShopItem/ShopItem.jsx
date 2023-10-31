import classes from './ShopItem.module.css';

export const ShopItem = ({ item }) => {
  return (
    <div className={classes['item']}>
        <div className={classes['img-container']}>
            <img src={item.img} className={classes['img']} />
        </div>
        <div className={classes['name']}>
            <p>{item.name}</p>
        </div>
        <div className={classes['color']}>
            <p>{item.color}</p>
        </div>
        <div className={classes['price']}>
            <p>{`$${item.price}`}</p>
        </div>
        <button className={classes['button']}>add to cart</button>
    </div>
  )
}
