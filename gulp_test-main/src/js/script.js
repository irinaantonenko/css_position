let app = new Vue({
    el: '#vue',
    data: {
        Title: 'suport you local artisans',
        text_notify: 'Free Delivery over $100. Gift with Purchase over $150',
        show_notify: true,
        show: false,
        input_text: null,
        products:[
            {   id: 12,
                title: 'Pepperoni Pizza',
                price: 24.99,
                discount: 5,
                image: 'image1.jpg'
            },
            {   id: 13,
                title: 'Baked Pancakes',
                price: 44.89,
                discount: 3,
                image: 'image1.jpg'
            },
            {   id: 14,
                title: 'Avocado',
                price: 20.00,
                image: 'image1.jpg'
            },
            {   id: 15,
                title: 'Bunch of Orange',
                price: 29.99,
                image: 'image1.jpg'
            }
        ],
        links: [
            {   
                name: 'Ocassions',
                title: 'Можливість',
                link: 'https://kyivfood.market/',
            },
            {   
                name: 'All Categories',
                title: 'Всі категорії',
                link: 'https://kyivfood.market/',
            },
            {   
                name: 'Gifts & Bundles',
                title: 'Подарунки і комплекти',
                link: 'https://kyivfood.market/',
            },
            {   
                name: 'Our brands',
                title: 'Наші бренди',
                link: 'https://kyivfood.market/',
            },
            {   
                name: 'About us',
                title: 'Про нас',
                link: 'https://kyivfood.market/',
            }
        ]
    },
    methods: {
        firstLetterToUpperCase: (text)=>{
            let text_arr = text.split(' ')
            let arr_Upper = text_arr.map(item=>{
               return item[0].toUpperCase() + item.slice(1)
            })
            return arr_Upper.join(' ');
        },
        hideNotify(){
            this.show_notify = false;
        },
        getNewPrice(product){
            let new_price = product.discount ? product.price * (1 - product.discount / 100) : product.price;

            return new_price ;
        },
    },
    filters: {
        viewPrice(value){
            return '$' + value.toFixed(2);
        }
    },
    computed: {
        
         averagePrice(){
            let average_price = 0;
            this.products.forEach(el=>{
                average_price += +el.price
            })
            return average_price / this.products.length;
        }
                
    }
})