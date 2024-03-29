import React, { useEffect, useState, useRef } from 'react';
import skill from '../../assets/css/skills/skills.module.css';
import home from '../../assets/css/home/home.module.css';
import { Container, Grid, Row, Spacer, Text, useTheme, Card, Collapse, Button, Progress, Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import skill_img from '../../assets/images/skill_img.png';
import { BsCodeSlash } from 'react-icons/bs';
import { SiLibreoffice } from 'react-icons/si';
import { VscTools, VscDatabase } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Net from '../../utils/svg/Net';
import CountUp from 'react-countup';
import { getVisitors } from '../../action/getVisitors';


const programmingLanguage = [
    {
        name: 'JavaScript',
        src: '/javascript.svg',
        exp: 90,
    },
    {
        name: 'C++',
        src: '/cpp.png',
        exp: 80,
    },
    {
        name: 'C',
        src: '/c.svg',
        exp: 80,
    },
    {
        name: 'Python',
        src: '/python.png',
        exp: 60,
    },
    {
        name: 'Go-lang',
        src: '/go.png',
        exp: 60,
    },
];

const libraries = [
    {
        name: 'React Js',
        src: '/react.svg',
        exp: 95,
    },
    {
        name: 'Next Js',
        src: '/next-js.svg',
        exp: 90,
    },
    {
        name: 'Node Js',
        src: '/node.svg',
        exp: 80,
    },
    {
        name: 'Express Js',
        src: '/expressjs.svg',
        exp: 80,
    },
    {
        name: 'Mongoose',
        src: 'https://avatars.githubusercontent.com/u/7552965?s=400&v=4',
        exp: 80,
    },
    {
        name: 'Redux',
        src: '/redux.svg',
        exp: 95,
    },
    {
        name: 'React Query',
        src: '/reactquery.png',
        exp: 80,
    },
    {
        name: 'Ant-Design',
        src: '/antd.svg',
        exp: 95,
    },
    {
        name: 'Chakra UI',
        src: '/chakra.jpg',
        exp: 80,
    },
    {
        name: 'Next UI',
        src: '/nextui.png',
        exp: 90,
    },
    {
        name: 'Meterial UI',
        src: '/mui.svg',
        exp: 95,
    },
    {
        name: 'Polaris',
        src: '/shopify.svg',
        exp: 80,
    },
];

const tools = [
    {
        name: 'Shopify',
        src: '/shopify-tool.svg',
        exp: 90,
    },
    {
        name: 'AWS',
        src: '/aws.png',
        exp: 60,
    },

];

const database = [
    {
        name: 'MongoDB',
        src: '/mongodb.svg',
        exp: 80,
    }
]



const Skills = () => {
    const router = useRouter();
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    const subHeaderColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "45deg, #21D4FD 0%, #B721FF 33%, #7434db 94%";
    const [countComp, setCountComp] = useState('');
    const ref = useRef(null);

    const countObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('intersecting');
                getVisitors(process?.env?.NEXT_PUBLIC_API_TOKEN).then(res => {
                    let comp = (
                        <Text
                            h6
                            size={20}
                            css={{
                                color: '#7ee787',
                                '@smMax': {
                                    fontSize: 18
                                }
                            }}
                        >
                            <CountUp
                                end={res?.totalUniqueVisit || 0}
                                delay={0.5}
                                duration={2}
                            />
                        </Text>
                    )
                    setCountComp(comp);
                }).catch(err => {
                    console.log(err)
                });

                countObserver.unobserve(entry.target);
            }
        })
    }, { threshold: 1 });

    useEffect(() => {
        countObserver.observe(ref?.current);
    }, []);

    return (
        <div id='skills' className={skill.container}>
            <div className={skill.netContainer}>
                <Net />
            </div>
            <Container>
                <Text
                    h1
                    size={40}
                    weight='bold'
                    css={{
                        textAlign: 'center',
                        textGradient: headerColor,
                    }}
                    className={`${home.responsiveText} ${skill.headerText}`}
                >
                    Skills
                </Text>
                <Spacer y={0.5} />
                <Grid.Container gap={1}>
                    <Grid sm={6} xs={12}>
                        <div className={skill.box}>
                            <Collapse.Group splitted>
                                <Collapse
                                    title={<Text
                                        h2
                                        size={20}
                                        css={{
                                            textGradient: subHeaderColor,
                                            textAlign: 'center'
                                        }}
                                        className={skill.subTextHeader}
                                    >
                                        Programming Languages
                                    </Text>}
                                    arrowIcon={
                                        <IconContext.Provider value={{ color: '#C47AFF' }}>
                                            <BsCodeSlash />
                                        </IconContext.Provider>
                                    }
                                >
                                    <Grid.Container gap={2} justify="flex-start">
                                        {programmingLanguage.map(item => (
                                            <Grid xs={6} sm={4} key={item.name}>
                                                <Card isPressable>
                                                    <Card.Body css={{ p: 0 }}>
                                                        <Image
                                                            src={item.src}
                                                            width="200px"
                                                            height={'200px'}
                                                            alt={item.name}
                                                            css={{
                                                                padding: '6px 5px 0px'
                                                            }}
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer css={{ display: 'block' }} className={skill.tooltip}>
                                                        <Tooltip
                                                            content={`${item?.exp || 40}%`}
                                                            contentColor='success'
                                                            color='invert'
                                                        >
                                                            <Text b >{item.name}</Text>
                                                            <Spacer y={0.2} />
                                                            <Progress
                                                                size={'xs'}
                                                                color='success'
                                                                value={item?.exp || 40}
                                                                shadow
                                                                striped
                                                            ></Progress>
                                                        </Tooltip>
                                                        <Spacer y={0.2} />
                                                    </Card.Footer>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid.Container>
                                </Collapse>

                                <Collapse
                                    title={<Text
                                        h2
                                        size={20}
                                        css={{
                                            textGradient: subHeaderColor,
                                            textAlign: 'center'
                                        }}
                                        className={skill.subTextHeader}
                                    >
                                        Libraries/Frameworks
                                    </Text>}
                                    arrowIcon={
                                        <IconContext.Provider value={{ color: '#C47AFF' }}>
                                            <SiLibreoffice />
                                        </IconContext.Provider>
                                    }
                                >
                                    <Grid.Container gap={2} justify="flex-start">
                                        {libraries.map(item => (
                                            <Grid xs={6} sm={4} key={item.name}>
                                                <Card isPressable>
                                                    <Card.Body css={{ p: 0 }}>
                                                        <Image
                                                            src={item.src}
                                                            width="200px"
                                                            height={'200px'}
                                                            alt={item.name}
                                                            css={{
                                                                padding: '7px 5px 0px'
                                                            }}
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer css={{ display: 'block' }} className={skill.tooltip}>
                                                        <Tooltip
                                                            content={`${item?.exp || 40}%`}
                                                            contentColor='success'
                                                            color={'invert'}
                                                        >
                                                            <Text b >{item.name}</Text>
                                                            <Spacer y={0.2} />
                                                            <Progress
                                                                size={'xs'}
                                                                color='success'
                                                                value={item?.exp || 40}
                                                                shadow
                                                                striped
                                                            ></Progress>
                                                        </Tooltip>
                                                        <Spacer y={0.2} />
                                                    </Card.Footer>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid.Container>
                                </Collapse>
                                <Collapse
                                    title={<Text
                                        h2
                                        size={20}
                                        css={{
                                            textGradient: subHeaderColor,
                                            textAlign: 'center'
                                        }}
                                        className={skill.subTextHeader}
                                    >
                                        Tools/Platforms
                                    </Text>}
                                    arrowIcon={
                                        <IconContext.Provider value={{ color: '#C47AFF' }}>
                                            <VscTools />
                                        </IconContext.Provider>
                                    }
                                >
                                    <Grid.Container gap={2} justify="flex-start">
                                        {tools.map(item => (
                                            <Grid xs={6} sm={4} key={item.name}>
                                                <Card isPressable>
                                                    <Card.Body css={{ p: 0 }}>
                                                        <Image
                                                            src={item.src}
                                                            width="400px"
                                                            height={'400px'}
                                                            alt={item.name}
                                                            css={{
                                                                padding: '7px 5px 0px'
                                                            }}
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer css={{ display: 'block' }} className={skill.tooltip}>
                                                        <Tooltip
                                                            content={`${item?.exp || 40}%`}
                                                            contentColor='success'
                                                            color={'invert'}
                                                        >
                                                            <Text b >{item.name}</Text>
                                                            <Spacer y={0.2} />
                                                            <Progress
                                                                size={'xs'}
                                                                color='success'
                                                                value={item?.exp || 40}
                                                                shadow
                                                                striped
                                                            ></Progress>
                                                        </Tooltip>
                                                        <Spacer y={0.2} />
                                                    </Card.Footer>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid.Container>
                                </Collapse>
                                <Collapse
                                    title={<Text
                                        h2
                                        size={20}
                                        css={{
                                            textGradient: subHeaderColor,
                                            textAlign: 'center'
                                        }}
                                        className={skill.subTextHeader}
                                    >
                                        Database
                                    </Text>}
                                    arrowIcon={
                                        <IconContext.Provider value={{ color: '#C47AFF' }}>
                                            <VscDatabase />
                                        </IconContext.Provider>
                                    }
                                >
                                    <Grid.Container gap={2} justify="flex-start">
                                        {database.map(item => (
                                            <Grid xs={6} sm={4} key={item.name}>
                                                <Card isPressable>
                                                    <Card.Body css={{ p: 0 }}>
                                                        <Card.Image
                                                            src={item.src}
                                                            width="200px"
                                                            height={'200px'}
                                                            alt={item.name}
                                                            css={{
                                                                padding: '7px 5px 0px'
                                                            }}
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer css={{ display: 'block' }} className={skill.tooltip}>
                                                        <Tooltip
                                                            content={`${item?.exp || 40}%`}
                                                            contentColor='success'
                                                            color={'invert'}
                                                        >
                                                            <Text b >{item.name}</Text>
                                                            <Spacer y={0.2} />
                                                            <Progress
                                                                size={'xs'}
                                                                color='success'
                                                                value={item?.exp || 40}
                                                                shadow
                                                                striped
                                                            ></Progress>
                                                        </Tooltip>
                                                        <Spacer y={0.2} />
                                                    </Card.Footer>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid.Container>
                                </Collapse>
                            </Collapse.Group>
                            <Spacer y={0.5} />
                            <Row justify='center'>
                                <Button
                                    auto
                                    rounded
                                    ripple={false}
                                    size='sm'
                                    onClick={() => { router.push('/resume') }}
                                    css={{
                                        background: '#F07DEA',
                                        fontWeight: '$semibold',
                                        boxShadow: '$md',
                                        position: 'relative',
                                        overflow: 'visible',
                                        color: '#fff',
                                        px: '$14',
                                        '&:after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            background: '#C47AFF',
                                            opacity: 1,
                                            borderRadius: '$pill',
                                            transition: 'all 0.4s ease'
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            '&:after': {
                                                transform: 'scaleX(1.5) scaleY(1.6)',
                                                opacity: 0
                                            }
                                        },
                                        '&:active': {
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    Show resume
                                </Button>
                            </Row>
                        </div>
                    </Grid>
                    <Grid sm={6} xs={12}>
                        <Grid.Container>
                            <div ref={ref}>
                                <Grid xl={12}>
                                    <Row>
                                        <Image src={skill_img} alt='skill_bg' />
                                    </Row>
                                </Grid>
                                <Grid xl={12}>
                                    <Row css={{ paddingLeft: '16px' }}>
                                        <Text
                                            h6
                                            size={20}
                                            css={{
                                                justifyContent: 'center',
                                                paddingRight: '8px',
                                                textGradient: subHeaderColor,
                                                '@smMax': {
                                                    fontSize: 18
                                                }
                                            }}
                                        >
                                            Total unique visitors: {' '}
                                        </Text>
                                        {countComp}
                                    </Row>
                                </Grid>
                            </div>
                        </Grid.Container>
                    </Grid>
                </Grid.Container>


            </Container>
        </div >
    )
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false });