import React from 'react'
import { Container, Text, useTheme, Grid, Spacer, Row, Col, Tooltip } from '@nextui-org/react';
import contactCss from '../../assets/css/contact/contact.module.css';
import home from '../../assets/css/home/home.module.css';

import { MdOutlinePhone, MdOutlineAlternateEmail } from 'react-icons/md';
import { FiLinkedin } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

const Contact = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "135deg, #FEC163 10%, #DE4313 100%" : "135deg, #FEC163 10%, #DE4313 100%";

    const copyText = (text) => {
        window?.navigator?.clipboard?.writeText(text);
    }

    return (
        <div id='contact' className={`${contactCss.container}`}>
            <Container>
                <Text
                    h1
                    size={40}
                    weight='bold'
                    css={{
                        textAlign: 'center',
                        textGradient: headerColor,
                        zIndex: 999,
                    }}
                    className={`${contactCss.headingText} ${home.responsiveText}`}
                >
                    Contact
                </Text>
                <Spacer y={2} />
                <Grid.Container gap={1}>
                    <Grid sm={6} justify='center'>
                        <div className={contactCss.contactBoxLeft}>
                            <Row gap={0}>
                                <Col span={1.5}
                                    css={{ cursor: 'pointer' }}
                                    onClick={() => { copyText('+91 7477671976') }}
                                >
                                    <Tooltip
                                        content='Copy Mobile No.'
                                        contentColor={'secondary'}
                                    >
                                        <IconContext.Provider value={{ size: 20 }}>
                                            <MdOutlinePhone />

                                        </IconContext.Provider>
                                    </Tooltip>
                                </Col>
                                <Col span={10.5} >
                                    <Text
                                        css={{ cursor: 'pointer' }}
                                        onClick={() => { window?.open(`tel:${+917477671976}`, '_blank') }}
                                    >
                                        +91 7477671976
                                    </Text>
                                </Col>
                            </Row>
                            <Spacer y={0.8} />
                            <Row gap={0}>
                                <Col span={1.5}
                                    css={{ cursor: 'pointer' }}
                                    onClick={() => { copyText('debkantapradhan2000@gmail.com') }}
                                >
                                    <Tooltip
                                        content='Copy Email Id'
                                        contentColor={'secondary'}
                                    >
                                        <IconContext.Provider value={{ size: 20, }}>
                                            <MdOutlineAlternateEmail />
                                        </IconContext.Provider>
                                    </Tooltip>
                                </Col>
                                <Col span={10.5}>
                                    <Text
                                        css={{ cursor: 'pointer' }}
                                        onClick={() => { window?.open(`mailto:debkantapradhan2000@gmail.com`, '_blank') }}
                                    >
                                        debkantapradhan2000@gmail.com
                                    </Text>
                                </Col>
                            </Row>
                            <Spacer y={0.8} />
                            <Row gap={0}>
                                <Col span={1.5}
                                    css={{ cursor: 'pointer' }}
                                    onClick={() => { copyText('https://www.linkedin.com/in/debkanta-pradhan-4b6399193/') }}
                                >
                                    <Tooltip
                                        content='Copy LinkedIn profile id'
                                        contentColor={'secondary'}
                                    >
                                        <IconContext.Provider value={{ size: 20, }}>
                                            <FiLinkedin />
                                        </IconContext.Provider>
                                    </Tooltip>
                                </Col>
                                <Col span={10.5}>
                                    <Text
                                        css={{ cursor: 'pointer' }}
                                        onClick={() => { window?.open(`https://www.linkedin.com/in/debkanta-pradhan-4b6399193/`, '_blank') }}
                                    >
                                        LinkedIn
                                    </Text>
                                </Col>
                            </Row>
                            <Spacer y={0.8} />
                            <Row gap={0}>
                                <Col span={1.5}
                                    css={{ cursor: 'pointer' }}
                                    onClick={() => { copyText('https://github.com/pradhanDebkanta/') }}
                                >
                                    <Tooltip
                                        content='Copy Github url'
                                        contentColor={'secondary'}
                                    >
                                        <IconContext.Provider value={{ size: 20, }}>
                                            <VscGithubAlt />
                                        </IconContext.Provider>
                                    </Tooltip>
                                </Col>
                                <Col span={10.5}>
                                    <Text
                                        css={{ cursor: 'pointer' }}
                                        onClick={() => { window?.open(`https://github.com/pradhanDebkanta/`, '_blank') }}
                                    >
                                        Github
                                    </Text>
                                </Col>
                            </Row>
                        </div>
                    </Grid>
                    <Grid sm={6} justify='flex-start'>
                        <div className={contactCss.contactBoxRight}>
                            <Row  gap={0}>
                                <Col>
                                    <Text
                                        size={18}
                                    >
                                        Parmanent address:
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        Kolkata, West Bengal
                                    </Text>
                                </Col>
                            </Row>
                            <Spacer y={1} />
                            <Row>
                                <Col>
                                    <Text
                                        size={18}
                                    >
                                        Current address:
                                    </Text></Col>
                                <Col>
                                    <Text>
                                        Jaipur, Rajasthan
                                    </Text>
                                </Col>
                            </Row>
                            <Spacer y={0.8} />

                        </div>
                    </Grid>
                </Grid.Container>

            </Container>
        </div>
    )
}

export default Contact