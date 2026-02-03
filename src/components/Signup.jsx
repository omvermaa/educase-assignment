import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="font-medium text-[28px] leading-[33px] text-[#1D2226] w-[188px] absolute top-[40px] left-[20px]">
        Create your PopX account
      </div>

      <div className="absolute top-[131px] left-[20px] w-[335px] flex flex-col gap-[24px]">
        <div className="relative">
          <label
            htmlFor="fullName"
            className="absolute -top-[9px] left-[10px] bg-[#F7F8F9] px-[5px] text-[#6C25FF] text-[13px] font-medium"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
          disabled
            type="text"
            id="fullName"
            defaultValue="Marry Doe"
            className="w-full h-[40px] border border-[#D9D9D9] rounded-[6px] px-3 text-[#1D2226] text-[14px] bg-transparent outline-none"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="phone"
            className="absolute -top-[9px] left-[10px] bg-[#F7F8F9] px-[5px] text-[#6C25FF] text-[13px] font-medium"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
          disabled
            type="text"
            id="phone"
            defaultValue="Marry Doe"
            className="w-full h-[40px] border border-[#D9D9D9] rounded-[6px] px-3 text-[#1D2226] text-[14px] bg-transparent outline-none"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="absolute -top-[9px] left-[10px] bg-[#F7F8F9] px-[5px] text-[#6C25FF] text-[13px] font-medium"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
          disabled
            type="email"
            id="email"
            defaultValue="Marry Doe"
            className="w-full h-[40px] border border-[#D9D9D9] rounded-[6px] px-3 text-[#1D2226] text-[14px] bg-transparent outline-none"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="absolute -top-[9px] left-[10px] bg-[#F7F8F9] px-[5px] text-[#6C25FF] text-[13px] font-medium"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
          disabled
            type="text"
            id="password"
            defaultValue="Marry Doe"
            className="w-full h-[40px] border border-[#D9D9D9] rounded-[6px] px-3 text-[#1D2226] text-[14px] bg-transparent outline-none"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="company"
            className="absolute -top-[9px] left-[10px] bg-[#F7F8F9] px-[5px] text-[#6C25FF] text-[13px] font-medium"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
          disabled
            type="text"
            id="company"
            defaultValue="Marry Doe"
            className="w-full h-[40px] border border-[#D9D9D9] rounded-[6px] px-3 text-[#1D2226] text-[14px] bg-transparent outline-none"
          />
        </div>

        <div className="flex flex-col gap-[10px]">
            <label className="text-[13px] text-[#1D2226]">Are you an Agency?<span className="text-red-500">*</span></label>
            <div className="flex gap-[20px]">
                <div className="flex items-center gap-[10px]">
                    <input type="radio" name="agency" id="yes" className="accent-[#6C25FF] w-[22px] h-[22px]" defaultChecked />
                    <label htmlFor="yes" className="text-[14px] text-[#1D2226]">Yes</label>
                </div>
                <div className="flex items-center gap-[10px]">
                    <input type="radio" name="agency" id="no" className="accent-[#6C25FF] w-[22px] h-[22px]" />
                    <label htmlFor="no" className="text-[14px] text-[#1D2226]">No</label>
                </div>
            </div>
        </div>
      </div>

      <Link to="/profile" className="absolute bottom-[40px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] text-white font-medium text-[16px] rounded-[6px] flex items-center justify-center">
        Create Account
      </Link>
    </>
  );
};

export default Signup;
