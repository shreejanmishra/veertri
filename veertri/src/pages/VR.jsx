import vrIcon2 from "../assets/vrIcon2.png";

const VR = () => {
  return (
    <div className="relative min-h-screen dark:bg-black bg-gray-50 dark:text-white text-gray-900 flex items-center justify-center transition-colors duration-300 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center group">
        <div className="relative">
          <img
            src={vrIcon2}
            alt="VR Experience"
            className="relative w-96 h-96 md:w-128 md:h-128 object-contain transition-all duration-500 transform group-hover:scale-110 group-hover filter drop-shadow-2xl"
          />
        </div>
        <p className="dark:text-white mt-8 text-3xl md:text-4xl font-bold text-gray-600 group-hover:text-[#FAD502] transition-colors duration-300 tracking-widest uppercase">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default VR;
