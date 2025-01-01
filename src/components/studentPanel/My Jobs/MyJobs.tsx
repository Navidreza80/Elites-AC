import React, { useEffect, useState } from 'react'
import style from "./style.module.css";
import DataTable from 'react-data-table-component';
import { getAllJobs } from '../../../core/services/api/StudentPanel/Jobs/getAllJobs';
import { columnJobs } from './column';
import { Button, Modal } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { postJob } from '../../../core/services/api/StudentPanel/Jobs/postJob';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from "yup";
import { useTranslation } from 'react-i18next';

const MyJobs = () => {
  const [isLoading, setisLoading] = useState(true)

    const [allJobs, setallJobs] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);

  const getMyJobCall = async () => {
    const res = await getAllJobs();
    setallJobs(res.jobLists)
    setisLoading(false)
  }

  useEffect(() => {
    getMyJobCall()
  }, [])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const validation = yup.object().shape({
    jobTitle: yup.string().required("لطفا عنوان  را وارد کنید").test('len', 'عنوان نمیتواند کمتر از 5 کاراکتر باشد', val => val.length >= 5),
    aboutJob: yup.string().required("لطفا توضیحات را وارد کنید").test('len', 'توضیحات نمیتواند کمتر از 10 کاراکتر باشد', val => val.length >= 10),
    companyWebSite: yup.string().required("لطفا وبسایت شرکت را وارد کنید"),
    companyLinkdin: yup.string().required("لطفا لینکدین شرکت را وارد کنید"),
    workStartDate: yup.string().required("لطفا تاریخ شروع وارد کنید"),
    workEndDate: yup.string().required("لطفا تاریخ پایان وارد کنید"),
    companyName: yup.string().required("لطفا نام شرکت وارد کنید"),
  });

  const onSubmit = async (value) => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await postJob(value)
    console.log(res)
    console.log(value)
    if(res.success == true){
      toast.remove("1");
        toast.success('شغل شما اضافه شد')
    }
    else {
      toast.remove("1");
      toast.error("خطا در انجام عملیات")
  }
  }
  const { t } = useTranslation();
  
  return (
    <div className={style.page2}>
        <Toaster />
        <div className={style.containerTitle}>
        <div className={style.title}> {t("jobs")} </div>
        <Button className={style.button} icon={<AppstoreAddOutlined />} size='large' color='primary' onClick={showModal}> {t("add")} </Button>
        <Modal className={style.modal} closeIcon={null} footer={null} width={700} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Formik
                initialValues={{
                    jobTitle: "",
                    aboutJob: "",
                    companyWebSite: "",
                    companyLinkdin: "",
                    workStartDate: "",
                    workEndDate: "",
                    inWork: true,
                    companyName: ""
                  }}
                  onSubmit={(value) => onSubmit(value)}
                  validationSchema={validation}
            >
            <Form>
            <div className={style.inputHolder}>
            <label className="text-base font-DannaDemiBold text-black pb-3"> {t("jobsTitle")} </label>
            <Field className={style.input} name="jobTitle" />
            <ErrorMessage name="jobTitle" component={"p"} className="error" />
            </div>
            <div className={style.inputHolder}>
            <label className="text-base font-DannaDemiBold text-black pb-3"> {t("Description")} </label>
            <Field className={style.input} name="aboutJob" />
            <ErrorMessage name="aboutJob" component={"p"} className="error" />
            </div>
            <div className={style.inputHolder}>
            <label className="text-base font-DannaDemiBold text-black pb-3"> {t("siteCompany")} </label>
            <Field className={style.input} name="companyWebSite" />
            <ErrorMessage name="companyWebSite" component={"p"} className="error" />
            </div>
            <div className={style.inputHolder}>
            <label className="text-base font-DannaDemiBold text-black pb-3"> {t("nameCompany")} </label>
            <Field className={style.input} name="companyName" />
            <ErrorMessage name="companyName" component={"p"} className="error" />
            </div>
            <div className={style.inputHolder}>
            <label className="text-base font-DannaDemiBold text-black pb-3"> {t("LinkedInCompany")} </label>
            <Field className={style.input} name="companyLinkdin" />
            <ErrorMessage name="companyLinkdin" component={"p"} className="error" />
            </div>
            <div className={style.inputHolder}>
            <label className="text-base font-DannaDemiBold text-black pb-3"> {t("dateStart")} </label>
            <Field className={style.input} name="workStartDate" />
            <ErrorMessage name="workStartDate" component={"p"} className="error" />
            </div>
            <div className={style.inputHolder}>
            <label className="text-base font-DannaDemiBold text-black pb-3"> {t("dateEnd")} </label>
            <Field className={style.input} name="workEndDate" />
            <ErrorMessage name="workEndDate" component={"p"} className="error" />
            </div>
            <button className={style.addWork} type='submit'> {t("record")} </button>
            </Form>
            </Formik>
        </Modal>
        </div>
    {allJobs != null && <DataTable
    data={allJobs}
    columns={columnJobs}
    className={style.DataTable}
    responsive={true}
    highlightOnHover={true}
    />}
    </div>
  )
}

export {MyJobs}