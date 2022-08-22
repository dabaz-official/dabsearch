import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'

export default function HomeCn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Dab搜索</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <Link href="https://dabaz.vercel.app">
            <a className="link">DabAZ</a>
          </Link>
          <Link href="http://dabazofficial.com">
            <a className="link">DabLinks</a>
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center">
          <Link href="/">
            <a className="pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </a>
          </Link>
          {/* Avatar */}
          <Link href="http://dabazofficial.com">
            <a>
              <Avatar url="http://dabazofficial.com/img/dabaz-2.jpg" />
            </a>
          </Link>
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="/logo.svg"
          alt="logo"
          height={100}
          width={70}
        />
        <div className="flex w-full mt-5 hover:shadow-md hover:border-blue-600 focus-within:shadow-md focus-within:border-blue-600 max-w-md rounded-xl border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-center mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            className="flex-grow focus:outline-none" 
            placeholder="搜你所想..."
          />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center sm:space-y-8 sm:flex-row sm:space-x-4">
          <button className="btn mt-8">搜索</button>
          <Link href="https://open.spotify.com/artist/1KmtWPNNBJw4spLrQkPrXQ">
            <a className="btn">音乐</a>
          </Link>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}