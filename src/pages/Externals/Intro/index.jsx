import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { Footer, Navbar } from '../../../layout'

import IntroBody from './sections/introBody/IntroBody'
import IntroHeader from './sections/introHeader/IntroHeader'

const Intro = () => {
  const dispatch = useDispatch()

  const getCourses = useCallback(async () => {
    const res = await axios.get(
      `https://api.techstudio.academy/api/v1/external/courses`
    )
    dispatch({ type: `app/setCourses`, payload: res.data.data })
    dispatch({ type: `app/setCourseID`, payload: res.data.data[0].id })
    console.log(res.data.data[0].id)
  }, [dispatch])

  useEffect(() => {
    getCourses()
  }, [getCourses])
  return (
    <main>
      <Navbar bg={`transparent`} setTextColorBlack />
      <IntroHeader />
      <IntroBody />
      <Footer />
    </main>
  )
}

export default Intro
