import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/home/Home'
import ProductDetail from './pages/productDetail/ProductDetail'
import CategoryProduct from './pages/categoryProduct/CategoryProduct'
function App() {
  const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='category/:id' element={<CategoryProduct/>}/>
    <Route path='productDetail/:id' element={<ProductDetail/>}/>
  </Route>
 ))
 return (
  <RouterProvider router={router}/>
 )
}

export default App
