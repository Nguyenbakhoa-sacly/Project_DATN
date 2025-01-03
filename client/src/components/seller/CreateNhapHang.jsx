import React, { useEffect, useState } from 'react'
import { Button, Form, Input, InputNumber, message, Space, Table, Tag } from 'antd';
import { CiEdit, CiSquareRemove } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import handleAPI from '../../apis/HandleAPI';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';

const CreateNhapHang = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: 'ID nhập hàng',
      dataIndex: 'idNhapHang',
      key: 'idNhapHang',
    },
    {
      title: 'ID sản phẩm',
      dataIndex: 'sanPhamId',
      key: 'sanPhamId',
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
  }, []);

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
      message.success(res.message)
      getAllNhapHang();
    } catch (e) {
      message.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }
  console.log(dataSource)
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
            <div className='w-1/2'>
              <Form.Item
                className="block font-medium mb-2"
                layout="vertical"
                label="Mã sản phẩm"
                name="sanPhamId"
                rules={[
                  { required: true, message: "Vui lòng nhập mã sản phẩm" },
                  { type: "number", message: "Mã sản phẩm phải là số" },
                ]}
              >
                <InputNumber placeholder="Nhập mã sản phẩm" style={{ width: "100%" }} />
              </Form.Item>
            </div>
            <div className='w-1/2'>
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
            loading={isLoading}
            dataSource={dataSource}
            columns={columns} />
        </div>
      </div>
    </>
  )
}

export default CreateNhapHang