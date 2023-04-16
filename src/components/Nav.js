import style from "../styles/nav.module.css";
import Link from "next/link";
import {FaShoppingCart} from "react-icons/fa"
import {useContextApp} from "./Wrapper";
export default function Nav() {
    const context = useContextApp()
  return (
        <nav className={style.container}>
            <div className={style.containerInfo}>
                <Link href="/"><div className={style.logo}></div></Link>
                <ul className={style.listnav}>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/store"><li>Store</li></Link>
                    <Link href="/faq"><li>Faq</li></Link>
                    <li onClick={()=>context.render()} style={{display:"flex"}}><FaShoppingCart size={20}/> ({context.elementsCard()})</li>
                </ul>

            </div>
        </nav>
  )
}