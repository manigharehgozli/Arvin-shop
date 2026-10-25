import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="hidden lg:flex">
      <Link
        to="/shop"
        className="pr-5 transition-colors duration-200 hover:text-orange-400 focus:text-orange-600 dark:text-stone-100"
      >
        Shop
      </Link>
      <Link
        to="/shop?new"
        className="px-5 transition-colors duration-200 hover:text-orange-400 focus:text-orange-600 dark:text-stone-100"
      >
        New In
      </Link>
      <Link
        to="/contact"
        className="px-5 transition-colors duration-200 hover:text-orange-400 focus:text-orange-600 dark:text-stone-100"
      >
        Contact
      </Link>
      <Link
        to="/about"
        className="px-5 transition-colors duration-200 hover:text-orange-400 focus:text-orange-600 dark:text-stone-100"
      >
        About
      </Link>
    </nav>
  )
}

export default Nav
