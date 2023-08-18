import Image from 'next/image';
import { Icon } from '@/components/icons';

const Footer = () => (
  <section className="bg-[#fafcfb]">
    <div className="container mx-auto border-t">
      <div className="grid grid-cols-2 md:grid-cols-8 xl:grid-cols-12 gap-4 lg:gap-6 px-4 mt-8">
        <div className="col-span-2 xl:col-span-3 lg:pr-8">
          <h5 className="font-bold text-xl xl:text-3xl mt-4">
            Hoomie
          </h5>

          <p className="font-roboto text-sm lg:text-base leading-relaxed text-secondary mt-2 lg:mt-4 xxl:mt-10">
            Find Uk real estate.
          </p>
        </div>

        <div className="col-span-4 md:col-span-3">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div>
              <h6 className="hidden lg:block font-semibold mb-2">Company</h6>
              <ul className="footer-content__2 flex gap-4 lg:block">
                <li className="py-1">
                  <a href="#home">Careers</a>
                </li>
                <li className="py-1">
                  <a href="#home">Blog</a>
                </li>
                <li className="py-1">
                  <a href="#home">How we work</a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 hidden lg:block">Contact</h6>
              <ul className="footer-content__2 flex gap-4 lg:block">
                <li className="py-1">
                  <a href="#home">Help/FAQ</a>
                </li>
                <li className="py-1">
                  <a href="#home">Press</a>
                </li>
                <li className="py-1">
                  <a href="#home">Affiliates</a>
                </li>
              </ul>
              </div>
          </div>
        </div>
        
        <div className="col-span-4 md:col-start-7 xl:col-start-10 col-span-2 xl:col-span-3 lg:justify-self-end mt-4 lg:mt-0">
          <div className="socials flex gap-6">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Icon name="Instagram" size="24" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Icon name="Facebook" size="24" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <Icon name="Youtube" size="24" />
            </a>
          </div>
          <div className="app-links mt-4 lg:mt-6">
            <h6 className="">Discover our app</h6>
            <div className="flex md:flex-col lg:flex-row gap-6 mt-2">
              <a href="https://play.google.com/" target="_blank" rel="noreferrer">
                <Image
                  alt="Google Play"
                  className="cursor-pointer"
                  src="/google-play.svg"
                  width={135}
                  height={40}
                />
              </a>
              <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noreferrer">
                <Image
                  alt="App Store"
                  className="cursor-pointer"
                  src="/apple-store.svg"
                  width={120}
                  height={40}
                  sizes="(max-width: 1199px) 135px, 120px"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
      <hr className="mt-6 mb-6 lg:mt-8 lg:mb-8 border-secondary" />
      <p className="text-sm text-center text-secondary font-roboto mb-6">
        © Copyright 2023, All Rights Reserved by Hoomie
      </p>
    </div>
  </section>
)

export default Footer;