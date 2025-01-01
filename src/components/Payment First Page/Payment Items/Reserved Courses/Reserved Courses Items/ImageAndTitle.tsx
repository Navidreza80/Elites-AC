import style from './Items.module.css'
import { Image } from './Image'
import { Title } from './Title'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
const ImageAndTitle = ({title, Image}) => {


  return (
    <div className={style.TitleAndImageHolder} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
      <Image Image={Image}/>
      <Title title={title} />
    </div>
  )
}

export { ImageAndTitle }