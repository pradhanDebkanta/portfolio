import React, { useCallback, memo } from 'react';
import NextLink from 'next/link';
import { Navbar, Link } from '@nextui-org/react';
import { useRouter } from 'next/router';
import NavItems from './NavItem';

const MobileNavbar = ({ toggler }) => {
    const router = useRouter();

    const activeRoute = useCallback((route) => {
        if (router.asPath.includes(route))
            return true;
        else
            return false;

    }, [router]);


    return (
        <>
            <Navbar.Collapse>
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
                            prefetch={false}
                        >
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                    transform: 'translateX(0px)',
                                    transition: 'all 0.3s ease',

                                    '&:hover': {
                                        color: 'var(--nextui--navbarItemHighlightTextColor)',
                                        transform: 'translateX(5px)',
                                        transition: 'all 0.3s ease',

                                    },
                                    '@sm': {
                                        fontSize: 16,
                                    },

                                }}
                                onClick={() => toggler(true)}
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

export default memo(MobileNavbar)