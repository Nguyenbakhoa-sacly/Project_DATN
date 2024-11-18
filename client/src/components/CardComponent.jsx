import { Badge, Card, Rate, Space, Tooltip, Typography } from 'antd';
import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;

const CardComponent = () => {
  return (
    <>
      <div className='relative group'>
        <Link to={`/detail/${123}`}>
          <Badge.Ribbon text={'sale'}>
            <Card
              hoverable
            >
              <img
                className='group-hover:hidden transform transition-transform duration-1000 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className='group-hover:block hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
              <Text type="secondary">Snack</Text>
              <Card.Meta
                className="custom-card-meta py-2"
                title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
              <Space className='flex justify-between py-2'>
                <Rate value={3} className='text-sm' />
                <Link to={`/storepage/NestFood`} className='text-custom'>By <span className='text-greenCustom'>NestFood</span> </Link>
              </Space>
              <Space className='flex justify-between items-center pt-2'>
                <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                  <IoCartOutline size={17} />
                  Add
                </button>
              </Space>
            </Card>
          </Badge.Ribbon>
          <div className=' opacity-0 group-hover:opacity-100 transition duration-300 absolute flex top-28 left-1/2 transform -translate-x-1/2 '>
            <Tooltip placement="topLeft" color='#3BB77E' title={'Thêm vào yêu thích'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoMdHeartEmpty size={16} /></button>
            </Tooltip>
            <Tooltip placement="top" color='#3BB77E' title={'Chi tiết'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoEyeOutline size={16} /></button>
            </Tooltip>
          </div>
        </Link>
      </div>
    </>
  )
}

export default CardComponent