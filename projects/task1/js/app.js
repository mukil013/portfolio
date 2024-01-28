let bigname = document.querySelector('.name');

function progressbar(){
    let {scrollTop,scrollHeight} = document.documentElement;
    let scrollable = (scrollTop/(scrollHeight-window.innerHeight))*100+'vw';
    document.querySelector('#progress').style.setProperty('--progress',scrollable);
}

window.onscroll = () => {
    let scrollY = window.scrollY;

    let top = Math.max(6, 50-scrollY / 2) + "vh";
    let left = Math.max(5, 50-scrollY / 2) + "vw";

    bigname.style.setProperty('--top',top);
    bigname.style.setProperty('--left',left);

    if(scrollY === 0 || scrollY === 50){
        bigname.style.fontSize = "8rem";
    }else{
        bigname.style.fontSize = "2rem";
    }

   
}

function content(ids){
    let allContent = document.querySelectorAll('.contentbox');
    allContent.forEach((content) => {
        content.classList.add('hidden');
    });

    let selected = document.querySelector(ids);
    if(selected){
        selected.classList.remove('hidden');
    }
}


document.addEventListener('scroll', progressbar);
document.addEventListener('scroll', nameMove)