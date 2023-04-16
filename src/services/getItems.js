export const getItems= async()=>{
    const response = await fetch("https://ecommerce-nextjs-seven-eta.vercel.app/api/items");
    const dataObject = await response.json()
    return dataObject
}
export const getItemsParams= async ()=>{
    const response = await getItems()
    const converMap = response.map(elements =>{
        return{
            params:{
                id: String(elements.id)
            }
        }
    })
    return converMap
}

export const getDetaiProduct = async(id)=>{
    const response = await getItems()
    const detailProduct = response.find(element => String(element.id) === String(id) )
    return detailProduct
}