import style from "./index.scss"
const BrickGame = ({brickimage, copy}) => {
  return (
    <div>
      <img className={style.img} src={brickimage}></img>
      <p className={style.text}>{copy}</p>
    </div>
  )
}
export default BrickGame
