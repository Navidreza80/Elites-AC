import React, { useEffect, useState } from 'react'
import style from './PaymentGateway.module.css'
import { Header } from './Header/Hodler/Header'
import { Content } from './Content/Holder/Content'
import { Footer } from './Footer/Hodler/Footer'
import { getCourseById } from '../../core/services/api/courseById'
import { useParams } from 'react-router-dom'

const PaymentGateway = () => {
  const [courseDetail, setCourseDetail] = useState([])
  const { id } = useParams();
  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    setCourseDetail(Details)
  }
  useEffect(() => {
    getCourseDetail()
  }, [id])

  return (
    <div className={style.paymentGateway}>
      <Header />
      <Content Details={courseDetail} price={courseDetail?.cost} />
      <Footer />
    </div>
  )
}

export { PaymentGateway }