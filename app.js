
const inputs = document.querySelector('body > div.quiz.py-4.bg-primary > div > div.text-center > input');
const formi = document.querySelector('.quiz-form');
const contain = document.getElementById('container');
const divs = document.querySelectorAll('div');


const correctAnswers = ["B","B","B","B"]


formi.addEventListener('submit', e => { 
    e.preventDefault();  
    var answer = document.querySelector('#answer');
    var btn1 = document.querySelector('#btn1')
    var pattern = /^[a-zA-Z]{1,12}$/
    if (pattern.test(answer.value)){
        btn1.setAttribute("disabled",true);
        answer.setAttribute("disabled",true);
        var newElement = document.createElement('input');
        newElement.setAttribute("type","text")
        newElement.setAttribute("disabled",true);
        newElement.setAttribute('value',answer.value);
        newElement.setAttribute('id',"nameans");
        newElement.classList.add("req_box")
        document.querySelector('.req').append(newElement)
        answer.value=""
        alert("ok");

    }else {
        alert("not ok");
    }
    
    });
function getCheckedValue(radios) {
        
}
document.querySelector(".btn.btn-light").addEventListener('click', e => {
    let nameans = document.querySelector("#nameans");
    if(nameans.value == "")
    return false;
    e.preventDefault();
    var checkedRadios = document.querySelectorAll('[type="radio"]:checked');
    var corectAnswerCount = 0
    checkedRadios.forEach((radio,index)=>{
        if(radio.value == correctAnswers[index]) corectAnswerCount +=25;
        console.log(radio,index);
    })
    annimateScore(corectAnswerCount)
});

function annimateScore(corectAnswerCount) {
    console.log(annimateScore);
    let step = 0;
    scrollTo(0,0);
    document.querySelector(".result").classList.remove('d-none');
        setInterval(() => {
            if(step >= corectAnswerCount){return false;}
            step++;
            document.querySelector(".result").querySelector('span').innerText = " "+step+"% ";
        }, 50);
}