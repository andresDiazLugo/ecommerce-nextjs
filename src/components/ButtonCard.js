import style from "../styles/ButtonCard.module.css"
import {useContextApp} from "./Wrapper"

export default function ButtonCard({item}) {
    const context = useContextApp()
    return (
        <button onClick={()=>context.addElements(item)} className={style.button}>Add Card</button>
  )
}