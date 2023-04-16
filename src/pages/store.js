import Layout from "@/components/Layout"
import TypePage from "@/components/TypePage"
import { getItems } from "../services/getItems"
export default function store({dataProduct}) {
  return (
    <Layout title="store">
        <TypePage page="store" dataProduct={dataProduct}/>
    </Layout>
  )
}

export async function  getStaticProps(){
  const response = await getItems();  
  console.log(response)
  return{
    props:{
      dataProduct:response
    }
  }
} 