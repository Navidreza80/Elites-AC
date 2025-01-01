import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../Style/list.module.css";
import { FPNavigate } from "./Items/FPNavigate";
import { FPTitleHeader } from "./Items/FPTitleHeader";
import { FPNewPassInput } from "./Items/FPNewPassInput";
import { FPRepeatPassInput } from "./Items/FPRepeatPassInput";
import { FPNextButton } from "./Items/FPNextButton";
import { FPReturnButton } from "./Items/FPReturnButton";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { resetPassConfirmVAlue } from "../../core/services/api/forgetPassGetConfig";
import toast, { Toaster } from "react-hot-toast";

import { postResetValue } from "../../core/services/api/postResetValue";
import { useGlobalState } from "../../State/State";

const ForgetPassPage2 = () => {
  const {id} = useParams()
  const [userId, setUserId] = useGlobalState('userId');
  const [passChanged, setpassChanged] = useState(false)
  
  const checkConfig = async () => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await resetPassConfirmVAlue(id)
    if(res.success == true){
      toast.remove("1");
      toast.success("رمز عبور جدید را وارد کنید")
    }
    else {
      toast.remove("1");
      toast.error("خطا در انجام عملیات")
  }
    setUserId(res.id)
  }
  useEffect(() => {
    checkConfig()
  }, [])

  return userId != "" && (
    <>
    <Toaster />
    {passChanged && <Navigate to="/auth/Login" />}
    <Formik onSubmit={async (values) => {
                          toast.loading('درحال پردازش', {
                            id: "1"
                        })
      let res = await postResetValue(values)
      console.log(values)
      if(res.success == true){
        toast.remove("1");
        toast.success("رمز عبور شما با موفقیت تغییر یافت")
        setpassChanged(true)
      }
      else {
        toast.remove("1");
        toast.error("خطا در انجام عملیات")
    }
    }} initialValues={{ userId: userId, newPassword: "", resetValue: id }}>
      {(form) => (
        <Form className={styleLogin.form}>
          <FPNavigate />
          <FPTitleHeader />
          <FPNewPassInput />
          <FPRepeatPassInput />
          <FPNextButton />
          <FPReturnButton />
        </Form>
      )}
    </Formik>
    </>

  )
}

export { ForgetPassPage2 }