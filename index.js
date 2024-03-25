console.log("script running..........")

document.querySelector('.fa-xmark').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.fa-bars').style.display = 'inline'
        document.querySelector('.fa-xmark').style.display = 'none'
    }
    else{
        document.querySelector('.fa-bars').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.fa-xmark').style.display = 'inline'
        }, 300);
    }

})



