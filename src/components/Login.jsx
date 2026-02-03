import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="font-medium text-[28px] leading-[33px] text-[#1D2226] w-[188px] absolute top-[40px] left-[20px]">
        Signin to your PopX account
      </div>
      <div className="text-[18px] leading-[24px] text-[#1D2226] opacity-60 w-[232px] absolute top-[123px] left-[20px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </div>

      <div className="absolute top-[219px] left-[20px] w-[335px] flex flex-col gap-[24px]">
        <div className="relative">
          <label
            htmlFor="email"
            className="absolute -top-[9px] left-[10px] bg-[#F7F8F9] px-[5px] text-[#6C25FF] text-[13px] font-medium"
          >
            Email Address
          </label>
          <input
          disabled
            type="email"
            id="email"
            placeholder="Enter email address"
            className="w-full h-[40px] border border-[#D9D9D9] rounded-[6px] px-3 text-[#1D2226] text-[14px] bg-transparent outline-none"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="absolute -top-[9px] left-[10px] bg-[#F7F8F9] px-[5px] text-[#6C25FF] text-[13px] font-medium"
          >
            Password
          </label>
          <input
          disabled
            type="password"
            id="password"
            placeholder="Enter password"
            className="w-full h-[40px] border border-[#D9D9D9] rounded-[6px] px-3 text-[#1D2226] text-[14px] bg-transparent outline-none"
          />
        </div>

        <Link to="/profile" className="w-full h-[46px] bg-[#CBCBCB] text-white font-medium text-[16px] rounded-[6px] mt-[6px] flex items-center justify-center">
          Login
        </Link>
      </div>
    </>
  );
};

export default Login;
