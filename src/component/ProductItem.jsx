import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
export default function ProductItem(props) {
    console.log(props.dataItem)
  return (
    <div className='product-item'>
        <img src={props.dataItem.img} alt="anhdt" />
        <p className='product-name'>{props.dataItem.name}</p>
        <p className='price-off'>{Number(props.dataItem.price).toLocaleString()}đ</p>
        <div className='price-discount'>
            <p className='discount'>-{props.dataItem.discount}%</p>
            <p className='price'>{(Number(props.dataItem.price) / (1 - (props.dataItem.discount / 100))).toLocaleString()}đ</p>
        </div>
        <p>Chipset: {props.dataItem.chip}</p>
        <p>Kích thước màn hình: {props.dataItem.sizeScreen}</p>
        <p>RAM: {props.dataItem.ram} GB</p>
        <p>Bộ nhớ trong: {props.dataItem.rom} GB</p>
        <div className="add">
            {/* <div className='add-icon-border'><FontAwesomeIcon className="add-icon" icon={faPlus} /></div> */}
            <a href='#'><FontAwesomeIcon className="add-icon" icon={faPlus} /> Thêm vào so sánh</a>
        </div>
    </div>
  )
}
