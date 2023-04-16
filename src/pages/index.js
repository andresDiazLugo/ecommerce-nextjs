import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import {getItems} from '../services/getItems'
import Product from '@/components/Product'
const inter = Inter({ subsets: ['latin'] })

export default function Home({dataProduct}) {
  return (
    <>
      <Layout>
        <main className={style.container}>
            <section className={style.section}>
                <h1>Bienvenido al mejor ecommerce de compras gamer</h1>
                <p>
                  encuentra los mejores perifericos, consolas para tu setup y conviertete 
                  en el mejor jugador de todos todos los productos estan garantizados y de calidad
                </p>
            </section>
            <ul className={style.containerProduct}>
              {
                dataProduct?.map(elements=>{
                  return <Product items={elements}/>
                        
                })
              }
            </ul>
        </main>
      </Layout>
    </>
  )
}

export async function  getStaticProps(){
  const response = await getItems();
  const last_three = response.slice(-3)
  return{
    props:{
      dataProduct: last_three
    }
  }
} 

