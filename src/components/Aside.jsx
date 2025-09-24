import React from 'react';
import GoogleAds from './GoogleAds';

const Aside = () => {
  return (
    <aside style={{
      width: '300px',
      padding: '16px',
      position: 'sticky',
      top: '16px',
      height: 'calc(100vh - 32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <GoogleAds slot="1234567890" />
      <GoogleAds slot="0987654321" />
    </aside>
  );
};

export default Aside;