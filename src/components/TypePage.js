import Product from "./Product"
import style from "../styles/store.module.css";

export default function TypePage({page, dataProduct}) {
  
  if(page === "store"){
    return(
        <ul className={style.containerList}>
            {dataProduct?.map(element =>{
              return <Product items={element}/>
            })}
        </ul>
    )
  }
  if(page === "detail"){
    return(
        <div>
            detail
        </div>
    )
  }
    return (
    <div>
        home
    </div>
  )
}

