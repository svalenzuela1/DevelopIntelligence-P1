const app = new Vue({
    //targeting the div with the id #app
    el: "#app",
    data: {
        accountCreated: true,
        register: false,
        loggedIn: false,
        homePage: true,
        productsPage: false,
        contactPage: false,
        shirts: [
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/860d2c2d-ee3a-4316-b2a4-bb1bb5488eda/icon-clash-city-sleek-womens-running-tank-s9XV8p.png', name:'Nike Running Tank', price: 55},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1df2599d-0689-47d3-afbd-629f4461685a/sportswear-womens-boxy-t-shirt-cPPsNj.png', name:'Nike Boxy T-Shirt', price: 35},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b37f7031-c366-4bc5-b3e7-42238c6ab43f/sportswear-womens-t-shirt-plus-size-PqMl80.png', name:'Nike T-Shirt', price: 35},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6d15ee10-829d-43a7-af17-9731be6e2a3c/air-womens-crop-tank-H8P3Pg.png', name:'Nike Crop Tank', price: 50},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b675974-a456-4ccd-b60d-02495000c8b8/air-womens-mesh-short-sleeve-top-PzzW9P.png', name:'Nike Mesh T-Shirt', price: 45},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/caf66ed3-bf33-44c9-8b48-58babb3f8328/sportswear-womens-boxy-t-shirt-gnq4XK.png', name:'Nike Boxy T-Shirt', price: 35},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c942b618-e25a-4953-940d-b8bf882959c4/sportswear-nsw-womens-short-sleeve-top-DlDpmf.png', name:'Nike Short-Sleeve Top', price: 55},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/233540fe-2337-4748-adb2-54be69c2766a/dri-fit-womens-training-tank-0ctG9Q.png', name: 'Nike Training Tank', price: 25},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7e4cfb76-479a-4430-9330-fb9d82cbe9af/yoga-luxe-eyelet-womens-shelf-bra-tank-BCpbZ2.png', name:'Nike Shelf Tank', price: 55},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3e31313-ad9a-444a-93a7-139bb0b90a41/sportswear-womens-t-shirt-rQxr1q.png', name: 'Nike Sports Wear', price: 40},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/274e2bb9-6dc1-49f5-88c0-88f1ba983e20/city-sleek-womens-trail-running-tank-5kL8Pk.png', name: 'Nike Trail Running Tank', price: 25},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-fbfd98e4-2b03-49c1-9da8-0d5b97cb06c9/sportswear-womens-muscle-tank-QF3zD8.png', name: 'Nike Muscle Tank', price: 30}
        ],
        shoes: [
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/63f3f41b-20e5-4ba6-8598-7301ed4897b2/air-zoom-pegasus-38-womens-running-shoe-2bvJvW.png', name: 'Nike Air Zoom Pegasus', price: 160},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/752b1153-48d6-4926-802f-85a12769faba/zoomx-invincible-run-flyknit-womens-running-shoe-BswZG0.png', name: 'Nike ZoomX Invincible Run', price: 180},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d45c6026-5f5f-4b74-869b-50429f90489b/react-escape-run-womens-running-shoe-LP3Msz.png', name: 'Nike React Escape Run', price: 275},
            {image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f0f36fa-0493-4a24-af2b-4c5d2ea001a0/nikecourt-air-max-volley-womens-hard-court-tennis-shoe-RzhPd3.png', name: 'Nike Air Max Volley', price: 90}
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
            this.homePage = true
        },
        handleLogout: function(){
            this.loggedIn = false
        },
        toggleHome: function(){
            this.homePage = true
            this.productsPage = false
            this.contactPage = false
        },
        toggleProducts: function(){
            this.homePage = false
            this.productsPage = true
            this.contactPage = false
        }, 
        toggleContact: function(){
            this.homePage = false
            this.productsPage = false
            this.contactPage = true
        }
    }
})