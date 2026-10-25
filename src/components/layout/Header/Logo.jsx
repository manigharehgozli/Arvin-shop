import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/">
      <h3 className='text-2xl font-bold text-gray-600 dark:text-stone-100'>
        AR
        <span className='text-orange-600'>V</span>
        IN
      </h3>
    </Link>
  )
}

export default Logo
