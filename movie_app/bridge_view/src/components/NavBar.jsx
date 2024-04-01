'use client';

import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="flex justify-center gap-6 dark:bg-gray-800 bg-amber-600 py-4 mt-2 lg:text-lg">
        <NavBarItem title="Trending" param="fetchTrending" />
        <NavBarItem title="Top Rated" param="fetchTopRated"  />
    </div>
  )
}
