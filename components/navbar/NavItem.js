import { IconContext } from 'react-icons';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { SiHomeadvisor, } from 'react-icons/si';
import { GiSkills, GiChariot, GiTiedScroll } from 'react-icons/gi';


const NavItems = [
    {
        name: "Home",
        url: "/#home",
        key: 'home',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <SiHomeadvisor />
                </span>
            </IconContext.Provider>
        )
    },
    {
        name: "Education",
        url: "/#education",
        key: 'education',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <GiTiedScroll />
                </span>
            </IconContext.Provider>
        )
    },
    {
        name: "Skills",
        url: "/#skills",
        key: 'skills',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <GiSkills />
                </span>
            </IconContext.Provider>
        )
    },
    {
        name: "Experience",
        url: "/#experience",
        key: 'experience',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <GiChariot />
                </span>
            </IconContext.Provider>
        )
    },
    {
        name: "Project",
        url: "/#project",
        key: 'project',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <AiOutlineFundProjectionScreen />
                </span>
            </IconContext.Provider>
        )
    },
    {
        name: "Contact",
        url: "/#contact",
        key: 'contact',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <RiContactsLine />
                </span>
            </IconContext.Provider>
        )
    },

];

export default NavItems;