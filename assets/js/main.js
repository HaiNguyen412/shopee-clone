let btnRigister = document.querySelector('.header__navbar-item-click');
let formRigister = document.querySelector('.modal');

window.onscroll = () =>{
    btnRigister.classList.remove('fa-times');
    formRigister.classList.remove('active');

}
btnRigister.onclick = () =>{
    btnRigister.classList.toggle('fa-times');
    formRigister.classList.toggle('active');
}