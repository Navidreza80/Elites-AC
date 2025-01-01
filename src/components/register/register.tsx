import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { registerPhoneNumber } from "../../core/services/api/auth-register-phonenumber";
import toast, { Toaster } from 'react-hot-toast';
import { RegisterPage2 } from "../register Page2/register";

import { useTranslation } from 'react-i18next';
import { NavigateRegister } from "./Items/navigateRegister";
import { WelcomeRegister } from "./Items/WelcomeRegister";
import { PhoneNumberReg } from "./Items/PhoneNumberReg";
import { SendCode } from "./Items/SendCode";
import { LoginRegister } from "./Items/LoginRegister";
import { MainPageButton } from "./Items/MainPageButton";
import * as yup from "yup";
import { useGlobalState } from "../../State/State";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useGlobalState('phoneNumber');
  const { t } = useTranslation();

  const Register_User_PhoneNumber = async (values) => {
    const phoneNumb = await registerPhoneNumber(values)
    console.log(phoneNumb)
  }

  const validation = yup.object().shape({
    phoneNumber: yup.string().required("لطفا شماره همراه را وارد کنید"),
  });

  return (

    <Formik
      initialValues={{ phoneNumber: "" }}
      onSubmit={(values) => Register_User_PhoneNumber(values)}
      validationSchema={validation}
    >
      {(form) => (
        <Form className={styleLogin.form}>
          <NavigateRegister />
          <WelcomeRegister />
          <PhoneNumberReg />
          <SendCode />
          <LoginRegister />
          <MainPageButton />
        </Form>
      )}
    </Formik>

  )
}

export { Register }