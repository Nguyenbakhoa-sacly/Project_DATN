import { Route, Routes, } from 'react-router-dom'
import { HomePage, LoginPage, SignupPage } from './pages'
import Main from './layout/Main'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </>
  )
}

export default App
