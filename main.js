// btn ni yashirib boshqa btn qoyish
    const add = document.querySelector(".cart-add-btn");
    const active = document.querySelector(".add-cart-active-btn");

        add.addEventListener("click", function () {
            add.style.display = "none";
            active.style.display = "flex";
        });




// btn ichidagi + posilganda span textContneti 1 taga oshi borishi,
// btn ichidagi - posilganda span textContneti 1 taga kamayib borishi,
let addButtons = document.querySelector(".add-btn");
let removeButtons = document.querySelector(".remove-btn");
let spans = document.querySelector(".desert-btn-number");

addButtons.addEventListener("click", function () {
    if (spans.textContent >= 0) {
        spans.textContent++;
    } else if(spans.textContent > 9){
        spans.textContent = 10
    }

    
});

removeButtons.addEventListener("click", function () {
    if (spans.textContent > 0) {
        spans.textContent--;
    }
});
