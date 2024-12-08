import Link from "next/link";
export const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <Link
          className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
          href="/"
          aria-label="Brand"
        >
          Blog App
        </Link>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <Link
            className="font-medium text-blue-500 focus:outline-none"
            href="/"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            className="font-medium text-blue-500 focus:outline-none"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="font-medium text-blue-500 focus:outline-none"
            href="/add-blog"
          >
            Add Blog
          </Link>
        </div>
      </nav>
    </header>
  );
};
