import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src={getImgPath("/images/logo/logo.png")}
        alt="logo"
        width={160}
        height={50}
       quality={100}
      />
  
    </Link>
  );
};

export default Logo;
