import Image from 'next/image';
import Hero from '@/components/Hero/Hero';
import StatCard from '@/components/StatCard/StatCard';
import { Card, CardBody, CardHeader } from '@/components/Card';
import FeaturedCarousel from '@/components/FeaturedCarousel/FeaturedCarousel';
import TestimonialCarousel from '@/components/TestimonialCarousel/TestimonialCarousel';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pb-20">
      <Hero />

      <section className="business-overview container xl:mt-20">
        <div className="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-4 xl:col-span-5">
            <div className="">
              <h2 className="heading text-3xl font-bold">
                We Have Been Successfully <br /> Providing Our Service <br /> For 9 Years
              </h2>
              <p className="mt-8 text-xl">
                Find properties in UK. Search Faster, Better & Smarter at Hoomie.
              </p>
              <div className="flex gap-6 mt-8">
                <StatCard className="w-36 p-8 text-center bg-white rounded-lg">
                  <p>10M+</p>
                  <p>Customers</p>
                </StatCard>
                <StatCard className="w-36 p-8 text-center bg-white rounded-lg">
                  <p>50+</p>
                  <p>Partners</p>
                </StatCard>
              </div>
              <div className="flex gap-6 mt-6">
                <StatCard className="w-36 p-8 text-center bg-white rounded-lg">
                  <p>15M+</p>
                  <p>Rent House</p>
                </StatCard>
                <StatCard className="w-36 p-8 text-center bg-white rounded-lg">
                  <p>150M+</p>
                  <p>Reaches</p>
                </StatCard>
              </div>
            </div>
          </div>

          <div className="col-span-4 xl:col-span-7 self-center">
            <div className="px-20">
              <div className="relative">
                <Image
                  alt="House"
                  className="mx-auto relative z-10"
                  src="/holding-house.png"
                  height={200}
                  width={240}
                />
                <div className="absolute bg-primary rounded-2xl b-s h-[280px] w-[300px] left-[50%] -translate-x-2/4 bottom-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-overview container xl:mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            What Services Hoomie Provide <br /> That Help People
          </h2>
          <p className="mt-8 text-xl">
            Hoomie is a real estate solution that gives you the local scoop about homes.
          </p>
        </div>
        <div className="px-36 mt-8">
          <div className="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-4 xl:col-span-6">
              <Card className="card__shadow p-8 text-center bg-white rounded-lg">
                <CardHeader>
                  <h3 className="text-2xl font-semibold">
                    Buy Properties
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="text-lg mt-6">
                    Find 20000+ latest real estate properties for sale in 2023. Search by price, location.
                  </p>
                </CardBody>
              </Card>
            </div>

            <div className="col-span-4 xl:col-span-6">
              <Card className="card__shadow p-8 text-center bg-white rounded-lg">
                <CardHeader>
                  <h3 className="text-2xl font-semibold">
                    Rent Properties
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="text-lg mt-6">
                    Find 50000+ latest real estate properties for rent in 2023. Search by price, location.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-properties container mt-8 xxl:mt-20">
        <div className="">
          <h2 className="text-3xl font-bold">
            Featured Properties
          </h2>
          <FeaturedCarousel />
        </div>
      </section>

      <section className="process container mt-8 xxl:mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            What Our Customer Say About us
          </h2>
        </div>
        <TestimonialCarousel />
      </section>
    </div>
  )
}
export default Home;