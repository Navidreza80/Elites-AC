import { Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import s from '../../../../../../studentPanel/dashboard/Items/MyReserveAndComment/modal.module.css'
import style from '../SeachModal.module.css'

import { CardModal } from '../Card';
import { getAllBlogsListSearch } from '../../../../../../../core/services/api/AllBlogsListSearch';
import { allCourseListSearch } from '../../../../../../../core/services/api/AllCourseListSearch';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { useGlobalState } from '../../../../../../../State/State';
const SearchModal = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const [courseList, setCourseList] = useState([]);
  const [blogsList, setBlogsList] = useState([]);
  const [isBlog, setisBlog] = useState(false)
  const [data, setdata] = useState([])
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

  const allBlogsList = async () => {
    setisLoading(true)
    let allBlogs = await getAllBlogsListSearch()
      setBlogsList(allBlogs.news)
      setBlogsList(allBlogs.news.filter(doc => doc.title.includes(searchValue)))
      setisLoading(false)
  }

  const getFilteredList = async () => {
    setisLoading(true)
    const allCourses = await allCourseListSearch(1)
      setdata(courseList)
      setCourseList(allCourses.courseFilterDtos.filter(doc => doc.title.includes(searchValue)))
      setisLoading(false)
  }

  useEffect(() => {
    getFilteredList()
  }, [])
  useEffect(() => {
    getFilteredList()
  }, [searchValue])
  useEffect(() => {
    allBlogsList()
  }, [])
  useEffect(() => {
    allBlogsList()
  }, [searchValue])


  return (
    <>
      <div className={style.titleHeaderMyCourseList}>
        <div data-theme={identifier("darkSearch","dark2Search","greenSearch","pinkSearch","blueSearch","redSearch")} className={style.SearchHeader} onClick={showModal}> </div>
        <div id='Modal2Search'>
          <Modal className={style.modal} closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{ overflow: "scroll", height: "600px", background: "none" }}>
            <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={s.titleHolder}>
              <div className={s.close} onClick={handleCancel}> {t("close")} </div>
              <div className={s.blogOrCourse}>
                <div className={isBlog === false ? s.courses : s.selected} onClick={() => setisBlog(true)}> {t("blogs")} </div>
                <div className={isBlog === true ? s.courses : s.selected} onClick={() => setisBlog(false)}> {t("courses")} </div>
              </div>
              <div data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={s.title}>: {t("search")} </div>
            </div>
            <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={style.InputSearchHolder}>
              <input data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} placeholder={t("ُSearchLandingPlaceHolder")} className={style.InputSearchModal} onChange={(e) => {
                setSearchValue(e.target.value)
              }} />
            </div>
            <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={style.holderCards}>
              {courseList.map((item, index) => {
                return isBlog == false && (
                  <CardModal
                    key={index}
                    id={item.courseId}
                    title={item.title}
                    desc={item.describe}
                    image={item.tumbImageAddress}
                    NavLinkTitle="/Course-Detail/"
                    NavTitle={t("courses")}
                  />
                )
              })}
              {blogsList.map((item, index) => {
                return isBlog && (
                  <CardModal
                    key={index}
                    id={item.id}
                    title={item.title}
                    desc={item.miniDescribe}
                    image={item.currentImageAddressTumb}
                    NavLinkTitle="/Blogs-Detail/"
                    NavTitle={t("blogs")}
                  />
                )
              })}
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}


export default SearchModal