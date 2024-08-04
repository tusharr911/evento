import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        alt="Evento logo"
        width={53}
        height={12}
      />
    </Link>
  );
}

export default Logo;
