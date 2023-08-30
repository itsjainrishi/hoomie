import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { PropertyImageCarousel } from '@/components/Property';

type ImageProps = {
  images: {
    url: string;
  }[];
  propertyName: string;
}

const Images = async({ images, propertyName } :ImageProps) => {
  const placeholders = await Promise.all(
    images.map(async (image) => {
      const buffer = await fetch(image.url).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );
      const { base64 } = await getPlaiceholder(buffer);
      return base64;
    })
  );

  return (
    <>
      <div className="col-span-2">
        <div className="relative hidden overflow-hidden rounded-lg lg:block h-full">
          <Image
            alt={propertyName}
            src={images[0].url}
            fill={true}
            sizes="(max-width: 768px) 100vw"
            blurDataURL={placeholders[0]}
            placeholder="blur"
          />
        </div>
        <div className="lg:hidden">
          <PropertyImageCarousel images={images} />
        </div>
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
        <div className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <Image
            alt={propertyName}
            src={images[1].url}
            className="h-full w-full object-cover object-center"
            fill={true}
            sizes="(max-width: 768px) 100vw"
            blurDataURL={placeholders[1]}
            placeholder="blur"
          />
        </div>
        <div className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <Image
            alt={propertyName}
            src={images[2].url}
            className="h-full w-full object-cover object-center"
            fill={true}
            sizes="(max-width: 768px) 100vw"
            blurDataURL={placeholders[2]}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
        <div className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <Image
            alt={propertyName}
            src={images[3].url}
            className="h-full w-full object-cover object-center"
            fill={true}
            sizes="(max-width: 768px) 100vw"
            blurDataURL={placeholders[3]}
            placeholder="blur"
          />
        </div>
        <div className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <Image 
            alt={propertyName}
            src={images[4].url}
            className="h-full w-full object-cover object-center"
            fill={true}
            sizes="(max-width: 768px) 100vw"
            blurDataURL={placeholders[4]}
            placeholder="blur"
          />
        </div>
      </div>
    </>
  )
};

export default Images;