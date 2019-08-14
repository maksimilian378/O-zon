'use strict';
// чекбокс
const checkbox = document.querySelectorAll('#discount-checkbox');

checkbox.forEach(function(elem) {
    elem.addEventListener('change', function() {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
           this.nextElementSibling.classList.remove('checked');
        }
    });
});
// end чекбокс


// корзина
// открываем скрытый блок по нажатию на корзину!

const btnCart = document.getElementById('cart'); //получили кнопку корзины
const modalCart = document.querySelector('.cart'); //получили саму корзины
const closeBtn = document.querySelector('.cart-close'); //получили крестик в открытом блоке


btnCart.addEventListener('click', () => { //срабатывает ф-ция, которая добавляет свойство дисплей-блок
    modalCart.style.display = 'flex';  //если стиль в две строчки: backgroundColor = 'red';
    // modalCart.style.cssText = 'display: flex; font-size: 30px'   //Несколько свойств
    document.body.style.overflow = 'hidden';  //чтоб не крутился задний фон
});

closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';  //дисплей нон
    document.body.style.overflow = '';
});
// end корзина


// добваление товаров в корзину и их удаление
const cards = document.querySelectorAll('.goods .card'); //получаем все карточки в обертке goods
const cartWrapper = document.querySelector('.cart-wrapper'); //получаем блок внутри корзины с классом cart-wrapper
const cartEmpty = document.getElementById('cart-empty'); //чтоб выравнивались блки внутри корзины
const countGoods = document.querySelector('.counter'); //циферка вверху корзины по классу counter

cards.forEach((card) => { //каждая карточка
    const btn = card.querySelector('button'); //обращаемся к каждой карточке и получаем каждую нопку с классом btn

    btn.addEventListener('click', () => { //обращаемся к кнопке и вешаем событие click
        const cardClone = card.cloneNode(true); // создаем переменную клон-карта, true - копировать все внутри
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData(); //показываем (в консоли) сколько товаров добавили
    });
});

    // изменение циферки

        function showData() {
            const cardsCart = cartWrapper.querySelectorAll('.card'); // обращаемся ко всем карточкам внутри корзины
            countGoods.textContent = cardsCart.length;  // записываем сколько есть карточек
        }

    // конец изменения циферки

// конец работы с товаром


