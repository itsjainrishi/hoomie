import Link from 'next/link'

export default function Navbar() {

  return (
    <>
      <nav className={`w-full top-0 z-50 fixed`}>
        <div className="container mx-auto navbar-container px-4 lg:px-0 lg:pl-4">
          <div className="navbar flex py-4 lg:py-6 justify-between">
            <Link className="flex items-center" href="/">
              <p className="font-bold text-2xl xxl:text-3xl text-primary">
                CryptoLand
              </p>
            </Link>
            <ul className="hidden lg:flex gap-12 font-roboto text-secondary text-lg pl-20 xl:pl-40 items-center">
              <li>
                {/*<Link href="market">Market</Link>*/}
              </li>
              <li>
                <span className="cursor-pointer">News</span>
              </li>
            </ul>
            <ul className="hidden lg:flex font-roboto gap-8 text-lg items-center ml-auto mr-4">
              <li>
                <button className={`rounded-xl px-4 py-3`}>
                  {/*<Link href="register">Register</Link>*/}
                </button>
              </li>
            </ul>
            <span>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-discord"></i>
              {/* mobile */}
            </span>
          </div>
        </div>
      </nav>

      {/* mobile nav */}
      {/*<div className={`mobile-nav flex items-center justify-center fixed h-screen w-full lg:hidden transition ease-in-out delay-150 bg-[#f3f2f4] top-0 z-[60] ${mobile ? "left-0" : "-left-[100%]"}`}>
        <ul className="text-2xl font-bold">
          <li className="p-2" onClick={openMobile}>
            <Link to="home">Home</Link>
          </li>
          <li className="p-2" onClick={openMobile}>
            <Link to="market">Market</Link>
          </li>
          <li className="p-2" onClick={openMobile}>
            <span className="cursor-pointer">News</span>
          </li>
        </ul>
      </div>*/}
    </>
  )
}