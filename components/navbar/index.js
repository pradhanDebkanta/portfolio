import React, { useCallback, useRef, useState } from 'react';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTheme as useNextTheme } from 'next-themes';
import { Navbar, Switch, useTheme, useModal } from '@nextui-org/react';

import { Layout } from './Layout';
import NavItems from './NavItem';
import MobileNavbar from './MobileNavbar';
import navCss from '../../assets/css/navbar/navbar.module.css';
import MyIcon from '../../utils/icons';

const { MoonIcon, SunIcon } = MyIcon


const TopNavbar = ({ children }) => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    const toggleRef = useRef(null);
    const [toggleOpen, setToggleOpen] = useState(false)

    const router = useRouter();

    const activeRoute = useCallback((route) => {
        // console.log(route);
        if (router.asPath.includes(route))
            return true;
        else
            return false;

    }, [router]);

    const handleToggle = useCallback(flag => {
        if (flag) {
            toggleRef?.current?.click();
        }
    }, []);


    return (
        <Layout toggler={toggleOpen}>
            <Navbar
                // variant="sticky"
                isCompact={true}
                isBordered={isDark}
            // shouldHideOnScroll
            >
                <Navbar.Toggle
                    showIn="xs"
                    ref={toggleRef}
                    onChange={(value => setToggleOpen(value))}
                />

                <Navbar.Content
                    enableCursorHighlight

                    activeColor="secondary"
                    hideIn="xs"
                    variant="highlight-rounded"
                    css={{
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                    gap={'$10'}
                >
                    {
                        NavItems?.map(item => (
                            <NextLink
                                href={item.url}
                                key={item.key}
                                scroll={false}
                                passHref
                            >
                                <Navbar.Link
                                    isActive={activeRoute(item.url)}

                                >
                                    {item.name}
                                </Navbar.Link>
                            </NextLink>
                        ))
                    }
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Item>
                        <Switch
                            checked={isDark}
                            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                            size='xs'
                            iconOff={<MoonIcon filled style={{ color: '#FF6BD5' }} />}
                            iconOn={<SunIcon filled style={{ color: '#F8C572' }} />}
                            color='secondary'
                        />
                    </Navbar.Item>
                </Navbar.Content>

                {/* for mobile navbar */}

                <MobileNavbar toggler={handleToggle} />
            </Navbar>

            {children}
        </Layout>
    )
}

export default dynamic(() => Promise.resolve(TopNavbar), { ssr: false })



