import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container, Text, useTheme, Grid, Spacer, Row, Col } from '@nextui-org/react';
import home from '../../assets/css/home/home.module.css';
import expCss from '../../assets/css/experience/experience.module.css';
import eduCss from '../../assets/css/education/education.module.css';
import TwoBranch from '../../utils/svg/TwoBranch';
import { IconContext } from 'react-icons';
import { BsCode } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';


const Experience = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const branchRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const violateContentRef = useRef(null);
    const greenContentRef = useRef(null);
    const orrangeContentRef = useRef(null);

    const lineObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle(expCss.lineVisible, entry.isIntersecting);
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
        lineObserver.observe(branchRef.current);
        lineObserver.observe(line1Ref.current);
        lineObserver.observe(line2Ref.current);
        // lineObserver.observe(line3Ref.current);

        contentObserver.observe(violateContentRef?.current);
        contentObserver.observe(greenContentRef?.current);
        // contentObserver.observe(orrangeContentRef?.current);

    }, [])

    return (
        <div id='experience' className={expCss.container}>
            <Container fluid>
                <Text
                    h1
                    size={40}
                    weight={'bold'}
                    css={{
                        textGradient: headerColor,
                        textAlign: 'center'
                    }}
                    className={`${home.responsiveText} ${expCss.headerText}`}
                >
                    Experience
                </Text>
                <Spacer y={0.5} />
                <Spacer y={1} css={{
                    '@smMin': {
                        display: 'none'
                    }
                }} />
                <div>
                    <Row css={{
                        '@mdMax': {
                            display: 'none'
                        }
                    }}>
                        <Col span={1} css={{ marginTop: '-110px', paddingLeft: '8px' }}>
                            <TwoBranch height='350px' width='220px' className={expCss.twoBranch} ref={branchRef} />
                        </Col>
                        <Col span={11}>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={1}>
                            <div className={expCss.icon}>
                                <IconContext.Provider value={{ size: 28, color: `${isDark ? '#fff' : '#624F82'}` }}>
                                    <BsCode />
                                </IconContext.Provider>
                                <span className={`${expCss.commonIcon} ${expCss.violateIcon}`}></span>
                            </div>
                            <div className={`${expCss.line} ${expCss.violateGreen}`} ref={line1Ref}
                                style={{ height: violateContentRef?.current?.clientHeight || 260 }}
                            >
                            </div>
                        </Col>
                        <Col span={11}>
                            <div className={eduCss.content} ref={violateContentRef}>
                                <Text
                                    h2
                                    size={22}
                                    css={{
                                        textAlign: 'left',
                                        color: '#a371f7',
                                        '@xsMax': {
                                            marginLeft: '18px'
                                        }
                                    }}
                                    className={`${eduCss.responsiveSubText}`}
                                >
                                    Daphnis Labs
                                </Text>
                                <Grid.Container gap={2}>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#a371f7',
                                                    fontFamily: '$mono'
                                                }}
                                            >
                                                Role:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`Front-end developer (as Intern)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#a371f7',
                                                    fontFamily: '$mono'
                                                }}
                                            >
                                                Duration:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`Nov,2021-Mar,2022 (5 months)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>
                                        <div>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#a371f7',
                                                    fontFamily: '$mono',
                                                    float: 'left'
                                                }}
                                            >
                                                Working Tools/Technology:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    display: 'contents',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`Next Js, React Js, Shopify, Shopify App bridge, Node Js, MongoDB, Ant Design, Chakra UI, Polaris`}
                                            </Text>
                                        </div>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>
                                        <div>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#a371f7',
                                                    fontFamily: '$mono',
                                                    float: 'left'
                                                }}
                                            >
                                                Contribution:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    display: 'contents',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                I had work on Shopify platform to build shopify admin app using the above mention technology. I had contributed on Wishlist app, Size chart app, Heatmap app and Bullet transfer app.
                                            </Text>
                                        </div>
                                    </Grid>
                                </Grid.Container>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={1}>
                            <div className={expCss.icon}>
                                <IconContext.Provider value={{ size: 28, color: `${isDark ? '#fff' : '#624F82'}` }}>
                                    <MdWorkOutline />
                                </IconContext.Provider>
                                <span className={`${expCss.commonIcon} ${expCss.greenIcon}`}></span>
                            </div>
                            <div className={`${expCss.line} ${expCss.green}`} ref={line2Ref}
                                style={{ height: greenContentRef?.current?.clientHeight || 260 }}
                            ></div>
                        </Col>
                        <Col span={11}>
                            <div className={eduCss.content} ref={greenContentRef}>
                                <Text
                                    h2
                                    size={22}
                                    css={{
                                        textAlign: 'left',
                                        color: '#7ee787',
                                        '@xsMax': {
                                            marginLeft: '18px'
                                        }
                                    }}
                                    className={`${eduCss.responsiveSubText}`}
                                >
                                    Vidyayan
                                </Text>
                                <Grid.Container gap={2}>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#7ee787',
                                                    fontFamily: '$mono'
                                                }}
                                            >
                                                Role:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`Front-end developer (as Intern)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#7ee787',
                                                    fontFamily: '$mono'
                                                }}
                                            >
                                                Duration:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`Aug,2021-Oct,2021 (3 months)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>
                                        <div>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#7ee787',
                                                    fontFamily: '$mono',
                                                    float: 'left'
                                                }}
                                            >
                                                Working Tools/Technology:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    display: 'contents',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`React Js, Redux, Node Js, Express Js, MongoDB, Material UI, Bootstrap 4`}
                                            </Text>
                                        </div>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>
                                        <div >
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#7ee787',
                                                    fontFamily: '$mono',
                                                    float: 'left',
                                                }}
                                            >
                                                Contribution:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    display: 'contents',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                I had work on there online EdTech platform. I had built student, tutor & admin dashboard, online examination, classroom, library system on their site. Also build & integrate API.
                                            </Text>
                                        </div>
                                    </Grid>
                                </Grid.Container>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col span={1}>
                            <div className={expCss.icon}>
                                <IconContext.Provider value={{ size: 28, color: `${isDark ? '#fff' : '#624F82'}` }}>
                                    <MdWorkOutline />
                                </IconContext.Provider>
                                <span className={`${expCss.commonIcon} ${expCss.orangeIcon}`}></span>
                            </div>
                            <div className={`${expCss.line} ${expCss.orrange}`} ref={line3Ref}
                                style={{ height: orrangeContentRef?.current?.clientHeight || 260 }}
                            ></div>
                        </Col>
                        <Col span={11}>
                            <div className={eduCss.content} ref={orrangeContentRef}>
                                <Text
                                    h2
                                    size={22}
                                    css={{
                                        textAlign: 'left',
                                        color: '#ffa28b',
                                        '@xsMax': {
                                            marginLeft: '18px'
                                        }
                                    }}
                                    className={`${eduCss.responsiveSubText}`}
                                >
                                    Vidyayan
                                </Text>
                                <Grid.Container gap={2}>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#ffa28b',
                                                    fontFamily: '$mono'
                                                }}
                                            >
                                                Role:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`Front-end developer (as Intern)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#ffa28b',
                                                    fontFamily: '$mono'
                                                }}
                                            >
                                                Duration:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`Aug,2021-Oct,2021 (3 months)`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#ffa28b',
                                                    fontFamily: '$mono'
                                                }}
                                            >
                                                Working Tools/Technology:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                {`React Js, Redux, Node Js, Express Js, MongoDB, Material UI, Bootstrap 4`}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>
                                        <Row>
                                            <Text
                                                css={{
                                                    paddingRight: '8px',
                                                    color: '#ffa28b',
                                                    fontFamily: '$mono'
                                                }}
                                            >
                                                Contribution:
                                            </Text>
                                            <Text
                                                css={{
                                                    letterSpacing: '1px',
                                                    '@xsMax': {
                                                        fontSize: '14px'
                                                    },
                                                }}
                                            >
                                                I had work on there online EdTech platform. I had built student, tutor & admin dashboard, online examination, classroom, library system on their site. Also build & integrate API.
                                            </Text>
                                        </Row>
                                    </Grid>
                                </Grid.Container>
                            </div>
                        </Col>
                    </Row> */}
                </div>

            </Container >
        </div >
    )
}

export default dynamic(() => Promise.resolve(Experience), { ssr: false })