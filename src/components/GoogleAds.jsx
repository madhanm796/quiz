import React, { useEffect } from 'react';

const GoogleAds = ({ slot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('Error loading Google Ads:', err);
    }
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      margin: '16px 0',
      minHeight: '300px',
      display: 'flex',
      justifyContent: 'center',
      background:'#f9f9f9'
    }}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: '728px',
          height: '90px'
        }}
        data-ad-client="ca-pub-4197186908"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default GoogleAds;