import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Topics = ({ quizzes }) => {

  const navigator = useNavigate();

  return (
    <div style={{ padding: '16px' }}>

      {console.log(quizzes )}

      {quizzes.map((quiz, index) => (
        <div key={index} style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          padding: '16px',
          marginBottom: '12px',
          border: '2px solid rgba(240, 240, 240, 1)',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <img src={quiz.icon} style={{
            fontSize: '24px',
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            width: '64px',
            height: '64px',
            objectFit: 'contain'
          }}/>
          <div style={{
            textAlign: 'left',
            flex: 1
          }}>
            <h3 style={{ 
              margin: '0 0 8px 0',
              color: '#000000ff',
              fontSize: '18px',
              fontWeight: '600'
            }}>{quiz.title}</h3>
            <p style={{
              margin: '0 0 12px 0',
              color: 'rgba(0, 0, 0, 0.7)',
              fontSize: '14px'
            }}>{quiz.description}</p>
            <button
              style={{
                padding: '8px 16px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#45a049';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#4CAF50';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => {
                navigator(`/quiz/${quiz.id}`)
              }}
            >
              Start Quiz
            </button>
          </div>
          <div style={{width: '100px', textAlign: 'center', color:'green', backgroundColor:'rgba(0, 255, 0, 0.1)', padding:'4px', borderRadius:'8px', height:'fit-content'}}>
              <span>{quiz.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;