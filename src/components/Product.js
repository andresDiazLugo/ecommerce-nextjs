import Image from "next/image"
import style from "../styles/store.module.css";
import ButtonCard from "./ButtonCard";
import Link from "next/link";

export default function Product({items}) {
  
  return (
            <li className={style.containerCards}>
                <div>
                  <Link href={`/store/${items.id}`}>
                    <Image className={style.img} width={200} height={200} src={items.image}/>  
                  </Link>
                </div>
                <Link href={`/store/${items.id}`}>
                  <h2>{items.title}</h2>
                </Link>
                <h3>${items.price}</h3>
                <ButtonCard item={items}/>           
            </li>
  )
}