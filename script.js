// 1. Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша

const input = document.querySelector('input');
const ulElement = document.querySelector('ul');

input.addEventListener('keydown', function (event) {
    const liElement = document.createElement('li');
    ulElement.append(liElement);
    liElement.textContent = event.key
});

// 2. Вставить в разметку html теги input и div без js (просто предусмотреть в разметке). Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля)

const input = document.querySelector('input');

input.addEventListener('keyup', () => console.log(input.value))

// 2.1 Каждый раз при изменении данных в инпуте, в предусмотренный div должна вписываться фраза "Клиент набирает: ВСЕ_ЧТО_НАБРАНО_В_ИНПУТЕ".

const divTextArea = document.querySelector('div');

input.addEventListener('keyup', () => divTextArea.append('Клиент набирает: ВСЕ_ЧТО_НАБРАНО_В_ИНПУТЕ '))

// 3. Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст. После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('input');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    ul.append(liElement);
    input.value = ' '   
}) 

