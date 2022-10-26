import React, { useRef, useEffect, useCallback, useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import { Container, Text, useTheme, Row, Spacer, Button, Tooltip } from '@nextui-org/react'
import resumeCss from '../assets/css/resume/resume.module.css';
import home from '../assets/css/home/home.module.css';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { getPdf } from '../action/getPdf';

const Resume = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    const ref = useRef(null);
    const iframeRef = useRef(null);
    const [showCustomViewer, setCustomViewer] = useState(false);


    const fetchPdf = async () => {
        try {
            const pdf = await getPdf('https://drive.google.com/file/d/1_Bd2b7RzDeWJvRoYBgAVy6zTGI1-ltjr/preview');
            const blob = new Blob([pdf], { type: 'text/html' })
            const url = URL.createObjectURL(blob);
            iframeRef.current.src = url;
            // console.log(pdf);
            // console.log(url);

            setTimeout(() => {
                URL.revokeObjectURL(url);
            }, 0)

        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        if (window !== 'undefined') {
            let os = window?.navigator?.userAgentData?.platform;
            let isSystemPdfViewerEnabled = window?.navigator?.pdfViewerEnabled;

            if (isSystemPdfViewerEnabled) {
                if (os === 'Android') {
                    setCustomViewer(true)
                    // fetchPdf();
                } else {
                    setCustomViewer(false);
                }
            } else {
                // fetchPdf();
                setCustomViewer(true)
            }
        }


    }, [])

    const downloadPdf = useCallback(fileId => {
        try {
            if (fileId) {
                let url = `https://drive.google.com/uc?id=${fileId}&export=download`;
                ref.current.href = url;
                ref.current.click();
            } else {
                console.log('invalid fileId.')
            }
        } catch (e) {
            console.log(e.message);
        }
    }, []);


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
                <Spacer y={1.5} />
                <p>os : {window?.navigator?.userAgentData?.platform} ishas system viewer: {JSON.stringify(window?.navigator?.pdfViewerEnabled)}</p>

                <Row justify='center' className={resumeCss.resumeContainer}>
                    {showCustomViewer && (
                        <div className={resumeCss.downloadContainer}>
                            <Tooltip
                                content='download resume'
                                contentColor={'secondary'}
                                placement='right'
                            >
                                <IconContext.Provider
                                    value={{ size: 20, color: 'var(--nextui-colors-secondaryLightContrast)', style: { cursor: 'pointer' } }}
                                >
                                    <HiOutlineDocumentDownload
                                        onClick={() => { downloadPdf('1_Bd2b7RzDeWJvRoYBgAVy6zTGI1-ltjr') }}
                                    />
                                </IconContext.Provider>
                            </Tooltip>
                            <a href='' download='debkanta_pradhan_Resume' ref={ref} style={{ display: 'none' }}>download</a>
                        </div>
                    )}
                    <iframe
                        className={resumeCss.iframe}
                        src={showCustomViewer ? 'https://drive.google.com/file/d/1_Bd2b7RzDeWJvRoYBgAVy6zTGI1-ltjr/preview' : 'https://drive.google.com/uc?id=1_Bd2b7RzDeWJvRoYBgAVy6zTGI1-ltjr'}
                        title="Debkanta Pradhan's resume"
                        frameBorder='0px'
                    // ref={iframeRef}
                    />
                </Row>
            </div>
        </Container>
    )
}

export default dynamic(() => Promise.resolve(Resume), { ssr: false });