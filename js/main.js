window.onload = () => {

    //버튼
    const btn = document.querySelector('.list');
    const btns = btn.querySelectorAll('li');

    //캐릭터
    const pic = document.querySelector('.pic');
    const pics = pic.querySelectorAll('li');

    //타이틀
    const title = document.querySelector('.title');
    const titles = title.querySelectorAll('li');

    //이벤트

    window.addEventListener('mousemove',(e)=> {
        const deco2 = document.querySelector('.deco2 img');
        const deco3 = document.querySelector('.deco3 img');
        const img = document.querySelector('.pic li.on img')

        moveImg(deco2, e, 20, true)//선택자, e, 이동값, 반대설정여부
        moveImg(deco3, e, 50, false)
        moveImg(img, e, 20, false)
    });

    function moveImg(item, e, move, reverse){
        let moveX;
        let moveY;

        if(reverse){
            moveX = -e.pageX;
            moveY = -e.pageY;
        }else{
            moveX = e.pageX;
            moveY = e.pageY;
        }


        item.style.left = moveX / move + 'px';
        item.style.top = moveY / move + 'px';
    }


    btns.forEach((item, index)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();

            activation(btns, index);
            activation(pics, index);
            activation(titles, index);
            
        })
    })
    //

    function activation(item, index){
        for(let el of item){
            el.classList.remove('on');
            //for of 문을 이용해 전체 아이템의 배열에 class를 순차적으로 돌면서 remove
        }
        item[index].classList.add('on');
        //전체를 리셋한 후 클릭한 대상에 addclass를 적용
    }

} //window
