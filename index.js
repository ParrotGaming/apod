const container = document.getElementById('container')

getData().catch(err =>{
    console.log(err)
});

async function getData(){
    let count = 10;
    const api_link = `https://api.nasa.gov/planetary/apod?api_key=${config.api_key}&count=${count}`;
    const response = await fetch(api_link)
    const data = await response.json();
    console.log(data);

    data.forEach(function(day){
        createView(day)
    })
}

function createView(info){

    let card = document.createElement('div');

    let title_el = document.createElement('h1');
    title_el.innerText = info.title;
    card.appendChild(title_el)

    let date_el = document.createElement('h2')
    date_el.innerText = info.date;
    card.appendChild(date_el);

    let media_el;
    if (info.media_type === 'video'){
        media_el = document.createElement('iframe');
    }else{
        media_el = document.createElement('img');
    }

    media_el.setAttribute('src', info.url);
    card.appendChild(media_el);

    let explain_el = document.createElement('p');
    explain_el.innerText = info.explanation;
    card.appendChild(explain_el);

    container.appendChild(card);
}