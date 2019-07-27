class Day {
    constructor(data) {
        this.data = data
    }

    createView(container, res_btns) {

    let card = document.createElement('div');

    let title_el = document.createElement('h1');
    title_el.innerText = this.data.title;
    card.appendChild(title_el)

    let date_el = document.createElement('h2')
    date_el.innerText = this.data.date;
    card.appendChild(date_el);

    let media_el;
    if (this.data.media_type === 'video'){
        media_el = document.createElement('iframe');
    }else{
        media_el = document.createElement('img');
    }

    var res;

    res_btns.forEach(function(rad){
        if (rad.checked){
            res = rad.value;
        }
    })

    if (res === 'hd') {
        media_el.setAttribute('src', this.data.hdurl);
        console.log('hfkhhguiuhgfuihgcfghuijhv', res)
    } else {
        media_el.setAttribute('src', this.data.url);
    }

    let media_cont = document.createElement('div');
    //media_cont.classList.add('modal');
    media_cont.addEventListener('click', function(){
        alert('hello')
    })

    media_cont.appendChild(media_el);
    card.appendChild(media_cont);

    let explain_el = document.createElement('p');
    explain_el.innerText = this.data.explanation;
    card.appendChild(explain_el);

    container.prepend(card);
    }
}