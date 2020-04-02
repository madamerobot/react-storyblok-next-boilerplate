import style from "./index.scss"
const Hackathon = ({imggif, imggiff, imggifff, copy}) => {
  return (
    <div>
      <img className={style.gif} src={imggif}></img>
      <img className={style.giff} src={imggiff}></img>
      <img className={style.gifff} src={imggifff}></img>
      <p className={style.copy}>{copy}</p>
    </div>
  )
}
export default Hackathon
