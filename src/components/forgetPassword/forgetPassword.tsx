import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../Style/list.module.css";
import { ForgetPassNavigate } from "./Items/FPNavigate";
import { FPTitleHeader } from "./Items/FPTitleHeader";
import { FPEmailInput } from "./Items/FPEmailInput";
import { FPNextButton } from "./Items/FPNextButton";
import { FPReturnButton } from "./Items/FPReturnButton";
import { postForgetPassEmail } from "../../core/services/api/postForgetPassEmail";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

const ForgetPass = () => {
  const validation = yup.object().shape({
    email: yup.string().required("لطفا ایمیل خود را وارد کنید"),
  });
  const { t } = useTranslation();
  return (
    <>
      <Toaster />
      <Formik
        validationSchema={validation}
        initialValues={{
      email: "",
      baseUrl: "http://localhost:5173/Auth/Forget-Password-Page2"
      }} onSubmit={async(values) => {
        toast.loading('درحال پردازش', {
          id: "1"
      })
        let res = await postForgetPassEmail(values)
        if(res.success === true){
          toast.remove("1");
          toast.success("لینک به ایمیل شما فرستاده شد")
        }
        else {
          toast.remove("1");
          toast.error("خطا در انجام عملیات")
      }
      }}>
      {(form) => (
        <Form className={styleLogin.form}>
          <ForgetPassNavigate />
          <FPTitleHeader />
          <FPEmailInput />
          <FPNextButton />
          <FPReturnButton />
        </Form>
      )}
    </Formik>
    </>


  )
}

export { ForgetPass }