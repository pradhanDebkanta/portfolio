import React, { useCallback, } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Dropdown, } from '@nextui-org/react';
import { GiNotebook } from 'react-icons/gi';
import { BsBroadcast } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import { Layout } from './Layout';
// import MobileNavbar from './MobileNavbar';
// import UserProfile from './UserProfile';
// import { useWindowSize } from '../../utils/customHooks/resizeObserver';
// import { icons } from '../../utils/icon/newIcon';
// import navCss from '../../assets/styles/superAdmin/adminNavbar.module.css';



const TopNavbar = () => {
    // const windowSize = useWindowSize();
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
        <Layout>
            <Navbar
                shouldHideOnScroll={true}
                variant={'stricky'}
                isCompact={true}
            >
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >

                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="secondary"
                    hideIn="xs"
                    variant="highlight-rounded"

                >
                    <NextLink href={'/admin/codesta/dashboard'}>
                        <Navbar.Link
                            isActive={activeRoute('dashboard')}
                        >
                            Dashboard
                        </Navbar.Link>
                    </NextLink>
                    <NextLink href="/admin/codesta/events">
                        <Navbar.Link
                            isActive={activeRoute('events')}
                        >
                            Events
                        </Navbar.Link>
                    </NextLink>
                    <NextLink href="/admin/codesta/members">
                        <Navbar.Link
                            isActive={activeRoute('members')}
                        >
                            Members
                        </Navbar.Link>
                    </NextLink>

                    
                </Navbar.Content>
                {/* for user profile section */}
                {/* <UserProfile /> */}

                {/* for mobile navbar */}

                {/* <MobileNavbar /> */}
            </Navbar>
        </Layout>
    )
}

export default TopNavbar



