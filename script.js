const start = () =>{
    var expand = document.getElementById('expand')
    expand.addEventListener('click', extend)
    
}

const extend = () =>{
    var sidebar = document.getElementById('sidebar')
    sidebar.classList.add('extended')
}

window.onload = start;
