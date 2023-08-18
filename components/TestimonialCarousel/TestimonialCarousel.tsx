'use client';
import { useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';


const slides = [
  {name: 'Peggy Carter', url: '/6.jpg', message: '"They were always easy to reach. From home repairs to changing lenders, they guided us through the process."'},
  {name: 'Parry Hotter', url: '/2.jpg', message: '"They have a lot of properties to choose from. They helped me through the process."'},
  {name: 'Blint Carton', url: '/3.jpg', message: '"I would recommend Hoomie to anyone looking for a hassle free experience."'},
  {name: 'Lara Sance', url: '/5.jpg', message: '"If you are looking for a website that offers quality, convenience and affordability, look no further than Hoomie."'},
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = (index) => {
    setSelectedIndex(index);
    emblaApi?.scrollTo(index)
  }

  return (
    <div className="testimonials text-center">
      <div className="relative">
        <div className="overflow-hidden pt-4 lg:pt-8 lg:pb-4" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] mx-4 xl:mx-6">
                <p>{slide.message}</p>
                <p className="mt-4 lg:mt-8 font-semibold">{slide.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="thumb relative">
        <div className="overflow-hidden py-4">
          <div className="flex justify-center">
            {slides.map((slide, index) => (
              <div key={index} className="mx-2 cursor-pointer">
                <div
                  className={`w-16 h-16 lg:w-[84px] lg:h-[84px] flex items-center justify-center p-2 rounded-full ${selectedIndex === index ? 'border-2 border-primary' : ''}`}
                  onClick={() => onThumbClick(index)}
                >
                  <Image
                    alt=""
                    className="rounded-full"
                    src={slide.url}
                    style={{objectFit: "contain"}}  
                    width={64}
                    height={64}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel;