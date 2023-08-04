import { createContext } from "react"

const BookContext = createContext({
    quantity: 0,
    title: '',
    price: 0,
    totalPrice: 0,
})

export default BookContext