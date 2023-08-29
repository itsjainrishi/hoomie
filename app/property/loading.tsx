const bathrooms = ['Any', '1', '2', '3', '4', '5+'];
const bedrooms = ['Any', '1', '2', '3', '4', '5+'];

const Loading = () => {
  return (
    <div className="bg-[#fafcfb]">
      <div className="properties lg:container mx-auto pt-6 xl:pt-20 pb-10 px-4">
        <div className="flex lg:hidden justify-end mb-2">
          <div className="w-6 h-6 bg-loading animate-pulse"></div>
        </div>
        <div className="relative grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-4 lg:col-span-3 xl:col-span-4">
            <div
              className={`hidden lg:flex flex-col overflow-y-auto hide-scroll-x p-6 cshadow max-w-sm xxl:max-w-lg`}
            >
              <div className="flex items-center justify-between gap-6 w-full">
                <h2 className="text-base lg:text-lg xxl:text-2xl font-semibold leading-6 bg-loading animate-pulse w-20">
                  &nbsp;
                </h2>
              </div>
              <div className="relative mt-6 flex-1 px-4 sm:px-6 pb-24">
                <h4 className="font-semibold xxl:text-xl bg-loading animate-pulse">&nbsp;</h4>
                <div className="flex gap-4 mt-4">
                  <div className="w-1/2">
                    <div className="bg-loading animate-pulse mt-2 h-6"></div>
                    <div className="bg-loading animate-pulse mt-2 h-9"></div>
                  </div>
                  <div className="w-1/2">
                    <div className="bg-loading animate-pulse mt-2 h-6"></div>
                    <div className="bg-loading animate-pulse mt-2 h-9"></div>
                  </div>
                </div>
                <div className="border-b border-beta my-6"></div>
                <h4 className="font-semibold xxl:text-xl bg-loading animate-pulse w-20">&nbsp;</h4>
                <div className="flex gap-4 mt-4">
                  <div className="bg-loading animate-pulse mt-2 h-10 w-60"></div>
                </div>
                <div className="border-b border-beta my-6"></div>
                <h4 className="font-semibold xxl:text-xl bg-loading animate-pulse w-20">&nbsp;</h4>
                <div className="flex gap-4 mt-4">
                  <div className="bg-loading animate-pulse mt-2 h-10 w-60"></div>
                </div>
                <div className="border-b border-beta my-6"></div>
                <h4 className="font-semibold xxl:text-xl bg-loading animate-pulse w-32">&nbsp;</h4>
                <h5 className="mt-4 xxl:text-lg bg-loading animate-pulse w-20">&nbsp;</h5>
                <div className="flex gap-4 mt-4 overflow-x-scroll hide-scroll-x"> 
                  {bedrooms.map((room, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer min-w-[40px] lg:min-w-[48px] w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-loading bg-loading animate-pulse`}
                    >
                      <p className="text-sm lg:text-base grow text-center">&nbsp;</p>
                    </div>
                    
                  ))}
                </div>
                <h5 className="mt-8 xxl:text-lg bg-loading animate-pulse w-20">&nbsp;</h5>
                <div className="flex gap-4 mt-4 overflow-x-scroll hide-scroll-x"> 
                  {bathrooms.map((bathroom, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer min-w-[40px] lg:min-w-[48px] w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-loading bg-loading animate-pulse`}
                    >
                      <p className="text-sm lg:text-base grow text-center">&nbsp;</p>
                    </div>
                    
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-5 xl:col-span-8 min-h-[760px]">
            <div className="grid lg:col-span-4 xl:grid-cols-8 gap-10">
              <div className="col-span-4 xl:col-span-8">
                <div className="flex items-center justify-center h-96 mb-4 bg-theta rounded bg-loading animate-pulse"></div>
              </div>
              {[1,2,3,4,5,6,7,8,9,10].map((property, index) => (
                <div className="col-span-4 rounded-xl" key={property}>
                  <div className="rounded-xl transition-all duration-300 bg-loading animate-pulse">
                    <div>
                      <div className="rounded-xl relative aspect-w-1 aspect-h-1 h-60 bg-loading animate-pulse"></div>
                      <div className="p-4 xl:px-6 h-[140px]">
                        <div className="flex flex-col justify-between h-full">
                          <h3 className="text-gray-900 text-base xl:text-xl bg-loading animate-pulse">&nbsp;</h3>
                          <div className="mt-2">
                            <p className="font-semibold text-primary text-base xl:text-lg bg-loading animate-pulse w-20">
                              &nbsp;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading;