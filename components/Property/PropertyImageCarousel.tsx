'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel, {
  EmblaCarouselType,
} from 'embla-carousel-react';

type CarouselImageProps = {
  images: {
    url: string;
  }[] | undefined;
}

const PropertyImageCarousel = ({ images }: CarouselImageProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);


  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi);
    emblaApi.on('reInit', onInit)
  }, [emblaApi, onInit])

  return (
    <div id="default-carousel" className="relative w-full group" data-carousel="slide">
      <div className="relative overflow-hidden cursor-pointer" ref={emblaRef}>
        <div className="flex h-full">
          {images?.map((slide, index) => (
            <div
              className="relative flex-[0_0_100%] duration-100 ease-in-out h-[300px]"
              key={index}
            >
              <Image
                src={slide?.url}
                fill
                alt=""
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropertyImageCarousel;