import { Link } from 'react-router-dom';

export const Contacts = () => {
  return (
    <>
      <h1>
        Home
      </h1>

      <ul>
        <li>
          <Link to="/">Каталог</Link>
        </li>
        <li>
          <Link to="about">О нас</Link>
        </li>
        <li>
          <Link to="contacts">Контакты</Link>
        </li>
      </ul>
    </>
  );
};
