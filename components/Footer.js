import Link from "next/link"

function Footer () {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-200 bg-gray-50 text-sm text-gray-500">
      <div className="px-8 py-3">
        DabAZ loves a hot girl
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          © 2022 DabAZ. All rights reserved
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <Link href="https://twitter.com/dabaz_official">
            <a>
              <p>Twitter</p>
            </a>
          </Link>
          <Link href="https://instagram.com/dabaz_official">
            <a>
              <p>Instagram</p>
            </a>
          </Link>
          <Link href="https://github.com/dabaz-official">
            <a>
              <p>GitHub</p>
            </a>
          </Link>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <Link href="https://www.youtube.com/channel/UCwvZyLdvWQFLBKL-l1kLoVQ">
            <a>
              <p>YouTube</p>
            </a>
          </Link>
          <Link href="https://open.spotify.com/artist/1KmtWPNNBJw4spLrQkPrXQ">
            <a>
              <p>Spotify</p>
            </a>
          </Link>
          <Link href="https://www.pornhub.com/users/dabaz666">
            <a>
              <p>Pornhub</p>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer