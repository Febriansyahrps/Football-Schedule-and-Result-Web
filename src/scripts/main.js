import axios from "axios";
import UpcomingMatch from "./component/upcoming-match.js";
import PreviousMatch from "./component/previous-match.js";
import "./component/nav-bar.js";
import "./component/footer-bar.js";

const main = ()  => {
    const ApiUrl = "https://www.thesportsdb.com/api/v1/json/1";

    const RenderUpcomingMatch = () => {
        axios.get(`${ApiUrl}/eventsnextleague.php?id=4328`)
        .then(response => {
            const results = response.data.events;
            UpcomingMatch(results)
        },() => {
            console.log("error")
        });
    }

    const RenderPreviousMatch = () => {
        axios.get(`${ApiUrl}/eventspastleague.php?id=4328`)
        .then(response => {
            const results = response.data.events;
            PreviousMatch(results)
        },() => {
            console.log("error")
        });
    }

    document.addEventListener("DOMContentLoaded", () =>{
        RenderUpcomingMatch();
        RenderPreviousMatch();
    });
}
export default main;
