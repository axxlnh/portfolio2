class Motion{
    //클래스명은 대문자로 시작하는 것이 관례
    constructor(item){
        //선택자에 대한 설정값
        //이벤트에 대한 설정값
        this.init(item) //기본 설정값
        this.bindingEvent();
    }
    init(item){
        this.btn = document.querySelector(item.btn);
        this.btns = this.btn.querySelectorAll('li');

        this.pic = document.querySelector(item.pic);
        this.pics = this.pic.querySelectorAll('li');

        this.title = document.querySelector(item.title);
        this.titles = this.title.querySelectorAll('li');
        console.log(item);
    }

    bindingEvent(){
        this.btns.forEach((item, index)=>{
            item.addEventListener('click',(e)=>{
                e.preventDefault();

                this.activation(this.btns, index);
                this.activation(this.pics, index);
                this.activation(this.titles, index);
            })
        })

        window.addEventListener('mousemove',(e) => {
            const deco2 = document.querySelector('.deco2 img');
            const deco3 = document.querySelector('.deco3 img');
            // const img = this.pic.querySelector('li.on img');
            const img = document.querySelector('.pic li.on img');

            this.moveImg(deco2, e, 30, false);
            this.moveImg(deco3, e, 50, false);
            this.moveImg(img, e, 20, true);
            //함수앞에 붙는 this는 다른 함수를 호출하는 용도
        })
    }//event

    activation(item, index){
        for(let el of item){
            el.classList.remove('on');
        }
        item[index].classList.add('on');
    }
    moveImg(item, e, move, reverse){
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
}