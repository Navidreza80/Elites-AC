import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleImage from "./partImagePage/Image.module.css";
import { NavLink } from "react-router-dom";

import { getProfile } from "../../../../core/services/api/getProfileInfo";
import { useEffect, useState } from "react";
import { selectImage } from "../../../../core/services/api/postSelectImage";
import toast, { Toaster } from "react-hot-toast";
import { uploadImage } from "../../../../core/services/api/postUserProfile";
import { removeUserProfile } from "../../../../core/services/api/deleteUserProfile";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";
import { useGlobalState } from "../../../../State/State";
const ImageForm = () => {
  
    const [images, setImages] = useState([])
    const [isClicked, setisClicked] = useState(false)
    const [userInfoo, setUserInfoo] = useState()
    const [image, setImage] = useState()
    const [uploaded, setuploaded] = useState(false)
    const [imageChanged, setimageChanged] = useState(false)
    const [sthChanged, setsthChanged] = useGlobalState('sthChangedStu')
    const { t } = useTranslation();

    const getAllImagesCall = async () => {
        const userInfo = await getProfile()
        setImages(userInfo.userImage)
        setUserInfoo(userInfo)
    }

    const postSelectImageCall = async (ImageId) => {
        toast.loading('درحال پردازش', {
            id: "1"
        })
        const onSucces = await selectImage(ImageId)
        if (onSucces.success == true) {
            toast.remove("1");
            toast.success("عملیات با موفقیت انجام شد")
        }
        else {
            toast.remove("1");
            toast.error("خطا در انجام عملیات")
        }
        setsthChanged(!sthChanged)
    }

    const onUpload = async (image) => {
        toast.loading('درحال پردازش', {
            id: "1"
        })
        const result = await uploadImage(image)
        if(result.success == true){
            toast.remove("1");
            toast.success("عملیات با موفقیت انجام شد")
            setuploaded(!uploaded)
        }
        else {
            toast.remove("1");
            toast.error("خطا در انجام عملیات")
        }
        setisClicked(false)
    }

    useEffect(() => {
        getAllImagesCall()
    }, [])

    useEffect(() => {
        getAllImagesCall()
    }, [uploaded, imageChanged])
    

    return (
            <>
                <Toaster />
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("myProfile")}</h1>
                    </div>
                    <div className={styleImage.page2}>
                        <div className={styleInform.rightHolder} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
                            <div className={styleInform.right}>
                                <NavLink to="/Student-Panel/Information" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("informationAccount")} </NavLink>
                                <div><h1 className={styleImage.selected}>{t("images")} </h1></div>
                                <NavLink to="/Student-Panel/Location" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("placeInform")} </NavLink>
                                <NavLink to='/Student-Panel/Link' className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("links")} </NavLink>
                                <NavLink to="/Student-Panel/changePassword" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("ChangePassword")} </NavLink>
                                <NavLink to="/Student-Panel/change-security" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("UserSettings")}  </NavLink>   
                            </div>
                        </div>
                        <div className={styleImage.imagesHolder}>
                            <div className={style.header}>
                                <div className={style.uploadImage}  onClick={() => {
                                        setisClicked(!isClicked)
                                    }}> {t("AddPhoto")}
                                    <span className={style.addImage}></span>
                                </div>
                                {isClicked && 
                                <>
                                    <div className={style.overlay}></div>
                                    <div className={styleImage.uploadModule}>
                                        <div className={styleImage.uploadHeader}>
                                            <div className={styleImage.closeBtn} onClick={() => {
                                                setisClicked(!isClicked)
                                            }}></div>
                                        </div>
                                        <img className={styleImage.profile} src={image ? URL.createObjectURL(image) : image} />
                                        <div className={styleImage.holderUploadButton}>
                                        <button className={styleImage.upload} onClick={() => {
                                            const imageData = new FormData();
                                            imageData.append('formFile', image)
                                            onUpload(imageData)
                                        }}> {t("Loading")} </button>
                                        </div>
                                        <div className={styleImage.fileHolder}></div>
                                        <input type="file" id="file" className={styleImage.file} onChange={(e) => setImage(e.target.files[0])} />
                                        <label htmlFor="file" className={styleImage.labelFile}></label>
                                    </div>
                                </>
                                }
                            </div>
                            {
                                images.map((item, index) => {
                                    return (
                                        <div key={index} className={styleImage.holderProfiles} >
                                            <img 
                                                className={styleImage.img} 
                                                src={item.puctureAddress} 
                                                onClick={() => {
                                                setimageChanged(!imageChanged)
                                                postSelectImageCall({ImageId: item.id})
                                            }} />
                                            <span className={styleImage.delete} onClick={async () => {
                                                let res = await removeUserProfile(item.id)
                                                console.log(res)
                                                if(res.success == true){
                                                    toast.success('پروفایل حذف شد')
                                                }
                                            }}></span>
                                            {userInfoo.currentPictureAddress == item.puctureAddress && <span className={styleImage.tick}></span> }
                                        </div>
                                    )
                                })
                            }
                        </div>    
                    </div>
            </>
    )
}

export { ImageForm }