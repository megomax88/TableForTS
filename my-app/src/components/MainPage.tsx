import React, { FC, useEffect, useState } from 'react'
import { IItem } from '../types/data'
import { ProductList } from './documents/ProductList'
import './mainPage.css'

const initialState: IItem = {
  id: null,
  title: null,
  price: null,
  description: null,
  category: null,
  image: null,
  rating: null

}

const MainPage: FC = () => {
  const [productState, setProductState] = useState([initialState])
  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products?limit=10')
        .then(async (res) => await res.json())
        .then((res) => setProductState(res))
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(productState)

  return (
    <div className ='container'>
        <div className='listOfProducts'>


     <ProductList products={productState}/>
        </div>
        <div className='searchPanel'>

        </div>
    </div>
  )
}
export default MainPage
