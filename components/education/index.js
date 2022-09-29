import React from 'react';
import eduCss from '../../assets/css/education/education.module.css';
import home from '../../assets/css/home/home.module.css';

import { Container, Text, useTheme } from '@nextui-org/react';


const Education = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    return (
        <div id='education' className={eduCss.container}>
            <Container>
                <Text
                    h1
                    size={40}
                    weight='bold'
                    css={{
                        textAlign: 'center',
                        textGradient: headerColor,
                    }}
                    className={`${home.responsiveText} ${eduCss.headerText}`}
                >
                    Education
                </Text>

            </Container>
        </div>
    )
}

export default Education