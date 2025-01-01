import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { registerGmail } from "../../core/services/api/auth-register-gmail";

import { NavigateRegister } from "./Items/NavigateRegister";
import { HeaderRegister } from "./Items/HeaderRegister";
import { EmailInput } from "./Items/EmailInput";
import { NewPassword } from "./Items/NewPassword";
import { Confirm } from "./Items/Confirm";
import { useGlobalState } from "../../State/State";

const RegisterPage3 = () => {
  const [phoneNumber, setPhoneNumber] = useGlobalState('phoneNumber');
  const verifyGmail = async (values) => {
    const user = await registerGmail({ phoneNumber, values });
    console.log(user);
  }

  return (

    <Formik initialValues={{ password: "", gmail: "" }}
      onSubmit={(values) => verifyGmail(values)}>
      {(form) => (
        <Form className={styleLogin.form}>
          <NavigateRegister />
          <HeaderRegister />
          <EmailInput />
          <NewPassword />
          <Confirm />
        </Form>
      )}
    </Formik>

  )
}

export { RegisterPage3 }