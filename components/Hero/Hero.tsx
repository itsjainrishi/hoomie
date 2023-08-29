import Image from 'next/image'
import HeroSearch from './Search'

const Hero = () => {
  return (
    <section className="hero-section h-screen relative w-full flex justify-center pt-10 xl:pt-40">
      <Image
        className="absolute inset-0"
        src="/house.jpg"
        alt="Hero"
        fill={true}
        style={{objectFit: "cover"}}
        priority={true}
      />
      <div className="hero-content relative text-center px-4 md:px-0">
        <div className="hero-title">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl leading-normal">
            We help to find a perfect <br /> Home for you
          </h1>
        </div>
        <div className="hero-search mt-10">
          <HeroSearch />
        </div>
      </div>
    </section>
  )
}

export default Hero;