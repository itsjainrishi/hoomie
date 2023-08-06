import Image from 'next/image';
import { Icon } from '@/components/icons';

const Footer = () => (
  <section className="py-6 xxl:py-10 bg-[#fafcfb]">
    <div className="container mx-auto sm:pt-16 lg:pt-24 border-t">
      <div className="grid grid-cols-2 md:grid-cols-8 xl:grid-cols-12 gap-y-16 gap-x-12 px-4">
        <div className="col-span-2 xl:col-span-3 lg:pr-8">
          <h5 className="font-bold text-xl xl:text-3xl">
            Hoomie
          </h5>

          <p className="font-roboto text-base leading-relaxed text-secondary mt-4 xxl:mt-10">
            Find Uk real estate.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="flex items-center justify-between">
            <div>
              <h6 className="font-semibold mb-2">Company</h6>
              <ul className="footer-content__2">
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
              <h6 className="font-semibold mb-2">Contact</h6>
              <ul className="footer-content__2">
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
        
        <div className="md:col-start-7 xl:col-start-10 col-span-2 xl:col-span-3 justify-self-end">
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
          <div className="app-links mt-6">
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
      <hr className="mt-16 mb-10 border-secondary" />
      <p className="text-sm text-center text-secondary font-roboto">
        © Copyright 2023, All Rights Reserved by Hoomie
      </p>
    </div>
  </section>
)

export default Footer;