import { gql } from '@apollo/client';
import { getClient } from '@/lib/client';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { StatCard } from '@/components/StatCard';
import { Card, CardBody, CardHeader } from '@/components/Card';
import { FeaturedCarousel } from '@/components/FeaturedCarousel';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';

const FeaturedProperties = gql`{
  featuredProperties {
    id
    property {
      id
      propertyName
      rentPrice
      images(first: 1){
        url
      }
    }
  }
}`


const Home = async() => {
  const data = await getClient().query({
    query: FeaturedProperties,
    variables: undefined
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-between pb-10 xl:pb-20 bg-[#fafcfb]">
      <Hero />

      <section className="business-overview lg:container mt-10 xl:mt-20 px-4">
        <div className="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-4 xl:col-span-5">
            <div className="">
              <h2 className="heading text-2xl md:text-3xl font-bold">
                We Have Been Successfully <br /> Providing Our Service <br /> For 9 Years
              </h2>
              <p className="mt-4 xl:mt-8 lg:text-xl">
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

          <div className="col-span-4 xl:col-span-7 self-center mt-10 md:mt-0 hidden lg:block">
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

      <section className="services-overview lg:container mt-10 xl:mt-20 px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            What Services Hoomie Provide <br /> That Help People
          </h2>
          <p className="mt-4 xl:mt-8 lg:text-xl">
            Hoomie is a real estate solution that gives you the local scoop about homes.
          </p>
        </div>
        <div className="xl:px-36 mt-4 xl:mt-8">
          <div className="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-4 xl:col-span-6">
              <Card className="card__shadow p-8 text-center bg-white rounded-lg">
                <CardHeader>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Buy Properties
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="md:text-lg mt-4 lg:mt-6">
                    Find 20000+ latest real estate properties for sale in 2023. Search by price, location.
                  </p>
                </CardBody>
              </Card>
            </div>

            <div className="col-span-4 xl:col-span-6">
              <Card className="card__shadow p-8 text-center bg-white rounded-lg">
                <CardHeader>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Rent Properties
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="md:text-lg mt-4 lg:mt-6">
                    Find 50000+ latest real estate properties for rent in 2023. Search by price, location.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-properties lg:container mt-10 xl:mt-20 px-4 w-screen">
        <div className="">
          <h2 className="text-2xl md:text-3xl font-bold">
            Featured Properties
          </h2>
          <FeaturedCarousel properties={data.data.featuredProperties} />
        </div>
      </section>

      <section className="process lg:container mt-10 xxl:mt-20 px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            What Our Customer Say About us
          </h2>
        </div>
        <TestimonialCarousel />
      </section>

      <section className="subscribe lg:container mt-10 xxl:mt-20 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center py-3">
          <h2 className="text-xl xxl:text-3xl font-bold lg:mr-20 mb-4 md:mb-0 texr-center lg:text-left">
            Stay Up To Date With Our Special Deals
          </h2>
          <div className="px-4 py-2 xxl:py-6 xxl:px-6 rounded-3xl bg-white w-full xl:w-auto">
            <div className="flex items-center justify-between w-full xl:w-96">
              <input className="xl:w-64 focus-none outline-none border-none" placeholder="Enter your email address" />
              <button className="flex items-center font-roboto px-4 py-2 xxl:py-4 rounded-3xl bg-primary text-white xxl:text-xl">
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home;