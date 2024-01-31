import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/">Каталог</Link>
        </li>
        <li className="navigation__item">
          <Link to="about">О нас</Link>
        </li>
        <li className="navigation__item">
          <Link to="contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};
