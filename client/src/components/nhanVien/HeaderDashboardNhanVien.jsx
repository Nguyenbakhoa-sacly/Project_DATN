import { Avatar, Button, Dropdown, Input } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { GoBell } from 'react-icons/go'

const items = [
  {
    key: 'logout',
    label: 'Đăng xuất',
  },
]
const HeaderDashboardNhanVien = () => {

  return (
    <>
      <Header style={{
        backgroundColor: '#ffff',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-10">
            <Input
              style={{}}
              placeholder="Search product, supplier, order"
              prefix={<BiSearch className="" size={20} />}
            />
          </div>
          <div className="col-span-2 flex items-center justify-end gap-4">
            <Button icon={<GoBell size={20} />} />
            <Dropdown menu={{ items }}
              placement="bottomLeft" arrow>
              <Avatar />
            </Dropdown>
          </div>
        </div>
      </Header >
    </>
  )
}

export default HeaderDashboardNhanVien