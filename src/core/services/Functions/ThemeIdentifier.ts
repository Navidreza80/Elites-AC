import { useGlobalState } from "../../../State/State";



export const identifier = (className, className2, className3, className4, className5, className6) => {


    // اضافه کردن تم ها
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [darkMode2, setDarkMode2] = useGlobalState('DarkMode2');
    const [greenMode, setGreenMode] = useGlobalState('GreenMode');
    const [pinkMode, setPinkMode] = useGlobalState('PinkMode');
    const [blueMode, setBlueMode] = useGlobalState('BlueMode');
    const [redMode, setRedMode] = useGlobalState('RedMode');

    // اگر این تم روشن شودس

    if (darkMode == true) {
        return className
    }
    else if (darkMode2 == true) {
        return className2
    }
    else if (greenMode == true) {
        return className3
    }
    else if (pinkMode == true) {
        return className4
    }
    else if (blueMode == true) {
        return className5
    }
    else if (redMode == true) {
        return className6
    }
}