import Harry from "./Harry";
import Home from "./Home";
import NonFound from "./NonFound";
import TvShow from "./TvShow";

const RoutersApi = [
    {
        id:1,
        path:"/",
        element:<Home/>,
    },
    {
        id:2,
        path:"/tv-shows",
        element:<TvShow/>,
    },
    {
        id:3,
        path:"/harry-poter",
        element:<Harry/>,
    },
    {
        id:4,
        path:"/*",
        element:<NonFound/>,
    },
]
export default RoutersApi