const $btn = document.querySelector("button");
const $input = document.querySelector("#input1");
const $container = document.querySelector("#itemContainer");
const $h2 = document.querySelector("h2");
const $label = document.querySelector("label");
const $main = document.querySelector("main");
const $form = document.querySelector("form");

let numberOfChild = 0;

function createDiv(content) {
	const newDiv = document.createElement("div");
	newDiv.classList.add("item");
	newDiv.textContent = content;

	const trash = document.createElement("button");
	trash.classList.add("trash");
	newDiv.appendChild(trash);
	$container.appendChild(newDiv);

    numberOfChild++;

	trash.addEventListener("click", () => {
		newDiv.remove();
        numberOfChild--;
		if (numberOfChild == 0) {
			$main.appendChild($h2);
		} else {
			$h2.remove();
		}
	});
}

$form.addEventListener("submit", (e) => {
	e.preventDefault();
	$h2.remove();
	createDiv($input.value);
	$form.reset();
});
