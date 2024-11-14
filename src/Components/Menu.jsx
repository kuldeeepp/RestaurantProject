// Menu.jsx

import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
          <h1 className='heading'>Popular Dishes</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto facere minus, rem, minima dolor reprehenderit explicabo laborum impedit consectetur quasi nobis dolore ex perspiciatis culpa possimus aliquid quod labore praesentium illum dicta non mollitia et itaque natus. Neque optio atque provident! Perspiciatis libero eos voluptatibus, vero officiis doloremque laboriosam dolorum.</p>
        </div>
        <div className="dishes_container">
          <Link to="/menu/indian" className='card'>
            <img src="/indian.jpg" alt="Indian Cuisine" />
            <h3>Indian</h3>
          </Link>
          <Link to="/menu/chinese" className='card'>
            <img src="/chineese.jpg" alt="Chinese Cuisine" />
            <h3>Chinese</h3>
          </Link>
          <Link to="/menu/italian" className='card'>
            <img src="/italian.jpg" alt="Italian Cuisine" />
            <h3>Italian</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;