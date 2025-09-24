import React from 'react';

const Categories = ({ categories }) => {

  return (
    <div className="categories-container" style={{
      width: '100%',
      overflowX: 'auto',
      padding: '16px 0',
      WebkitOverflowScrolling: 'touch',
    //   msOverflowStyle: 'none',
    //   scrollbarWidth: 'none',
    }}>
      <div style={{
        display: 'flex',
        gap: '12px',
        paddingBottom: '4px',
        paddingLeft: '16px',
        paddingRight: '16px',
        minWidth: 'max-content'
      }}>
        {categories.map((category, index) => (
          <div
            title={category.name}
            key={category.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              border: '2px solid whitesmoke',
              borderRadius: '12px',
              background: 'transparent',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(238, 238, 238, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-text" style={{ 
              fontWeight: '600',
              color: '#000000ff'
            }}>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;