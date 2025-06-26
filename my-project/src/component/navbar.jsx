import { FiHome } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="fixed border-black border-r-2 w-16 h-screen top-0 left-0 flex flex-col justify-between items-center py-6 text-2xl">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative">
          <div className="group">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321"
              alt="Logo"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <span className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
              Home
            </span>
          </div>
        </div>

        <ul className="flex flex-col items-center space-y-10 text-black mt-10">
          {/* Home */}
          <li className="relative">
            <div className="group">
              <div className="p-2 rounded-full hover:bg-black hover:text-white transition-all duration-200">
                <FiHome />
              </div>
              <span className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
                Home
              </span>
            </div>
          </li>

          {/* Explore */}
          <li className="relative">
            <div className="group">
              <div className="p-2 rounded-full hover:bg-black hover:text-white transition-all duration-200">
                <FaRegCompass />
              </div>
              <span className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
                Explore
              </span>
            </div>
          </li>

          {/* Create */}
          <li className="relative">
            <div className="group">
              <div className="p-2 rounded-full hover:bg-black hover:text-white transition-all duration-200">
                <MdOutlineAddBox />
              </div>
              <span className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
                Create
              </span>
            </div>
          </li>

          {/* Notifications */}
          <li className="relative">
            <div className="group">
              <div className="p-2 rounded-full hover:bg-black hover:text-white transition-all duration-200">
                <IoMdNotificationsOutline />
              </div>
              <span className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
                Notifications
              </span>
            </div>
          </li>

          {/* Messages */}
          <li className="relative">
            <div className="group">
              <div className="p-2 rounded-full hover:bg-black hover:text-white transition-all duration-200">
                <IoChatbubbleEllipsesOutline />
              </div>
              <span className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
                Messages
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* Settings */}
      <div className="relative mb-4">
        <div className="group">
          <div className="p-2 rounded-full hover:bg-black hover:text-white transition-all duration-200">
            <GoGear />
          </div>
          <span className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
            Settings
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
