import React from 'react'
import ProductItem from './ProductItem'

export default function Product(props) {
    console.log(props.data)
  return (
    <div className='product'>
        <ProductItem dataItem={props.data[0]}/>
        <ProductItem dataItem={props.data[1]}/>
        <ProductItem dataItem={props.data[2]}/>
        <ProductItem dataItem={props.data[3]}/>
    </div>
  )
}
