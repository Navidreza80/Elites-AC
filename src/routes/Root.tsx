import React, { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/common/Header/HolderHeader/Header'
import { HolderFooter } from '../components/common/Footer/HolderFooter/HolderFooter'
import { motion, useScroll } from "framer-motion";

const Root = () => {
    const [searchValue, setSearchValue] = useState()
    const { scrollYProgress } = useScroll()

  return (
    <>
    <motion.div className="progressBar" style={{ scaleX: scrollYProgress }} />
    <Header/>
    <Outlet />
    <HolderFooter />
    </>
  )
}

export { Root }