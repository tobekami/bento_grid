import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen py-11 px-4 md:px-28 flex justify-center items-center">
      {/* For screens larger than lg, show the grid. Otherwise, show the heading */}
      <div className="lg:hidden w-full h-full flex justify-center items-center">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800">
          Made a mistake not making mobile first with tailwind, may come back to this.
        </h1>
      </div>

      <div className="hidden lg:grid w-[70%] h-full grid-cols-4 grid-rows-10 gap-6">
        <div className="w-full h-full grid grid-cols-1 grid-rows-2 col-span-1 row-span-10 gap-6">
          <div className="bg-[#FAEEE2] pt-8 px-4 font-medium text-2xl col-span-1 row-span-1 rounded-md leading-[1.35rem]">
            <p>
              Create and schedule content{" "}
              <span className="italic text-[#694AB1]">quicker.</span>
            </p>
            <Image
              className="m-auto mt-4"
              src="/images/image1.webp"
              alt="image1"
              width={120}
              height={100}
            />
          </div>
          <div className="bg-[#FFCC69] col-span-1 row-span-1 rounded-md pt-4 px-4 font-medium text-2xl leading-[1.35rem]">
            <p>Write your content </p>
            <span> using AI.</span>
            <Image
              className="m-auto mt-4 scale-100"
              src="/images/image2.webp"
              alt="image2"
              width={150}
              height={100}
            />
          </div>
        </div>

        <div className="bg-[#7651DC] col-span-2 row-span-4 rounded-md text-4xl text-white pt-7 px-4 font-[500] leading-8 tracking-normal text-center">
          <p>
            Social Media <span className="text-[#FFCC69]">10X</span>{" "}
            <span className="italic">Faster</span> with AI
          </p>
          <Image
            className="m-auto mt-5"
            src="/images/image3.webp"
            alt="image3"
            width={100}
            height={100}
          />
          <p className="text-[0.65rem] tracking-tight leading-3 font-[300] mt-2">
            Over 4,000 5-star reviews
          </p>
        </div>
        <div className="bg-[#DCD1FC] col-span-1 row-span-7 rounded-md text-md font-[550] tracking-[-1px] leading-4 pt-8 px-5 overflow-hidden relative">
          <p>
            Schedule to <span className="block">social media.</span>
          </p>
          <Image
            className="m-auto my-4 scale-125 absolute left-[24%] top-[22%]"
            src="/images/image4.webp"
            alt="image4"
            width={200}
            height={150}
          />
          <p className="text-[0.65rem] tracking-tight leading-3 font-[550] absolute top-[78%]">
            <span className="block">Optimize post timings</span>
            <span className="block">to publish content at</span>
            <span className="block">the perfect time for</span>
            your audience.
          </p>
        </div>
        <div className="relative bg-[#FFFFFF] col-span-1 row-span-3 rounded-md text-md pt-3 px-4 font-[550] tracking-[-1px] leading-4 overflow-hidden">
          <Image
            className="m-auto absolute"
            src="/images/image5.webp"
            alt="image5"
            width={300}
            height={50}
          />
          <p className="mt-11">
            Manage <span className="block">multiple</span> accounts and
            platforms.
          </p>
        </div>
        <div className="bg-[#FFCC69] col-span-1 row-span-3 rounded-md text-md pt-3 px-4 font-[550] tracking-[-1px] overflow-hidden leading-4">
          <p className="mb-1">
            Maintain a consistent <span className="block">posting</span>{" "}
            schedule.
          </p>
          <Image
            className="m-auto"
            src="/images/image6.webp"
            alt="image6"
            width={200}
            height={100}
          />
        </div>
        <div className="bg-[#FFFFFF] col-span-1 row-span-3 rounded-md pt-3 px-4">
          <p className="text-4xl font-[550] mb-1">{">56%"}</p>
          <span className="text-[0.65rem] tracking-normal font-[550] flex gap-1 mb-4">
            <span>faster</span>
            <span>audience</span>
            <span>growth</span>
          </span>
          <Image
            className=""
            src="/images/image7.webp"
            alt="image7"
            width={100}
            height={100}
          />
        </div>
        <div className="bg-[#7651DC] col-span-2 row-span-3 rounded-md flex pt-1 px-4 gap-2 justify-center items-center">
          <Image
            className="m-auto scale-105"
            src="/images/image8.webp"
            alt="image8"
            width={125}
            height={100}
          />
          <p className="text-2xl leading-6 tracking-tight font-[450] text-white pt-3 px-2">
            Grow followers <span className="block">with non-stop</span> content.
          </p>
        </div>
      </div>
    </main>
  );
}
