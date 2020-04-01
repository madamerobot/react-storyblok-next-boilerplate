import style from "./index.scss"

const Sniph = ({image1, image2}) => {
  return (
    <div>
      <img className={style.img1} src={image1}></img>
      <img className={style.img2} src={image2}></img>
    </div>
  )
}
export default Sniph
