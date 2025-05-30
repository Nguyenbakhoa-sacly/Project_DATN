import { Button, Form, Input, InputNumber, message, Select, Table, Tag } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import handleAPI from '../../apis/HandleAPI';
import { BsFilterSquare } from 'react-icons/bs';

const CreateNhapHang = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [dataSupplier, setDataSupplier] = useState([]);
  const columns = [
    {
      title: 'ID nhập hàng',
      dataIndex: 'idNhapHang',
      key: 'idNhapHang',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'tenSanPham',
      key: 'tenSanPham',
    },
    {
      title: 'Tên nhà cung cấp',
      dataIndex: 'tenNhaCungCap',
      key: 'tenNhaCungCap',
    },
    {
      title: 'Số lượng',
      dataIndex: 'soLuong',
      key: 'soLuong',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangThai',
      key: 'trangThai',
      render: (trangThai) => <Tag color='lime'>{trangThai}</Tag>
    },
    {
      title: 'Ngày gửi',
      dataIndex: 'ngayTao',
      key: 'ngayTao',
      render: (ngayTao) => <p>{dayjs(ngayTao).format('DD/MM/YYYY HH:mm:ss')}</p>
    },
    {
      title: 'Xác nhận',
      dataIndex: 'xacNhan',
      key: 'xacNhan',
      render: (xacNhan) => <Tag color='lime'>{xacNhan}</Tag>
    },
    {
      title: 'Ghi chú',
      dataIndex: 'ghiChu',
      key: 'ghiChu',
    },
    // {
    //   key: 'buttonContainer',
    //   align: 'right',
    //   title: 'Actions',
    //   width: 100,
    //   dataIndex: '',
    //   render: (item) =>
    //     <Space>
    //       <Button type="text"
    //         // onClick={() => {
    //         //   setIsModalOpen(true);
    //         // }}
    //         icon={<CiEdit size={20}
    //           className="text-slate-600" />}></Button>
    //       <Button
    //         // onClick={() => confirm({
    //         //   title: 'Xóa nhà cung cấp',
    //         //   content: 'Bạn có muốn xóa nhà cung cấp không?',
    //         //   // onOk: () => handleDeleteSupplier(item._id),
    //         //   // onCancel() { },
    //         // })}
    //         type="text"
    //         icon={<CiSquareRemove size={20}
    //           className="text-slate-600" />}></Button>
    //     </Space >
    // }
  ];

  useEffect(() => {
    getAllNhapHang();
    getApprovedSuppliers();
  }, []);

  const getApprovedSuppliers = async () => {
    try {
      const res = await handleAPI('/seller/getApprovedSuppliers', '', 'get')
      if (res.success) {
        res.data && setDataSupplier(res?.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getAllNhapHang = async () => {
    setIsLoading(true);
    try {
      const res = await handleAPI('/seller/getAllNhapHang', '', 'get')
      res.data && setDataSource(res?.data)
    } catch (e) {
      message.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateNhapHang = async (value) => {
    console.log(value)
    setIsLoading(true);
    try {
      const res = await handleAPI('/seller/createNhapHang', value, 'post')
      if (res.success) {
        getAllNhapHang();
        form.resetFields();
        message.success(res.message)
      }
    } catch (e) {
      message.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }




  return (
    <>
      <div >
        <h2 className="text-2xl font-bold mb-4">Nhập hàng</h2>
        <Form
          onFinish={handleCreateNhapHang}
          form={form}
          name="layout-multiple-horizontal"
          layout="vertical">
          <div className='flex gap-4'>
            <div className='w-1/3'>
              <Form.Item
                className="block font-medium mb-2"
                layout="vertical"
                label="Tên sản phẩm"
                name="tenSanPham"
                rules={[
                  { required: true, message: "Vui lòng nhập tên sản phẩm" },
                ]}
              >
                <Input placeholder="Nhập tên sản phẩm" style={{ width: "100%" }} />
              </Form.Item>
            </div>
            <div className='w-1/3'>
              <Form.Item
                className='block font-medium mb-2'
                layout="vertical"
                label="Số lượng sản phẩm"
                name="soLuong"
                rules={[
                  { required: true, message: "Vui lòng nhập số sản phẩm" },
                  { type: "number", message: "Số lượng phải lớn hơn hoặc bằng 20" },
                ]}
              >
                <InputNumber
                  style={{ width: '100%' }}
                  min={20} max={100}
                  placeholder='Số lượng tối thiểu là 20'
                  width={300}
                />
              </Form.Item>
            </div>
            <div className='w-1/3'>
              <Form.Item
                name='nhaCungCapId'
                rules={[
                  { required: true, message: "Vui lòng chọn nhà cung cấp" },
                ]}
                label={<p className="block text-gray-700 font-medium">Danh mục nhà cung cấp</p>}
              >
                <Select
                  placeholder='Chọn nhà cung cấp'
                >
                  {
                    dataSupplier && dataSupplier.map((item, index) => (
                      <Select.Option key={index} value={item.idNhaCungCap}>{item.tenNhaCungCap}</Select.Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </div>
          </div>

          <Form.Item
            className='block  font-medium mb-2'
            layout="vertical"
            label="Ghi chú"
            name="ghiChu"
          >
            <TextArea rows={4} placeholder='Ghi chú cho nhà cung cấp' />
          </Form.Item>

          <Form.Item >
            <Button
              onClick={() => form.submit()}
              style={{
                marginTop: '20px',
                backgroundColor: '#3BB77E',
                color: 'white',
              }}>Gủi yêu cầu</Button>
          </Form.Item>
        </Form>
        <div className='mt-10'>
          <Table
            title={() => (
              <div className="flex justify-between">
                {/* <div>
                <Title level={3}>Lịch sử nhập hàng</Title>
              </div> */}
                <div className="flex gap-2">
                  <Button className=" font-medium" icon={<BsFilterSquare size={20} />}>Filters</Button>
                  <Button className=" font-medium" >Download all</Button>
                </div>
              </div>
            )}
            loading={isLoading}
            dataSource={dataSource}
            columns={columns} />
        </div>
      </div>
    </>
  )
}

export default CreateNhapHang