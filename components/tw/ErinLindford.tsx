import Image from "next/image";
import profilePicture from "../../public/images/erin-lindford.jpg";

const ErinLindford = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg py-4  px-8 flex flex-col sm:flex-row  sm:space-x-5 space-y-2 sm:space-y-0 min-w-[23rem] items-center sm:items-start">
      <div className="h-24 w-24 relative">
        <Image
          priority
          src={profilePicture}
          alt="Erin Lindford"
          className="rounded-full"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="space-y-2 flex flex-col items-center sm:items-start">
        <div>
          <p className="font-semibold text-xl text-center sm:text-left">
            Erin Lindford
          </p>
          <p className="text-gray-500 font-medium text-center sm:text-left">
            Product Engineer
          </p>
        </div>
        <div>
          <button className="text-sm py-1 px-5 rounded-full border-purple-200 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white focus:ring-2 focus:ring-purple-600 border focus:ring-offset-2 outline-none">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErinLindford;
