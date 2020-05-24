function filterByCat(arg) {
    let categoryProducts = document.getElementsByClassName("listCategory")[0].children
    let textCat = null;
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
    let categoryProducts = document.getElementsByClassName("listCategory")[0].children
    for (let c of categoryProducts) {
        if (c.innerText == "All") {
            c.setAttribute("style", "font-weight: bold");
        } else { c.setAttribute("style", "font-weight: none"); }
    }
    showSliderValue()
}

function FilterCards(category) {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementsByClassName(category)[0];
    filter = input.innerText.toUpperCase();
    filter = filter.split(" ")[0]
    let categoryProducts = document.getElementsByClassName("listCategory")[0].children
    for (let c of categoryProducts) {
        if (c.innerText.toUpperCase().split(" ")[0] == filter) {
            c.setAttribute("style", "font-weight: bold");
        } else { c.setAttribute("style", "font-weight: none"); }
    }
    cardContainer = document.getElementById("productsItems");
    cards = cardContainer.getElementsByClassName("myItems");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].firstElementChild.classList[0];
        if (title.toUpperCase() == filter) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
    showSliderValue()
}

function showSliderValue() {
    var rangeSlider = document.getElementById("rs-range-line");
    var rangeBullet = document.getElementById("rs-bullet");
    var rangeColor = document.getElementById("lineFilterColor");

    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value / rangeSlider.max);
    rangeBullet.style.marginLeft = (bulletPosition * 215) + "px";
    rangeColor.style.width = (bulletPosition * 215) + "px";
    rangeColor.style.height = "10px";
    rangeColor.style.backgroundColor = "#50555D";
    rangeColor.style.borderRadius = "5px";


    var title, cards, cardContainer, price, i;
    cardContainer = document.getElementById("productsItems");
    cards = cardContainer.getElementsByClassName("myItems");
    let input = null;
    let filter = null;
    let categoryProducts = document.getElementsByClassName("listCategory")[0].children
    for (i = 0; i < categoryProducts.length; i++) {
        if (categoryProducts[i].style.fontWeight == "bold") {
            input = document.getElementsByClassName(categoryProducts[i].classList[0])[0];
            filter = input.innerText.toUpperCase();
            filter = filter.split(" ")[0]
        } else {
            filter == null;
        }
    }

    for (i = 0; i < cards.length; i++) {
        title = cards[i].firstElementChild.classList[0];
        price = cards[i].children[2].innerText
        price = parseFloat(price.substr(1, price.length));
        if (filter == "ALL" && (price <= parseFloat(rangeSlider.value))) {
            cards[i].style.display = "";
        } else if ((filter == null) && (price <= parseFloat(rangeSlider.value))) {
            cards[i].style.display = "";
        } else if ((title.toUpperCase() == filter) && (price <= parseFloat(rangeSlider.value))) {
            cards[i].style.display = "";
        } else { cards[i].style.display = "none"; }
    }
}

//// SHOPPING CART

function addToCart(n) {
    var tag = document.createElement("p");
    var text = document.getElementsByTagName("button")[n].parentElement.children[1].innerText
    var price = document.getElementsByTagName("button")[n].parentElement.children[2].innerText
    var element = document.getElementById("cart");
    var bool = false;
    for (let i = 0; i < element.childElementCount; i++) {
        let count = 1;
        if (element.children[i].innerText.includes(text)) {
            count = parseInt(element.children[i].innerText.substr(1, 1))
            element.children[i].remove();
            count++;
            let FinalText = document.createTextNode("x" + count + " " + text + " " + price);
            tag.appendChild(FinalText);
            bool = true;
        }
    }
    if (bool == false) {
        let FinalText = document.createTextNode("x" + 1 + " " + text + " " + price);
        tag.appendChild(FinalText);
    }
    element.appendChild(tag);
}

function clearCart() {
    var element = document.getElementById("cart");
    element.querySelectorAll('*').forEach(n => n.remove());
}

function payCart() {
    var element = document.getElementById("cart");
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementsByClassName("modal-content")[0].children[1];
    var sum = 0;
    if (element.childElementCount == 0) {
        alert("You cart shopping is empty")
        return;
    } else {
        // When the user clicks the button, open the modal 
        modal.style.display = "block";
        modalContent.innerText = "";
        for (let i = 0; i < element.childElementCount; i++) {
            sum = sum + (parseInt(element.children[i].innerText.split(" ")[3].substr(1, 2)) * parseInt(element.children[i].innerText.split(" ")[0].substr(1, 1)))
        }
        modalContent.innerText = element.innerText;
        var tag = document.createElement("p");
        var textSum = document.createTextNode("TOTAL AMOUNT DUE: " + sum)
        tag.appendChild(textSum);
        tag.style.fontWeight = "bold";
        modalContent.appendChild(tag);
        // element.querySelectorAll('*')
    }
}

// When the user clicks on <span> (x), close the modal
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
function close() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}