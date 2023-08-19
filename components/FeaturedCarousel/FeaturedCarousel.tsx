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

const FeaturedCarousel = ({ properties }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, breakpoints: { '(min-width: 320px)': { align: 'start' } } });

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
    <div className="space-y-4 lg:space-y-6">
      <div className="relative">
        <div className="flex gap-4 lg:gap-6 justify-end mt-4 md:mt-8 mr-4 md:mr-8">
          <button
            aria-label="go to previous slide"
            onClick={handlePrevious}
            className="flex items-center justify-center rounded-full bg-primary w-8 h-8 lg:w-12 lg:h-12"
          >
            <Icon fill="#ffffff" name="LeftArrow" />
          </button>
          <button
            aria-label="go to next slide"
            onClick={handleNext}
            className="flex items-center justify-center rounded-full bg-primary w-8 h-8 lg:w-12 lg:h-12"
          >
            <Icon fill="#ffffff" name="RightArrow" />
          </button>
        </div>
        <div className="overflow-hidden py-6 lg:py-10" ref={emblaRef}>
          <div className="flex">
            {properties.map((property, index) => (
              <div key={index} className="flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_30%] px-4 lg:px-6">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCarousel;