import React from "react";

const Profile = () => {
  return (
    <div className="w-full h-full bg-[#F7F8F9]">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full h-[68px] bg-white shadow-[0px_3px_6px_##00000007] flex items-center px-[20px]">
        <div className="text-[18px] font-medium text-[#1D2226]">
          Account Settings
        </div>
      </div>

      {/* Profile Info */}
      <div className="absolute top-[98px] left-[20px] w-[76px] h-[76px]">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-0 w-[21px] h-[21px] bg-[#6C25FF] rounded-full flex items-center justify-center border-[2px] border-[#F7F8F9]">
          <img src="/cam.svg" alt="Camera" />
        </div>
      </div>

      <div className="absolute top-[98px] left-[116px] text-[15px] font-medium text-[#1D2226]">
        Marry Doe
      </div>
      <div className="absolute top-[122px] left-[116px] text-[14px] text-[#1D2226]">
        Marry@Gmail.Com
      </div>

      {/* Bio Section */}
      <div className="absolute top-[204px] left-[20px] w-[337px] h-[63px] text-[14px] text-[#1D2226] leading-[20px]">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>

      {/* Dashed Borders */}
      <div className="absolute top-[287px] left-0 w-full border-b border-dashed border-[#CBCBCB]"></div>
    </div>
  );
};

export default Profile;
