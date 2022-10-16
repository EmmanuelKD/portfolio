import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getMyInfo } from './api/portfolio'
import "./assets/fonts/FreestyleScriptRegular.ttf"
import AboutMe from './layouts/Aboutme'
import ClientReview from './layouts/ClientReviews'
import Footer from './layouts/Footer'
import HireMe from './layouts/HireMe'
import Landing from './layouts/Landing'
import MyCapabilities from './layouts/MyCapabilities'
import Portfolio from './layouts/Portfolio'
import './styles/globals.css'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "./utils/slick/slick-theme.css";
import "./utils/slick/slick.css";

function App() {
  const { data, error, isLoading, } = useQuery(['getMyInfo'], getMyInfo, {
    staleTime: 1000 * 10// keep cache for minute
  });

  useEffect(() => {

    // console.log(data)
  }, [data])
  return (
    <div  >

      <Landing data={data} />
      <AboutMe data={data} />
      <Portfolio />
      <MyCapabilities />
      <ClientReview />
      <HireMe />
      <Footer data={data} />

    </div>
  )
}

export default App