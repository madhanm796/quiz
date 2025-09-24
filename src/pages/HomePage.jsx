import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import CategoryTitle from '../components/CategoryTitle'
import Topics from '../components/Topics'

import { useContext } from 'react'

import { AppContext } from '../components/ContextProvider.jsx'

import axios from 'axios'

function HomePage() {

  const context = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const [quizzes, setQuizzes] = useState([]);


  useEffect(() => {

    try {
      axios.get(`${context.apiUrl}/categories`).then((res) => {
        sessionStorage.setItem('categories', JSON.stringify(res.data));
      })

      axios.get(`${context.apiUrl}/quizzes`).then((res) => {
        sessionStorage.setItem('quizzes', JSON.stringify(res.data));
      })


      const storedCategories = sessionStorage.getItem('categories');
      if (storedCategories) {
        setCategories(JSON.parse(storedCategories));
      }

      const storedQuizzes = sessionStorage.getItem('quizzes');
      if (storedQuizzes) {
        setQuizzes(JSON.parse(storedQuizzes));
      }


    } catch (e) {
      console.error("Error fetching categories: ", e);
    }


  }, []);

  return (
    <>
      {/* <Categories categories={categories} /> */}
      <CategoryTitle></CategoryTitle>
      <Topics quizzes={quizzes} />
    </>
  )
}

export default HomePage