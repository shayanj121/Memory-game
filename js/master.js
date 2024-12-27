const category = document.querySelectorAll('.category>ul')
const box = document.querySelectorAll('.box>div')
const main = document.querySelector('.box')
const info = document.querySelector('.info')
const alert = document.querySelector('.alert')
const tr = document.querySelector('.try')
const cate = document.querySelector('.cate')
const img = document.querySelectorAll('.box>div>div>img')
const resetButton = document.querySelector('.reset');



let animal = ['img/animal/bear.jpg','img/animal/bird.jpg','img/animal/cat.jpg','img/animal/cheetah.jpg','img/animal/gogol.jpg','img/animal/lion.jpg','img/animal/monkey.jpg','img/animal/zebra.jpg']
let fruit =['img/fruit/moz.jpg', 'img/fruit/berry.jpg', 'img/fruit/cherry.jpg', 'img/fruit/lemon.jpg', 'img/fruit/orange.jpg', 'img/fruit/pine.jpg', 'img/fruit/sib.jpg', 'img/fruit/straw.jpg']
let color=['img/color/black.jpg', 'img/color/blue.jpg', 'img/color/green.jpg', 'img/color/pink.jpg', 'img/color/purple.jpg', 'img/color/red.jpg', 'img/color/white.jpg', 'img/color/yellow.jpg']
let final = []
const number = []

let temp = []
let flag = 0
let att = []
let counter = 0





box.forEach(item=>{
    
    item.addEventListener('click', (e)=>{
        flag++
        att.push(item.getAttribute('data-name'))
        item.style.transform = 'rotateY(0deg)';
        temp.push(item)
        
        
        if(flag == 2){
            counter++
            tr.innerHTML='Try :'+counter
        }
        
        
        
        if(flag == 2){
            document.body.style.pointerEvents = "none";
            if(!(att[0] == att[1])){
                
                
                
                
                setTimeout(() => {
                    let remove = temp[0]
                    
                    
                    
                    item.style.transform = 'rotateY(180deg)'; 
                    remove.style.transform = 'rotateY(180deg)'; 
                    flag=0
                    temp=[]
                    att=[]
                    
                }, 500);
                setTimeout(() => {
                    document.body.style.pointerEvents = "all";
                }, 700);
                
                
            }else if((att[0] == att[1])){
                document.body.style.pointerEvents = "all";
                    item.dataset.info = 'on' 
                    temp[0].dataset.info = 'on' 
                    item.style.pointerEvents='none'
                    temp[0].style.pointerEvents='none'
                    temp=[]
                    flag=0
                    att=[]
                    if (checkAllDataInfo()){
                        setTimeout(() => {
                            document.body.style.pointerEvents = "all";
                            alert.style.display='flex'
                            main.style.display='none'
                            info.style.transform='translateY(200px)'
                        }, 100);
                    }
            }
        }
        else{

        }
        

    })
})

category.forEach(val=> {
    val.addEventListener('click', (e)=>{
        val.parentElement.style.display = 'none'
        info.style.display = 'flex'
        main.style.display = 'flex'
        main.style.opacity = '1'
        main.style.visibility = 'visible'
        let valu = e.target.innerText
        cate.innerHTML='Category :'+e.target.innerText
        
        switch (valu) {
            case 'Animals':
                final.push(...animal)
            
                break;
            case 'Fruits':
                final.push(...fruit)
                break;
            case 'Colors':
                final.push(...color)
                break;
        
            default:
                break;
        }
        
        

        for(let i = 0 ; i < 16 ; i++){
            randNum()
            
        }   

        let turn = 0
        for( let i = 0 ; i < 16 ; i += 2){
            img[number[i]].src=final[turn]
            img[number[i+1]].src=final[turn]
            box[number[i]].dataset.name=final[turn]
            box[number[i+1]].dataset.name=final[turn]
            turn++
        }
        

    })
    

    
    function randNum (){
        while(number.length < 16){
            let temp = parseInt(Math.random()*16)
            if(
                !number.includes(temp)
            ){
                number.push(temp)
            }
        }
       
        

        
    }

    
});
function checkAllDataInfo() {
    let allOn = true;
    box.forEach(item => {
        if (item.dataset.info !== 'on') {
            allOn = false;
        }
    });
    return allOn;
}

resetButton.addEventListener('click', () => {
    final = [];
    number.length = 0;
    temp = [];
    flag = 0;
    att = [];
    counter = 0;
    tr.innerHTML = 'Try : 0';
    box.forEach(item=>{
        item.style.pointerEvents='all'
    })
    
    box.forEach(item => {
        item.style.transform = 'rotateY(180deg)';
        item.dataset.info = '';
    });

    alert.style.display = 'none';
    info.style.transform = 'translateY(0)';
    main.style.display = 'flex';
    main.style.opacity = '1';
    main.style.visibility = 'visible';

    img.forEach(image => {
        image.src = '';
    });

    category.forEach(val => {
        val.parentElement.style.display = 'block';
    });

    cate.innerHTML = 'Category: ';
    main.style.display='none'
    
});
