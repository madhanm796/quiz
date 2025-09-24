import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { quiz, userAnswers } = location.state || {};

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px'
    }}>
      <button 
        onClick={() => navigate('/')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'transparent',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '8px 16px',
          cursor: 'pointer',
          marginBottom: '24px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        ← Back to Home
      </button>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '24px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ 
          fontSize: '28px', 
          marginBottom: '24px',
          color: '#000000ff'
        }}>Quiz Results</h2>

        {quiz?.questions.map((question, qIndex) => (
          <div key={qIndex} style={{
            marginBottom: '32px',
            padding: '20px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '8px'
          }}>
            <h3 style={{
              fontSize: '18px',
              marginBottom: '16px',
              color: '#000000ff'
            }}>{`${qIndex + 1}. ${question.question}`}</h3>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {question.options.map((option, oIndex) => (
                <li key={oIndex} style={{
                  padding: '12px',
                  marginBottom: '8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  background: option === question.answer ? 
                    'rgba(25, 210, 118, 0.12)' : 
                    userAnswers[qIndex] === oIndex ? 
                      'rgba(255, 87, 87, 0.12)' : 
                      'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  {option === question.answer && (
                    <span style={{ color: '#4CAF50' }}>✓</span>
                  )}
                  {userAnswers[qIndex] === oIndex && option !== question.answer && (
                    <span style={{ color: '#FF5757' }}>✗</span>
                  )}
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div style={{
          marginTop: '24px',
          padding: '16px',
          background: 'rgba(25, 210, 118, 0.12)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            color: '#000000ff',
            marginBottom: '8px' 
          }}>Final Score</h3>
          <p style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#4CAF50'
          }}>
            {quiz?.questions.reduce((score, q, index) => 
              q.options[userAnswers[index]] === q.answer ? score + 1 : score, 0
            )} / {quiz?.questions.length}
          </p>
        </div>
        
        <button 
          onClick={() => navigate(`/quiz/${quiz.id}`)}
          style={{
            background: '#4CAF50',
            color: 'white',
            padding: '12px 32px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '24px',
            display: 'block',
            margin: '24px auto'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#45a049';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#4CAF50';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default ResultPage;