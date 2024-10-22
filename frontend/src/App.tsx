import { useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import Admin from './pages/Admin'
import UserList from './components/Admin/user/user-list'
import CouponList from './components/Admin/coupons/list-coupon'
import AddCoupon from './components/Admin/coupons/add-coupon'
import UsageReport from './components/Admin/coupons/usageReport'
import EditCoupon from './components/Admin/coupons/edit-coupon'
import Statistics from './components/Admin/coupons/statistic'
import Client from './pages/Client'
import Login from './components/Client/login'
import Register from './components/Client/register'
import AddUser from './components/Admin/user/add-user'
import EditUser from './components/Admin/user/edit-user'
import ListCategories from './components/Admin/categories/list-category'
import SizeContext from './context/SizeContext'
import ListSize from './components/Admin/sizes/list-size'
import AddSize from './components/Admin/sizes/add-size'
import EditSize from './components/Admin/sizes/edit-size'
import CategoryContext from './context/CategoryContext'
import AddCategory from './components/Admin/categories/add-category'
import EditCategory from './components/Admin/categories/edit-category'
import BrandContext from './context/BrandContext'
import ListBrand from './components/Admin/brands/list-brand'
import AddBrand from './components/Admin/brands/add-brand'
import EditBrand from './components/Admin/brands/edit-brand'
import ColorContext from './context/ColorContext'
import ListColor from './components/Admin/colors/list-color'
import AddColor from './components/Admin/colors/add-color'
import EditColor from './components/Admin/colors/edit-color'
import ProductContext from './context/ProductContext'
import ProductList from './components/Admin/product/product-list'
import ProductAdd from './components/Admin/product/product-add'
import ProductEdit from './components/Admin/product/product-edit'
import VariantList from './components/Admin/variant/vartiant-list'
import VariantContext from './context/VariantContext'
import VariantAdd from './components/Admin/variant/vartiant-add'
import RoleContext from './context/RoleContext'
import RoleList from './components/Admin/roles/list-role'
import RoleAdd from './components/Admin/roles/add-role'
import RoleEdit from './components/Admin/roles/edit-role'
import UserContext from './context/UserContext'


function App() {
  const router = useRoutes ([
    // Page
    {path:'', element:<Client/>, children:[
      {path:'/login',element:<Login/> },
      {path:'/register',element:<Register/> },
    ]},
    //Admin
    {path:'dashboard', element:
      <SizeContext>
        <CategoryContext>
          <BrandContext>
            <ColorContext>
              <ProductContext>
               <VariantContext>
                  <RoleContext>
                    <UserContext>
                      <Admin/>
                    </UserContext>
                  </RoleContext>
               </VariantContext>
              </ProductContext>              
            </ColorContext>      
          </BrandContext>
        </CategoryContext>
      </SizeContext>,
      children:[
      // User
      {path:'list-user',element:<UserList/>},
      {path:'add-user',element:<AddUser/>},
      {path:'edit-user/:id',element:<EditUser/>},

      // coupons
      {path:'coupon-list',element:<CouponList/>},
      {path:'coupon-add',element:<AddCoupon/>},
      {path:'coupon-edit',element:<EditCoupon/>},
      {path:'coupon-usagereport',element:<UsageReport/>},
      {path:'coupon-statistic',element:<Statistics/>},

      //Categories
      {path:'list-categories',element:<ListCategories/>},
      {path:'add-categories',element:<AddCategory/>},
      {path:'edit-categories/:id',element:<EditCategory/>},

      //roles
      {path:'list-roles',element:<RoleList/>},
      {path:'add-roles',element:<RoleAdd/>},
      {path:'edit-roles/:id',element:<RoleEdit/>},

      //sizes
      {path:'list-sizes',element:<ListSize/>},
      {path:'add-sizes',element:<AddSize/>},
      {path:'edit-sizes/:id', element:<EditSize/>},

      //brands
      {path:'list-brands',element:<ListBrand/>},
      {path:'add-brands',element:<AddBrand/>},
      {path:'edit-brands/:id',element:<EditBrand/>},

      //colors
      {path:'list-colors',element:<ListColor/>},
      {path:'add-colors',element:<AddColor/>},
      {path:'edit-colors/:id', element:<EditColor/>},

      //products
      {path:'list-products',element:<ProductList/>},
      {path:'add-products',element:<ProductAdd/>},
      {path:'edit-products/:id', element:<ProductEdit/>},

       //variants
       {path:'list-variants',element:<VariantList/>},
       {path:'add-variants',element:<VariantAdd/>},
       {path:'edit-variants/:id', element:<ProductEdit/>},
      

    ]}
  ])
  return router
}

export default App
