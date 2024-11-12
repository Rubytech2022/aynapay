import Image from "next/image";
import Link from "next/link";

const Brand_Logo = () => {
  return (
    <Link
      href="/"
      className="text-primary dark:text-white text-[24px] font-medium"
    >
      <Image
        src="/images/logo.png"
        alt="logo"
        width={400}
        height={160}
        className="w-full h-auto max-w-[160px]"
      />
    </Link>
  );
};

export default Brand_Logo;
