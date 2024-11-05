import Link from 'next/link';

const Header = () => {
  return (
    <header className="navbar lg:px-40 fixed top-0 left-0 z-50 bg-primary text-primary-content">
      <div className="flex-none">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Project</a>
            </li>
            <li>
              <a>Study</a>
            </li>
            <li>
              <a href="https://github.com/kimsyul?tab=repositories" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://velog.io/@kimsyul/posts" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href={'/'}>
          Yulfolio
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a href="https://github.com/kimsyul?tab=repositories" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://velog.io/@kimsyul/posts" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
