import CardItem from './CardItem.jsx';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Get started in Tech</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Explore Your Options'
              label='Explore'
              path='/resources'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Learn C#'
              label='Learn'
              path='/resources'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Top 5 Tools for Aspiring Developers'
              label='Blog'
              path='/blog'
            />
            <CardItem
              src='images/Moi-shortest.png'
              text='Book a 1-on-1 Session'
              label='Consultation'
              path='/contact'
            />
            <CardItem
              src='images/digi-product.png'
              text='Templates & Digital Products'
              label='Products'
              path='/resources'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
