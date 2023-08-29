const Loading = async({ params }: { params: { id: string } }) => {
  return (
    <div className="bg-[#fafcfb]">
      <div className="lg:pt-6">
        <nav className="hidden lg:block" aria-label="Breadcrumb">
          <ol role="list" className="container mx-auto flex items-center space-x-2 px-4">
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-lg font-medium text-gray-900 bg-loading animate-pulse w-20">
                  &nbsp;
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-lg w-20 bg-loading animate-pulse">
              <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                &nbsp;
              </a>
            </li>
          </ol>
        </nav>

        <div className="lg:container mx-auto lg:mt-6 grid grid-cols-2 lg:grid-cols-4 lg:gap-x-2 lg:h-96 lg:px-4">
          <div className="col-span-2">
            <div className="relative overflow-hidden rounded-lg bg-loading animate-pulse h-[300px]"></div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
            <div className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-loading animate-pulse"></div>
            <div className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-loading animate-pulse"></div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
            <div className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-loading animate-pulse"></div>
            <div className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-loading animate-pulse"></div>
          </div>
        </div>

        <div className="lg:container mx-auto pb-16 pt-10 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-6 lg:pb-24 lg:pt-16 px-4">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl bg-loading animate-pulse">&nbsp;</h1>
            <div className="flex gap-6 mt-2">
              <div className="border border-loading text-primary px-4 py-2 rounded-xl leading-[18px] bg-loading animate-pulse w-20"></div>
              <div className="border border-loading text-primary px-4 py-2 rounded-xl leading-[18px] bg-loading animate-pulse w-20"></div>
            </div>
            <h2 className="text-2xl font-semibold text-primary mt-4 bg-loading animate-pulse w-20">&nbsp;</h2>

            <div className="amneties mt-8">
              <div className="flex gap-6 overflow-auto hide-scroll-x">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray min-w-max w-32 bg-loading animate-pulse"></div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray min-w-max w-32 bg-loading animate-pulse"></div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray min-w-max w-32 bg-loading animate-pulse"></div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray min-w-max w-32 bg-loading animate-pulse"></div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray min-w-max w-32 bg-loading animate-pulse"></div>
              </div>
            </div>
            <div className="description mt-8">
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="mt-10"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
              <div className="p-4 bg-loading animate-pulse"></div>
            </div>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h3 className="text-xl font-semibold mb-4 bg-loading animate-pulse">&nbsp;</h3>
            <div className="property-owner p-6 bg-white border rounded-xl">
              <div className="flex gap-6">
                <div className="avatar">
                  <div
                    className={`relative w-40 h-40 flex items-center justify-center p-2 rounded-xl bg-loading animate-pulse`}
                  >
                  </div>
                </div>
                <div className="owner-details py-4 flex flex-col gap-4 justify-between">
                  <p className="text-xl bg-loading animate-pulse w-32">&nbsp;</p>
                  <button className="border border-loading text-primary p-2 rounded-xl bg-loading animate-pulse">
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:mt-8">
              <h3 className="text-xl font-semibold mb-4 bg-loading animate-pulse">&nbsp;</h3>
              <div className="h-72 bg-loading animate-pulse"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Loading;