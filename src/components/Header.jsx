import React from 'react';
import appLogo from '../assets/logo.png'

const Header = () => {
  return (
    <header style={{
      padding: '16px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
      }}>
          <img src={appLogo} alt="" style={{
              width: '40px',
              height: '40px',
              marginRight: '8px',
          }} />
          <h1 style={{ 
            margin: 0, 
            fontSize: '24px',
            color: '#000'
          }}>
            Quiz Mania
          </h1>
      </div>
    </header>
  );
};

export default Header;