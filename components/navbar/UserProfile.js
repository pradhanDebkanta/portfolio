import React, { memo } from 'react';
import { Switch, useTheme, Navbar, Avatar, Dropdown, Text, Row, Col } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { useColorMode } from '@chakra-ui/react';
import MyIcon from '../../utils/icon';
import { GiSettingsKnobs } from 'react-icons/gi';
import { AiOutlineLogout } from 'react-icons/ai';
import { useWindowSize } from '../../utils/customHooks/resizeObserver';


const { NotificationIcon, MoonIcon, SunIcon, UserIcon } = MyIcon;


const UserProfile = () => {
    const { isDark } = useTheme();
    const { setTheme } = useNextTheme();
    const { colorMode, toggleColorMode } = useColorMode();
    const windowSize = useWindowSize();

    return (
        <>
            <Navbar.Content
                css={{
                    "@xs": {
                        w: "12%",
                        jc: "flex-end",
                    },
                }}
            >
                {windowSize > 525 && (
                    <Navbar.Item>
                        <Switch
                            checked={isDark}
                            size="xs"
                            color={'secondary'}
                            iconOn={<SunIcon filled style={{ color: '#F8C572' }} />}
                            iconOff={<MoonIcon filled style={{ color: '#FF6BD5' }} />}
                            preventDefault
                            shadow
                            css={{

                            }}
                            onChange={(e) => {
                                setTheme(e.target.checked ? 'dark' : 'light');
                                toggleColorMode();
                            }}
                        />
                    </Navbar.Item>
                )}
                <Dropdown placement="bottom-right">
                    <Navbar.Item>
                        <Dropdown.Trigger>
                            <Avatar
                                bordered
                                as="button"
                                color="secondary"
                                size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </Dropdown.Trigger>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="User menu actions"
                        color="secondary"
                        onAction={(actionKey) => console.log({ actionKey })}
                    >
                        <Dropdown.Item
                            key="profile"
                            css={{ height: "$18" }}
                            icon={<UserIcon size={22} fill="var(--nextui-colors-secondary)" />}
                        >
                            <Text color="inherit" css={{ d: "flex" }}>
                                Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                zoey@example.com
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="settings"
                            withDivider
                            icon={<GiSettingsKnobs color="var(--nextui-colors-secondary)" />}
                        >
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="notification"
                            icon={<NotificationIcon size={22} fill="var(--nextui-colors-secondary)" />}
                        >
                            Notification
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="logout"
                            withDivider
                            color="error"
                            icon={<AiOutlineLogout color="var(--nextui-colors-error)" />}

                        >
                            Log Out
                        </Dropdown.Item>
                        {windowSize <= 525 && (
                            <Dropdown.Item
                                key="changeTheme"
                                color='secondery'
                                withDivider
                                icon={
                                    <>
                                        {isDark ? (<MoonIcon filled style={{ color: '#FF6BD5' }} size={15} />)
                                            : (
                                                <SunIcon filled style={{ color: '#F8C572' }} size={15} />
                                            )}
                                    </>
                                }
                            >
                                <Row>
                                    <Col span={10}>
                                        <Text
                                            color='secondary'
                                        >
                                            Change Theme
                                        </Text>

                                    </Col>
                                    <Col span={2}>
                                        <Switch
                                            checked={isDark}
                                            size="xs"
                                            color={'secondary'}
                                            iconOn={<SunIcon filled style={{ color: '#F8C572' }} />}
                                            iconOff={<MoonIcon filled style={{ color: '#FF6BD5' }} />}
                                            preventDefault
                                            css={{
                                                // marginRight: 12,
                                                marginTop: 4

                                            }}
                                            onChange={(e) => {
                                                setTheme(e.target.checked ? 'dark' : 'light');
                                                toggleColorMode();
                                            }}
                                        />
                                    </Col>
                                </Row>

                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Content>
        </>
    )
}

export default memo(UserProfile);