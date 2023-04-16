import {useContextApp} from "./Wrapper";
import Image  from "next/image";
import style from "../styles/cart.module.css";
export default function Cart() {
  const context = useContextApp();
  const calculateProductsTotal = ()=>{
    const total = context.itemsElement.reduce((accumulator, currentElement)=>{
        return accumulator + (currentElement.amount * currentElement.price) 
    },0)
    return total
  }
    return (
    <div className={style.container}>
        <button onClick={()=>context.render()}>CLOSE</button>
        <h3>tus productos</h3>
        <ul className={style.containerUl}>
            {
               context.itemsElement?.map(elements=>{
                return <li>
                            <div>
                                <Image className={style.img} width={60} height={60} src={elements.image}/>
                            </div>
                            <div className={style.information}>
                                <p>{elements.title}</p>
                                <p>{elements.amount}</p>
                            </div>
                       </li>
               }) 
            }
        </ul>
        <h2 style={{marginTop:"2rem"}}>Total: ${calculateProductsTotal()}</h2>
    </div>
  )
}