import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="border-t border-gray-200 pt-8">
      <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <p className="text-gray-600 text-md mb-5 -mt-3">
          About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
        </p>

        {results.items?.map((result) => (
          <div key={result.link} className="max-w-screen md:max-w-xl mb-8">
            <div className="group">
              <div>
                <Link href={result.link}>
                  <a className="text-sml line-clamp-1 text-gray-600">
                    {result.formattedUrl}
                  </a>
                </Link>
              </div>
              <div>
                <Link href={result.link}>
                  <a className="text-xl truncate text-blue-600 font-medium link group-hover:underline line-clamp-1">
                    {result.title}
                  </a>
                </Link>
              </div>
            </div>

            <p className="line-clamp-2">{result.snippet}</p>
          </div>
        ))}

        <PaginationButtons />
      </div>
    </div>
  )
}

export default SearchResults;