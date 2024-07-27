import logo from './logo_footer.png';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer} type="footer">
      <div>
        <img src={logo} alt="Little Lemon Logo" height="100" />
      </div>
      <div>
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;