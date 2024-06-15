import { Link } from 'react-router-dom';

import {
  SettingOutlined,
  CustomerServiceOutlined,
  ContainerOutlined,
  DashboardOutlined,
  TagOutlined,
  TagsOutlined,
  UserOutlined,
  CreditCardOutlined,
  ShopOutlined,
} from '@ant-design/icons';

const AppNav = ({ translate }) => [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: <Link to={'/'}>{translate('dashboard')}</Link>,
  },
  {
    key: 'customer',
    icon: <CustomerServiceOutlined />,
    label: <Link to={'/customer'}>{translate('customer')}</Link>,
  },
  {
    key: 'people',
    icon: <UserOutlined />,
    label: <Link to={'/people'}>{translate('people')}</Link>,
  },
  {
    key: 'company',
    icon: <ShopOutlined />,
    label: <Link to={'/company'}>{translate('company')}</Link>,
  },
  {
    key: 'invoice',
    icon: <ContainerOutlined />,
    label: <Link to={'/invoice'}>{translate('invoice')}</Link>,
  },
  {
    key: 'payment',
    icon: <CreditCardOutlined />,
    label: <Link to={'/payment'}>{translate('payment')}</Link>,
  },
  {
    key: 'product',
    icon: <TagOutlined />,
    label: <Link to={'/product'}>{translate('product')}</Link>,
  },
  {
    key: 'categoryproduct',
    icon: <TagsOutlined />,
    label: <Link to={'/category/product'}>{translate('product_category')}</Link>,
  },
  // {
  //   key: 'employee',
  //   icon: <UserOutlined />,
  //   label: <Link to={'/employee'}>{translate('employee')}</Link>,
  // },

  {
    label: translate('Settings'),
    key: 'settings',
    icon: <SettingOutlined />,
    children: [
      {
        key: 'admin',
        // icon: <TeamOutlined />,
        label: <Link to={'/admin'}>{translate('Staff')}</Link>,
      },
      {
        key: 'generalSettings',
        label: <Link to={'/settings'}>{translate('general_settings')}</Link>,
      },
      // {
      //   key: 'emailTemplates',
      //   label: <Link to={'/email'}>{translate('email_templates')}</Link>,
      // },
      {
        key: 'paymentMode',
        label: <Link to={'/payment/mode'}>{translate('payment_mode')}</Link>,
      },
      {
        key: 'taxes',
        label: <Link to={'/taxes'}>{translate('taxes')}</Link>,
      },
      // {
      //   key: 'advancedSettings',
      //   label: <Link to={'/settings/advanced'}>{translate('advanced_settings')}</Link>,
      // },
    ],
  },
];

export default AppNav;
