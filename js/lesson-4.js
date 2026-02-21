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
topicNavigation.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
