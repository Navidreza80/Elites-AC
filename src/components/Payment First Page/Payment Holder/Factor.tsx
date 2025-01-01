import { usePDF } from 'react-to-pdf';
import style from './Payment.module.css'
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { dateConvertor } from '../../../core/services/Functions/DateMiladi';
import { DownloadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Factor = ({course, peymentDate, paymentId}) => {
   const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
   const [showPdf, setshowPdf] = useState(false)
   const showModal = () => {
    setshowPdf(true);
  };
  const { t } = useTranslation();

  const handleOk = () => {
    setshowPdf(false);
  };

  const handleCancel = () => {
    setshowPdf(false);
  };
   return (
      <div>
         <button onClick={() => {
            // toPDF()
            showModal()
            }} className={style.seeFactor}> {t("ViewReceipt")} </button>
        <Modal closeIcon={null} footer={null} width={851} open={showPdf} onOk={handleOk} onCancel={handleCancel} style={{direction: "rtl"}}>
            <div ref={targetRef}>
                <div className={style.success}> {t("SuccessfulTransaction")} </div>
                <div className={style.enteghal}> {t("CardTransfer")} </div>
                <div className={style.bigG}>
                    <div className={style.text}>{t("date")} </div>
                    <div className={style.number}>{dateConvertor(peymentDate)}</div>
                </div>
                <div className={style.bigW}>
                    <div className={style.text}>{t("price")}</div>
                    <div className={style.number}>{course.cost}</div>
                </div>
                <div className={style.bigG}>
                    <div className={style.text}>{t("PaymentID")}</div>
                    <div className={style.number}>{paymentId}</div>
                </div>
                <div className={style.bigW}>
                    <div className={style.text}>{t("courseID")}</div>
                    <div className={style.number}>{course.courseId}</div>
                </div>
                <div className={style.bigG}>
                    <div className={style.text}>{t("courseName")}</div>
                    <div className={style.number}>{course.title}</div>
                </div>
            </div>
            <Button onClick={() => toPDF()} className={style.download} type="primary" shape="round" icon={<DownloadOutlined />} size={'large'}>
                {t("Download")}
            </Button>
        </Modal>
      </div>
   )
}

export {Factor}