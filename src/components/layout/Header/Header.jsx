import Actions from './Actions'
import Logo from './Logo'
import MobileNav from './MobileNav'
import Nav from './Nav'

function Header() {
  return (
    <div className=" bg-stone-100 px-2 dark:bg-gray-500">
      <div className="relative flex items-center justify-between rounded-b-2xl bg-stone-200  px-2 py-4 lg:px-12 dark:bg-gray-700">
        <Nav />
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>
        <Actions />
        <MobileNav />
      </div>
    </div>
  )
}

export default Header
