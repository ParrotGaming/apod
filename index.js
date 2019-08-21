const container = document.getElementById('container');
const date_btn = document.getElementById('go');
const calandar = document.getElementById('date');
const min_date = new Date('1995, 06, 16');
const today_btn = document.getElementById('today_btn');

console.log(document.getElementsByName('res'))
const res_btns = document.getElementsByName('res')

var days = [];

calandar.setAttribute('max', today_date());

function today_date() {
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

    return `${year}-${month}-${day}`
}

console.log(min_date);

getData(10).catch(err => {
    console.log(err)
})


date_btn.addEventListener('click', function(event){
    let date_val = calandar.value;
    event.preventDefault()
    if (date_val < min_date || date_val > new Date()){
        console.log("out of range!!")
    } else {
        getData(date_val).catch(err =>{
            console.log(err)
        });
    }

})

today_btn.addEventListener('click', function(event){
    // let today = new Date();
    // let today_obj = new Date();
    // let year = today_obj.getFullYear();
    // let month = today_obj.getMonth()+ 1;
    // let day = today_obj.getDate();
    // console.log(month)
    // if(month < 10){
    //     month = '0' + month;
    // }

    // if (day < 10){
    //     day = '0' + day;
    // }

    event.preventDefault()

    getData(today_date())
})

async function getData(arg){

    var api_link

    if (typeof arg === 'string'){
        api_link = `https://api.nasa.gov/planetary/apod?api_key=${config.api_key}&date=${arg}`;
    } else {
        api_link = `https://api.nasa.gov/planetary/apod?api_key=${config.api_key}&count=${arg}`;

    }
    
    var response = await fetch(api_link)
    var data = await response.json();
    console.log(data);

    if (!(Array.isArray(data))){
        data = [data];
    }

    data.forEach(function(day){
        //  createView(day)
        days.push(new Day(day));
     })

     console.log(days);
     days.forEach(function(day){
         day.createView(container, res_btns)
     })

}