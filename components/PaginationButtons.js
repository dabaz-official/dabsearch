import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'

function PaginationButtons () {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 max-w-screen md:max-w-xl mb-8">
      <div className="-mt-px w-0 flex-1 flex group">
        {startIndex >= 10 && (
          <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
            <a className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-md font-medium text-gray-500 group-hover:text-blue-600 group-hover:border-blue-600 transition duration-200">
              <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-600 transition duration-200" aria-hidden="true" />
              Previous
            </a>
          </Link>
        )}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end group">
        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
          <a className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-md font-medium text-gray-500 group-hover:text-blue-600 group-hover:border-blue-600 transition duration-200">
            Next
            <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400 group-hover:text-blue-600 transition duration-200" aria-hidden="true" />
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default PaginationButtons;