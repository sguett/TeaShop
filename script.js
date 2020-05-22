var productsTea = {
    products: ["product1", "product2", "product3", "product4"],
    price: [10, 20, 30, 40],
    category: ["classic", "Infusions", "Infusions", "Special Edition"],
}

// let products = document.getElementsByClassName("listCategoryItem2")[0];
function filterByCat(arg) {
    let categoryProducts = document.getElementsByClassName("listCategory")[0].children
    let textCat = null;
    console.log(arg)
    if (arg == "item1") {
        // textCat = categoryProducts[0].classList[0]
        AllCards();
    } else if (arg == "item2") {
        textCat = categoryProducts[1].classList[0];
        FilterCards(textCat);
    } else if (arg == "item3") {
        textCat = categoryProducts[2].classList[0]
        FilterCards(textCat);
    } else if (arg == "item4") {
        textCat = categoryProducts[3].classList[0]
        FilterCards(textCat);
    }
}

function AllCards() {
    let cardContainer = document.getElementById("productsItems");
    let cards = cardContainer.getElementsByClassName("myItems");
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "";
    }
}

function FilterCards(category) {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementsByClassName(category)[0];
    console.log(input)
    input.setAttribute("style", "font-weight: bold");
    filter = input.innerText.toUpperCase();
    cardContainer = document.getElementById("productsItems");
    cards = cardContainer.getElementsByClassName("myItems");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].firstElementChild.classList[0];
        if (title.toUpperCase() == filter || filter.includes(title.toUpperCase())) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// update value in select price (filter)

var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value / rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 578) + "px";
}