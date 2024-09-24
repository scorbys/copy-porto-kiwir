import Image from 'next/image';

const Business = (props: any) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
           <h1> BUSINESS </h1>
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 bg-teal-700 text-white p-6 relative">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Business 1 background"
            width={400}
            height={300}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="relative z-10">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="House Industries Logo"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">BUSINESS 1</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
            <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-teal-700 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black text-white p-6 relative">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Business 2 background"
              width={300}
              height={200}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="House Industries Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">BUSINESS 2</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur</p>
              <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="bg-red-300 text-white p-6 relative">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Business 3 background"
              width={300}
              height={200}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="House Industries Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">BUSINESS 3</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur</p>
              <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-navy-700 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="md:col-span-2 bg-white p-6 relative bg-blue-200">
            <Image
              src="/placeholder.svg?height=200&width=600"
              alt="Business 4 background"
              width={600}
              height={200}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="House Industries Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">BUSINESS 4</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="border border-gray-800 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 bg-green-600 text-white p-6 relative">
          <Image
          {...props}
            src="/placeholder.svg?height=200&width=1200"
            alt="Business 5 background"
            width={1200}
            height={200}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="relative z-10 flex items-center">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="House Industries Logo"
              width={100}
              height={100}
              className="mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">BUSINESS 5</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-green-600 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Business;
