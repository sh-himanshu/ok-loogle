import Image from "next/image";
import picture from "../../public/images/unsplash.jpeg";
import Link from "next/link";

const ResponsiveDesign = () => {
  return (
    <div className="bg-white flex flex-col rounded-lg shadow-md max-w-[22rem] md:max-w-2xl md:flex-row ">
      <div className="relative  w-full h-[12.5rem] md:h-auto">
        <Image
          priority
          className="rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
          src={picture}
          alt="Man looking at item at a store"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-8">
        <div className="text-indigo-500 font-medium uppercase">Case Study</div>
        <Link href="https://tailwindcss.com/docs/responsive-design#">
          <a className="text-xl hover:underline font-medium">
            Finding customers for your new business
          </a>
        </Link>
        <p className="text-lg text-gray-500 pt-2">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>
      </div>
    </div>
  );
};

export default ResponsiveDesign;
