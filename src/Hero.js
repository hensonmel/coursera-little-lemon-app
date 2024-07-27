import style from './hero.module.css';
import img from './restauranfood.jpg';
import Button from "./Button/Button";
import {Link} from "react-router-dom";


const HeroSection = () => {
  return (
    <section className={style.section}>
      <div className={style.border}>
        <div className={style.info}>
          <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to={"/booking"}><Button text="Reserve a Table"/></Link>
        </div>
        <img className={style.img} src={img} width="400"/>
      </div>
    </section>
  )
}
export default HeroSection;