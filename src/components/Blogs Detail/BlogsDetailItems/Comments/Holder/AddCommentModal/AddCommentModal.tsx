import React, { useState } from 'react'
import style from './Modal.module.css'
import { ModalComments } from './Modal Comments/ModalComments'
import { useTranslation } from 'react-i18next';

import { Modal } from 'antd';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { postBlogComment } from '../../../../../../core/services/api/postBlogComment';
import { postBlogCommentReply } from '../../../../../../core/services/api/postBlogCommentReply';
import * as yup from "yup";
import { useGlobalState } from '../../../../../../State/State';

const AddCommentModal = ({comments, title, isModalOpen, setIsModalOpen}) => {
    const { t } = useTranslation();
    const [addYourComment, setaddYourComment] = useState(false)
    const [isReplying, setIsReplying] = useGlobalState('isReplying');
    const [commentId, setCommentId] = useGlobalState('blogCommentId');
    const [userId, setUserId] = useGlobalState('userId');
    const [isLogin, setIsLogin] = useGlobalState('isLogin');
    const {id} = useParams()

      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      const validation = yup.object().shape({
        title: yup.string().required("لطفا عنوان نظر را وارد کنید").test('len', 'عنوان نمیتواند کمتر از 5 کاراکتر باشد', val => val.length >= 5),
        describe: yup.string().required("لطفا توضیحات نظر وارد کنید").test('len', 'توضیحات نمیتواند کمتر از 10 کاراکتر باشد', val => val.length >= 10),
      });

    return (
        <>  
            <Toaster />
            <Modal closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{overflow: "scroll", height: "600px"}}>
            {addYourComment === true && 
            <Formik
                initialValues={{
                    newsId: id,
                    userIpAddress: "jfhsdkfjds",
                    title: "",
                    describe: "",
                    userId: userId
                }}
                validationSchema={validation}
                onSubmit={async (values) => {
                    toast.loading('درحال پردازش', {
                        id: "1"
                    })
                    let res = await postBlogComment(values)
                    if(res.success === true){
                        toast.remove("1");
                        toast.success("نظر شما به بلاگ اضافه شد")
                    }
                    else if(isLogin === false){
                        toast.error("لطفا به حساب کاربری خود وارد شوید")
                    }
                }}
            >
            <Form >
            <div className={style.addCommentInput}>
            <div className={style.inputHolders}>
                    <Field name='title' className={`${style.inputs} ${style.borderG}`} placeholder='عنوان نظر خود را بنویسید' />
                    <ErrorMessage name="title" component={"p"} className="error" />
                    <Field name='describe' className={style.inputs} placeholder='متن نظر خود را بنویسید' />
                    <ErrorMessage name="describe" component={"p"} className="error" />
                </div>
                <button type='submit' className={style.send}></button>
            </div>
            </Form>
            </Formik>}
            {isReplying === true &&
                <Formik
                validationSchema={validation}
                initialValues={{
                    newsId: id,
                    userIpAddress: "asdfasfs",
                    title: "",
                    describe: "",
                    userId: userId,
                    parentId: commentId
                  }}
                onSubmit={async (values) => {
                    toast.loading('درحال پردازش', {
                        id: "1"
                    })
                    let res = await postBlogCommentReply(values)
                    if(res.success === true){
                        toast.remove('1')
                        toast.success("پاسخ شما به کامنت اضافه شد")
                    }
                    else if(isLogin === false){
                        toast.error("لطفا به حساب کاربری خود وارد شوید")
                        toast.remove("1");
                    }
                }}
            > 
            <Form >
            <div className={style.addCommentInput}>
            <div className={style.inputHolders}>
                    <Field name='title' className={`${style.inputs} ${style.borderG}`} placeholder='عنوان پاسخ خود را بنویسید' />
                    <ErrorMessage name="title" component={"p"} className="error" />
                    <Field name='describe' className={style.inputs} placeholder='متن پاسخ خود را بنویسید' />
                    <ErrorMessage name="describe" component={"p"} className="error" />
                </div>
                <button type='submit' className={style.send}></button>
            </div>
            </Form>
            </Formik>}
            <div className={style.header}>
                <div className={style.close} onClick={() => {
                    handleCancel()
                }}> {t("close")} 
                    <div className={style.closeIcon}></div>
                </div>
                <div className={style.titleHolder}>
                <div className={style.titleBlog}>({title})</div>
                    <div className={style.titleModal}> {t("StAndTeComments")} </div>
                </div>
            </div>
            <div className={style.yourCommentHodler}>
                <div className={style.addComment} onClick={() => setaddYourComment(!addYourComment)}>{t("YourComments")} 
                    <div className={style.addCommentIcon}></div>
                </div>
            </div>
            {comments.map((item, index) => {
                return (
                    <ModalComments
                        pictureAddress={item.pictureAddress}
                        key={index}
                        title={item.title}
                        describe={item.describe}
                        autor={item.autor}
                        dissLikeCount={item.dissLikeCount}
                        likeCount={item.likeCount}
                        inserDate={item.inserDate}
                        id={item.id}
                        currentUserIsLike={item.currentUserIsLike}
                        currentUserIsDissLike={item.currentUserIsDissLike}
                    />
                )
            })}
        </Modal>
        </>
    )
}

export {AddCommentModal}