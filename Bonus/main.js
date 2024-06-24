
// metodo Vue

const {createApp} = Vue;

// creazione istanza

createApp ({
    data () {
        return{
            salutiVue: "HELLO VUE WORLD!!!",
            myclass: "withe", 
            fCont: "flex-container",
        }
    }
}).mount(`#app`)