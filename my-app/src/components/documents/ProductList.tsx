import React, { FC } from 'react'
// import {ProductItem} from './ProductItem'
import { IItem } from '../../types/data'
import { ProductItem } from './ProductItem'



const ProductList: FC<any> = ({products}) => {
  return (
    <div>
    {products.map((el: IItem) => {
      return (<ProductItem key={el.id} product={el}/>)})}
    </div>
 )
}

export {ProductList}
