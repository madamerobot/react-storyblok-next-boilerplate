import style from "./index.scss"
const ImageModule = ({image, copy}) => {
  console.log(image)
  console.log(copy)
  return (
    <div className={style.root}>
      <img src={image} />
      <p>{copy}</p>
    </div>
  )
}
export default ImageModule
