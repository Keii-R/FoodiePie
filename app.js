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

    callAnimation(tempImg1,"slideRight","0.8s");
    callAnimation(tempImg2,"slideRight","0.8s");
    callAnimation(tempImg3,"slideLeft","0.8s");
    setTimeout(function(){resetAnimation(tempImg1)},800);
    setTimeout(function(){resetAnimation(tempImg2)},800);
    setTimeout(function(){resetAnimation(tempImg3)},800);
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

    callAnimation(tempImg1,"slideRight","0.8s");
    callAnimation(tempImg2,"slideLeft","0.8s");
    callAnimation(tempImg3,"slideLeft","0.8s");
    setTimeout(function(){resetAnimation(tempImg1)},800);
    setTimeout(function(){resetAnimation(tempImg2)},800);
    setTimeout(function(){resetAnimation(tempImg3)},800);
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