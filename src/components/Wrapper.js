import {createContext,useState, useContext} from 'react'

const AppContext = createContext({
    open: false,
    render:()=>{},
    addElements: (item)=>{},
    elementsCard:()=>{},
    itemsElement:[]
})

export default function Wrapper({children}) {
    const [open,setOpen] = useState(false);
    const [items, setitems] = useState([])
    const renderCard = ()=>{
        setOpen(!open)
    }
    const addElementsCard=(item)=>{
        let searchBoolean = false
        const searchElementRepeat = items.map(element=> {
           if(element.id === item.id){
            element.amount += 1
            searchBoolean = true
           }
           return element
        })
        if(!searchBoolean){
            item.amount = 1
            setitems([...items,item])
        }else{
            setitems(searchElementRepeat)
        }
    }
    const countElements = ()=>{
        const sum =   items.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue.amount
        },0)
        return sum
    }
    return (
    <AppContext.Provider value={{
        open,
        render:renderCard,
        addElements:addElementsCard,
        elementsCard:countElements,
        itemsElement: items

    }}>
        {children}
    </AppContext.Provider>
  )
}

export const useContextApp = ()=>{
    return useContext(AppContext);
}