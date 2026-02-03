import { Outlet } from "react-router-dom";

function App() {


  return (
    // 1. DESKTOP WRAPPER: Centers the app on the screen and applies Rubik font
    <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center font-rubik">
      {/* 2. MOBILE CONTAINER: Locked to exactly 375x812 */}
      <div
        className="relative bg-[#F7F8F9] shadow-2xl overflow-hidden"
        style={{ width: "375px", height: "812px" }} // Inline styles ensure exact pixel precision
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
