import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@nextui-org/react';
import Image from 'next/image';
import codestaBlack from '../../assets/images/codestaBlack.png'
import codestaWhite from '../../assets/images/codestaWhite.png'
import uemDark from '../../assets/images/uemDark.png'
import uemLight from '../../assets/images/uemLight.png'
import logo from '../../assets/styles/Navbar.module.css';

const Logo = () => {
    const router = useRouter();
    const { isDark } = useTheme();
    const [isCodestaRoute, setCodestaRoute] = useState(false);

    useEffect(() => {
        if (router.pathname.includes('/admin/codesta')) {
            setCodestaRoute(true);
        } else {
            setCodestaRoute(false);
        }

    }, [router]);

    return (
        <>
            <div className={logo.logoBox}>
                {
                    isCodestaRoute ? (
                        <Image
                            src={isDark ? codestaWhite : codestaBlack}
                            alt='codesta logo'
                            height={50}
                            width={80}
                            // layout='responsive'
                            priority={true}
                        />
                    ) : (
                        <Image
                            src={isDark ? uemLight : uemDark}
                            alt='uem logo'
                            height={40}
                            width={80}
                            // layout='responsive'
                            priority={true}
                        />
                    )
                }
            </div>
        </>
    )
}

export default Logo