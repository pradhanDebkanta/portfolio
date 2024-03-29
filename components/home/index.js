import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Image from 'next/image';
import home from '../../assets/css/home/home.module.css';
import { Button, Container, Grid, Spacer, Text, useTheme, } from '@nextui-org/react';
import { MdOutlineWavingHand } from 'react-icons/md';
import { IconContext } from 'react-icons';

import profileImg from '../../assets/images/myProfile1.png';

const TypeAnimation = dynamic(() => import('react-type-animation').then(res => res.TypeAnimation), { ssr: false })

const Home = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    const textColor = isDark ? "#F9CEEE" : "#b721ff";
    const highlightColor = isDark ? "#FFEF82" : "#F9D923";

    const router = useRouter();

    const [count, setCount] = useState(0);

    const scrollContact = () => {
        const html = document?.documentElement;
        let id = html?.querySelector('#contact');

        window?.scrollTo({
            top: id?.offsetTop,
            behavior: 'smooth'
        })
        setTimeout(() => {
            router.push('/#contact');
        }, 1000);
    }
    return (
        <div id='home' className={home.container} >
            <Container>
                <Grid.Container gap={1} css={{ justifyContent: 'center' }}>
                    <Grid sm={8} justify="center">
                        <div className={home.headingBox}>
                            <Spacer y={2.6} css={{
                                '@smMax': {
                                    display: 'none'
                                }
                            }} />
                            <div>
                                <Text
                                    h1
                                    size={40}
                                    css={{
                                        textGradient: headerColor,
                                        textAlign: 'center'
                                    }}
                                    weight="bold"
                                    className={home.responsiveText}
                                >
                                    Hello there!
                                    <IconContext.Provider
                                        value={{ size: 36, style: { paddingLeft: 10, color: '#b721ff' }, className: `${home.handshak}` }} >
                                        <MdOutlineWavingHand />
                                    </IconContext.Provider>
                                    <br />
                                    {
                                        count === 3 ? (
                                            `I'm Debkanta Pradhan.`
                                        ) : (
                                            <TypeAnimation
                                                sequence={
                                                    [
                                                        1000,
                                                        `I'm Debkanta Pradhan.`,
                                                        1000,
                                                        () => { setCount(prev => prev + 1) },
                                                        '',
                                                    ]
                                                }
                                                speed={30} // Must be in range between 1 and 99!
                                                wrapper="div"
                                                repeat={2}
                                                cursor={true}
                                            />
                                        )
                                    }
                                </Text>
                                <Text
                                    h6
                                    size={18}
                                    css={{
                                        color: textColor,
                                        textAlign: 'center',
                                        '@xsMax': {
                                            fontSize: 18
                                        }
                                    }}

                                >
                                    🚀 Passionate Full Stack Web and App Developer 🚀
                                </Text>
                                <Text
                                    size={14}
                                    css={{
                                        color: textColor,
                                        textAlign: 'center',
                                        '@xsMax': {
                                            fontSize: 14
                                        }
                                    }}
                                >
                                    a dynamic Full Stack Web and App Developer on a mission to craft seamless digital experiences. With a solid foundation in both web and mobile application development, I bring a unique perspective to every project.
                                </Text>
                            </div>
                            <Spacer y={1} />
                            <Button
                                color={'secondary'}
                                flat
                                rounded
                                css={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}
                                onPress={() => { scrollContact() }}
                            >
                                Contact Me
                            </Button>
                        </div>

                    </Grid>
                    <Grid sm={4}  >
                        <div className={home.profileContainer}>
                            <Image
                                src={profileImg}
                                alt='profile img'
                                className={home.img}
                                priority='eager'
                            />
                        </div>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}

export default Home;