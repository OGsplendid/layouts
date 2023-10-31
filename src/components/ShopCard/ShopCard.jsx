import classes from './ShopCard.module.css';

export const ShopCard = ({ card }) => {
  return (
    <div className={classes['item']}>
        <div className={classes['name']}>
            <p>{card.name}</p>
        </div>
        <div className={classes['color']}>
            <p>{card.color}</p>
        </div>
        <img src={card.img} className={classes['img']} />
        <div className={classes['price-wrapper']}>
            <div className={classes['price']}>
                <p>{`$${card.price}`}</p>
            </div>
            <button className={classes['button']}>add to cart</button>
        </div>
    </div>
  )
}
