import React, { useCallback } from 'react';
import NextLink from 'next/link';
import { Navbar, Link, Dropdown } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons';


// import navCss from '../../assets/styles/superAdmin/adminNavbar.module.css';
import NavItems from './NavItem';
import { icons } from '../../utils/icon/newIcon';




const MobileNavbar = () => {
    const router = useRouter();

    const activeRoute = useCallback((route) => {
        if (router.pathname.includes(route))
            return true;
        else
            return false;

    }, [router]);

    const handleDropdown = key => {
        console.log(key);
        if (key === 'study_meterials') {
            router.push('/admin/codesta/study-meterials');
        } else if (key === 'unicast') {
            router.push('/admin/codesta/campaign/unicast');
        } else if (key === 'broadcast') {
            router.push('/admin/codesta/campaign/broadcast');
        } else {
            return;
        }
    }


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
                    >{
                            item?.child ? (
                                <>
                                    <Dropdown
                                        placement='bottom-left'
                                    >
                                        <Dropdown.Button
                                            light
                                            css={{
                                                '@sm': {
                                                    fontSize: 14,
                                                },
                                                fontSize: 17,
                                                px: 0,
                                                // dflex: "center",
                                                // svg: { pe: "none" },
                                                "&:hover": {
                                                    color: 'var(--nextui--navbarItemHighlightTextColor)',
                                                    transform: 'translateX(4px)',
                                                    transition: 'all 0.3s ease'
                                                }
                                            }}
                                            iconRight={icons.chevron}
                                            ripple={false}
                                            className={navCss.mDropdownButton}
                                            color={activeRoute('unicast') || activeRoute('broadcast') ? 'secondary' : 'default'}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </Dropdown.Button>
                                        <Dropdown.Menu
                                            aria-label="campaign"
                                            onAction={handleDropdown}
                                            css={{
                                                $$dropdownMenuWidth: "320px",
                                                $$dropdownItemHeight: "45px",
                                                "& .nextui-dropdown-item": {
                                                    py: "$4",
                                                    // dropdown item left icon
                                                    svg: {
                                                        color: "$secondary",
                                                        mr: "$4",
                                                    },
                                                    // dropdown item title
                                                    "& .nextui-dropdown-item-content": {
                                                        w: "100%",
                                                        fontWeight: "$semibold",
                                                    },
                                                },
                                            }}
                                        >
                                            {item?.child.map((childItem, idx) => {
                                                return (
                                                    <Dropdown.Item
                                                        key={childItem.key}
                                                        showFullDescription={false}
                                                        description={childItem?.description}
                                                        icon={childItem.icon}
                                                        css={{
                                                            '&:hover': {
                                                                color: '$secondary'
                                                            }
                                                        }}
                                                        color={activeRoute(childItem.url) ? 'secondary' : 'default'}
                                                    >
                                                        {childItem.name}
                                                    </Dropdown.Item>
                                                )
                                            })}

                                        </Dropdown.Menu>
                                    </Dropdown>

                                </>
                            ) : (
                                <NextLink href={item.url}>
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
                            )
                        }

                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </>
    )
}

export default MobileNavbar