import Link from "next/link";

export default function Navbar() {
  return (
    <div className="max-w-64 m-auto py-4 lg:py-10">
      <div className="text-white text-[10px] lg:text-sm font-semibold flex justify-evenly">
        <p>
          <Link href="/#about" className="hover:animate-pulse">
            About
          </Link>
        </p>
        <p>
          <Link href="/#portfolio" className="hover:animate-pulse">
            Portfolio
          </Link>
        </p>
        <p>
          <Link href="/#contact" className="hover:animate-pulse">
            Contact
          </Link>
        </p>
      </div>
    </div>
  );
}
