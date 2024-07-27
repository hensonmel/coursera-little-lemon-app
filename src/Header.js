import logo from './logo.png';
import Nav from './Nav';
import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.header} type="header">
      <div className={style.border}>
        <img src={logo} alt="Little Lemon Logo" width="200" />
        <Nav />
      </div>

    </header>
  );
}

export default Header;