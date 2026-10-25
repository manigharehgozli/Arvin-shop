import { CiShoppingBasket } from 'react-icons/ci'
import { IoPersonOutline } from 'react-icons/io5'
import Search from './Search'
import { Link } from 'react-router-dom'
import Theme from './Theme'

function Actions() {
  return (
    <div className="flex items-center gap-4">
      <select
        aria-label="Select language"
        defaultValue="fa"
        className="cursor-pointer rounded-lg bg-transparent outline-none dark:text-stone-100"
      >
        <option value="fa">🇮🇷 FA</option>
        <option value="en">🇺🇸 EN</option>
      </select>

      <Theme />

      <Search />

      <Link to="/cart" aria-label="Shopping cart">
        <CiShoppingBasket className="h-auto w-6 md:w-8 dark:text-stone-100 hover:text-orange-400 focus:text-orange-600 " />
      </Link>

      <Link to="/profile" aria-label="Account">
        <IoPersonOutline className="h-auto w-5 md:w-7 dark:text-stone-100 hover:text-orange-400 focus:text-orange-600 " />
      </Link>
    </div>
  )
}

export default Actions
