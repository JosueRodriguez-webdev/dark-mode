import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react'

export const useDarkMode = () => {
   const [darkMode, setDarkMode] = useLocalStorage('darkModeStatus')
    useEffect(() => {
        const bodyDom = document.querySelector('body')

        if (darkMode) {
        bodyDom.classList.add('dark-mode')
    } else {
        bodyDom.classList.remove('dark-mode')
    }

    return bodyDom
    }, [darkMode])
}
