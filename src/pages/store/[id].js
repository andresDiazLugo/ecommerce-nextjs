import ButtonCard from "@/components/ButtonCard";
import { getItemsParams, getDetaiProduct } from "../../services/getItems";
import style from "../../styles/productDetail.module.css"
import Image from "next/image";
import Layout from "@/components/Layout";

export default function ProductDetail({items}) {
  return (
    <Layout title="detail of product">
        <div className={style.container}>
            <div>
                <Image className={style.img} width={500} height={500} src={items.image}/>
            </div>
            <p>
                {items.description}
            </p>
            <p>
                ${items.price}
            </p>
            <ButtonCard item={items}/>
        </div>
    </Layout>
  )
}

export async function getStaticPaths(){
    //devo devolver un array con objectos con propiedades params y dentro de esa propiedad un objecto con informacion de id
    const paths = await getItemsParams()
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    //la propiedad params es capturada de los array que trajimos con la funcion getStaticPaths
    const {id} = params
    const response = await getDetaiProduct(id)
    // console.log("estoy en el detalle",params)
    
    return{
        props:{
            items : response
        }
    }
}