import { useEffect, useState } from 'react'
import { AiOutlineMoon } from 'react-icons/ai'
import { MdOutlineWbSunny } from 'react-icons/md'

function Theme() {
  const [toggleTheme, setToggleTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', toggleTheme)
    localStorage.setItem('theme', setToggleTheme ? 'dark' : 'light')
  }, [toggleTheme])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setToggleTheme(!toggleTheme)}
    >
      {toggleTheme ? (
        <MdOutlineWbSunny className="h-auto w-5 md:w-7 text-stone-100" />
      ) : (
        <AiOutlineMoon className="h-auto w-5 md:w-7" />
      )}
    </button>
  )
}

export default Theme
