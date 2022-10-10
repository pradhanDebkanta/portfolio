import React from 'react';
import projectCss from '../../assets/css/project/project.module.css';
import home from '../../assets/css/home/home.module.css';
import { Container, Text, useTheme, Spacer, } from '@nextui-org/react';
import PersonalProject from './PersonalProject';
import ContributionProject from './ContributionProject';

const Project = ({ personalProject, contributeProject }) => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

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
                <PersonalProject personalProject={personalProject} />
                <Spacer y={1} />
                <ContributionProject contributeProject={contributeProject} />
            </Container >
        </div >
    )
}

export default Project;