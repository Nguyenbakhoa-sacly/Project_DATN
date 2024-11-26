import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, } from 'react-router-dom'
import AccountUser from './components/Admin/AccountUser'
import Account_NhaCungCap from './components/Admin/Account_NhaCungCap'
import Account_Nhabanhang from './components/Admin/Account_Nhabanhang'
import CreateDanhMuc from './components/Admin/CreateDanhMuc'
import CreateProduct from './components/nhanVien/CreateProduct'
import ListProducts from './components/nhanVien/ListProducts'

import Main from './layout/Main'
import { AboutPage, CartPage, ContactPage, DetailPage, HomePage, LoginPage, PageAdmin, PageNhanVienDashboard, PageSellerDashboard, SellerPage, SignupPage } from './pages'
import { addAuth } from './redux/reducers/authReducer'

function App() {
  // const user = useSelector(state => state?.auth?.currentData?.user)
  const dispatch = useDispatch()

  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    const res = localStorage.getItem('authData');
    res && dispatch(addAuth(JSON.parse(res)));
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<HomePage />} />
          <Route path='/detail/:id_product' element={<DetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path="/storepage" element={<SellerPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        <Route path="/" element={<PageAdmin />}>
          <Route path="/admin/all-account" element={<AccountUser />} />
          <Route path="/admin/account-nhacungcap" element={<Account_NhaCungCap />} />
          <Route path="/admin/danhmuc" element={<CreateDanhMuc />} />
          <Route path="/admin/account-nhabanhang" element={<Account_Nhabanhang />} />
        </Route>

        <Route path="/" element={<PageNhanVienDashboard />}>
          <Route path="/dashboard-listProducts" element={<ListProducts />} />
          <Route path="/dashboard-nhanvien" element={<CreateProduct />} />
        </Route>

        <Route path="/" element={<PageSellerDashboard />}>
          {/* <Route path="/dashboard-nhabanhang" element={<DashboardSellerCreateProduct />} /> */}
        </Route>

        {/* <Route path="/dashboard-khachhang" element={<AccountUser />} /> */}


        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
