import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuizPage from './pages/QuizPage.jsx'
import HomePage from './pages/HomePage.jsx'
import './index.css'
import App from './App.jsx'
import ContextProvider from './components/ContextProvider.jsx'
import ResultPage from './pages/ResultPage.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<HomePage></HomePage>} ></Route>
          <Route path='/quiz/:id' element={<QuizPage></QuizPage>}></Route>
          <Route path="/result" element={<ResultPage />} />
        </Route>
        <Route path='*' element={<h1>404 Page not found!</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
  // </StrictMode>,
)
