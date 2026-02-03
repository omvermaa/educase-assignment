import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="font-medium absolute top-[549px] left-[20px] w-[231px] h-[33px] text-[28px] text-[#1D2226]">
        Welcome to PopX
      </div>

      <div className="absolute top-[592px] left-[20px] w-[232px] h-[48px] text-[18px] text-[#1D2226] opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </div>

      <div className="btns  flex flex-col justify-between">
        <Link to="/signup" className="absolute top-[669px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] text-white font-medium text-[16px] rounded-[6px] flex items-center justify-center">
          Create Account
        </Link>
        {/* gap 36px */}
        <Link to="/login" className="absolute top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] text-[#1D2226] font-medium text-[16px] rounded-[6px] flex items-center justify-center">
          Already Registered? Login
        </Link>
      </div>
    </>
  );
};

export default Home;
