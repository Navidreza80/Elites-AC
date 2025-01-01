import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../Style/list.module.css";
import { Navigate, NavLink } from "react-router-dom";
import { loginAPI } from "../../core/services/api/auth-Login";

import { setItem } from "../../core/services/storage/storage.services";
import { NavigateLogin1 } from "./items/Navigate";
import { HeaderLogin1 } from "./items/HeaderLogin";
import { Input1Login } from "./items/Input1login";
import { LoginAccount } from "./items/LoginAccount";
import { RegisterLogin } from "./items/RegisterLogin";
import { RememberAndForget } from "./items/RememberAndForget";
import { Input2login } from "./items/Input2login";
import { HomePageButton } from "./items/HomePageButton";
import { useTranslation } from 'react-i18next';
import * as yup from "yup";
import { useGlobalState } from "../../State/State";

const Login = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const [isTwoStep, setisTwoStep] = useGlobalState('isTwoStep');
  const [userGmail, setuserGmail] = useGlobalState('userGmail');
  const [userPass, setuserPass] = useGlobalState('userPass');
  const [userId, setUserId] = useGlobalState('userId');

  const loginUser = async (values) => {
    const user = await loginAPI(values)
    if (user.success == true && user.token != null) {
      setItem("token", user.token)
      setIsLogin(true)
      setUserId(user.id)
      if(user.roles.includes("Administrator")){
        let token = user.token.replaceAll(".", "1000000000")
        window.open("http://localhost:3000/home/" + `${token}`)
      }
    }
    else if (user.success == true && user.token == null) {
      setisTwoStep(true)
      setuserPass(values.password)
      setuserGmail(values.phoneOrGmail)
    }
    else {
      return
    }
  }

  const validation = yup.object().shape({
    phoneOrGmail: yup.string().required("لطفا ایمیل را وارد کنید"),
    password: yup.string().required("لطفا رمز عبور را وارد کنید"),
  });

  return (
    <Formik
      initialValues={{ password: "", phoneOrGmail: "" }}
      onSubmit={(values) => loginUser(values)}
      validationSchema={validation}
    >
      {(form) => (
        <Form className={styleLogin.form}>
          {isLogin && <Navigate to="/" />}
          {isTwoStep && <Navigate to="/auth/Login-Page2" />}
          <NavigateLogin1 />
          <HeaderLogin1 />
          <Input1Login />
          <Input2login />
          <RememberAndForget />
          <LoginAccount />
          <RegisterLogin />
          <HomePageButton />
        </Form>
      )}
    </Formik>
  )
}

export { Login }