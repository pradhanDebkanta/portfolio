import React, { useMemo } from 'react';
import Image from 'next/image';
import { Container, Row, Text, useTheme } from '@nextui-org/react';
import gh from '../../assets/css/githubActivity/githubActivity.module.css';
import projectCss from '../../assets/css/project/project.module.css';


const GithubActivity = () => {
    const { isDark } = useTheme();
    const subHeaderColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "45deg, #21D4FD 0%, #B721FF 33%, #7434db 94%";

    const dateRange = useMemo(() => {
        let range = '';
        let date = new Date();
        let year = date.getFullYear();
        range = `${year - 1}-${year}`
        return range;
    }, [])

    return (
        <div className={gh.container}>
            <Container>
                <Text
                    h2
                    size={24}
                    css={{
                        textGradient: subHeaderColor
                    }}
                    className={projectCss.subTextHeader}
                >
                    Github Contribution: ( {dateRange} )
                </Text>
                <Row
                    justify='center'
                >
                    <Image
                        src={"https://ghchart.rshah.org/9750DD/pradhanDebkanta"}
                        alt="github activity"
                        height={'150px'}
                        width={'1000px'}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default GithubActivity

// https://ghchart.rshah.org/A555EC/pradhanDebkanta
// https://api.github.com/users/pradhanDebkanta/events?page=1
