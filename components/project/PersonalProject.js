import React, { useRef, useEffect, useState } from 'react';
import projectCss from '../../assets/css/project/project.module.css';
import { Text, useTheme, Spacer, Grid, Card, Row, Col, Tooltip, Button, Pagination, Modal, useModal } from '@nextui-org/react';
import { IconContext } from 'react-icons';
import { VscGithubAlt, VscEye, VscDeviceCameraVideo } from 'react-icons/vsc';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { getPersonalProject } from '../../action/project';

const itemPerPage = 6;

const PersonalProject = ({ personalProject }) => {
    const { isDark } = useTheme();
    const subHeaderColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "45deg, #21D4FD 0%, #B721FF 33%, #7434db 94%";
    const cardHeaderColor = isDark ? "63deg, #FBAB7E 0%, #F7CE68 100%" : "20deg, #FAD961 9%, #d1e94a 14%, #F76B1C 60%";
    const iconColor = isDark ? '#fff' : '#7895B2';
    const textColor = isDark ? '#eeefee' : '#16213E';
    const textHeadingColor = isDark ? "$secondary" : "#8758FF";
    const modalFooterBorder = isDark ? '1px solid #665A48' : '1px solid #DFF6FF';
    const ref = useRef('');
    const ref1 = useRef('');
    const [pProject, setPProject] = useState(personalProject.projects);
    const [ppTotalCount, setPpTotalCount] = useState(Math.ceil(personalProject.totalItem / itemPerPage));
    const [currentPP, setCurrentPP] = useState(null);
    const { setVisible, bindings } = useModal();
    const [selectedCard, setSelectedCard] = useState({});

    useEffect(() => {
        if (currentPP) {
            getPersonalProject(currentPP, itemPerPage).then(res => {
                setPpTotalCount(Math.ceil(res.totalItem / itemPerPage));
                setPProject(res.projects);
            })
        }
    }, [currentPP]);

    const gotoLink = link => {
        window?.open(link, '_blank')
    }

    const modalHandeler = (item) => {
        // console.log(item);
        setSelectedCard(item);
        setVisible(true);
    }

    return (
        <div>
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
            <Grid.Container gap={2.5} >
                {
                    Array.isArray(pProject) && pProject.length > 0 && pProject.map(item => {
                        return (
                            <Grid md={4} sm={6} xs={12} key={item.id}>
                                <Card
                                    isPressable
                                    css={{
                                        w: "100%",
                                        minHeight: "320px"
                                    }}
                                    variant='bordered'
                                    className={projectCss.cardContainer}
                                    onPress={() => { modalHandeler(item) }}
                                >
                                    <Card.Header
                                        ref={ref}
                                        css={{
                                            justifyContent: 'center',
                                            position: 'absolute',
                                            top: 5,
                                            zIndex: 999,
                                        }}
                                    >
                                        <Text
                                            h3
                                            size={20}
                                            css={{
                                                textGradient: cardHeaderColor
                                            }}
                                            className={projectCss.cardHeading}
                                        >
                                            {item?.name}
                                            <span className={projectCss.line1}></span>
                                            <span className={projectCss.line2}></span>
                                            <span className={projectCss.line3}></span>
                                            <span className={projectCss.line4}></span>
                                        </Text>
                                    </Card.Header>
                                    <Card.Body
                                        css={{
                                            pt: ref?.current?.clientHeight || 65,
                                            paddingBottom: ref1?.current?.clientHeight || 65,
                                        }}
                                    >
                                        {item?.description &&
                                            <>
                                                <div>
                                                    <Text
                                                        css={{
                                                            color: textColor,
                                                        }}
                                                        className={projectCss.ellipse_3}
                                                    >
                                                        <Text span
                                                            css={{
                                                                color: textHeadingColor,
                                                                marginRight: 8
                                                            }}
                                                        >
                                                            Description :
                                                        </Text>
                                                        {item.description}
                                                    </Text>
                                                </div>

                                                <Spacer y={0.6} />
                                            </>
                                        }
                                        {item?.feature && <>
                                            <div>
                                                <Text className={projectCss.ellipse_4}
                                                    css={{
                                                        color: textColor,
                                                    }}
                                                >
                                                    <Text span
                                                        css={{
                                                            color: textHeadingColor,
                                                            marginRight: 8
                                                        }}
                                                    >
                                                        Features :
                                                    </Text>
                                                    {item?.feature?.split("\n").map((item, idx) => {
                                                        return (
                                                            <span key={idx} style={{ display: idx !== 0 && 'block' }}>
                                                                {`${idx + 1}. ${item}`}
                                                            </span>
                                                        )
                                                    })}
                                                </Text>

                                            </div>
                                            <Spacer y={0.6} />
                                        </>
                                        }
                                        <div>
                                            <Text
                                                css={{
                                                    color: textHeadingColor,
                                                    float: 'left',
                                                    marginRight: 8,
                                                }}
                                            >
                                                Tools/Technology :
                                            </Text>
                                            <Text
                                                css={{
                                                    color: textColor,
                                                    display: 'contents'
                                                }}
                                            >
                                                {Array.isArray(item?.technology) && item?.technology?.length > 0 && item.technology.map((tech, idx) => {
                                                    return idx === item?.technology?.length - 1 ? tech : `${tech}, `
                                                })}
                                            </Text>
                                        </div>
                                        <Spacer y={0.5} />
                                    </Card.Body>
                                    <Card.Footer
                                        isBlurred
                                        css={{
                                            position: "absolute",
                                            bgBlur: "#ff95ff66",
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
            <Row
                css={{
                    justifyContent: 'flex-end'
                }}
            >
                <Pagination
                    color="secondary"
                    size={'sm'}
                    total={ppTotalCount}
                    shadow
                    loop={ppTotalCount && 1}
                    onChange={(page) => {
                        setCurrentPP(page);
                    }}
                />
            </Row>

            <Modal
                scroll
                blur
                closeButton
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
                className={projectCss.modalContainer}
            >
                <Modal.Header>
                    <Text
                        h3
                        size={20}
                        css={{
                            textGradient: cardHeaderColor
                        }}
                        className={projectCss.cardHeading}
                        id="modal-title"
                    >
                        {selectedCard?.name}
                        <span className={projectCss.line1}></span>
                        <span className={projectCss.line2}></span>
                        <span className={projectCss.line3}></span>
                        <span className={projectCss.line4}></span>
                    </Text>
                </Modal.Header>
                <Modal.Body id="modal-description">
                    {selectedCard?.description &&
                        <>
                            <div>
                                <Text
                                    css={{
                                        color: textHeadingColor,
                                        float: 'left',
                                        marginRight: 8
                                    }}
                                >
                                    Description :
                                </Text>
                                <Text
                                    css={{
                                        color: textColor,
                                        display: 'contents',
                                    }}
                                >
                                    {selectedCard?.description}
                                </Text>
                            </div>

                            <Spacer y={0.6} />
                        </>
                    }
                    {selectedCard?.feature && <>
                        <div>
                            <Text
                                css={{
                                    color: textHeadingColor,
                                    float: 'left',
                                    marginRight: 8
                                }}
                            >
                                Features :
                            </Text>
                            <Text
                                css={{
                                    color: textColor,
                                    display: 'contents'
                                }}
                            >
                                {selectedCard?.feature?.split("\n").map((item, idx) => {
                                    return (
                                        <span key={idx} style={{ display: 'block' }}>
                                            {idx + 1}. {item}
                                        </span>
                                    )
                                })}
                            </Text>

                        </div>
                        <Spacer y={0.6} />
                    </>
                    }
                    <div>
                        <Text
                            css={{
                                color: textHeadingColor,
                                float: 'left',
                                marginRight: 8,
                            }}
                        >
                            Tools/Technology :
                        </Text>
                        <Text
                            css={{
                                color: textColor,
                                display: 'contents'
                            }}
                        >
                            {Array.isArray(selectedCard?.technology) && selectedCard?.technology?.length > 0 && selectedCard.technology.map((tech, idx) => {
                                return idx === selectedCard?.technology?.length - 1 ? tech : `${tech}, `
                            })}
                        </Text>
                    </div>
                    <Spacer y={0.5} />
                </Modal.Body>
                <Modal.Footer css={{ borderTop: modalFooterBorder }}>
                    <Row>
                        <Col>
                            {selectedCard?.github && (
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
                                        onClick={() => gotoLink(selectedCard?.github)}
                                    >
                                        Github
                                    </Text>
                                </Row>
                            )}
                        </Col>
                        <Col>
                            {selectedCard?.videoLink && (
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
                                        onClick={() => gotoLink(selectedCard?.videoLink)}
                                    >
                                        Video
                                    </Text>
                                </Row>
                            )}
                        </Col>
                        <Col>
                            {selectedCard?.liveDemo && (
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
                                        onClick={() => gotoLink(selectedCard?.liveDemo)}
                                    >
                                        Visit site
                                    </Text>
                                </Row>
                            )}
                        </Col>
                    </Row>
                </Modal.Footer>

            </Modal>
        </div>
    );

};

export default PersonalProject;
