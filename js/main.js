const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            toDoList: [
                {
                    testo: "shopping",
                    done: false,
                },
                {
                    testo: "cleaning",
                    done: false,
                },
                {
                    testo: "cooking",
                    done: false,
                },
                {
                    testo: "play videogames",
                    done: false,
                }
            ],

        }
    },

    methods:{

        deleteBtn(item){
           console.log(item) 

           this.toDoList.splice((item), 1)

        }
    }
}


createApp(opzioni).mount('#app')