import React, { useCallback, } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTheme as useNextTheme } from 'next-themes';
import { Navbar, Switch, useTheme } from '@nextui-org/react';

import { Layout } from './Layout';
import NavItems from './NavItem';
import MobileNavbar from './MobileNavbar';
import navCss from '../../assets/css/navbar/navbar.module.css';
import MyIcon from '../../utils/icons';

const { MoonIcon, SunIcon } = MyIcon


const TopNavbar = () => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    const router = useRouter();

    const activeRoute = useCallback((route) => {
        if (router.asPath.includes(route))
            return true;
        else
            return false;

    }, [router]);


    return (
        <Layout>
            <Navbar
                // variant="sticky"
                isCompact={true}
                
            >
                <Navbar.Toggle showIn="xs" />

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
                                key={item.key}>
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

                <MobileNavbar />
            </Navbar>
        </Layout>
    )
}

export default TopNavbar



