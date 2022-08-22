import Image from "next/image";
import { useRouter } from "next/router"
import { useRef } from "react";
import Avatar from "./Avatar";

function Header () {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="/logo-text.svg"
          alt="logo with text"
          height={44}
          width={196}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-xl shadow-md max-w-3xl items-center hover:border-blue-600 focus-within:shadow-md focus-within:border-blue-600 transition duration-300">
          <input 
            ref={searchInputRef} 
            className="flex-grow w-full focus:outline-none" 
            type="text" 
            placeholder="Search anything..."
          />
          {/* XIcon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-150 hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor" onClick={() => (searchInputRef.current.value = "")}>
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          {/* SearchIcon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 hidden sm:inline-flex transition duration-150 hover:text-blue-700 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <button hidden type="submit" onClick={search}>Search</button>
        </form>
      </div>
    </header>
  )
}

export default Header;