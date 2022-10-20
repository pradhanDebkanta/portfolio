import React from 'react'
import Head from 'next/head'
import { Container, Text, useTheme } from '@nextui-org/react'
import resumeCss from '../assets/css/resume/resume.module.css';
import home from '../assets/css/home/home.module.css';


const Resume = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    return (
        <Container>
            <Head>
                <title>Debkanta Pradhan&#39;s resume</title>
                <meta name="description" content="Full-stack developer, MERN stack developer" />
                <link rel="icon" href='/profile.png' />
            </Head>
            <div className={resumeCss.Container}>
                <Text
                    h1
                    size={36}
                    weight='bold'
                    css={{
                        textAlign: 'center',
                        textGradient: headerColor,
                    }}
                    className={`${home.responsiveText} ${resumeCss.headerText}`}
                >
                    My Resume
                </Text>
                <div style={{height: '100%'}}>

                    <iframe
                        src="https://drive.google.com/file/d/1_Bd2b7RzDeWJvRoYBgAVy6zTGI1-ltjr/preview" width="70%"  style={{minHeight: '500px'}}
                        // allow="autoplay"
                    >

                    </iframe>
                </div>
            </div>
        </Container>
    )
}

export default Resume