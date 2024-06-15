import { Avatar, Popover, Button, Badge } from 'antd';

// import Notifications from '@/components/Notification';

import { RocketOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';

export default function UpgradeButton() {
  const translate = useLanguage();
  const Content = () => {
    return (
      <>
        <p>{translate('Do you need help on customize of this app')}</p>
        <Button
          type="primary"
          onClick={() => {
            window.open(`https://www.idurarapp.com/contact-us/`);
          }}
        >
          {translate('Contact us')}
        </Button>
      </>
    );
  };


}


