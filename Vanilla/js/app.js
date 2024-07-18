const App = {
    //All of our selected HTML elements
    $:{
        menu: document.querySelector('[data-id="menu"]'),
        menuItems: document.querySelector('[data-id="menu-items"]'),
        resetBtn: document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
        squares: document.querySelectorAll('[data-id="square"]'),
    },

    init(){
        App.registerEventListeners();
    },

    registerEventListeners(){
        App.$.menu.addEventListener('click', (event) => {
            App.$.menuItems.classList.toggle('hidden');
        });
        App.$.resetBtn.addEventListener('click', (event) => {
            console.log("RestTheGame")
        });
        App.$.newRoundBtn.addEventListener('click', (event) => {
            console.log("AddNewRound")
        });

        App.$.squares.forEach((square) => {
            square.addEventListener('click', (event) => {
                console.log(`Square id : ${event.target.id} was clicked`);

                const icon = document.createElement('i');
                icon.classList.add("fa-solid", "fa-x", "yellow");

                square.replaceChildren(icon);
                //<i class="fa-solid fa-x turquoise"></i>
                //<i class="fa-solid fa-o yellow"></i>


            });
        });
    },
};

window.addEventListener('load', App.init);