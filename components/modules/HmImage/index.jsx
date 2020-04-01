import style from "./index.scss"

const HmImage = ({images, image}) => {
  return (
    <div className={style.hm}>
      <img src={images}></img>
      <img src={image}></img>
    </div>
  )
}

export default HmImage
