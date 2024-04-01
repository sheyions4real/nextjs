"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function NavBarItem({title, param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre')


    return (
    <div>
        <Link 
        className={`hover:text-gray-100 dark:text-amber-600 font-semibold 
                    ${genre===param ? 'hover:text-gray-100 text-white dark:text-white underline underline-offset-8 decoration-2 dark:decoration-amber-600 rounded-lg' : ''}`}
        href={`\?genre=${param}`}>
            {title}
        </Link>
    </div>
  )
}
