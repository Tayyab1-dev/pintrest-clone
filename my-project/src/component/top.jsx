import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Searchbar = ({ search, setSearch }) => {
  return (
    <div className="my-3 w-full flex items-center justify-between">
      <div className="relative flex-1">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-200 text-black rounded-full focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-2 ml-4 cursor-pointer">
        <div className="w-8 h-8 bg-blue-400 text-white flex items-center justify-center rounded-full text-sm">
          T
        </div>
        <IoIosArrowDown className="text-gray-600" />
      </div>
    </div>
  );
};

export default Searchbar;


