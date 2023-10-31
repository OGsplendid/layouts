import classes from './CardsView.module.css';
import { ShopCard } from '../ShopCard/ShopCard';

export const CardsView = ({ cards }) => {
  return (
    <div className={classes['container']}>
        {cards.map((card) => (
            <ShopCard key={card.img} card={card} /> 
        ))}
    </div>
  )
}
