
// metodo Vue

const {createApp} = Vue;

// creazione istanza

createApp ({
    data () {
        return{
            salutiVue: "HELLO VUE WORLD!!!",
            myclass: "withe", 
            fCont: "flex-container",
            imgClass: "img_class",
            imgSaluto: "img/bitch-bitches-by-cool-Favim.com-2164950.jpg",
        }
    }
}).mount(`#app`)