const UpcomingMatch = (events) => {
    const MatchTitleElement = document.querySelector("#upcoming-match-title");
    const MatchListElement = document.querySelector("#upcoming-match");
    MatchTitleElement.innerHTML =`<h1 class="d-flex justify-content-center" style="margin-top:10px">Upcoming Match</h1>`;
    events.forEach(match => {
        MatchListElement.innerHTML +=`
        <div class="col-lg-6 col-md-6 col-12 " style="margin-top: 12px;">
            <div class="card border shadow-lg border-dark ">
                <img src="${match.strThumb}" class="card-img-top " alt="Match Image">
                <div class="row card-body">
                    <div class="col-auto d-flex flex-column mr-auto">
                        <h3 class="m-auto">${match.strHomeTeam}</h3>
                        <h6 class="m-auto">VS</h6>
                        <h3 class="m-auto">${match.strAwayTeam}<h3>
                    </div>
                    <div class="col-5 d-flex flex-column ">
                        <h5>${match.dateEvent}</h5>
                        <h5>At ${match.strTime} GMT+1</h5>
                        <h6>${match.strVenue}</h6>
                    </div>
                </div>
            </div>
        </div>`
    });
}
export default UpcomingMatch;