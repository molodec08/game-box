import React from "react";
import {Header} from "../Header"
// import {Footer} from "@/components/Footer/Footer"
// import {BottomNavigation} from "@/UI/BottomNavigation/BottomNavigation"

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      {/*<Footer />*/}
      {/*<BottomNavigation />*/}
    </>
  )
}