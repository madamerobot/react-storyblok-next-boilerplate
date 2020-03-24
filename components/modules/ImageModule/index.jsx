const ImageModule = ({image, copy}) => {
  console.log(image)
  console.log(copy)
  return (
    <div>
      <img src={image} />
      <p>{copy}</p>
    </div>
  )
}
export default ImageModule
