import { Formik  } from "formik";
import styleBlogList from "./../../Style/blogList.module.css";
import { Filter } from "./filter/filter.tsx";
import { ListCardBlogs } from "./blogsListGrid/index/cardsBlogsList.tsx";
import { useEffect, useState } from "react";
import { SortBlogList } from "./sort/SortBlogList.tsx";
import { TitleHeaderBlogs } from "./Items/TitleHeaderBlogs.tsx";

import { getNewsCategoryList } from "../../core/services/api/getNewsCategoryList.ts";
import { getAllBlogsList } from "../../core/services/api/AllBlogsList.ts";
import { motion, useScroll } from "framer-motion";
import { identifier } from "../../core/services/Functions/ThemeIdentifier.ts";
import { useGlobalState } from "../../State/State.tsx";

const BlogsList = () => {

  const [filterModal, setFilterModal] = useState(false)
  const [sortModal, setSortModal] = useState(false)
  const { scrollYProgress } = useScroll()
  const [categoryId, setCategoryId] = useState("")
  const [applyFilter, setApplyFilter] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isBlog, setisBlog] = useGlobalState('isBlog');
  const [applySort, setapplySort] = useState(false)
  const [sortType, setSortType] = useState("insertDate")
  const [col, setCol] = useState("DESC")
  const [categoryList, setcategoryList] = useState([])

  const getNewsCategoryListCall = async () => {
    let res = await getNewsCategoryList()
    setcategoryList(res)
  }

  useEffect(() => {
    setisBlog(true)
    getNewsCategoryListCall()
  }, [])

  useEffect(() => {
    return () => {
      setisBlog(false)
    }
  }, [])

  return (
  <>
    <Formik>
      {(form) => (
        <div className=' h-full w-full flex flex-wrap justify-center mt-20' data-theme={identifier("dark","dark2","green","pink","blue","red")}>
          <motion.div className="progressBar" style={{ scaleX: scrollYProgress }} />
          <TitleHeaderBlogs />
          <div className={styleBlogList.page}>
            <Filter 
              setCategoryId={setCategoryId}
              setApplyFilter={setApplyFilter}
              categoryId={categoryId}
              applyFilter={applyFilter}
              setSearchValue={setSearchValue}
              categoryList={categoryList}
            />            
            <div className={styleBlogList.page2}>
              <SortBlogList 
                filterModal={filterModal}
                sortModal={sortModal}
                setFilterModal={setFilterModal}
                setSortModal={setSortModal}
                setapplySort={setapplySort}
                setSortType={setSortType}
                setCol={setCol}
              />
              <ListCardBlogs 
                searchValue={searchValue}
                applyFilter={applyFilter}
                categoryId={categoryId}
                applySort={applySort}
                sortType={sortType}
                col={col}
              />
            </div>
          </div>
        </div>
      )}
    </Formik>
  </>
  )
}

export { BlogsList }
