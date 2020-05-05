import Login from "../views/login";
import Index from "../views/index";
import Set from "../views/n_four/Set"
import PersonalSet from "../views/n_four/PersonalSet"
import Release from "../views/n_four/Release";
import Collect from "../views/n_four/Collect";
import Medal from "../views/n_four/Medal";
import Special from "../views/n_four/Special";
import Sign from "../views/n_four/Sign";
import Courses from "../views/n_four/Courses";
import History from "../views/n_four/History";
import Apply from "../views/n_four/Apply";
import Help from "../views/n_four/Help";
import WendaInfo from "../views/n_three/primaryRoute/WendaInfo";
import SearchWenda from "../views/n_three/primaryRoute/SearchWenda";
import Daren from "../views/n_two/components/Daren.jsx"


export default [
    {
        path: "/help",
        component: Help
    },
    {
        path: "/apply",
        component: Apply
    },
    {
        path: "/history",
        component: History
    },
    {
        path: "/courses",
        component: Courses
    },
    {
        path: "/sign",
        component: Sign
    },
    {
        path: "/special",
        component: Special
    },
    {
        path: "/medal",
        component: Medal
    },
    {
        path: "/collect",
        component: Collect
    },
    {
        path: "/release",
        component: Release
    },
    {
        path: "/personalSet",
        component: PersonalSet
    },

    {
        path: "/set",
        component: Set
    },
    {
        path: "/login",
        component: Login
    }, {
        path: "/",
        component: Index,
    }, {
        path: "/wendainfo",
        component: WendaInfo
    }, {
        path: "/searchwenda",
        component: SearchWenda
    },

]