const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            toDoList: [
                {
                    testo: "shopping",
                    done: true,
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
    }
}


createApp(opzioni).mount('#app')