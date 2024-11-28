import { Roboto } from 'next/font/google';
import styles from '@/styles/Index.module.css';
import Navbar from '@/component/Navbar';
import { useContext } from 'react';
import { MobileToggleContext } from '@/context/MobileToggleContext';
import { useRouter } from 'next/router';
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const router = useRouter();
  const { pathname } = router;

  const { toggle } = useContext(MobileToggleContext);

  return (
    <div className={styles.container}>
      <Navbar 
        cusFont={roboto.className} 
        pathname={pathname}
      />
    </div>
  );
}
