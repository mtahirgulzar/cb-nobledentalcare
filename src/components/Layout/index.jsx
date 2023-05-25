import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Header from '../Header';

export default function Layout({ children, data, SeoData, navServices, navCat, navConditions }) {
  return (

    <div>
      <Header data={SeoData} />
      <Navbar data={data?.navitem} navServices={navServices} navCat={navCat} />
      <div className="flex-1">{children}</div>
      <Footer data={data?.Footer} navConditions={navConditions} />
    </div>
  )
}
