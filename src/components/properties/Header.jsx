import logo from '../../assets/logos/gatherly-logo-with-text.png';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#F1F4FC] px-6 py-4 flex justify-between mb-40 items-center">
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src={logo} className='w-36' />
        </Link>
      </div>

      <button className="btn btn-ghost bg-white text-[#3A4155] rounded-lg">Join as a partner</button>

    </header>
  )
}

export default Header
