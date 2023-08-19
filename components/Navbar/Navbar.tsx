'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/icons';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const openMobile = () => {
    setMobile(!mobile);
  };
  return (
    <>
      <nav className="w-full top-0 z-50 bg-[#fafcfb]">
        <div className="container mx-auto navbar-container px-4 lg:px-0">
          <div className="navbar flex py-4 lg:py-6 justify-between items-center">
            <Link className="flex items-center" href="/">
              <p className="font-bold text-2xl xxl:text-3xl text-primary">
                Hoomie
              </p>
            </Link>
            <ul className="hidden lg:flex gap-12 font-roboto text-secondary text-lg pl-20 xl:pl-40 items-center">
              <li>
                {/*<Link href="market">Market</Link>*/}
              </li>
              <li>
                <span className="cursor-pointer">Rent</span>
              </li>
              <li>
                <span className="cursor-pointer">Buy</span>
              </li>
              <li>
                <span className="cursor-pointer">About</span>
              </li>
            </ul>
            <ul className="hidden lg:flex font-roboto gap-8 text-lg items-center ml-auto mr-4">
              <li>
                <button className="px-4 py-3">
                  <a href="login">Login</a>
                </button>
              </li>
              <li>
                <button className="rounded-xl px-4 py-3 bg-primary">
                  <a className="text-white" href="register">Register</a>
                </button>
              </li>
            </ul>
            <div className="lg:hidden">
              <Icon name="Menu" onClick={openMobile} />
            </div>
          </div>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav flex items-center justify-center fixed h-screen w-full lg:hidden transition ease-in-out delay-150 bg-[#fafcfb] top-0 z-[60] ${mobile ? "left-0" : "-left-[100%]"}`}>
        <Icon
          name="Cancel"
          size="24"
          style={{position: "absolute", top: "1.5rem", right: "1rem"}}
          onClick={openMobile}
        />
        <ul className="text-2xl font-bold">
          <li className="p-2" onClick={openMobile}>
            <Link href="/">Home</Link>
          </li>
          <li className="p-2" onClick={openMobile}>
            <Link href="/">Rent</Link>
          </li>
          <li className="p-2" onClick={openMobile}>
            <span className="cursor-pointer">Buy</span>
          </li>
          <li className="p-2" onClick={openMobile}>
            <span className="cursor-pointer">About</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;