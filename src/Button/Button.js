import style from './button.module.css';
const Button = (props) => {
  return (
    <div className={style.button} type="button">
      <div className={style.text}>
        {props.text}
      </div>
    </div>
  )
}
export default Button;