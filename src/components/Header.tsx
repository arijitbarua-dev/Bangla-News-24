import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="relative max-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                <Link href="/">
                    <Image
                    src="/logo.webp"
                    alt="logo of bangla news 24"
                    width={40}
                    height={40}
                    priority
                />
                </Link>

                <div className="flex flex-col items-center sm:items-start">
                    <span className="text-2xl font-bold text-red-700">
                        Bangla News 24
                    </span>

                    <span className="text-xs text-neutral-500">
                        {date}
                    </span>
                </div>
            </div>

            <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
                <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">
                    সাইন ইন
                </button>

                <button className="btn bg-red-600 rounded px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-700">
                    সাইন আপ
                </button>
            </div>

            <NavLinks/>
        </header>
    );
};

export default Header;