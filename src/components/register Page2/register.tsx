import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { verifyMessageAPI } from "../../core/services/api/auth-register-verifymessage";

import { NavLinkRegister } from "./Items/NavLinkRegister";
import { HeaderRegister } from "./Items/HeaderRegister";
import { ConfirmCode } from "./Items/ConfirmCode";
import { SendAgainCode } from "./Items/SendAgainCode";
import { Confirm } from "./Items/Confirm";
import { ReturnReg } from "./Items/ReturnReg";
import { useGlobalState } from "../../State/State";

const RegisterPage2 = () => {
  const [phoneNumber, setPhoneNumber] = useGlobalState('phoneNumber');

  const verifyMessage = async (values) => {
    const user = await verifyMessageAPI({ values, phoneNumber });
    console.log(user);
    console.log(phoneNumber)
  }

  return (

    <Formik
      initialValues={{ verifyCode: "" }}
      onSubmit={(values) => verifyMessage(values)}
    >
      {(form) => (
        <Form className={styleLogin.form}>
          <NavLinkRegister />
          <HeaderRegister />
          <ConfirmCode />
          <SendAgainCode />
          <Confirm />
          <ReturnReg />
        </Form>
      )}
    </Formik>

  )
}

export { RegisterPage2 }