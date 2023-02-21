console.log('hello todo')

// Descrizione:
// Rifare l’esercizio della to do list.
// Questa volta però lavorerete con un array di oggeti, quindi ogni todo sarà un oggetto, formato da due proprietà:
// TEXT, una stringa che indica il testo del todo
// DONE, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
// che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// oltre al click sul pulsante aggiungi, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const { createApp } = Vue

createApp({

    data() {
    return {
        toDoList : [
            {
                text: 'Prepare Lunch',
                done: true
            },
            {
                text: 'Eat Lunch',
                done: true
            },
            {
                text: 'Make Coffe',
                done: false
            },
            {
                text: 'Read the exercise',
                done: true
            },
            {
                text: 'Write the code for the exercise',
                done: true
            },
            {
                text: 'Be successful with the code?',
                done: false
            },
            {
                text: 'Taka a rest',
                done: true
            },
            {
                text: 'Keep Coding',
                done: false
            },
            {
                text: 'Go out for dinner',
                done: false
            },
            {
                text: 'Will I eat a good dinner?',
                done: true
            },
            {
                text: 'Sleep',
                done: false
            },
        ],

        inputText: '',
    }
    },

    methods: {

        addNewTask() {

			const newTask = {

                text: this.inputText,

                done: false
            }

			this.toDoList.push(newTask)

			this.inputText = ''
		},

        removeTask(onIndex) {

			this.toDoList.splice(onIndex, 1)
		},
    }

}).mount('#app')