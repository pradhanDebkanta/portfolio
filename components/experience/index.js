import React from 'react';
import { Container, Text, useTheme } from '@nextui-org/react';
import home from '../../assets/css/home/home.module.css';
import expCss from '../../assets/css/experience/experience.module.css';


const Experience = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    return (
        <div id='experience' className={expCss.container}>
            <Container>
                <Text
                    h1
                    size={40}
                    weight={'bold'}
                    css={{
                        textGradient: headerColor,
                        textAlign: 'center'
                    }}
                    className={`${home.responsiveText} ${expCss.headerText}`}
                >
                    Experience
                </Text>
            </Container>
        </div>
    )
}

export default Experience