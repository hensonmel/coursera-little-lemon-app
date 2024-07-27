import style from './header.module.css';

const Nav = () => {
  return (
    <nav className={style.navbar}>
        <div className={style.navlink}><a href="#home">Home</a></div>
        <div className={style.navlink}><a href="#about">About</a></div>
        <div className={style.navlink}><a href="#menu">Menu</a></div>
        <div className={style.navlink}><a href="#reserve">Reservations</a></div>
        <div className={style.navlink}><a href="#order">Order Online</a></div>
        <div className={style.navlink}><a href="#login">Login</a></div>
    </nav>
  );
}

export default Nav;