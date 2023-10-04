const  searchInput = document.getElementById('search-bar');

const searchButton = document.getElementById('searchBtn');
const recipeList = document.getElementById("recipe-list");

const showAllButton = document.getElementsByClassName("show-all");
const showVegButton = document.getElementsByClassName("show-veg");
const showNonVegButton = document.getElementsByClassName("show-non-veg");
const toggleButtons = document.querySelectorAll('.toggle-buttons button');
const like = document.getElementById("like");
const divLike = document.getElementById("text-like-comment");
const recipes= [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]


function displayRecipes(recipes) {
    recipeList.innerHTML = "";
    recipes.forEach(recipe => {
         
        const recipeDiv = document.createElement("div");
        recipeDiv.textContent = recipe.name;
        recipeDiv.textContent = recipe.name;
        recipeDiv.classList.add("recipe");
        const likeButton = document.createElement("span");
        likeButton.classList.add("like-button");
        likeButton.textContent = recipe.isLiked ? "❤️ Liked" : "🤍 Like";
        likeButton.addEventListener("click", () => {git 
            recipe.isLiked = !recipe.isLiked;
            likeButton.textContent = recipe.isLiked ? "❤️ Liked" : "🤍 Like";
            likeButton.classList.toggle("is-liked", recipe.isLiked);
        });
            recipeDiv.appendChild(likeButton);
            recipeList.appendChild(recipeDiv);
    });
}

function filterRecipes(type) {
    const filteredRecipes = recipes.filter(recipe => {
        return type === 'all' || recipe.type === type;
    });
    displayRecipes(filteredRecipes);
}

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const type = button.id === 'show-all' ? 'all' : button.id.replace('show-', '');
        filterRecipes(type);
    });
});

// Initial display of all recipes
displayRecipes(recipes);
