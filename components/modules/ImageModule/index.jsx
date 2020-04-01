import style from "./index.scss"
const ImageModule = ({image, copy, link}) => {
  console.log(image)
  console.log(copy)
  return (
    <div>
      <img className={style.img} src={image} />
      <p className={style.copy}>{copy}</p>
      <a className={style.link}>{link}</a>
    </div>
  )
}
export default ImageModule
