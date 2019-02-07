class Menu {
    constructor(element){
        this.element = element;
        this.menu = this.element.querySelector('.menu');
        this.menuButton = this.element.querySelector('.menu-button');
        this.x = this.element.querySelector('.x-button')
        this.menuButton.addEventListener('click', () => this.toggleMenu());
        this.x.addEventListener('click', () => this.toggleMenu())
        
    }
    toggleMenu () {
        this.menu.classList.toggle('menu-open');
        this.x.classList.toggle('none')
         this.menuButton.classList.toggle('none')
         
    }
}


let menus = document.querySelectorAll('.navigation').forEach(element => new Menu(element))


