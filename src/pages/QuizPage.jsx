import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function QuizPage() {
  const params = useParams();
  const quizzes = JSON.parse(sessionStorage.getItem('quizzes'));
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  
  useEffect(() => {
    setCurrentQuiz(quizzes.find(quiz => quiz.id === params.id));
  }, []);

  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px'
    }}>
      <button 
        onClick={() => navigate(-1)}
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
        ← Back to Topics
      </button>
      {
        quizzes && currentQuiz ? (
          <div style={{
            padding: '24px',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'left'
          }}>
            <h2 style={{
              color: '#000000ff',
              fontSize: '28px',
              marginBottom: '12px',
              textAlign: 'left'
            }}>{currentQuiz.title}</h2>
            <p style={{
              color: 'rgba(0, 0, 0, 0.7)',
              fontSize: '16px',
              marginBottom: '32px',
              textAlign: 'left'
            }}>{currentQuiz.description}</p>
            <div style={{ marginTop: '24px' }}>
              {currentQuiz.questions.map((question, qIndex) => (
                <div key={qIndex} style={{
                  marginBottom: '32px',
                  background: '#ffffff',
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{
                    color: '#000000ff',
                    fontSize: '18px',
                    marginBottom: '16px',
                    fontWeight: '600'
                  }}>{`Question ${qIndex + 1}: ${question.question}`}</h4>
                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    {question.options.map((option, oIndex) => (
                      <li key={oIndex} style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        marginBottom: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(163, 163, 163, 0.29)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: selectedAnswers[qIndex] === oIndex ? 'rgba(25, 210, 124, 0.81)' : 'transparent'
                      }}
                        onClick={() => {
                          setSelectedAnswers(prev => ({
                            ...prev,
                            [qIndex]: oIndex
                          }));
                        }}
                        onMouseEnter={(e) => {
                          if (selectedAnswers[qIndex] !== oIndex) {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = selectedAnswers[qIndex] === oIndex ?
                            'rgba(25, 210, 118, 0.12)' : 'transparent';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          checked={selectedAnswers[qIndex] === oIndex}
                          onChange={() => { }}
                          style={{ cursor: 'pointer' }}
                        />
                        <span>{option}</span>
                      </li>
                    ))
                    }
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p style={{ color: '#000000ff' }}>Loading quiz...</p>
        )
      }
      <button 
        onClick={() => {
          navigate('/result', {
            state: {
              quiz: currentQuiz,
              userAnswers: selectedAnswers
            }
          });
        }}
        disabled={Object.keys(selectedAnswers).length !== currentQuiz?.questions?.length}
        style={{
          background: Object.keys(selectedAnswers).length !== currentQuiz?.questions?.length ? 
            '#cccccc' : '#4CAF50',
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
          if (!e.currentTarget.disabled) {
            e.currentTarget.style.background = '#45a049';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!e.currentTarget.disabled) {
            e.currentTarget.style.background = '#4CAF50';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }
        }}
      >
        Submit Quiz
      </button>
    </div>

  )
}

export default QuizPage