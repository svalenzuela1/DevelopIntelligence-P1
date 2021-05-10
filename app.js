const app = new Vue({
    //targeting the div with the id #app
    el: "#app",
    data: {
        accountCreated: true,
        register: false,
        loggedIn: true,
        products: [
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/860d2c2d-ee3a-4316-b2a4-bb1bb5488eda/icon-clash-city-sleek-womens-running-tank-s9XV8p.png', name:'Nike Running Tank', price: 55},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1df2599d-0689-47d3-afbd-629f4461685a/sportswear-womens-boxy-t-shirt-cPPsNj.png', name:'Nike Boxy T-Shirt', price: 35},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b37f7031-c366-4bc5-b3e7-42238c6ab43f/sportswear-womens-t-shirt-plus-size-PqMl80.png', name:'Nike T-Shirt', price: 35},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6d15ee10-829d-43a7-af17-9731be6e2a3c/air-womens-crop-tank-H8P3Pg.png', name:'Nike Crop Tank', price: 50},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b675974-a456-4ccd-b60d-02495000c8b8/air-womens-mesh-short-sleeve-top-PzzW9P.png', name:'Nike Mesh T-Shirt', price: 45},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/caf66ed3-bf33-44c9-8b48-58babb3f8328/sportswear-womens-boxy-t-shirt-gnq4XK.png', name:'Nike Boxy T-Shirt', price: 35},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c942b618-e25a-4953-940d-b8bf882959c4/sportswear-nsw-womens-short-sleeve-top-DlDpmf.png', name:'Nike Short-Sleeve Top', price: 55},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/233540fe-2337-4748-adb2-54be69c2766a/dri-fit-womens-training-tank-0ctG9Q.png', name: 'Nike Training Tank', price: 25},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7e4cfb76-479a-4430-9330-fb9d82cbe9af/yoga-luxe-eyelet-womens-shelf-bra-tank-BCpbZ2.png', name:'Nike Shelf Tank', price: 55},
            // {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1df2599d-0689-47d3-afbd-629f4461685a/sportswear-womens-boxy-t-shirt-cPPsNj.png'},
            // {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b37f7031-c366-4bc5-b3e7-42238c6ab43f/sportswear-womens-t-shirt-plus-size-PqMl80.png'},
            // {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6d15ee10-829d-43a7-af17-9731be6e2a3c/air-womens-crop-tank-H8P3Pg.png'},
            // {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b675974-a456-4ccd-b60d-02495000c8b8/air-womens-mesh-short-sleeve-top-PzzW9P.png'},
            // {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/caf66ed3-bf33-44c9-8b48-58babb3f8328/sportswear-womens-boxy-t-shirt-gnq4XK.png'},
            // {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c942b618-e25a-4953-940d-b8bf882959c4/sportswear-nsw-womens-short-sleeve-top-DlDpmf.png'},
            // {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b675974-a456-4ccd-b60d-02495000c8b8/air-womens-mesh-short-sleeve-top-PzzW9P.png'}
        ]
    },
    methods: {
        toggleLogin: function(){
            this.accountCreated = true
            this.register = false
        },
        toggleSignup: function(){
            this.accountCreated = false
            this.register = true
        },
        handleLogin: function(){
            this.loggedIn = true
        },
        handleLogout: function(){
            this.loggedIn = false
        }
    }
})