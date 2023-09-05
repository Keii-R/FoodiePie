// IMAGE CARAOSELL START

var images = [];
var index = 0;

images[0] = './images/img1.jpg';
images[1] = './images/img2.jpg';
images[2] = './images/img3.jpg';

console.log(images);

function rightShift(){
    let tempImg1 = document.getElementById('img1');
    let tempImg2 = document.getElementById('img2');
    let tempImg3 = document.getElementById('img3');
    index=1;

    console.log(index);
    tempImg3.src = images[index];
    index++;
    tempImg1.src = images[index];
    index=0;
    tempImg2.src = images[index];

    var tempImage = images[2];
    images[2]=images[1];
    images[1]=images[0];
    images[0]=tempImage;

    callAnimation(tempImg1,"slideRight","0.3s");
    callAnimation(tempImg2,"slideRight","0.3s");
    callAnimation(tempImg3,"slideLeft","0.3s");
    setTimeout(function(){resetAnimation(tempImg1)},300);
    setTimeout(function(){resetAnimation(tempImg2)},300);
    setTimeout(function(){resetAnimation(tempImg3)},300);
}

function leftShift(){
    let tempImg1 = document.getElementById('img1');
    let tempImg2 = document.getElementById('img2');
    let tempImg3 = document.getElementById('img3');
    index=1;

    console.log(index);
    tempImg1.src = images[index];
    index++;
    tempImg2.src = images[index];
    index=0;
    tempImg3.src = images[index];

    var tempImage = images[0];
    images[0]=images[1];
    images[1]=images[2];
    images[2]=tempImage;

    callAnimation(tempImg1,"slideRight","0.3s");
    callAnimation(tempImg2,"slideLeft","0.3s");
    callAnimation(tempImg3,"slideLeft","0.3s");
    setTimeout(function(){resetAnimation(tempImg1)},300);
    setTimeout(function(){resetAnimation(tempImg2)},300);
    setTimeout(function(){resetAnimation(tempImg3)},300);
}

function callAnimation(imgToAnimate,animationToPerform,timeOfAnimation)
{
    imgToAnimate.style.animation =  animationToPerform + " " + timeOfAnimation + " ease-in-out";
}

function resetAnimation(imgToAnimate)
{
    imgToAnimate.style.animation = "";
}

const rightBtn = document.getElementById('btnR')
rightBtn.addEventListener('click',rightShift)

const leftBtn = document.getElementById('btnL')
leftBtn.addEventListener('click',leftShift)

// IMAGE CARAOSELL END 

//-----------------------------------------------------------------------------

// QUOTES CARAOSELL START 

var quotesArray = ["One cannot think well, love well, sleep well, if one has not dined well.","People who love to eat are always the best people.","Food is not just eating energy. It's an experience.","Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people eat together.","Food is the ingredient that binds us together." ];

var repeatIndex=-1;
function quoteSelector(){
    var textTReplace = document.getElementById('textToReplace')
    var randomIndex = Math.floor(Math.random() * quotesArray.length);
    if(repeatIndex==randomIndex)
    {
        var randomIndex = Math.floor(Math.random() * quotesArray.length);
    }
    repeatIndex=randomIndex;
    textTReplace.innerHTML = quotesArray[randomIndex];
    console.log(Math.floor(Math.random()*5));
}   
    document.addEventListener('DOMContentLoaded', function() {
    quoteSelector();})

    
    const nxtbtn = document.getElementById('nextQuoteButton');
    nxtbtn.addEventListener('click', function(){
    var textTReplace = document.getElementById('textToReplace')
    var randomIndex = Math.floor(Math.random() * quotesArray.length);
    if(repeatIndex==randomIndex)
    {
        var randomIndex = Math.floor(Math.random() * quotesArray.length);
    }
    repeatIndex=randomIndex;
    textTReplace.innerHTML = quotesArray[randomIndex];
    callAnimation(quotesDQuotes,"textAnimate","0.6s");
    setTimeout(function(){resetAnimation(quotesDQuotes)},600);
    //console.log(Math.floor(Math.random()*5));
    });

// QUOTES CAROSELL END

//-----------------------------------------------------------------------------

// FOOD CONTENT START 



// FOOD CONTENT END

//-----------------------------------------------------------------------------