import { CiSearch } from 'react-icons/ci'

function Search() {
  return (
    <form className="flex items-center gap-2">
      <button type="submit" aria-label="Search">
        <CiSearch className="h-auto w-4 cursor-pointer md:w-6 dark:text-stone-100" />
      </button>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        aria-label="Search products"
        className="min-w-0 bg-transparent outline-none w-20 focus:w-50 transition-[width] delay-100 dark:text-stone-100"
      />
    </form>
  )
}

export default Search
