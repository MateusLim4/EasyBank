const Modal = {
    open(){
        document.querySelector('.modal-overlay-background').classList.add('active');
        document.querySelector('.modal-overlay').classList.add('active')
        document.querySelector('#hamburger').classList.remove('on')
        document.querySelector('#close').classList.add('on')
    },
    close(){
        document.querySelector('.modal-overlay-background').classList.remove('active');
        document.querySelector('.modal-overlay').classList.remove('active')
        document.querySelector('#hamburger').classList.add('on')
        document.querySelector('#close').classList.remove('on')
        
    }
}  


