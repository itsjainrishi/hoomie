'use client';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PropertyCard } from '@/components/Property';
import { Icon } from '@/components/icons';
import type { Property } from '@/components/Property';


type FeaturedCarouselProps = {
  properties: {
    __typename: 'FeaturedProperty';
    id: string;
    property: Property;
  }[];
}

const FeaturedCarousel = ({ properties }: FeaturedCarouselProps) => {
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
            <Icon className="w-4 h-4 fill-white" name="LeftArrow" />
          </button>
          <button
            aria-label="go to next slide"
            onClick={handleNext}
            className="flex items-center justify-center rounded-full bg-primary w-8 h-8 lg:w-12 lg:h-12"
          >
            <Icon className="w-4 h-4 fill-white" name="RightArrow" />
          </button>
        </div>
        <div className="overflow-hidden py-6 lg:py-10" ref={emblaRef}>
          <div className="flex">
            {properties.map((property, index) => (

              <div key={index} className="flex-[0_0_90%] md:flex-[0_0_40%] lg:flex-[0_0_30%] px-4 lg:px-6">
                <PropertyCard property={property?.property} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCarousel;