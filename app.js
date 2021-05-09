const app = new Vue({
    //targeting the div with the id #app
    el: "#app",
    data: {
        accountCreated: true,
        register: false,
        loggedIn: false,
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