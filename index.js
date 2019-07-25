const container = document.getElementById('container');
const btn = document.getElementById('go');
const calandar = document.getElementById('date');
const min_date = new Date('1995, 06, 16');
const today_btn = document.getElementById('today_btn');

console.log(document.getElementsByName('res'))
const res_btns = document.getElementsByName('res')
var res;

res_btns.forEach(function(rad){
    if (rad.checked){
        res = rad.value;
    }
})

console.log("AAAAAAAA",res)
console.log(min_date);

randomDays().catch(err => {
    console.log(err)
})


btn.addEventListener('click', function(){
    let date_val = calandar.value;
    getData(date_val).catch(err =>{
        console.log(err)
    });

})

today_btn.addEventListener('click', function(){
    let today = new Date();
    let today_obj = new Date();
    let year = today_obj.getFullYear();
    let month = today_obj.getMonth()+ 1;
    let day = today_obj.getDate();
    console.log(month)
    if(month < 10){
        month = '0' + month;
    }

    if (day < 10){
        day = '0' + day;
    }

    getData(`${year}-${month}-${day}`)
})

// getData().catch(err =>{
//     console.log(err)
// });

async function getData(day){

    let date_obj = new Date(day);
    if (date_obj < min_date){
        return;
    }

    let count = 10;
    const api_link = `https://api.nasa.gov/planetary/apod?api_key=${config.api_key}&date=${day}`;
    const response = await fetch(api_link)
    const data = await response.json();
    console.log(data);

    // data.forEach(function(day){
    //     createView(day)
    // })

    createView(data);
}

async function randomDays(){
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

    container.prepend(card);
}