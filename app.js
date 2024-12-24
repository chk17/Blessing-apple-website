const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector ('.navbar_menu');
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
})

const golden = document.createElement("golden");
const silver = document.createElement("silver");
const real = document.createElement("real");
let array1 = ["乘风破浪会有时,\n直挂云帆济沧海","惟德动天，无远弗届","摩霄志在潜修羽，\n会接鸾凰别苇丛","莫愁前路无知己，\n天下谁人不识君","海阔凭鱼跃，\n天高任鸟飞","浩渺行无极，\n扬帆但信风","鹰击天风壮，\n鹏飞海浪春","我觉君非池中物，\n咫尺蛟龙云雨","百福具臻，事业有成","金光闪闪，前程似锦"];
let array2 = ["银辉映照，岁月静好","月色似水，祝你好梦","慢品人间烟火色，\n闲观万事岁月长","银鞍照白马，\n飒沓如流星","希君生羽翼，\n一化北溟鱼","清夜无尘，月色如银\n酒斟时、须满十分","时光清浅处，\n一步一安然","大志闲闲，放荡无拘，\n任其自然","世间萧散更何人，\n除非明月清风我","尽挹西江，细斟北斗，\n万象为宾客","心似白云常自在，\n意如流水任东西","抬眸四顾乾坤阔，\n日月星辰任我攀"]
let array3 = ["朝朝暮暮，岁岁平安","祝你吃好喝好！","时时是好时，\n日日是好日","种下这颗种子，收获一片果园，考虑一下？","你获得了苹果的能量！","但愿身长健，\n长与花为期","愿君千万岁，\n无岁不逢春","欢愉且胜意，\n万事皆可期","愿尔康强好眠食，\n百年欢乐未渠央"]
function getRandom (min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}
function g(){
    golden.classList.toggle('is-active');
    let image = document.getElementById('imgg');
    if (golden.classList.contains('is-active') ) {
        image.src = 'images/golden apple.jpg';
        myHeader1.innerText = [];
    } 
    else {
        let random = getRandom(0,array1.length-1)
        document.getElementById('imgg').src="images/white.jpg";
        myHeader1.innerText = array1[random];
    }
}
function s(){
    silver.classList.toggle('is-active');
    let image = document.getElementById('imgs');
    if (silver.classList.contains('is-active') ) {
        image.src = 'images/silver apple.jpg';
        myHeader2.innerText = [];
    } 
    else {
    let random = getRandom(0,array2.length-1)
    document.getElementById('imgs').src="images/white.jpg";
    myHeader2.innerText = array2[random];
    }
}
function r(){
    real.classList.toggle('is-active');
    let image = document.getElementById('imgr');
    if (real.classList.contains('is-active') ) {
        image.src = 'images/real apple.jpg';
        myHeader3.innerText = [];
    } 
    else {
    let random = getRandom(0,array3.length-1)
    document.getElementById('imgr').src="images/white.jpg";
    myHeader3.innerText = array3[random];
    }
}
