import style from "./LangButton.module.css";

const DarkAndLangButton = ({isClicked,setisClicked}) => {
return (
  <div className={style.DarkAndLangButton} onClick={() => {
    setisClicked(!isClicked)
  }}></div>
)
};
export default DarkAndLangButton;