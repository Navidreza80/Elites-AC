
import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image';
import { TitleAndCountHolder } from './index/TitleAndCountHolder';
import { NavLink } from "react-router-dom";
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';
const CardBlogs = ({image, title,count,countN, LinkedinProf}) => {

  return (
    
    <div className={style.holder} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
        <Image image={image && image.slice(0, 5) == "https" ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s'} />
        <TitleAndCountHolder LinkedinProf={LinkedinProf} title={title} count={count} countN={countN} />
    </div>
  )
}

export {CardBlogs}