class NavBar extends HTMLElement {
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML= `
            <nav class="navbar navbar-expand-md navbar-light" style="background-color: #04f5ff;">
                <div class="navbar-brand">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png" height="40" alt="PL Logo">
                </div>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <a href="#upcoming-match-title" class="nav-item nav-link ">Upcoming</a>
                        <a href="#previous-match-title" class="nav-item nav-link ">Previous</a>
                    </div>
                </div>
            </nav>`
    }
}

customElements.define("nav-bar", NavBar)