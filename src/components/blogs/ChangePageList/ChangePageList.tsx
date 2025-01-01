import React from 'react'
import style from '../../../Style/blogList.module.css'

import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const ChangePageList = (props) => {

  return (
    <div className={style.ChangePageList} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
        <span className={style.toLeft}></span>
          <input type='radio' name='page' id='page1' className={style.inputChangePage} />
            <label htmlFor='page1' className={style.button}  data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>1</label>
            <input type='radio' name='page' id='page2' className={style.inputChangePage}/>
            <label htmlFor='page2' className={style.button} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>2</label>
            <input type='radio' name='page' id='page3' className={style.inputChangePage}/>
            <label htmlFor='page3' className={style.button} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>3</label>
            <input type='radio' name='page' id='page4' className={style.inputChangePage}/>
            <label htmlFor='page4' className={style.button} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>4</label>
            <input type='radio' name='page' id='page5' className={style.inputChangePage}/>
            <label htmlFor='page5' className={style.button} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>5</label>
        <span className={style.toRight}></span>
    </div>
  )
}

export {ChangePageList}