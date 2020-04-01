import style from "./index.scss"

const HmImage = ({images, image}) => {
  return (
    <div>
      <img className={style.hm1} src={images}></img>
      <img className={style.hm2} src={image}></img>
    </div>
  )
}

export default HmImage
