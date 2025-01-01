import React, { useEffect, useState } from 'react'
import style from './Modal.module.css'
import { useSpring, animated, useTransition } from '@react-spring/web'
import { ModalComments } from './Modal Comments/ModalComments'
import { useTranslation } from 'react-i18next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { postCourseComment } from '../../../../../../core/services/api/postCommentCourse';
import toast, { Toaster } from 'react-hot-toast';
import { postCourseReplyComment } from '../../../../../../core/services/api/postCourseReplyComment';

import { Modal } from 'antd';
import * as yup from "yup";
import { useGlobalState } from '../../../../../../State/State';

const AddCommentModal = ({comments, id, title, isModalOpen, setIsModalOpen}) => {
    const { t } = useTranslation();
    const [addYourComment, setaddYourComment] = useState(false)
    const [isReplying, setIsReplying] = useGlobalState('isReplying');
    const [commentId, setCommentId] = useGlobalState('courseCommentId');
    const [isLogin, setIsLogin] = useGlobalState('isLogin');

    const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      const validation = yup.object().shape({
        Title: yup.string().required("لطفا عنوان نظر را وارد کنید").test('len', 'عنوان نمیتواند کمتر از 5 کاراکتر باشد', val => val.length >= 5),
        Describe: yup.string().required("لطفا توضیحات نظر وارد کنید").test('len', 'توضیحات نمیتواند کمتر از 5 کاراکتر باشد', val => val.length >= 5),
      });


    return(
        <>
        <Modal  closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{overflow: "scroll", height: "600px"}}>
            {addYourComment === true && 
                    <Formik
            initialValues={{Title: '', Describe: '', CourseId: id}}
            validationSchema={validation}
            onSubmit={async (values) => {
                toast.loading('درحال پردازش', {
                    id: "1"
                })
                let res = await postCourseComment(values)
                if(res.success === true){
                    toast.remove("1");
                    toast.success("نظر شما به دوره اضافه شد")
                }
                else if(isLogin === false){
                    toast.remove("1");
                    toast.error("لطفا به حساب کاربری خود وارد شوید")
                }
            }}
        >
            <Form >
            <div className={style.addCommentInput}>
            <div className={style.inputHolders}>
                    <Field name='Title' className={`${style.inputs} ${style.borderG}`} placeholder='عنوان نظر خود را بنویسید' />
                    <ErrorMessage name="Title" component={"p"} className="error" />
                    <Field name='Describe' className={style.inputs} placeholder='متن نظر خود را بنویسید' />
                    <ErrorMessage name="Describe" component={"p"} className="error" />
                </div>
                <button type='submit' className={style.send}></button>
            </div>
            </Form>
            </Formik>
            }
            {isReplying === true &&
                <Formik
                initialValues={{CommentId: commentId, CourseId: id, Title: '', Describe: ''}}
                validationSchema={validation}
                onSubmit={async (values) => {
                    toast.loading('درحال پردازش', {
                        id: "1"
                    })
                    let res = await postCourseReplyComment(values)
                    if(res.success === true){
                        toast.remove("1");
                        toast.success("پاسخ شما به کامنت اضافه شد")
                    }
                    else if(isLogin === false){
                        toast.remove("1");
                        toast.error("لطفا به حساب کاربری خود وارد شوید")
                    }
                }}
            > 
            <Form >
            <div className={style.addCommentInput}>
            <div className={style.inputHolders}>
                    <Field name='Title' className={`${style.inputs} ${style.borderG}`} placeholder='عنوان پاسخ خود را بنویسید' />
                    <ErrorMessage name="Title" component={"p"} className="error" />
                    <Field name='Describe' className={style.inputs} placeholder='متن پاسخ خود را بنویسید' />
                    <ErrorMessage name="Describe" component={"p"} className="error" />
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
                <div className={style.titleModal}> نظرات دانشجو ها و اساتید </div>
            </div>
        </div>
        <div className={style.yourCommentHodler}>
            <div className={style.addComment} onClick={() => setaddYourComment(!addYourComment)}>نظر شما 
                <div className={style.addCommentIcon}></div>
            </div>
        </div>
        {comments.map((item, index) => {
            return (
                <ModalComments
                    courseId={id}
                    key={index}
                    title={item.title}
                    describe={item.describe}
                    author={item.author}
                    dissLikeCount={item.disslikeCount}
                    likeCount={item.likeCount}
                    insertDate={item.insertDate}
                    id={item.id}
                    pictureAddress={item.pictureAddress}
                    currentUserEmotion={item.currentUserEmotion}
                />
            )
        })}
        </Modal>
        </>
    )
}

export {AddCommentModal}