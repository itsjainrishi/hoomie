'use client';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import PropertyCard from '@/components/PropertyCard/PropertyCard';
import { Icon } from '@/components/icons';


const slides = [
  {name: 'Preston Rd. Inglewood, Maine', price: '$99.00', url: 'house-1.jpg'},
  {name: 'Preston Rd. Inglewood, Maine', price: '$99.00', url: 'house-1.jpg'},
  {name: 'Preston Rd. Inglewood, Maine', price: '$99.00', url: 'house-1.jpg'},
  {name: 'Preston Rd. Inglewood, Maine', price: '$99.00', url: 'house-1.jpg'},
  {name: 'Preston Rd. Inglewood, Maine', price: '$99.00', url: 'house-1.jpg'},
];

const FeaturedCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCurrent = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  const handlePrevious = () => {
    emblaApi?.scrollPrev();
    updateCurrent();
  };

  const handleNext = () => {
    emblaApi?.scrollNext();
    updateCurrent();
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="flex gap-6 justify-end mt-8 mr-8">
          <button
            aria-label="go to previous slide"
            onClick={handlePrevious}
            className="flex items-center justify-center rounded-full bg-primary w-12 h-12"
          >
            <Icon fill="#ffffff" name="LeftArrow" />
          </button>
          <button
            aria-label="go to next slide"
            onClick={handleNext}
            className="flex items-center justify-center rounded-full bg-primary w-12 h-12"
          >
            <Icon fill="#ffffff" name="RightArrow" />
          </button>
        </div>
        <div className="overflow-hidden py-10" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_30%] mx-4 xl:mx-6">
                <PropertyCard name={slide.name} imageUrl={slide.url} price={slide.price} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCarousel;