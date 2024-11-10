import { Badge, Breadcrumb, Button, Card, Checkbox, Dropdown, Rate, Select, Slider, Space, Tooltip, Typography } from 'antd'
import React from 'react'
import { CiFilter } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { FiHeadphones } from 'react-icons/fi';
import { GrLinkNext, GrLocation } from 'react-icons/gr';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline, IoEyeOutline } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom'
import { DealsOfTheDayHome, PromotionalSectionHome } from '../../components';
const { Title, Text } = Typography;
const SellerPage = () => {

  const param = useParams()
  return (
    <>
      <div>
        <div className='border-b-[1px]'>
          <div className='px-4 py-5'>
            <Breadcrumb
              items={[
                {
                  title: <p className='font-medium'>Trang chủ</p>,
                },
                {
                  title: <p className='font-medium'>Cửa hàng</p>,
                },
                {
                  title: <Link className='font-medium'>{param.infostore}</Link>,
                }
              ]}
            />
          </div>
        </div>
        <div className='px-4'>
          <div className='py-20'>
            <div className='flex justify-center '>
              <h1 className='text-7xl text-customText font-bold'>Cửa hàng {param.infostore}</h1>
            </div>
            <div className='pt-12 flex justify-center'>
              <div className='border-[1px] rounded-full shadow-lg pl-10'>
                <input type="text" placeholder='Tìm trong cửa hàng' className='w-[460px] text-customText font-medium focus:outline-none' />
                <button className='px-10 py-4 rounded-full bg-customBg text-white font-medium'>Tìm kiếm</button>
              </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-2 gap-4 flex flex-col'>
                <div className='bg-[#d1e8f2] p-4 rounded-xl'>
                  <div className='flex justify-center mb-10 mt-6'>
                    <img src="https://www.niraagayurveda.com/assets/imgs/vendor/vendor-16.png" alt="" />
                  </div>
                  <p className='text-sm text-custom '>20/10/2024</p>
                  <p className='font-semibold text-3xl '>{param.infostore}</p>
                  <p className='text-sm text-custom'>Người theo dõi: <span className=' text-greenCustom'>30</span></p>
                  <p className='text-sm text-customText font-medium my-6'>Got a smooth, buttery spread in your fridge? Chances are good that it's Good Chef. This brand made Lionto's list of the most popular grocery brands across the country.</p>

                  <div className='mb-6'>
                    <p className='text-lg font-semibold mb-2'>Follow Us</p>
                    <ul className='flex gap-2'>
                      <li className='w-8 h-8 p-2 flex justify-center items-center  bg-[#4E6297] rounded-full'><FaFacebookF size={20} className='text-white' /></li>
                      <li className='w-8 h-8 p-2 flex justify-center items-center  bg-[#55ACE3]  rounded-full'><FaTwitter size={20} className='text-white' /></li>
                      <li className='w-8 h-8 p-2 flex justify-center items-center  bg-[#FD1D1D] rounded-full'><FaInstagram size={20} className='text-white' /></li>
                      <li className='w-8 h-8 p-2 flex justify-center items-center  bg-[#E60023] rounded-full'><FaPinterest size={20} className='text-white' /></li>

                    </ul>
                  </div>
                  <div className='mb-6'>
                    <div className='flex items-center gap-3 mb-2'>
                      <GrLocation className='text-greenCustom' size={20} />
                      <p className='text-sm'>
                        <b className='text-customText'>Address:</b> 48 Cao Thắng</p>
                    </div>
                    <div className='flex items-center gap-3 mb-2'>
                      <FiHeadphones className='text-greenCustom' size={20} />
                      <p className='text-sm'> <b className='text-customText'>Call Us:</b> 540-025-124553</p>
                    </div>
                  </div>
                  <div className='mb-6'>
                    <button className='px-10 py-2 flex items-center gap-3 rounded-md bg-customBg text-white font-medium'>Liên hệ <GrLinkNext /></button>
                  </div>
                </div>

                <div className='flex flex-col gap-4'>
                  <div className='border-[1px] rounded-2xl p-4'>
                    <div className="relative">
                      <h2 className="text-2xl font-bold text-customText pb-3">Danh mục</h2>
                      {/* Underline */}
                      <div className="absolute left-0 bottom-0 w-28 h-[2px] bg-customBg mt-1"></div>
                      {/* Full line */}
                      <div className="border-b border-gray-200 mt-2"></div>
                    </div>
                    <div className='pt-6'>
                      <ul className='flex flex-col gap-4'>
                        <li className='border-[1px] rounded-xl px-4 py-3 flex justify-between'>
                          <a href="" className='text-gray-custom flex gap-3 items-center'>
                            <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-1.svg" alt="" />
                            <span className=' font-semibold text-sm text-customText'>Milks & Dairies</span>
                          </a>
                          <p className='flex justify-center items-center rounded-full w-8 h-8 text-sm bg-custombg2 text-customText'>30</p>
                        </li>
                        <li className='border-[1px] rounded-xl px-4 py-3 flex justify-between'>
                          <a href="" className='text-gray-custom flex gap-3 items-center'>
                            <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-2.svg" alt="" />
                            <span className=' font-semibold text-sm text-customText'>Clothing</span>
                          </a>
                          <p className='flex justify-center items-center rounded-full w-8 h-8 text-sm bg-custombg2 text-customText'>30</p>
                        </li>
                        <li className='border-[1px] rounded-xl px-4 py-3 flex justify-between'>
                          <a href="" className='text-gray-custom flex gap-3 items-center'>
                            <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-3.svg" alt="" />
                            <span className=' font-semibold text-sm text-customText'>Pet Foods</span>
                          </a>
                          <p className='flex justify-center items-center rounded-full w-8 h-8 text-sm bg-custombg2 text-customText'>30</p>
                        </li>
                        <li className='border-[1px] rounded-xl px-4 py-3 flex justify-between'>
                          <a href="" className='text-gray-custom flex gap-3 items-center'>
                            <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-4.svg" alt="" />
                            <span className=' font-semibold text-sm text-customText'>Baking material</span>
                          </a>
                          <p className='flex justify-center items-center rounded-full w-8 h-8 text-sm bg-custombg2 text-customText'>30</p>
                        </li>
                        <li className='border-[1px] rounded-xl px-4 py-3 flex justify-between'>
                          <a href="" className='text-gray-custom flex gap-3 items-center'>
                            <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-5.svg" alt="" />
                            <span className=' font-semibold text-sm text-customText'>Fresh Fruit</span>
                          </a>
                          <p className='flex justify-center items-center rounded-full w-8 h-8 text-sm bg-custombg2 text-customText'>30</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='border-[1px] rounded-2xl p-4 relative'>
                    <div className="relative">
                      <h2 className="text-2xl font-bold text-customText pb-3">Lọc sản phẩm</h2>
                      {/* Underline */}
                      <div className="absolute left-0 bottom-0 w-28 h-[2px] bg-customBg mt-1"></div>
                      {/* Full line */}
                      <div className="border-b border-gray-200 mt-2"></div>
                    </div>
                    <div className='pt-6'>
                      <div className=''>
                        <Slider range defaultValue={[20, 80]} />
                        <div className='flex justify-between pt-2'>
                          <p className='text-custom'>Từ: <span className='text-greenCustom font-medium'>$3000</span></p>
                          <p className='text-custom'>Đến: <span className='text-greenCustom font-medium'>$6000</span></p>
                        </div>
                        <div className='pt-6'>
                          <h5 className="text-lg font-bold text-custom pb-3">Màu sắc</h5>
                          <ul>
                            <li ><Checkbox className='text-custom'>Đỏ <span>(30)</span></Checkbox></li>
                            <li><Checkbox className='text-custom'>Xanh <span>(30)</span></Checkbox></li>
                            <li><Checkbox className='text-custom'>Vàng <span>(30)</span></Checkbox></li>
                          </ul>
                        </div>
                        <div className='mt-6'>
                          <button className='bg-customBg flex justify-center items-center gap-1 px-4 py-2 text-white text-lg font-medium rounded-md'><CiFilter size={20} />Lọc</button>
                        </div>
                      </div>
                    </div>
                    <div className=' absolute bottom-1 right-2 '>
                      <img className='w-28' src="https://www.niraagayurveda.com/assets/imgs/banner/fillter-widget-bg.png" alt="" />
                    </div>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <div className='relative group'>
                      <img className='rounded-2xl' src="https://www.niraagayurveda.com/assets/imgs/banner/banner-11.png" alt="" />
                      <div className=' absolute top-32 xl:top-20 max-md:top-10 pl-10 group-hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                        <p className='text-custom text-2xl max-md:text-lg'>Oganic</p>
                        <p className='text-customText xl:text-2xl text-5xl max-md:text-2xl font-semibold'>Save 17%<br /> on  <span className='text-greenCustom'>Oganic</span><br />juice</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-span-10'>
                <div className='flex justify-between items-center mb-8'>
                  <p className='font-medium text-custom'>Có <span className='text-greenCustom'>29</span> sản phẩm dành cho bạn!</p>
                  <div className='flex gap-4'>
                    <div>
                      <Select
                        defaultValue="50"
                        style={{
                          width: 120,
                        }}
                        // onChange={handleChange}
                        options={[
                          {
                            value: '50',
                            label: 'Hiển thị 50',
                          },
                          {
                            value: '100',
                            label: 'Hiển thị 100',
                          },
                          {
                            value: '150',
                            label: 'Hiển thị 150',
                          },
                          {
                            value: '200',
                            label: 'Hiển thị 200',
                          },
                        ]}
                      />
                    </div>
                    <div>
                      <Select
                        defaultValue="Mới nhất"
                        style={{
                          width: 150,
                        }}
                        // onChange={handleChange}
                        options={[
                          {
                            value: 'moi_nhat',
                            label: 'Mới nhất',
                          },
                          {
                            value: 'thap_den_cao',
                            label: 'Giá: Thấp đến cao',
                          },
                          {
                            value: 'cao_den_thap',
                            label: 'Giá: Cao đến thấp',
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div>

                  <div className='grid grid-cols-5 gap-4'>
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
                              <Link to={`/storepage/MaxFood`} className='text-custom'>By <span className='text-greenCustom'>MaxFood</span> </Link>
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
                              <Link to={`/storepage/HaloFood`} className='text-custom'>By <span className='text-greenCustom'>HaloFood</span> </Link>
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
                  </div>
                </div>
                <div>
                  <DealsOfTheDayHome />
                </div>
              </div>
            </div>
          </div>

        </div >
        <PromotionalSectionHome />
      </div >
    </>
  )
}

export default SellerPage