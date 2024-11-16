import { Menu, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const { Text } = Typography
const SiderDashboardAdmin = () => {
  const items = [
    {
      key: '1',
      label: <Link className=" font-medium" to={'/admin/all-account'}>Quản lý tài khoản</Link>,
      icon: <BiHomeAlt size={20} />,
    },
    {
      key: '2',
      label: <Link className=" font-medium" to={'/admin/account-nhacungcap'}>Duyệt nhà cung cấp</Link>,
      icon: <BiHomeAlt size={20} />,
    },
    {
      key: '3',
      label: <Link className=" font-medium" to={'/admin/account-nhabanhang'}>Duyệt tài khoản bán hàng</Link>,
      icon: <BiHomeAlt size={20} />,
    },
    {
      key: '4',
      label: <Link className=" font-medium" to={'/admin/danhmuc'}>Cập nhật danh mục</Link>,
      icon: <BiHomeAlt size={20} />,
    }
  ]
  return (
    <>
      <Sider
        width={260}
        theme="light"
        className="h-screen">
        <div className="flex justify-center items-center p-2 gap-2">
          <img
            src={'https://www.niraagayurveda.com/assets/imgs/theme/logo.svg'} alt="" />

        </div>
        <Menu
          theme="light"
          items={items}
        />
      </Sider >
    </>
  )
}

export default SiderDashboardAdmin