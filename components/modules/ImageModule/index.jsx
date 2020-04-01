import style from "./index.scss"
const ImageModule = ({image, copy, link}) => {
  console.log(image)
  console.log(copy)
  return (
    <div className={style.root}>
      <img src={image} />
      <p>{copy}</p>
      <link herf="https://github.com/victholerus98/trainbrain.git"></link>
    </div>
  )
}
export default ImageModule
