import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import "./app/App.css"
import "./i18n.ts"



import { Root } from './routes/Root.tsx'
import LangAndMode from './components/common/bottom-nav/LangAndMode.tsx'

// Auth

import { AuthPages } from './pages/AuthPages.tsx'
import { LoginPageOne } from './pages/LoginPageOne.tsx'
import { LoginPageTwo } from './pages/LoginPageTwo.tsx'
import { ForgetPasswordPageOne } from './pages/ForgetPasswordPageOne.tsx'
import { ForgetPasswordPageTwo } from './pages/ForgetPasswordPageTwo.tsx'
import { RegisterPageOne } from './pages/RegisterPageOne.tsx'
import { RegisterPageTwo } from './pages/RegisterPageTwo.tsx'
import { RegisterPageThree } from './pages/RegisterPageThree.tsx'

// Landing

import { Landing } from './pages/LandingPage.tsx'

// Courses List

import { CourseListPage } from './pages/CourseListPage.tsx'

// Blogs List

import { BlogListPage } from './pages/BlogListPage.tsx'

// About Us

import { AboutUsPage } from './pages/AboutUsPage.tsx'

// Teacher Page

import { TeacherPage } from './pages/TeacherPage.tsx'

// Student Panel
import { StudentPanelPage } from './pages/StudentPanelPage.tsx'
import {ImageForm} from './components/studentPanel/studentProfilePage/ImagesPage/Image.tsx'
import {InformationForm} from './components/studentPanel/studentProfilePage/InformationPage/InformationForm.tsx'
import {LinkForm} from './components/studentPanel/studentProfilePage/LinkPage/link.tsx'
import {ChangePassword} from './components/studentPanel/studentProfilePage/changePassword/changePassword.tsx'
import {LocationForm} from './components/studentPanel/studentProfilePage/locationPage/location.tsx'
import { StudentPayment } from './components/studentPanel/Student Payment/StudentPayment.tsx'
import { StudentMyCourse } from './components/studentPanel/studentCurse-Blog/My Courses/StudentMyCourse.tsx'
import { StudentMyReserve } from './components/studentPanel/studentCurse-Blog/My Reserve/StudentMyReserve.tsx'
import { StudentMyFavCourses } from './components/studentPanel/studentCurse-Blog/Fav Courses/StudentMyFavCourses.tsx'
import { StudentMyFavBlogs } from './components/studentPanel/studentCurse-Blog/Fav Blogs/StudentMyFavBlogs.tsx'
import { StudentDashboard } from './components/studentPanel/dashboard/dashboard.tsx'

// Course Detail

import { CourseDetailPage } from './pages/CourseDetail.tsx'

// Blog Detail

import { BlogDetailPage } from './pages/BlogDetail.tsx'

// Error Pages
import { ErrorPage404 } from './components/Error 404/Error404.tsx'
import { ErrorPage } from './components/Error Page/ErrorPage.tsx'

// Payment Gateway

import { PaymentGateway } from './components/Payment Gateway/PaymentGateway.tsx'

// Compare Products

import { CompareSelect } from './components/Compare 2 products/Compare select.tsx'
import { ChangeSecurity } from './components/studentPanel/studentProfilePage/Change Security/ChangeSecurity.tsx'
import { MyJobs } from './components/studentPanel/My Jobs/MyJobs.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Blogs-List",
        element: <BlogListPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Courses-List",
        element: <CourseListPage />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/Course-Detail/:id",
        element: <CourseDetailPage />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/Blogs-Detail/:id",
        element: <BlogDetailPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/teacher-page",
        element: <TeacherPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/about-we",
        element: <AboutUsPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Compare-products-select/:id",
        element: <CompareSelect />,
        errorElement: <ErrorPage />
      },
    ]
  },
  { 
    path: "/auth",
    element: <AuthPages />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/auth/Login",
        element: <LoginPageOne />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Login-Page2",
        element: <LoginPageTwo />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Register",
        element: <RegisterPageOne />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Register-Page2",
        element: <RegisterPageTwo />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Register-Page3",
        element: <RegisterPageThree />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Forget-Password",
        element: <ForgetPasswordPageOne />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Forget-Password-Page2/:id",
        element: <ForgetPasswordPageTwo />,
        errorElement: <ErrorPage />
      },
    ]
  },
  {
    path: "/Student-Panel",
    element: <StudentPanelPage />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/Student-Panel/My-Courses",
        element: <StudentMyCourse />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Student-Panel/Information",
        element: <InformationForm />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/Student-Panel/Image",
        element: <ImageForm />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/Link",
        element: <LinkForm />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/changePassword",
        element: <ChangePassword />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/change-security",
        element: <ChangeSecurity />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/Location",
        element: <LocationForm />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/Student-Panel/Shopping-Basket",
        element: <StudentPayment />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/My-Reserve",
        element: <StudentMyReserve />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/Fav-Courses",
        element: <StudentMyFavCourses />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/Fav-Blogs",
        element: <StudentMyFavBlogs />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/dashboard",
        element: <StudentDashboard />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/my-jobs",
        element: <MyJobs />,
        errorElement: <ErrorPage />
      },
    ]
  },
  {
    path: "/Payment-Gateway/:id",
    element: <PaymentGateway />,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <ErrorPage404 />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangAndMode />
    <RouterProvider router={router} />
  </StrictMode>,
)
