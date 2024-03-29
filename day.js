class Day {
    constructor(data) {
        this.data = data
    }

    createView(container, res_btns) {

    let card = document.createElement('div');

    card.classList.add('card')

    let title_el = document.createElement('h1');
    title_el.innerText = this.data.title;
    card.appendChild(title_el)

    let date_el = document.createElement('h2')
    date_el.innerText = this.data.date;
    card.appendChild(date_el);

    let media_el;
    let image_modal;
    if (this.data.media_type === 'video'){
        media_el = document.createElement('iframe');
        image_modal = document.createElement('iframe')
    }else{
        media_el = document.createElement('img');
        image_modal = document.createElement('img')
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
    media_el.classList.add('round')
    // modal.classList.add('custom_modal-content')
    //media_cont.classList.add('modal');

    media_cont.appendChild(media_el);
    card.appendChild(media_cont);

    let modal = document.createElement('div');
    modal.classList.add('custom_modal');
    image_modal.classList.add('custom_modal-content');
    image_modal.setAttribute('src', this.data.url)
    modal.appendChild(image_modal)
    card.appendChild(modal)

    media_el.addEventListener('click', function(){
        modal.style.display = 'block';
    })

    window.addEventListener('click', function(event){
        if (event.target === modal) {
            modal.style.display = "none";
          }
    })

    let explain_el = document.createElement('p');
    explain_el.innerText = this.data.explanation;
    card.appendChild(explain_el);

    container.prepend(card);
    }
}