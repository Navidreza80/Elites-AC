import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import s from '../../studentPanel/dashboard/Items/MyReserveAndComment/modal.module.css'
import style from './SeachModal.module.css'

import { CardModal } from './Card';
import { allCourseListSearch } from '../../../core/services/api/AllCourseListSearch';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const SearchModal = ({setselected}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const [courseList, setCourseList] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  const { t } = useTranslation();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getFilteredList = async () => {
    setisLoading(true)
    const allCourses = await allCourseListSearch(1)
      setCourseList(allCourses.courseFilterDtos.filter(doc => doc.title.includes(searchValue)))
      setisLoading(false)
  }

  useEffect(() => {
    getFilteredList()
  }, [])
  useEffect(() => {
    getFilteredList()
  }, [searchValue])


  return (
    <>
      <div className={style.titleHeaderMyCourseList}>
        <Button data-theme={identifier("darkSearch","dark2Search","greenSearch","pinkSearch","blueSearch","redSearch")} className="DannaM" color='primary' onClick={showModal}> انتخاب دوره </Button>
        <Modal className={style.modal} closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{overflow: "scroll", height: "600px",background:"none"}}>
          <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={s.titleHolder}>
            <div className={s.close}> {t("close")} </div>
            <div className={s.blogOrCourse}>
              <div className={s.courses}> {t("courses")} </div>
            </div>
            <div data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={s.title}>: {t("searchIn")} </div>
          </div>
          <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={style.InputSearchHolder}>
            <input data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}  placeholder='جستجو کنید' className={style.InputSearchModal} onChange={(e) => {
              setSearchValue(e.target.value)
            }} />
          </div>
          <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={style.holderCards}>
            {courseList.map((item, index) => {
              return (
                <CardModal
                  key={index}
                  id={item.courseId}
                  title={item.title}
                  desc={item.describe}
                  image={item.tumbImageAddress}
                  NavLinkTitle="/Course-Detail/"
                  NavTitle={t("courses")}
                  setselected={setselected}
                />
              )
            })}
          </div>
        </Modal>
      </div>
    </>
  );
}

export default SearchModal