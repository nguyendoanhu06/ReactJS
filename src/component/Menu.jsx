import React from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTruckFast, faScrewdriverWrench, faBookBookmark, faGem } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
  return (
    <div className='menu'>
        <div className="menu-item-a">
            <FontAwesomeIcon className='icon'  icon={faBars} />
            <p>Danh mục sản phẩm</p>
        </div>
        <div className="menu-item">
            <FontAwesomeIcon className='icon' icon={faTruckFast} />
            <p>Giao lắp chuyên nghiệp</p>
        </div>
        <div className="menu-item">
            <FontAwesomeIcon className='icon' icon={faScrewdriverWrench} />
            <p>Bảo hành nhanh gọn</p>
        </div>
        <div className="menu-item">
            <FontAwesomeIcon className='icon' icon={faBookBookmark} />
            <p>Tổng hợp khuyến mãi</p>
        </div>
        <div className="menu-item-b">
            <FontAwesomeIcon className='icon' icon={faGem} />
            <p>Nguyễn Kim Luxury</p>
        </div>
    </div>
  );
}