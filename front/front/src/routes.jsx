
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import Lead from "./components/Lead";
import CreateGroup from "./components/made/CreateGroup";
import PostingJournal from "./components/made/PostingJournal";

const routes =[
    {
        path:"/landing", element:(<Landing/>)
    },
    {
        path:"/", element:(<Lead/>)
    },

    {
    path:"/dashboard", element:(<Dashboard/>)
    },
    {
    path:"/creategroup", element:(<CreateGroup/>)
    },
    {
    path:"/postingjournal", element:(<PostingJournal/>)
    },


]
export default routes;