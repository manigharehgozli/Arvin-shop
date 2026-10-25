import { IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

function MobileNav() {
  return (
    <nav className="flex lg:hidden">
      <div>
        <IoIosMenu className="h-auto w-6 md:w-8 dark:text-stone-100" />
      </div>
      <div className="hidden">
        <Link
          to="/shop"
          className="px-5 transition-colors duration-200 hover:text-orange-400 focus:text-orange-600 dark:text-stone-100"
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
      </div>
    </nav>
  )
}

export default MobileNav
