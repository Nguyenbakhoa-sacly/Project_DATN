import React, { useEffect, useState } from 'react';
import { Radio, Button, Card, message, Input, Modal } from 'antd';
import { BsWallet2 } from 'react-icons/bs';
import { FaMapMarkerAlt, FaEdit } from 'react-icons/fa';
import vnpaylogo from '../assets/vnpay-logo.png'
import momologo from '../assets/momo-logo.png'
import zalologo from '../assets/zalopay-logo.png'
import handleAPI from '../apis/HandleAPI';
import { useSelector } from 'react-redux';

const PaymentPage = () => {
  const user = useSelector(state => state?.auth?.currentData?.user)
  const [paymentMethod, setPaymentMethod] = useState('momo');
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [orderInfo, setOrderInfo] = useState(null)
  const formatCurrency = (amount) => {
    return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayment = () => {
    message.success('Đang chuyển hướng đến cổng thanh toán...');
  };

  useEffect(() => {
    if (user?.idNguoiDung) {
      getInfoOrder();
    }
  }, [user]);

  const getInfoOrder = async () => {
    try {
      const res = await handleAPI(`/khachhang/getOrderByIdUser?userId=${user?.idNguoiDung} `, '', 'get')
      if (res.success) {
        setOrderInfo(res.data[0])
      }
    } catch (e) {
      console.error(e)
    }
  }

  const showAddressModal = () => {
    setNewAddress(orderInfo.diaChi);
    setIsAddressModalVisible(true);
  };

  const handleAddressUpdate = async () => {
    try {
      const data = {
        idDonHang: orderInfo.idDonHang,
        diaChi: newAddress
      }
      const res = await handleAPI('/khachhang/updateAddressOrder', data, 'put')
      if (res.success) {
        message.success(res.message)
        setIsAddressModalVisible(false);
        getInfoOrder();
      }
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-customText mb-2">Thanh toán đơn hàng</h1>
          <p className="text-gray-600">Vui lòng kiểm tra thông tin và chọn phương thức thanh toán</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Thông tin đơn hàng và địa chỉ */}
          <div className="md:col-span-2 space-y-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-customText">Thông tin đơn hàng</h2>
                  <span className="text-gray-500">Mã đơn: ORD{orderInfo?.idDonHang}</span>
                </div>
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg text-customText">Tổng tiền</span>
                    <span className="text-2xl font-bold text-red-600">
                      {formatCurrency(orderInfo?.tongTien)}VNĐ
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-red-500 text-xl mr-2" />
                  <h2 className="text-xl font-semibold text-customText">Địa chỉ nhận hàng</h2>
                </div>
                <Button
                  type="link"
                  icon={<FaEdit />}
                  onClick={showAddressModal}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Sửa
                </Button>
              </div>
              <p className="text-gray-600 ml-7">{orderInfo?.diaChi}</p>
            </Card>
          </div>

          {/* Phương thức thanh toán */}
          <div className="md:col-span-1">
            <Card className="shadow-sm hover:shadow-md transition-shadow sticky top-6">
              <h2 className="text-xl font-semibold mb-4 text-customText">Phương thức thanh toán</h2>
              <Radio.Group onChange={handlePaymentMethodChange}
                value={paymentMethod} className="w-full">
                <div className="space-y-4">
                  <Radio value="momo" className="w-full">
                    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                      <img src={momologo} alt="MoMo" className="w-10 h-10 mr-3" />
                      <span className="font-medium">Ví MoMo</span>
                    </div>
                  </Radio>
                  <Radio value="zalopay" className="w-full">
                    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                      <img src={zalologo} alt="ZaloPay" className="w-10 h-10 mr-3" />
                      <span className="font-medium">ZaloPay</span>
                    </div>
                  </Radio>
                  <Radio value="vnpay" className="w-full">
                    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                      <img src={vnpaylogo} alt="VNPay" className="w-10 h-10 mr-3" />
                      <span className="font-medium">VNPay</span>
                    </div>
                  </Radio>
                </div>
              </Radio.Group>

              <Button
                type="primary"
                size="large"
                icon={<BsWallet2 className="inline-block mr-2" />}
                onClick={handlePayment}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 h-12 text-lg"
              >
                Tiến hành thanh toán
              </Button>
            </Card>
          </div>
        </div>

        {/* Modal cập nhật địa chỉ */}
        <Modal
          title="Cập nhật địa chỉ nhận hàng"
          open={isAddressModalVisible}
          onOk={handleAddressUpdate}
          onCancel={() => setIsAddressModalVisible(false)}
          okText="Cập nhật"
          cancelText="Hủy"
        >
          <Input.TextArea
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            placeholder="Nhập địa chỉ mới"
            rows={4}
            className="mt-4"
          />
        </Modal>
      </div>
    </div>
  );
};

export default PaymentPage;