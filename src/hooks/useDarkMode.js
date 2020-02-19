import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react'

export const useDarkMode = (boolean) => {
   const [darkMode, setDarkMode] = useLocalStorage('darkModeStatus', boolean)
    useEffect(() => {
        const bodyDom = document.querySelector('body')

        if (darkMode === true) {
      return bodyDom.classList.add('dark-mode')
    } else {
       return bodyDom.classList.remove('dark-mode')
    }

    }, [darkMode])
    return [darkMode, setDarkMode]
}
