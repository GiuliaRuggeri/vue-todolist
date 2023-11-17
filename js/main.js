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
                },
            

            ],
            titolo:"",
        }
    },

    methods:{

        deleteBtn(item){
           console.log(item) 

           this.toDoList.splice((item), 1)

        },

        addItem(){
            let newItem={
                testo:this.titolo,
                done:false,
            }
            this.toDoList.push(newItem)
            this.titolo=""
        }
    }
}


createApp(opzioni).mount('#app')