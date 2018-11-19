var vm = new Vue({
    el: "#DADIV",
    data: {
        menyn: food,
        genderInfo: '',
        fullName: '',
        emailAdress: '',
        adress: '',
        phoneNumber: '',
        orders: {},
        checked: [],
        kontaktinfo: {
            Kön: '',
            Namn: '',
            Mail: '',
            Adress: '',
            Telefon: '',
            Beställning: ''
        }
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },

    methods: {
        markDone: function() {
            this.kontaktinfo.Kön = this.genderInfo;
            this.kontaktinfo.Namn = this.fullName;
            this.kontaktinfo.Mail = this.emailAdress;
            this.kontaktinfo.Adress = this.adress;
            this.kontaktinfo.Telefon = this.phoneNumber;
            this.kontaktinfo.Beställning = this.checked;
        },
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            socket.emit("addOrder", { orderId: this.getNext(), 
                                     details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left, 
                                               y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top},
                                     orderItems: ["Beans", "Curry"]
                                    });
        }
    }
})/*,
    el: '#dots',
    data: {
        orders: {},
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            socket.emit("addOrder", { orderId: this.getNext(), 
                                     details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left, 
                                               y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top},
                                     orderItems: ["Beans", "Curry"]
                                    });
        }
    }
});