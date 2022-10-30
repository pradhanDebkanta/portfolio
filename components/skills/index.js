import React from 'react';
import skill from '../../assets/css/skills/skills.module.css';
import home from '../../assets/css/home/home.module.css';
import { Container, Grid, Row, Spacer, Text, useTheme, Card, Collapse, Button } from '@nextui-org/react';
import Image from 'next/image';
import skill_img from '../../assets/images/skill_img.png';
import { BsCodeSlash } from 'react-icons/bs';
import { SiLibreoffice } from 'react-icons/si';
import { VscTools, VscDatabase } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Net from '../../utils/svg/Net';


const programmingLanguage = [
    {
        name: 'JavaScript',
        src: '/javascript.svg',
    },
    {
        name: 'C++',
        src: '/cpp.png',
    },
    {
        name: 'C',
        src: '/c.svg',
    },
];

const libraries = [
    {
        name: 'React Js',
        src: '/react.svg',
    },
    {
        name: 'Next Js',
        src: '/next-js.svg',
    },
    {
        name: 'Node Js',
        src: '/node.svg',
    },
    {
        name: 'Express Js',
        src: '/expressjs.svg',
    },
    {
        name: 'Mongoose',
        src: 'https://avatars.githubusercontent.com/u/7552965?s=400&v=4',
    },
    {
        name: 'Redux',
        src: '/redux.svg',
    },
    {
        name: 'React Query',
        src: '/reactquery.png',
    },
    {
        name: 'Ant-Design',
        src: '/antd.svg',
    },
    {
        name: 'Chakra UI',
        src: '/chakra.jpg',
    },
    {
        name: 'Next UI',
        src: '/nextui.png',
    },
    {
        name: 'Meterial UI',
        src: '/mui.svg',
    },
    {
        name: 'Polaris',
        src: '/shopify.svg',
    },
];

const tools = [
    {
        name: 'Shopify',
        src: '/shopify-tool.svg'
    }
];

const database = [
    {
        name: 'MongoDB',
        src: '/mongodb.svg'
    }
]



const Skills = () => {
    const router= useRouter();
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    const subHeaderColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "45deg, #21D4FD 0%, #B721FF 33%, #7434db 94%";


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
                                                        <Card.Image
                                                            src={item.src}
                                                            width="100%"
                                                            height={'auto'}
                                                            alt={item.name}
                                                            css={{
                                                                padding: '6px 5px 0px'
                                                            }}
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                                                        <Row wrap="wrap" justify="space-between" align="center">
                                                            <Text b>{item.name}</Text>
                                                            {/* <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                                    20
                                                </Text> */}
                                                        </Row>
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
                                                        <Card.Image
                                                            src={item.src}
                                                            width="100%"
                                                            height={'auto'}
                                                            alt={item.name}
                                                            css={{
                                                                padding: '7px 5px 0px'
                                                            }}
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                                                        <Row wrap="wrap" justify="space-between" align="center">
                                                            <Text b>{item.name}</Text>
                                                            {/* <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                                    20
                                                </Text> */}
                                                        </Row>
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
                                                        <Card.Image
                                                            src={item.src}
                                                            width="100%"
                                                            height={'auto'}
                                                            alt={item.name}
                                                            css={{
                                                                padding: '7px 5px 0px'
                                                            }}
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                                                        <Row wrap="wrap" justify="space-between" align="center">
                                                            <Text b>{item.name}</Text>
                                                            {/* <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                                    20
                                                </Text> */}
                                                        </Row>
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
                                                            width="100%"
                                                            height={'auto'}
                                                            alt={item.name}
                                                            css={{
                                                                padding: '7px 5px 0px'
                                                            }}
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                                                        <Row wrap="wrap" justify="space-between" align="center">
                                                            <Text b>{item.name}</Text>
                                                            {/* <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                                    20
                                                </Text> */}
                                                        </Row>
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
                                    onClick={()=>{router.push('/resume')}}
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
                        <Row>
                            <Image src={skill_img} alt='skill_bg' />
                        </Row>
                    </Grid>
                </Grid.Container>


            </Container>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Skills),{ssr: false});