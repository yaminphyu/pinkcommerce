import React, { useState } from 'react';
import styles from '@/styles/Navbar.module.css';
import { 
    Auths, 
    Navs, 
} from "@/config";
import Link from 'next/link';
import { useContext } from 'react';
import { MobileToggleContext } from '@/context/MobileToggleContext';
import { MenuToggle } from './MenuToggle';
import { Menu } from './Menu';
import { useMenuAnimation } from '@/hooks/useMenuAnimation';
import { 
    BsSearch,
    BsHeart, 
    BsBell, 
} from "react-icons/bs";
import { motion, Variants } from "framer-motion";

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function Navbar({ cusFont, pathname }) {
    const { toggle, setToggle } = useContext(MobileToggleContext);
    const [isOpen, setIsOpen] = useState(false);

    const scope = useMenuAnimation(toggle);

    return (
        <div className={styles.wrapper}>
            <div className={styles['title-wrapper']}>
                <h1 className={`${cusFont} ${styles.title}`}>PiChi</h1>
            </div>
            <div className={styles['navs-wrapper']}>
                <ul className={styles['nav-list']}>
                    {
                    Navs.map((nav) => (
                        <li 
                        key={nav.name}
                        className={`
                            ${cusFont} 
                            ${styles['nav-item']}
                        `}
                        >
                        <Link 
                            href={nav.path}
                            className={`${pathname === nav.path && styles.active}`}
                        >{nav.name}</Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
            {/* <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className={styles['account-menu']}
                >
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={styles['account-toggle']}
                >
                    Menu
                    <motion.div
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 }
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                    >
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                    </motion.div>
                </motion.button>
                <motion.ul
                    variants={{
                    open: {
                        clipPath: "inset(10% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05,
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                        }
                    }
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    className={styles['account-list']}
                >
                    <motion.li variants={itemVariants} className={styles['account-item']}>Item 1 </motion.li>
                    <motion.li variants={itemVariants} className={styles['account-item']}>Item 2 </motion.li>
                    <motion.li variants={itemVariants} className={styles['account-item']}>Item 3 </motion.li>
                    <motion.li variants={itemVariants} className={styles['account-item']}>Item 4 </motion.li>
                    <motion.li variants={itemVariants} className={styles['account-item']}>Item 5 </motion.li>
                </motion.ul>
            </motion.nav> */}
            <div className={styles['setting-wrapper']}>
                <ul className={styles['nav-list']}>
                    <li className={styles['setting-item']}>
                        <BsSearch />
                    </li>
                    <li className={styles['setting-item']}>
                        <BsHeart />
                    </li>
                    <li className={styles['setting-item']}>
                        <BsBell />
                    </li>
                </ul>
            </div>
            {/* <div className={styles['auth-wrapper']}>
                <ul className={styles['nav-list']}>
                    {
                        Auths.map((auth) => (
                            <li 
                                key={auth.name}
                                className={`
                                    ${cusFont} 
                                    ${styles['nav-item']}
                                `}
                            >
                            <Link 
                                href={auth.path}
                                className={`${pathname === auth.path && styles.active}`}
                            >{auth.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div> */}
            <div 
                ref={scope}
                className={styles['mobile-tab']}
            >
                <Menu />
                <MenuToggle toggle={() => setToggle(!toggle)} />
            </div>
        </div>
    )
}
