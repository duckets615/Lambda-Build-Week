class Menu {
    constructor(element){
        this.element = element;
        this.menu = this.element.querySelector('.menu');
        this.menuButton = this.element.querySelector('.menu-button');
        this.menuButton.addEventListener('click', () => this.toggleMenu());
        
    }
    toggleMenu () {
        this.menu.classList.toggle('menu-open');
    }
    
}

let menus = document.querySelectorAll('.navigation').forEach(element => new Menu(element))