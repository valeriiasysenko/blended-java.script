// ---------------------------------------------Task 1 ------------------------------------
// 1 - отримай body елемент і виведи його в консоль;
const refs = {
    body: document.body,
    mainTitle: document.querySelector("#title"),
    list: document.querySelector(".list"),
}
console.log(refs.body);

// 2 - отримай елемент id="title" і виведи його в консоль;

console.log(refs.mainTitle);

// 3 - отримай елемент class="list" і виведи його в консоль;

console.log(refs.list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const topics = document.querySelectorAll('[data-topic]');
console.log(topics);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const firstTopic = topics[0];
console.log(firstTopic);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const lastTopic = topics[topics.length - 1];
console.log(lastTopic);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

console.log(refs.mainTitle.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const listTitles = document.querySelectorAll("h3");
console.log(listTitles);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

listTitles.forEach((title) => title.classList.add("active"))

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

// console.log([...topics].find(topic => topic.dataset.topic === 'navigation'));

const topicNavigation = document.querySelector('[data-topic="navigation"]');
console.log(topicNavigation);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// topicNavigation.style.backgroundColor = "yellow";
topicNavigation.setAttribute("style", "background-color: yellow");

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const itemText = topicNavigation.lastElementChild;
itemText.textContent = "Я змінив тут текст!";
     
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const listItems = refs.list.children;
const listItem = [];
for (const item of listItems) {
    if (item.dataset.topic === currentTopic) {
        console.log(item);
        listItem.push(item);
    }
}

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

listItem[0].setAttribute("style", "background-color: blue");

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedTitle = document.querySelector(".completed");
console.log(completedTitle);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

const completedItem = completedTitle.parentElement;
completedItem.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const elementText = document.createElement("p");
elementText.textContent = "Об'єктна модель документа (Document Object Model)";
refs.mainTitle.append(elementText);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const newItem = document.createElement("li");
newItem.innerHTML = "<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>"
refs.list.append(newItem);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const newItemElements = [
    {
        newTitle: "Властивість innerHTML",
        newText: "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу",
      
    }
]

const markup = newItemElements.map((newElement) => `<li><h3>${newElement.newTitle}</h3><p>${newElement.newText}</p></li>`).join("");

refs.list.insertAdjacentHTML("beforeend", markup);

// 20 - очисти список

refs.list.innerHTML = "";

// ------------------------------------------------Task 2 -----------------------------
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const container = document.createElement("div");
container.classList.add("number-container");
refs.body.prepend(container);

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
let markupNumbers = "";
for (let i = 0; i < 100; i++){
    markupNumbers += `<div class="number">${randomNumber()}</div>`;
}
console.log(markupNumbers);
container.innerHTML = markupNumbers;

const elementNumber = document.querySelectorAll(".number");
Array.from(elementNumber).forEach(el => {
    const even = Number(el.textContent);
    if (even % 2 === 0) {
        el.classList.add("even");
    } else {
        el.classList.add("odd");
    }
});

// -----------------------------------------------Task 3--------------------------------------------

   // Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const spanInput = document.querySelector(".js-username-output");
const form = document.querySelector(".js-contact-form");
console.log(form);
const input = document.querySelector(".js-username-input");
console.log(input);
input.addEventListener("input", handleInputElem);
function handleInputElem(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length >= 6) {
        event.currentTarget.classList.remove("error");
        event.currentTarget.classList.add("success");
    } else {
        event.currentTarget.classList.remove("success");
        event.currentTarget.classList.add("error");
    }
    spanInput.textContent = event.currentTarget.value;
     
    if (spanInput.textContent.trim() === "") {
        spanInput.textContent = "Anonymous";
    }

}



// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

input.addEventListener("focus", handleFocusInput);
function  handleFocusInput (event) {
    if (event.currentTarget.value.trim() === "") {
        event.currentTarget.style.outline = '3px solid red';
    } else {
        event.currentTarget.style.outline = '3px solid green';
    }
}
// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

input.addEventListener("blur", handleBlurInput);
function handleBlurInput(event) {
    if (event.currentTarget.value === "") {
        event.currentTarget.style.outline = "3px solid red";
    } else {
        event.currentTarget.style.outline = "3px solid lime";
    }
}
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
 
form.addEventListener("submit", onBtnSubmit);

function onBtnSubmit (event) {
    event.preventDefault();
    const dataForm = new FormData(form);

    const obj = {
        userName: dataForm.get("userName"),
        checkbox: dataForm.get("accept"),
    }

    if ( obj.userName.trim() !== "" && obj.checkbox === "on") {
        const objUser = {};
        objUser.valueUserName = dataForm.get("userName");
        console.log(objUser);
    } else {
        alert();
    }
    spanInput.textContent = "Anonymous";
    form.reset();
}
// ----------------------------------------------- Task 4------------------------
 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const boxElement = document.querySelector(".box");
const btnDecrease = document.querySelector("#decrease");
const btnIncrease = document.querySelector("#increase");

btnDecrease.addEventListener("click", handleBtnClick);
btnIncrease.addEventListener("click", handleBtnClickIncrease);

boxElement.style.height = "50px";
boxElement.style.width = "50px";


function handleBtnClick() {
    const valueHeight = Number.parseInt(boxElement.style.height);
    const valueWidth = Number.parseInt(boxElement.style.width);
    console.log(valueHeight);
    console.log(valueWidth);

    const heightBtn = valueHeight - 20;
    const widthBtn = valueWidth - 20;

    boxElement.style.height = heightBtn + "px";
    boxElement.style.width = widthBtn + "px"; 
}

function handleBtnClickIncrease() {
    const valueHeight = Number.parseInt(boxElement.style.height);
    const valueWidth = Number.parseInt(boxElement.style.width);
    console.log(valueHeight);
    console.log(valueWidth);

    const heightBtn = valueHeight + 20;
    const widthBtn = valueWidth + 20;

    boxElement.style.height = heightBtn + "px";
    boxElement.style.width = widthBtn + "px"; 

}