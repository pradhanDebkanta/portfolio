import React, { } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import { Container, Text, useTheme, Row, Spacer, Button, Tooltip } from '@nextui-org/react'
import resumeCss from '../assets/css/resume/resume.module.css';
import home from '../assets/css/home/home.module.css';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { IconContext } from 'react-icons';


const Resume = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const downloadPdf = () => {

    }

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
                {/* <div className={resumeCss.download}>
                    <Tooltip
                        content='download resume'
                        contentColor={'secondary'}
                        placement='left'
                    >
                        <IconContext.Provider
                            onClick={() => { downloadPdf() }}
                            value={{ size: 20, color: 'var(--nextui-colors-secondaryLightContrast)', style: {} }}
                        >
                            <HiOutlineDocumentDownload />
                        </IconContext.Provider>
                    </Tooltip>
                </div> */}
                <Spacer y={1.5} />
                <Row justify='center' className={resumeCss.resumeContainer}>
                    <div className={resumeCss.downloadContainer}>
                        <Tooltip
                            content='download resume'
                            contentColor={'secondary'}
                            placement='right'
                        >
                            <IconContext.Provider
                                onClick={() => { downloadPdf() }}
                                value={{ size: 20, color: 'var(--nextui-colors-secondaryLightContrast)', style: {cursor: 'pointer'} }}
                            >
                                <HiOutlineDocumentDownload />
                            </IconContext.Provider>
                        </Tooltip>
                    </div>
                    {/* <iframe
                        className={resumeCss.iframe}

                        src="https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf"
                        allow="autoplay"
                        title="Debkanta Pradhan's resume"
                        frameBorder='0px'
                        referrerPolicy='no-referrer'
                    /> */}



                    <iframe
                        className={resumeCss.iframe}

                        src="https://drive.google.com/file/d/1_Bd2b7RzDeWJvRoYBgAVy6zTGI1-ltjr/preview"
                        title="Debkanta Pradhan's resume"
                        frameBorder='0px'
                        referrerPolicy='origin-when-cross-origin'
                    />
                </Row>
            </div>
        </Container>
    )
}

export default dynamic(() => Promise.resolve(Resume), { ssr: false });