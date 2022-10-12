import React, { useRef, useEffect, useState } from 'react';
import projectCss from '../../assets/css/project/project.module.css';
import { Text, useTheme, Spacer, Grid, Card, Row, Col, Tooltip, Button, Pagination, Modal, useModal } from '@nextui-org/react';
import { IconContext } from 'react-icons';
import { VscEye } from 'react-icons/vsc';
import { getContributionProject } from '../../action/project';

const itemPerPage = 5;

const ContributionProject = ({ contributeProject }) => {
    const { isDark } = useTheme();
    const subHeaderColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "45deg, #21D4FD 0%, #B721FF 33%, #7434db 94%";
    const cardHeaderColor = isDark ? "63deg, #FBAB7E 0%, #F7CE68 100%" : "20deg, #FAD961 9%, #d1e94a 14%, #F76B1C 60%";
    const iconColor = isDark ? '#fff' : '#7895B2';
    const textColor = isDark ? '#eeefee' : '#16213E';
    const textHeadingColor = isDark ? "$secondary" : "#8758FF";
    const modalFooterBorder = isDark ? '1px solid #665A48' : '1px solid #DFF6FF';


    const [cProject, setCProject] = useState(contributeProject.projects);
    const [cpTotalCount, setCpTotalCount] = useState(Math.ceil(contributeProject.totalItem / itemPerPage));
    const [currentCP, setCurrentCP] = useState(null);
    const { setVisible, bindings } = useModal();
    const [selectedCard, setSelectedCard] = useState({});

    useEffect(() => {
        if (currentCP) {
            getContributionProject(currentCP, itemPerPage).then(res => {
                setCProject(res.projects);
                setCpTotalCount(Math.ceil(res.totalItem / itemPerPage));
            })
        }

    }, [currentCP])


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
                Contribution Project
            </Text>
            <Spacer y={1} />
            <Grid.Container gap={2.5}>
                {
                    Array.isArray(cProject) && cProject.length > 0 && cProject.map(item => {
                        return (
                            <Grid key={item.id} md={4} sm={6}>
                                <Card
                                    isPressable
                                    css={{ w: "100%", minHeight: "320px" }}
                                    variant='bordered'
                                    className={projectCss.cardContainer}
                                    onPress={() => { modalHandeler(item) }}
                                >
                                    <Card.Header
                                        css={{
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            justifyContent: 'center'
                                        }}>
                                        <Text
                                            h3
                                            size={20}
                                            css={{
                                                textGradient: cardHeaderColor,
                                                // textAlign: 'center'
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
                                    <Card.Body>
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
                                                {item?.description?.slice(0,150)}{" "}.........
                                            </Text>
                                        </div>

                                        <Spacer y={0.6} />
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
                                                {item?.feature?.slice(0, 120).concat(".........").split("\n").map((item, idx) => {
                                                    return (
                                                        <span key={idx} style={{ display: 'block' }}>
                                                            {idx + 1}. {item}
                                                        </span>
                                                    )
                                                })}
                                            </Text>

                                        </div>
                                        <Spacer y={0.6} />
                                        <div>
                                            <Text
                                                css={{
                                                    color: textHeadingColor,
                                                    float: 'left',
                                                    marginRight: 8
                                                }}
                                            >
                                                Contribution :
                                            </Text>
                                            <Text
                                                css={{
                                                    color: textColor,
                                                    display: 'contents'
                                                }}
                                            >
                                                {item?.contribution?.slice(0, 150).concat(".........").split("\n").map((item, idx) => {
                                                    return (
                                                        <span key={idx} style={{ display: 'block' }}>
                                                            {idx + 1}. {item}
                                                        </span>
                                                    )
                                                })}
                                            </Text>

                                        </div>
                                        <Spacer y={0.6} />
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
                                    <Card.Divider></Card.Divider>
                                    <Card.Footer >
                                        <Row>
                                            <Col>
                                                {item?.liveDemo && (
                                                    <Row css={{
                                                        justifyContent: 'flex-end',
                                                        paddingRight: '20px',
                                                    }}>
                                                        <Tooltip
                                                            content='Website url'
                                                            contentColor={'secondary'}
                                                        >
                                                            <Button
                                                                color={'secondary'}
                                                                icon={
                                                                    <IconContext.Provider value={{ size: 20, color: '#fff', }}>
                                                                        <VscEye />
                                                                    </IconContext.Provider>
                                                                }
                                                                auto
                                                            // rounded
                                                            >
                                                                <Text
                                                                    css={{
                                                                        color: '#fff',
                                                                    }}
                                                                    onClick={() => gotoLink(item?.liveDemo)}
                                                                >
                                                                    Visit site
                                                                </Text>
                                                            </Button>
                                                        </Tooltip>
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
                    total={cpTotalCount}
                    shadow
                    loop={cpTotalCount && 1}
                    onChange={(page) => {
                        setCurrentCP(page);
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
                <Modal.Body>
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
                    <div>
                        <Text
                            css={{
                                color: textHeadingColor,
                                float: 'left',
                                marginRight: 8
                            }}
                        >
                            Contribution :
                        </Text>
                        <Text
                            css={{
                                color: textColor,
                                display: 'contents'
                            }}
                        >
                            {selectedCard?.contribution?.split("\n").map((item, idx) => {
                                return (
                                    <span key={idx} style={{ display: 'block' }}>
                                        {idx + 1}. {item}
                                    </span>
                                )
                            })}
                        </Text>

                    </div>
                    <Spacer y={0.6} />
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
                            {selectedCard?.liveDemo && (
                                <Row css={{
                                    justifyContent: 'flex-end',
                                    paddingRight: '20px',
                                }}>
                                    <Tooltip
                                        content='Website url'
                                        contentColor={'secondary'}
                                    >
                                        <Button
                                            color={'secondary'}
                                            icon={
                                                <IconContext.Provider value={{ size: 20, color: '#fff', }}>
                                                    <VscEye />
                                                </IconContext.Provider>
                                            }
                                            auto
                                        // rounded
                                        >
                                            <Text
                                                css={{
                                                    color: '#fff',
                                                }}
                                                onClick={() => gotoLink(selectedCard?.liveDemo)}
                                            >
                                                Visit site
                                            </Text>
                                        </Button>
                                    </Tooltip>
                                </Row>
                            )}
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default ContributionProject