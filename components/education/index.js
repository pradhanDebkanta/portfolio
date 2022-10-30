import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import eduCss from '../../assets/css/education/education.module.css';
import home from '../../assets/css/home/home.module.css';

import { Container, Text, useTheme, Row, Col, Spacer, Grid } from '@nextui-org/react';
import GreenBlob from '../../utils/svg/GreenBlob';
import BlueBlob from '../../utils/svg/BlueBlob';
import OrrangeBlob from '../../utils/svg/OrrangeBlob';
import graduate from '../../assets/images/graduate.png';
import graduateMint from '../../assets/images/graduateMint.png';
import bag from '../../assets/images/bag.png';
import officeBag2 from '../../assets/images/officeBag2.png';

const Education = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    const greenLineRef = useRef(null);
    const blueLineRef = useRef(null);
    const orrangeLineRef = useRef(null);
    const greenBlobRef = useRef(null);
    const blueBlobRef = useRef(null);
    const orrangeBlobRef = useRef(null);
    const greenContentRef = useRef(null);
    const orrangeContentRef = useRef(null);
    const blueContentRef = useRef(null);

    const lineObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle(eduCss.lineVisible, entry.isIntersecting);
        })
    }, { threshold: 0.2 });

    const blobObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle(eduCss.blobVisible, entry.isIntersecting);
        })
    }, { threshold: 0.2 });

    const contentObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle(eduCss.contentShow, entry.isIntersecting);
            if (entry.isIntersecting) {
                contentObserver.unobserve(entry.target);
            }
        });

    }, { threshold: 0.2 });

    useEffect(() => {
        lineObserver.observe(greenLineRef?.current);
        lineObserver.observe(blueLineRef?.current);
        lineObserver.observe(orrangeLineRef?.current);

        blobObserver.observe(greenBlobRef?.current);
        blobObserver.observe(blueBlobRef?.current);
        blobObserver.observe(orrangeBlobRef?.current);

        contentObserver.observe(greenContentRef?.current);
        contentObserver.observe(orrangeContentRef?.current);
        contentObserver.observe(blueContentRef?.current);

    }, []);

    return (
        <div id='education' className={eduCss.container}>
            <Container fluid>
                <Text
                    h1
                    size={40}
                    weight='bold'
                    css={{
                        textAlign: 'center',
                        textGradient: headerColor,
                    }}
                    className={`${home.responsiveText} ${eduCss.headerText}`}
                >
                    Education
                </Text>
                <Spacer y={0.5} />
                <div>
                    <Row>
                        <Col span={1}>
                            <Row>
                                <div className={`${eduCss.greenLine} ${eduCss.line}`} ref={greenLineRef}></div>
                                <GreenBlob height={300} className={eduCss.blob} ref={greenBlobRef} />
                            </Row>
                        </Col>
                        <Col span={11}>
                            <Spacer y={2.5} />
                            <div className={eduCss.content} ref={greenContentRef}>
                                <Image src={isDark ? graduateMint : graduate} alt='graduate' height={50} width={50} />
                                <Text
                                    h2
                                    size={22}
                                    css={{
                                        textAlign: 'left',
                                        color: '#7ee787'
                                    }}
                                    className={`${eduCss.responsiveSubText}`}
                                >
                                    {`University of Engineering & Management (UEM), Jaipur`}
                                </Text>
                                <Grid.Container gap={2}>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: 'YellowGreen',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Course:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`Bachelor of Technology(B.Tech)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={8}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: 'YellowGreen',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Stream:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    fontSize: '16px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },

                                                }}
                                            >
                                                {`Electronics and Communication Engineering(ECE)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={4} md={3}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: 'YellowGreen',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Duration:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                2019-20223
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={4} md={3}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: 'YellowGreen',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Score:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`(8.8/10) CGPA`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                </Grid.Container>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={1}>
                            <Row>
                                <div className={`${eduCss.blueLine} ${eduCss.line}`} ref={blueLineRef}></div>
                                <BlueBlob height={300} className={eduCss.blob} ref={blueBlobRef} />
                            </Row>
                        </Col>
                        <Col span={11}>
                            <Spacer y={2.5} />
                            <div className={eduCss.content} ref={blueContentRef}>
                                <Image src={officeBag2} alt='10th standered' height={50} width={50} />
                                <Text
                                    h2
                                    size={22}
                                    css={{
                                        // textAlign: 'center',
                                        color: '#939aff'
                                    }}
                                    className={`${eduCss.responsiveSubText}`}
                                >
                                    {`Bhimeswari Uchcha Sikshayatan, Bhagwanpur || Purba Medinipur`}
                                </Text>
                                <Grid.Container gap={2}>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#5F9DF7',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Course:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`Higher Secondary(HS)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#5F9DF7',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Board:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`West Bengal Council of Higher Secondary Education(WBCHSE)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={4} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#5F9DF7',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Stream:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    fontSize: '16px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },

                                                }}
                                            >
                                                {`Science(PCMB)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={4} md={3}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#5F9DF7',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Duration:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                2017-2019
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={4} md={3}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#5F9DF7',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Score:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`85%`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                </Grid.Container>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={1}>
                            <Row>
                                <div className={`${eduCss.orrangeLine} ${eduCss.line}`} ref={orrangeLineRef}></div>
                                <OrrangeBlob height={300} className={eduCss.blob} ref={orrangeBlobRef} />
                            </Row>
                        </Col>
                        <Col span={11}>
                            <Spacer y={2.5} />
                            <div className={eduCss.content} ref={orrangeContentRef}>
                                <Image src={bag} alt='10th standered' height={50} width={50} />
                                <Text
                                    h2
                                    size={22}
                                    css={{
                                        // textAlign: 'center',
                                        color: '#ffa28b'
                                    }}
                                    className={`${eduCss.responsiveSubText}`}
                                >
                                    {`Bhimeswari Uchcha Sikshayatan, Bhagwanpur || Purba Medinipur`}
                                </Text>
                                <Grid.Container gap={2}>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#ea6045',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Course:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`Secondary education(10th)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: 'rgb(234 96 69)',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Board:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`West Bengal Board of Secondary Education(WBBSE)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={4} md={3}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#ea6045',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Duration:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                2017
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={4} md={3}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#ea6045',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                Score:
                                            </Text>
                                            <Text
                                                css={{
                                                    fontFamily: 'cursive',
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`89.14%`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                </Grid.Container>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Education), { ssr: false });