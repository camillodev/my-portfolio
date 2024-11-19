// app/about/page.tsx

export default function About() {
  return (
    <div className='container mx-auto px-10 my-20'>
      <h1 className='text-primary text-4xl text-center'>Sobre</h1>
      <p className=' text-center mb-20'>Esta é a página sobre.</p>

      <div className='container flex flex-col gap-20'>
        <div className='max-w-[1260px] mx-auto flex-col-reverse flex gap-x-[86px] gap-y-8 lg:flex-row'>
          <div className='w-full lg:w-5/12 lg:justify-start lg:items-center flex'>
            <div className='flex flex-col gap-y-8'>
              <div className='text-content cms-content'>
                <h3>THE KMF MINDSET.</h3>
                <p>
                  Every X-Teamer on your team embodies our KMF (Keep Moving
                  Forward) values, emphasizing ownership, empathy, upskilling,
                  and always moving forward in all aspects of their life.
                </p>
              </div>

              <div className='flex lg:flex-nowrap flex-wrap gap-x-4 gap-y-4'>
                <a className='btn btn--primary' href='/hire-x-team'>
                  Hire x-team
                </a>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-7/12 lg:justify-start lg:items-center flex justify-center bg-gray-500 rounded-lg'>
            <div className='flex flex-col gap-y-8'>
              <div className='w-full h-full bg-gray-500 rounded-lg'></div>
            </div>
          </div>
        </div>

        <div className='max-w-[1260px] mx-auto flex-col-reverse flex gap-x-[86px] gap-y-8 lg:flex-row'>
          <div className='w-full lg:w-7/12 lg:justify-start lg:items-center flex justify-center bg-gray-500 rounded-lg'>
            <div className='flex flex-col gap-y-8'>
              <div className='w-full h-full bg-gray-500 rounded-lg'></div>
            </div>
          </div>
          <div className='w-full lg:w-5/12 lg:justify-start lg:items-center flex'>
            <div className='flex flex-col gap-y-8'>
              <div className='text-content cms-content'>
                <h3>THE KMF MINDSET.</h3>
                <p>
                  Every X-Teamer on your team embodies our KMF (Keep Moving
                  Forward) values, emphasizing ownership, empathy, upskilling,
                  and always moving forward in all aspects of their life.
                </p>
              </div>

              <div className='flex lg:flex-nowrap flex-wrap gap-x-4 gap-y-4'>
                <a className='btn btn--primary' href='/hire-x-team'>
                  Hire x-team
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-[1260px] mx-auto flex-col-reverse flex gap-x-[86px] gap-y-8 lg:flex-row'>
          <div className='w-full lg:w-5/12 lg:justify-start lg:items-center flex'>
            <div className='flex flex-col gap-y-8'>
              <div className='text-content cms-content'>
                <h3>THE KMF MINDSET.</h3>
                <p>
                  Every X-Teamer on your team embodies our KMF (Keep Moving
                  Forward) values, emphasizing ownership, empathy, upskilling,
                  and always moving forward in all aspects of their life.
                </p>
              </div>

              <div className='flex lg:flex-nowrap flex-wrap gap-x-4 gap-y-4'>
                <a className='btn btn--primary' href='/hire-x-team'>
                  Hire x-team
                </a>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-7/12 lg:justify-start lg:items-center flex justify-center bg-gray-500 rounded-lg'>
            <div className='flex flex-col gap-y-8'>
              <div className='w-full h-full bg-gray-500 rounded-lg'></div>
            </div>
          </div>
        </div>

        <div className='max-w-[1260px] mx-auto flex-col-reverse flex gap-x-[86px] gap-y-8 lg:flex-row'>
          <div className='w-full lg:w-7/12 lg:justify-start lg:items-center flex justify-center bg-gray-500 rounded-lg'>
            <div className='flex flex-col gap-y-8'>
              <div className='w-full h-full bg-gray-500 rounded-lg'></div>
            </div>
          </div>
          <div className='w-full lg:w-5/12 lg:justify-start lg:items-center flex'>
            <div className='flex flex-col gap-y-8'>
              <div className='text-content cms-content'>
                <h3>THE KMF MINDSET.</h3>
                <p>
                  Every X-Teamer on your team embodies our KMF (Keep Moving
                  Forward) values, emphasizing ownership, empathy, upskilling,
                  and always moving forward in all aspects of their life.
                </p>
              </div>

              <div className='flex lg:flex-nowrap flex-wrap gap-x-4 gap-y-4'>
                <a className='btn btn--primary' href='/hire-x-team'>
                  Hire x-team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3  gap-10 my-10'>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
      </div>
    </div>
  );
}
