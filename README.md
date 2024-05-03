<!-- !Задача 1 -->
З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
//=== виконано

<!-- !Задача 2 -->
Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.
<ul class="gallery"></ul>
Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().
Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами через CSS класи.
//=== виконано

<!-- !Задача 3 -->
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім'я для привітання. Обов'язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
//=== виконано

<!-- !Задача 4 -->
Напиши скрипт управління формою логіна.
1.Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
2.Під час відправлення форми сторінка не повинна перезавантажуватися.
3.Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
4.Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
5.При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
//=== виконано

<!-- !Задача 5 -->
Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
Для генерування випадкового кольору використовуй функцію getRandomHexColor().

Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.
//=== виконано

<!-- !Задача 6 -->
Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.
Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру. Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

Розміри першого <div> елемента мають бути 30px на 30px.
Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

<!-- !!! Рекомендації від ментора щодо внесення виправлень:
Завдання #6 вирішено неправильно

Функція createBoxes не повинна додавати дочірні елементи до boxesContainer у циклі, оскільки це призводить до кількох перемалювань та перерахунків розмірів. Замість цього вона повинна створити фрагмент або використати інший метод для збору всіх елементів та їх одночасної вставки в ДОМ.
Функція createBoxes має приймати amount - кількість дівів, яку потрібно створити, а у вас в amount приходить обʼєкт події, тому що ви передали її колбеком в івент-ліснер. В івент-ліснери потрібно передавати окремі колбеки, правильно іменовані за допомогою on або handle, а вже в них викликати функцію createBoxes і destroyBoxes відповідно.-->