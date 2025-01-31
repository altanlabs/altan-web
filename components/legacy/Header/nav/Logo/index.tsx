import Image from "next/image";

export default function index() {
  return (
    <a href="/" className="flex items-center space-x-2 lg:space-x-2">
      <Image
        width={32}
        height={32}
        src="/images/logo/logoBlack.svg"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        width={32}
        height={32}
        src="/images/logo/logoWhite.svg"
        alt="Logo"
        className="hidden dark:block"
      />

      {/* <h6 className=" text-4xl font-bold dark:text-white ">
                Altan
            </h6> */}
    </a>
  );
}
