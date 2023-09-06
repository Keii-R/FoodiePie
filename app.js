// GENERAL FUNCTIONS START 

function callAnimation(imgToAnimate,animationToPerform,timeOfAnimation)
{
    imgToAnimate.style.animation =  animationToPerform + " " + timeOfAnimation + " ease-in-out";
}

function resetAnimation(imgToAnimate)
{
    imgToAnimate.style.animation = "";
}

// GENERAL FUNCTIONS END 

//-----------------------------------------------------------------------------

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

var foodItemInfo = ["Ramen is a Japanese noodle dish featuring wheat noodles served in a flavorful broth with various toppings like meat and vegetables. It's a beloved comfort food known for its diverse regional styles.",
                    "Tacos are a Mexican street food classic, consisting of tortillas filled with various ingredients like seasoned meat, cheese, salsa, and veggies. They offer a burst of flavors and textures in every bite, making them a popular and versatile dish worldwide.",
                    "Spaghetti is a popular Italian pasta made from durum wheat semolina, typically served with a variety of sauces, including marinara, Alfredo, or carbonara. It's known for its long, thin cylindrical shape and versatility in Italian cuisine. Cooking times vary for different levels of firmness.",
                    "Chole Bhature is a North Indian dish consisting of spicy chickpea curry (chole) and deep-fried bread (bhature). It's a flavorful and satisfying combination, often served with pickles and yogurt, and is a popular street food and restaurant item in India."];
var foodItemImages = [];
foodItemImages[0] = './images/Food/item4.png';
foodItemImages[1] = './images/Food/item5.jpg';
foodItemImages[2] = './images/Food/item2.jpg';
foodItemImages[3] = './images/Food/item1.jpg';


var mainImg = document.getElementById('imagePlaceHolder');

var foodContectToReplace = document.getElementById('contentFood')
var contentFoodBox = document.getElementById('contentFoodBox');

var foodItemImg1 = document.getElementById('listImg1');
var foodItemImg2 = document.getElementById('listImg2');
var foodItemImg3 = document.getElementById('listImg3');
var foodItemImg4 = document.getElementById('listImg4');

placeImage(0);
placeInfo(0);

foodItemImg1.addEventListener('click',function(){
    placeImage(0);
    placeInfo(0);
})

foodItemImg2.addEventListener('click',function(){
    placeImage(1);
    placeInfo(1);
})

foodItemImg3.addEventListener('click',function(){
    placeImage(2);
    placeInfo(2);
})

foodItemImg4.addEventListener('click',function(){
    placeImage(3);
    placeInfo(3);
})

function placeImage(imgNumber)
{
    mainImg.src = foodItemImages[imgNumber];
    callAnimation(mainImg,"mainImgIntro","0.4s");
    setTimeout(function(){resetAnimation(mainImg)},400);
}

function placeInfo(infoNumber)
{
    foodContectToReplace.innerHTML = foodItemInfo[infoNumber];
    callAnimation(contentFoodBox,"mainContentIntro","0.4s");
    setTimeout(function(){resetAnimation(contentFoodBox)},400);
}

// FOOD CONTENT END

//-----------------------------------------------------------------------------