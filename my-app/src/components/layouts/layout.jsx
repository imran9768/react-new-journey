import React from 'react'
import Header from './header'
import Footer from './footer'
const MainLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header heading={`This is heading`} />
      
      {/* Main Content Area */}
      <main className="flex-1 p-4">{children}</main>

      <Footer year={2025}/>
    </div>
  )
}

export default MainLayout