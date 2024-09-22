const app = Vue.createApp({
    data() {
        return {
            itemName: null,
            itemNumber: null,
            itemImportant: false,
            shoppingList: [
                { name: 'Tomatoes', number: 5, important: false, inCart: false },
                { name: 'Bread', number: 1, important: false, inCart: false },
                { name: 'Soap', number: 1, important: true, inCart: false },
            ],
        }
    },
    methods: {
        addItem() {
            let item = {
                name: this.itemName,
                number: this.itemNumber,
                important: this.itemImportant,
                inCart: false
            }
            this.shoppingList.push(item)
            this.itemName = null
            this.itemNumber = null
            this.itemImportant = false
        },
        moveAllItemsIntoCart() {
            this.shoppingList.forEach(item => {
                item.inCart = true;
            });
        },
        removeItem(index) {
            this.shoppingList.splice(index, 1);
        }
    }
})
app.mount('#app')
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
