import React from 'react'
import { Container, Text, useTheme, Grid, Spacer, Row, Col, Tooltip, } from '@nextui-org/react';
import contactCss from '../../assets/css/contact/contact.module.css';
import home from '../../assets/css/home/home.module.css';

import { MdOutlinePhone, MdOutlineAlternateEmail } from 'react-icons/md';
import { FiLinkedin } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import { GoLocation } from 'react-icons/go';
import { RiUserLocationLine } from 'react-icons/ri';

const Contact = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "135deg, #FEC163 10%, #DE4313 100%" : "135deg, #FEC163 10%, #DE4313 100%";
    const textColor = isDark ? '#fff' : '#CFE8A9';

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
                        // paddingTop: 20
                    }}
                    className={`${contactCss.headingText} ${home.responsiveText}`}
                >
                    Contact
                </Text>
                <Spacer y={2} />
                <Grid.Container gap={2}>
                    <Grid sm={6} justify='center'>
                        <div className={contactCss.contactBoxLeft}>
                            <Row gap={0} className={contactCss.translateX} >
                                <Col span={1.5}
                                    css={{ cursor: 'pointer' }}
                                    onClick={() => { copyText('+91 7477671976') }}
                                >
                                    <Tooltip
                                        content='Copy Mobile No.'
                                        contentColor={'secondary'}
                                    >
                                        <IconContext.Provider value={{ size: 20, color: textColor }}>
                                            <MdOutlinePhone />

                                        </IconContext.Provider>
                                    </Tooltip>
                                </Col>
                                <Col span={10.5} >
                                    <Text
                                        css={{ cursor: 'pointer', color: textColor }}
                                        onClick={() => { window?.open(`tel:${+917477671976}`, '_blank') }}
                                    >
                                        +91 7477671976
                                    </Text>
                                </Col>
                            </Row>
                            <Spacer y={0.8} />
                            <Row gap={0} className={contactCss.translateX}>
                                <Col span={1.5}
                                    css={{ cursor: 'pointer', color: textColor }}
                                    onClick={() => { copyText('debkantapradhan2000@gmail.com') }}
                                >
                                    <Tooltip
                                        content='Copy Email Id'
                                        contentColor={'secondary'}
                                    >
                                        <IconContext.Provider value={{ size: 20, color: textColor }}>
                                            <MdOutlineAlternateEmail />
                                        </IconContext.Provider>
                                    </Tooltip>
                                </Col>
                                <Col span={10.5}>
                                    <Text
                                        css={{ cursor: 'pointer', color: textColor }}
                                        onClick={() => { window?.open(`mailto:debkantapradhan2000@gmail.com`, '_blank') }}
                                    >
                                        debkantapradhan2000@gmail.com
                                    </Text>
                                </Col>
                            </Row>
                            <Spacer y={0.8} />
                            <Row gap={0} className={contactCss.translateX}>
                                <Col span={1.5}
                                    css={{ cursor: 'pointer', color: textColor }}
                                    onClick={() => { copyText('https://www.linkedin.com/in/debkanta-pradhan-4b6399193/') }}
                                >
                                    <Tooltip
                                        content='Copy LinkedIn profile id'
                                        contentColor={'secondary'}
                                    >
                                        <IconContext.Provider value={{ size: 20, color: textColor }}>
                                            <FiLinkedin />
                                        </IconContext.Provider>
                                    </Tooltip>
                                </Col>
                                <Col span={10.5}>
                                    <Text
                                        css={{ cursor: 'pointer', color: textColor }}
                                        onClick={() => { window?.open(`https://www.linkedin.com/in/debkanta-pradhan-4b6399193/`, '_blank') }}
                                    >
                                        LinkedIn
                                    </Text>
                                </Col>
                            </Row>
                            <Spacer y={0.8} />
                            <Row gap={0} className={contactCss.translateX}>
                                <Col span={1.5}
                                    css={{ cursor: 'pointer', color: textColor }}
                                    onClick={() => { copyText('https://github.com/pradhanDebkanta/') }}
                                >
                                    <Tooltip
                                        content='Copy Github url'
                                        contentColor={'secondary'}
                                    >
                                        <IconContext.Provider value={{ size: 20, color: textColor }}>
                                            <VscGithubAlt />
                                        </IconContext.Provider>
                                    </Tooltip>
                                </Col>
                                <Col span={10.5}>
                                    <Text
                                        css={{ cursor: 'pointer', color: textColor }}
                                        onClick={() => { window?.open(`https://github.com/pradhanDebkanta/`, '_blank') }}
                                    >
                                        Github
                                    </Text>
                                </Col>
                            </Row>
                        </div>
                    </Grid>
                    <Grid sm={6} justify='center'>
                        <div className={contactCss.contactBoxRight}>
                            <Row gap={0} className={contactCss.translateX}>
                                <Col span={6}>

                                    <Text
                                        size={16}
                                        css={{
                                            textAlign: 'center',
                                            color: textColor
                                        }}
                                    >

                                        Parmanent address :
                                    </Text>
                                </Col>
                                <Col span={6}>
                                    <Row>
                                        <IconContext.Provider value={{ size: 18, style: { marginRight: 8 }, color: textColor }}>
                                            <GoLocation />
                                        </IconContext.Provider>
                                        <Text
                                            css={{
                                                textAlign: 'center',
                                                color: textColor
                                            }}
                                        >

                                            Kolkata, West Bengal
                                        </Text>
                                    </Row>
                                </Col>
                            </Row>
                            <Spacer y={1} />
                            <Row gap={0} className={contactCss.translateX}>
                                <Col>
                                    <Text
                                        size={16}
                                        css={{
                                            textAlign: 'center',
                                            color: textColor
                                        }}
                                    >
                                        Current location :
                                    </Text></Col>
                                <Col>
                                    <Row>
                                        <IconContext.Provider value={{ size: 18, style: { marginRight: 8 }, color: textColor }}>
                                            <RiUserLocationLine />
                                        </IconContext.Provider>
                                        <Text
                                            css={{
                                                color: textColor
                                            }}
                                        >
                                            Kolkata, West Bengal
                                        </Text>
                                    </Row>
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