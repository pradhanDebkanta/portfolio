import { icons } from '../../utils/icon/newIcon';
import { GiNotebook } from 'react-icons/gi';
import { BsBroadcast, BsCalendar4Event } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { GoInbox } from 'react-icons/go';
import { MdOutlineCampaign } from 'react-icons/md';
import { RiDashboardLine, RiTeamLine } from 'react-icons/ri';


const NavItems = [
    {
        name: "Dashboard",
        url: "/admin/codesta/dashboard",
        key: 'dashboard',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <RiDashboardLine />
                </span>
            </IconContext.Provider>
        )
    },
    {
        name: "Events",
        url: "/admin/codesta/events",
        key: 'events',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <BsCalendar4Event />
                </span>
            </IconContext.Provider>
        )
    },
    {
        name: "Members",
        url: "/admin/codesta/members",
        key: 'members',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <RiTeamLine />
                </span>
            </IconContext.Provider>
        )
    },
    {
        name: "Campaign",
        key: 'campaign',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <MdOutlineCampaign />
                </span>
            </IconContext.Provider>
        ),
        child: [
            {
                name: 'Unicast',
                url: "/admin/codesta/campaign/unicast",
                key: 'unicast',
                description: "Send a massage to perticular member, or communicate one to one.",
                icon: icons.activity
            },
            {
                name: 'BroadCast',
                url: "/admin/codesta/campaign/broadcast",
                key: 'broadcast',
                description: "Send a massage to every member, or broadcast a massage with all.",
                icon: (
                    <IconContext.Provider value={{ size: 24 }}>
                        <BsBroadcast />
                    </IconContext.Provider>
                )
            }
        ],
    },
    {
        name: "Others",
        key: 'study_meterials',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <GoInbox />
                </span>
            </IconContext.Provider>
        ),
        child: [
            {
                name: 'Study Meterials',
                url: "/admin/codesta/study-meterials",
                key: 'study_meterials',
                icon: (
                    <IconContext.Provider value={{ size: 24 }}>
                        <GiNotebook />
                    </IconContext.Provider>
                ),
                description: 'Share study meterials for the members.'
            }
        ]
    },
];

export default NavItems;