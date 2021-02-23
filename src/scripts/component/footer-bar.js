class FooterBar extends HTMLElement {
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML= `    
        <div class="page-footer font-small blue" style="background-color: #04f5ff; margin-top: 20px;"> 
            <div class="footer-copyright text-center py-4">© 2020 Copyright : Premier League Schedule</div>
        </div>`
    }
}

customElements.define("footer-bar", FooterBar)