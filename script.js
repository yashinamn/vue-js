'use strict'

const app = new Vue({
    el: '#app',
    data: {
        title: 'hello, Vue!',
        link: 'https://google.com',
        completeEl: '<a href="https://google.com">Google complete</a>',
        counter: 0,
        secondcounter: 0,
        x: 0, 
        y: 0,
        name: 'John',
        isRed: true,
        color: 'green',
        width: 200,
        show: true,
        products: [
            {title: 'Notebook', price: 200, quantity:1, img: 'https://via.placeholder.com/200x100'},
            {title: 'Mouse', price: 200, quantity:1, img: 'https://via.placeholder.com/200x100'},
            {title: 'Keyboard', price: 200, quantity:1, img: 'https://via.placeholder.com/200x100'},
        ]
    },
    computed: {
        output(){
            console.log('computed');
            return this.counter > 5 ? 'больше чем пять' : 'Меньше чем пять';  
        },
        myClasses() {
            return {
                red: this.isRed,
                blue: !this.isRed,
            }
        },
        myStyle() {
            return {
                backgroundColor: this.color,
                width: `${this.width}px`,
                height: `${this.width}px`,
            }
        },
    },
    methods: {
        sayHello() {
            this.title = 'foo';
            return this.title
        },
        increase(step, event) {
            console.log(event);
            this.counter += 2;
        },
        addProduct() {
           this.products.push( {title: 'Mouse', price: 200, quantity:1, img: 'https://via.placeholder.com/200x100'},)
        },
        getCoordinates() {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        result(){
            console.log('method');
            return this.counter > 5 ? 'больше чем пять' : 'Меньше чем пять';
        }
    }
});

