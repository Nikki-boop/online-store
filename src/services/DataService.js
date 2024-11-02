

const catalog = [

    {
        "title": "Tomato",
        "image" : "../img/th.jpg",
        "price": 1.99,
        "category": "Veggie", 
        "_id": "1",
    },
    {
        "title": "Potato",
        "image" : "../img/pot.jpg",
        "price": 2.99,
        "category": "Veggie", 
        "_id": "2",
    },
    {
        "title": "Peach",
        "image" : "../img/peach.jpg",
        "price": 1.12,
        "category": "Fruit", 
        "_id": "3",
    },
    {
        "title": "Onion",
        "image" : "../img/onion.jpg",
        "price": 2.20,
        "category": "Veggie", 
        "_id": "4",
    },
    {
        "title": "Lime",
        "image" : "../img/lime.jpg",
        "price": 6.79,
        "category": "Fruit", 
        "_id": "5",
    },
    {
        "title": "Lemon",
        "image" : "../img/lemon.jpg",
        "price": 12.99,
        "category": "Fruit", 
        "_id": "6",
    },
    {
        "title": "Pepper",
        "image" : "../img/pepper.jpg",
        "price": 5.25,
        "category": "Veggie", 
        "_id": "7",
    },
    {
        "title": "Cilantro",
        "image" : "../img/cilantro.jpg",
        "price": 2.99,
        "category": "Veggie", 
        "_id": "8",
    },

]

class DataService{
    getProducts() {
        return catalog;
    }

    getCategories() {
        return['Veggie', 'Fruit'];
    }
}

export default DataService;

