import React, { useCallback } from 'react';
import NextLink from 'next/link';
import { Navbar, Link } from '@nextui-org/react';
import { useRouter } from 'next/router';
import NavItems from './NavItem';

const MobileNavbar = () => {
    const router = useRouter();

    const activeRoute = useCallback((route) => {
        if (router.asPath.includes(route))
            return true;
        else
            return false;

    }, [router]);

    return (
        <>
            <Navbar.Collapse >
                {NavItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item.key}
                        activeColor={'secondary'}
                        css={{
                        }}
                        isActive={activeRoute(item.url)}
                    >
                        <NextLink
                            href={item.url}
                            scroll={false}
                            passHref
                        >
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                    '&:hover': {
                                        color: 'var(--nextui--navbarItemHighlightTextColor)',
                                        transform: 'translateX(4px)',
                                        transition: 'all 0.3s ease'

                                    },
                                    '@sm': {
                                        fontSize: 16,
                                    },

                                }}

                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        </NextLink>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </>
    )
}

export default MobileNavbar