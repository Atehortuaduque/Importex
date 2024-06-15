import { lazy } from 'react';

import { Navigate } from 'react-router-dom';

const Logout = lazy(() => import('@/pages/Logout.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound.jsx'));

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Customer = lazy(() => import('@/pages/Customer'));
const Inventory = lazy(() => import('@/pages/Inventory'));
const Order = lazy(() => import('@/pages/Order'));
const Invoice = lazy(() => import('@/pages/Invoice'));
const InvoiceCreate = lazy(() => import('@/pages/Invoice/InvoiceCreate'));

const InvoiceRead = lazy(() => import('@/pages/Invoice/InvoiceRead'));
const InvoiceUpdate = lazy(() => import('@/pages/Invoice/InvoiceUpdate'));
const InvoiceRecordPayment = lazy(() => import('@/pages/Invoice/InvoiceRecordPayment'));
const Payment = lazy(() => import('@/pages/Payment/index'));
const PaymentRead = lazy(() => import('@/pages/Payment/PaymentRead'));
const PaymentUpdate = lazy(() => import('@/pages/Payment/PaymentUpdate'));
const Employee = lazy(() => import('@/pages/Employee'));
const Admin = lazy(() => import('@/pages/Admin'));
const Settings = lazy(() => import('@/pages/Settings/Settings'));
const Taxes = lazy(() => import('@/pages/Taxes'));
const Email = lazy(() => import('@/pages/Email/index'));
const EmailRead = lazy(() => import('@/pages/Email/EmailRead'));
const EmailUpdate = lazy(() => import('@/pages/Email/EmailUpdate'));
const AdvancedSettings = lazy(() => import('@/pages/AdvancedSettings'));
const Profile = lazy(() => import('@/pages/Profile'));

const ProductCategory = lazy(() => import('@/pages/ProductCategory'));
const Product = lazy(() => import('@/pages/Product'));

const People = lazy(() => import('@/pages/People'));
const Company = lazy(() => import('@/pages/Company'));

let routes = {
  expense: [],
  default: [
    {
      path: '/login',
      element: <Navigate to="/" />,
    },
    {
      path: '/verify/*',
      element: <Navigate to="/" />,
    },
    {
      path: '/resetpassword/*',
      element: <Navigate to="/" />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/customer',
      element: <Customer />,
    },
    {
      path: '/people',
      element: <People />,
    },
    {
      path: '/company',
      element: <Company />,
    },
    {
      path: '/product',
      element: <Product />,
    },
    {
      path: '/category/product',
      element: <ProductCategory />,
    },
    {
      path: '/inventory',
      element: <Inventory />,
    },
    {
      path: '/order',
      element: <Order />,
    },
    {
      path: '/invoice',
      element: <Invoice />,
    },
    {
      path: '/invoice/create',
      element: <InvoiceCreate />,
    },
    {
      path: '/invoice/read/:id',
      element: <InvoiceRead />,
    },
    {
      path: '/invoice/update/:id',
      element: <InvoiceUpdate />,
    },
    {
      path: '/invoice/pay/:id',
      element: <InvoiceRecordPayment />,
    },
    {
      path: '/payment',
      element: <Payment />,
    },
    {
      path: '/payment/read/:id',
      element: <PaymentRead />,
    },
    {
      path: '/payment/update/:id',
      element: <PaymentUpdate />,
    },
    {
      path: '/employee',
      element: <Employee />,
    },
    {
      path: '/admin',
      element: <Admin />,
    },
    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '/settings/edit/:settingsKey',
      element: <Settings />,
    },
    {
      path: '/taxes',
      element: <Taxes />,
    },
    {
      path: '/email',
      element: <Email />,
    },
    {
      path: '/email/read/:id',
      element: <EmailRead />,
    },
    {
      path: '/email/update/:id',
      element: <EmailUpdate />,
    },
    {
      path: '/settings/advanced',
      element: <AdvancedSettings />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default routes;
