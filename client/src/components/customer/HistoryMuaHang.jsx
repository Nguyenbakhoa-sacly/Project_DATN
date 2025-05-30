import React, { useEffect, useState } from 'react';
import { Button, message, Modal, Space, Table, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import dayjs from 'dayjs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import handleAPI from '../../apis/HandleAPI';
import DetailOrder from '../DetailOrder';
const { confirm } = Modal
const HistoryMuaHang = () => {

  const user = useSelector(state => state?.auth?.currentData?.user);
  const [isLoading, setIsLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState([])
  const [currentOrder, setCurrentOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formatCurrency = (amount) => {
    return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const columns = [
    {
      title: 'Id đơn hàng',
      dataIndex: 'idDonHang',
      key: 'idDonHang',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'tongTien',
      key: 'tongTien',
      render: (tongTien) => <p>{formatCurrency(tongTien)} VNĐ</p>
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'diaChi',
      key: 'diaChi',
    },
    {
      title: 'Thời gian đặt hàng',
      dataIndex: 'thoiGianDatHang',
      key: 'thoiGianDatHang',
      render: (thoiGianDatHang) => <p>{dayjs(thoiGianDatHang).format('DD/MM/YYYY HH:mm:ss')}</p>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangThai',
      key: 'trangThai',
      render: (trangThai) => <Tag color='blue'>{trangThai}</Tag>
    },
    {
      title: 'Thanh toán',
      dataIndex: 'thanhToan',
      key: 'thanhToan',
      render: (thanhToan) => <Tag color={thanhToan === 'Chưa thanh toán' ? 'red' : 'green'}>{thanhToan}</Tag>
    },
    {
      title: 'Trạng thái giao hàng',
      dataIndex: 'trangThaiGiaoHang',
      key: 'trangThaiGiaoHang',
      render: (trangThaiGiaoHang) => <Tag color='volcano'>{trangThaiGiaoHang}</Tag>
    },
    {
      key: 'buttonContainer',
      align: 'right',
      title: 'Actions',
      width: 100,
      dataIndex: '',
      render: (item) =>
        <Space>
          <Button type="text"
            onClick={() => {
              setIsModalOpen(true)
              setCurrentOrder(item?.idDonHang)
            }}
            icon={<FiMoreHorizontal size={20}
              className="text-slate-600" />}
          >
          </Button>
          {item.trangThai === 'Đã hủy' &&
            <Button
              style={{
                backgroundColor: '#FDC040',
              }}
              onClick={() => navigate('/payment')}>Mua lại</Button>
          }
        </Space >
    }
  ];

  useEffect(() => {
    getInfoOrder();
  }, []);

  const getInfoOrder = async () => {
    try {
      const res = await handleAPI(`/khachhang/getAllOrderById `, '', 'get')
      if (res.success) {
        setOrderInfo(res.data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleCancelOrder = async (id) => {
    const data = {
      idDonHang: id
    }
    console.log(data)
    try {
      const res = await handleAPI('/khachhang/cancelOrder', data, 'post')
      if (res.success) {
        message.success(res.message)
        getInfoOrder()
      }
    } catch (e) {
      message.warning(e.message)
    }
  }
  return (
    <>
      <Table
        title={() => (
          <div className="flex justify-between">
            <div>
              <Title level={3}>Lịch sử mua hàng</Title>
            </div>
          </div>
        )}
        loading={isLoading}
        dataSource={orderInfo}
        columns={columns} />
      <DetailOrder
        currentOrder={currentOrder}
        onClose={() => {
          setIsModalOpen(false)
        }}
        isVisible={isModalOpen}
      />
    </>
  )
}

export default HistoryMuaHang