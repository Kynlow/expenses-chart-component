const $btn = document.querySelector("button");
const $input = document.querySelector("#input1");
const $container = document.querySelector("#itemContainer");
const $h2 = document.querySelector("h2");

function createDiv(content) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.textContent = content
    $container.appendChild(newDiv)
}

$btn.addEventListener("click", (e) => {
    e.preventDefault();
    createDiv($input.value);
    $input.value = ""
    $h2.remove()
})