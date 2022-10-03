import React, { useRef, useEffect } from 'react';
import projectCss from '../../assets/css/project/project.module.css';
import home from '../../assets/css/home/home.module.css';
import { Container, Text, useTheme, Spacer, Grid, Card, Row, Col, Tooltip, } from '@nextui-org/react';
import { IconContext } from 'react-icons';
import { VscGithubAlt, VscEye, VscDeviceCameraVideo } from 'react-icons/vsc';
import { MdOutlineOndemandVideo } from 'react-icons/md';


const Project = ({ personalProject, contributeProject }) => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    const subHeaderColor = isDark ? "135deg, #FEC163 10%, #DE4313 100%" : "135deg, #FEC163 10%, #DE4313 100%";
    const cardHeaderColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    const iconColor = isDark ? '#fff' : '#fff';
    const textColor = isDark ? '#fff' : '#fff';

    const ref = useRef('');
    const ref1 = useRef('');

    const gotoLink = link => {
        window?.open(link, '_blank')
    }

    return (
        <div id='project' className={`${projectCss.container}`}>
            <Container>
                <Text
                    h1
                    size={40}
                    weight='bold'
                    css={{
                        textAlign: 'center',
                        textGradient: headerColor,
                    }}
                    className={`${home.responsiveText} ${projectCss.headerText}`}
                >
                    Project
                </Text>
                <Spacer y={1} />
                <div className={projectCss.projectBox}>
                    <Text
                        h2
                        size={24}
                        css={{
                            textGradient: subHeaderColor
                        }}
                        className={projectCss.subTextHeader}
                    >
                        Personal Project
                    </Text>
                    <Spacer y={0.8} />
                    <Grid.Container gap={2} >
                        {
                            Array.isArray(personalProject) && personalProject.length > 0 && personalProject.map(item => {
                                return (
                                    <Grid md={4} sm={6} xs={12} key={item.id}>
                                        <Card css={{ w: "100%", minHeight: "320px" }}>
                                            <Card.Header
                                                ref={ref}
                                                css={{
                                                    justifyContent: 'center',
                                                    position: 'absolute',
                                                    top: 5,
                                                    zIndex: 999,
                                                }}>
                                                <Text
                                                    h3
                                                    size={20}
                                                    css={{
                                                        textGradient: cardHeaderColor
                                                    }}
                                                >
                                                    {item?.name}
                                                </Text>
                                            </Card.Header>
                                            <Card.Body
                                                css={{
                                                    // backgroundImage: `url(https://i.postimg.cc/44hVSt1C/order-managenent.png)`,
                                                    backgroundImage: `url(${item?.img})`,
                                                    backgroundPosition: 'top',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat',
                                                    pt: ref?.current?.clientHeight || 36,
                                                    paddingBottom: ref1?.current?.clientHeight || 36,
                                                }}
                                                className={projectCss.cardBody}
                                            >
                                                <div className={projectCss.cardBodyBox}>
                                                    <Row>
                                                        <Col span={3}>
                                                            <Text
                                                                css={{
                                                                    color: textColor
                                                                }}
                                                            >
                                                                Description :
                                                            </Text>
                                                        </Col>
                                                        <Col span={9}>
                                                            <Text
                                                                css={{
                                                                    color: textColor
                                                                }}
                                                            >
                                                                {item?.description}
                                                            </Text>

                                                        </Col>
                                                    </Row>
                                                    <Spacer y={0.8} />
                                                    <Row>
                                                        <Col span={3}>
                                                            <Text
                                                                css={{
                                                                    color: textColor
                                                                }}
                                                            >
                                                                Features :
                                                            </Text>
                                                        </Col>
                                                        <Col span={9}>
                                                            <Text
                                                                css={{
                                                                    color: textColor
                                                                }}
                                                            >
                                                                {item?.feature}
                                                            </Text>

                                                        </Col>
                                                    </Row>
                                                    <Spacer y={0.8} />
                                                    <Row>
                                                        <Col span={3}>
                                                            <Text
                                                                css={{
                                                                    color: textColor
                                                                }}
                                                            >
                                                                Tools/Technology :
                                                            </Text>
                                                        </Col>
                                                        <Col span={9}>
                                                            <Text
                                                                css={{
                                                                    color: textColor
                                                                }}
                                                            >
                                                                {Array.isArray(item?.technology) && item?.technology?.length > 0 && item.technology.map((tech, idx) => {
                                                                    return idx === item?.technology?.length - 1 ? tech : `${tech}, `
                                                                })}
                                                            </Text>

                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer
                                                isBlurred
                                                css={{
                                                    position: "absolute",
                                                    bgBlur: "#ffffff66",
                                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                                    bottom: 0,
                                                    zIndex: 999,
                                                }}
                                                ref={ref1}
                                            >
                                                <Row>
                                                    <Col>
                                                        {item?.github && (
                                                            <Row css={{
                                                                justifyContent: 'center',
                                                            }}
                                                            >
                                                                <Tooltip
                                                                    content='Show codebase in github.'
                                                                    contentColor={'secondary'}
                                                                >
                                                                    <IconContext.Provider value={{ size: 20, color: iconColor, style: { marginRight: 8, marginTop: 3 } }}>
                                                                        <VscGithubAlt />
                                                                    </IconContext.Provider>
                                                                </Tooltip>

                                                                <Text
                                                                    css={{
                                                                        cursor: 'pointer',
                                                                        color: textColor,
                                                                    }}
                                                                    onClick={() => gotoLink(item?.github)}
                                                                >
                                                                    Github
                                                                </Text>
                                                            </Row>
                                                        )}
                                                    </Col>
                                                    <Col>
                                                        {item?.videoLink && (
                                                            <Row css={{
                                                                justifyContent: 'center',
                                                            }}
                                                            >
                                                                <Tooltip
                                                                    content='Demo video'
                                                                    contentColor={'secondary'}
                                                                >
                                                                    <IconContext.Provider value={{ size: 20, color: iconColor, style: { marginRight: 8, marginTop: 3 } }}>
                                                                        <MdOutlineOndemandVideo />
                                                                    </IconContext.Provider>
                                                                </Tooltip>

                                                                <Text
                                                                    css={{
                                                                        cursor: 'pointer',
                                                                        color: textColor,
                                                                    }}
                                                                    onClick={() => gotoLink(item?.videoLink)}
                                                                >
                                                                    Video
                                                                </Text>
                                                            </Row>
                                                        )}
                                                    </Col>
                                                    <Col>
                                                        {item?.liveDemo && (
                                                            <Row css={{
                                                                justifyContent: 'center',
                                                            }}>
                                                                <Tooltip
                                                                    content='Website url'
                                                                    contentColor={'secondary'}
                                                                >
                                                                    <IconContext.Provider value={{ size: 20, color: iconColor, style: { marginRight: 8, marginTop: 3 } }}>
                                                                        <VscEye />
                                                                    </IconContext.Provider>
                                                                </Tooltip>
                                                                <Text
                                                                    css={{
                                                                        cursor: 'pointer',
                                                                        color: textColor,
                                                                    }}
                                                                    onClick={() => gotoLink(item?.liveDemo)}
                                                                >
                                                                    Visit site
                                                                </Text>
                                                            </Row>
                                                        )}
                                                    </Col>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }


                    </Grid.Container>

                </div>

                <Spacer y={1} />
                <div className={projectCss.projectBox}>
                    <Text
                        h2
                        size={24}
                        css={{
                            textGradient: subHeaderColor
                        }}
                        className={projectCss.subTextHeader}
                    >
                        Contribution Project
                    </Text>

                </div>


            </Container>
        </div>
    )
}

export default Project