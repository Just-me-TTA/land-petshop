// Ініціалізація кошика// Ініціалізація кошика// Ініціалізація кошика// Корзина// Повністю робочий кошик з коректною зміною кількості, кнопками, адаптацією до мобільних, без закриття при взаємодії

let cart = [];

const CART_KEY = 'paw_cart_v1';let cart = [];



// DOM елементиconst CART_KEY = 'paw_cart_v1';let cart = [];

let cartElement, cartItemsElement, cartTotalElement, cartToggleBtn, 

    cartCountSpan, cartNotify, closeCartBtn, orderBtn;



// Ініціалізація при завантаженні сторінки// DOM елементиconst CART_KEY = 'paw_cart_v1';let cart = [];

document.addEventListener('DOMContentLoaded', () => {

    console.log('DOM loaded');let cartElement, cartItemsElement, cartTotalElement, cartToggleBtn, 

    

    // Отримуємо всі потрібні елементи    cartCountSpan, cartNotify, closeCartBtn, orderBtn;

    cartElement = document.getElementById('cart');

    cartItemsElement = document.getElementById('cart-items');

    cartTotalElement = document.getElementById('cart-total');

    cartToggleBtn = document.getElementById('cart-toggle');// Ініціалізація при завантаженні сторінки// DOM елементиconst CART_KEY = 'paw_cart_v1';

    cartCountSpan = document.getElementById('cart-count');

    cartNotify = document.getElementById('cart-notify');document.addEventListener('DOMContentLoaded', () => {

    closeCartBtn = document.getElementById('close-cart');

    orderBtn = document.getElementById('order-cart');    // Отримуємо всі потрібні елементиlet cartElement, cartItemsElement, cartTotalElement, cartToggleBtn, 



    console.log('Cart elements:', {    cartElement = document.getElementById('cart');

        cartElement,

        cartItemsElement,    cartItemsElement = document.getElementById('cart-items');    cartCountSpan, cartNotify, closeCartBtn, orderBtn;// Отримати кошик з localStorage при завантаженні сторінкиlet cart = [];

        cartTotalElement,

        cartToggleBtn,    cartTotalElement = document.getElementById('cart-total');

        cartCountSpan,

        cartNotify,    cartToggleBtn = document.getElementById('cart-toggle');

        closeCartBtn,

        orderBtn    cartCountSpan = document.getElementById('cart-count');

    });

    cartNotify = document.getElementById('cart-notify');// Ініціалізація при завантаженні сторінкиdocument.addEventListener('DOMContentLoaded', () => {

    // Завантажуємо кошик

    loadCart();    closeCartBtn = document.getElementById('close-cart');



    // Додаємо обробники подій для кнопок "До кошика"    orderBtn = document.getElementById('order-cart');document.addEventListener('DOMContentLoaded', () => {

    const addButtons = document.querySelectorAll('.add-to-cart-btn');

    console.log('Found add buttons:', addButtons.length);

    

    addButtons.forEach(btn => {    // Завантажуємо кошик    // Отримуємо всі потрібні елементи  const savedCart = localStorage.getItem('cart');const cartElement = document.getElementById('cart');

        btn.addEventListener('click', function(e) {

            console.log('Button clicked');    loadCart();

            const card = this.closest('.product-card');

            console.log('Product card:', card);    cartElement = document.getElementById('cart');

            

            if (card) {    // Додаємо обробники подій для кнопок "До кошика"

                const id = card.dataset.id;

                const name = card.dataset.name;    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {    cartItemsElement = document.getElementById('cart-items');  if (savedCart) {const cartItemsElement = document.getElementById('cart-items');

                const price = parseInt(card.dataset.price);

                console.log('Product data:', { id, name, price });        btn.addEventListener('click', function() {

                addToCart(id, name, price);

            } else {            const card = this.closest('.product-card');    cartTotalElement = document.getElementById('cart-total');

                console.error('Could not find product card');

            }            const id = card.dataset.id;

        });

    });            const name = card.dataset.name;    cartToggleBtn = document.getElementById('cart-toggle');    cart = JSON.parse(savedCart);const cartTotalElement = document.getElementById('cart-total');



    // Додаємо обробники для кошика            const price = parseInt(card.dataset.price);

    cartToggleBtn.addEventListener('click', () => {

        console.log('Toggle cart');            addToCart(id, name, price);    cartCountSpan = document.getElementById('cart-count');

        cartElement.classList.toggle('show');

    });        });



    closeCartBtn.addEventListener('click', () => {    });    cartNotify = document.getElementById('cart-notify');    updateCartCount();const clearCartButton = document.getElementById('clear-cart');

        console.log('Close cart');

        cartElement.classList.remove('show');

    });

    // Додаємо обробники для кошика    closeCartBtn = document.getElementById('close-cart');

    // Запобігаємо закриттю кошика при кліку всередині

    cartElement.addEventListener('click', (e) => {    cartToggleBtn.addEventListener('click', () => {

        e.stopPropagation();

    });        cartElement.classList.toggle('show');    orderBtn = document.getElementById('order-cart');  }const cartToggleBtn = document.getElementById('cart-toggle');



    // Закриваємо кошик при кліку поза ним    });

    document.addEventListener('click', (e) => {

        if (!cartElement.contains(e.target) && !cartToggleBtn.contains(e.target)) {

            cartElement.classList.remove('show');

        }    closeCartBtn.addEventListener('click', () => {

    });

});        cartElement.classList.remove('show');    // Завантажуємо кошик});const cartCountSpan = document.getElementById('cart-count');



// Завантаження кошика з localStorage    });

function loadCart() {

    try {    loadCart();

        cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

        console.log('Loaded cart:', cart);    // Запобігаємо закриттю кошика при кліку всередині

    } catch (e) {

        console.error('Error loading cart:', e);    cartElement.addEventListener('click', (e) => {const cartNotify = document.getElementById('cart-notify');

        cart = [];

    }        e.stopPropagation();

    updateCartUI();

}    });    // Додаємо обробники подій для кнопок "До кошика"



// Збереження кошика в localStorage

function saveCart() {

    localStorage.setItem(CART_KEY, JSON.stringify(cart));    // Закриваємо кошик при кліку поза ним    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {// Додати товар до кошикаconst closeCartBtn = document.getElementById('close-cart');

    console.log('Saved cart:', cart);

}    document.addEventListener('click', (e) => {



// Додавання товару в кошик        if (!cartElement.contains(e.target) && !cartToggleBtn.contains(e.target)) {        btn.addEventListener('click', function() {

function addToCart(id, name, price) {

    console.log('Adding to cart:', { id, name, price });            cartElement.classList.remove('show');

    const existingItem = cart.find(item => item.id === id);

            }            const card = btn.closest('.product-card');function addToCart(productId) {const orderBtn = document.getElementById('order-cart');

    if (existingItem) {

        existingItem.qty += 1;    });

        console.log('Updated existing item:', existingItem);

    } else {});            const id = parseInt(card.dataset.id);

        cart.push({

            id: id,

            name: name,

            price: price,// Завантаження кошика з localStorage            const name = card.querySelector('h4').textContent;  const product = document.querySelector(`[data-id="${productId}"]`);

            qty: 1

        });function loadCart() {

        console.log('Added new item to cart');

    }    try {            const price = parseInt(card.dataset.price);

    

    saveCart();        cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

    updateCartUI();

    showNotification();    } catch (e) {              const name = product.querySelector('h3').textContent;// Завантаження кошика з localStorage

}

        cart = [];

// Оновлення інтерфейсу кошика

function updateCartUI() {    }            addToCart(id, name, price);

    console.log('Updating UI');

    cartItemsElement.innerHTML = '';    updateCartUI();

    let total = 0;

    let count = 0;}        });  const price = parseFloat(product.querySelector('.price').textContent.replace('₴', ''));function loadCart() {

    

    cart.forEach((item, idx) => {

        total += item.price * item.qty;

        count += item.qty;// Збереження кошика в localStorage    });

        

        const li = document.createElement('li');function saveCart() {

        li.innerHTML = `

            <span>${item.name}</span>    localStorage.setItem(CART_KEY, JSON.stringify(cart));    try {

            <div class="cart-controls">

                <button class="cart-qty-btn" data-action="minus" data-idx="${idx}">−</button>}

                <input type="number" min="1" value="${item.qty}" class="cart-qty-input" data-idx="${idx}">

                <button class="cart-qty-btn" data-action="plus" data-idx="${idx}">+</button>    // Додаємо обробники для кошика

                <span>${item.price * item.qty} грн</span>

                <button class="cart-remove" title="Видалити" data-idx="${idx}">✕</button>// Додавання товару в кошик

            </div>

        `;function addToCart(id, name, price) {    cartToggleBtn.addEventListener('click', () => {  const existingItem = cart.find(item => item.id === productId);    cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

        cartItemsElement.appendChild(li);

    });    const existingItem = cart.find(item => item.id === id);

    

    cartTotalElement.innerText = `Сума: ${total} грн`;            cartElement.classList.toggle('show');

    cartCountSpan.innerText = count;

    cartCountSpan.style.display = count > 0 ? 'block' : 'none';    if (existingItem) {

    

    // Додаємо обробники для кнопок в кошику        existingItem.qty += 1;    });    } catch (e) {

    setupCartControls();

}    } else {



// Налаштування контролів кошика        cart.push({

function setupCartControls() {

    // Кнопки +/-            id: id,

    cartItemsElement.querySelectorAll('.cart-qty-btn').forEach(btn => {

        btn.onclick = function() {            name: name,    closeCartBtn.addEventListener('click', () => {  if (existingItem) {    cart = [];

            const idx = parseInt(btn.dataset.idx);

            if (btn.dataset.action === "plus") {            price: price,

                cart[idx].qty += 1;

            } else if (btn.dataset.action === "minus" && cart[idx].qty > 1) {            qty: 1        cartElement.classList.remove('show');

                cart[idx].qty -= 1;

            }        });

            saveCart();

            updateCartUI();    }    });    existingItem.quantity += 1;  }

        };

    });    

    

    // Поле вводу кількості    saveCart();

    cartItemsElement.querySelectorAll('.cart-qty-input').forEach(input => {

        input.onchange = function() {    updateCartUI();

            const idx = parseInt(input.dataset.idx);

            let val = parseInt(input.value);    showNotification();    // Запобігаємо закриттю кошика при кліку всередині  } else {}

            if (isNaN(val) || val < 1) val = 1;

            cart[idx].qty = val;}

            saveCart();

            updateCartUI();    cartElement.addEventListener('click', (e) => {

        };

    });// Оновлення інтерфейсу кошика

    

    // Кнопки видаленняfunction updateCartUI() {        e.stopPropagation();    cart.push({function saveCart() {

    cartItemsElement.querySelectorAll('.cart-remove').forEach(btn => {

        btn.onclick = function() {    cartItemsElement.innerHTML = '';

            const idx = parseInt(btn.dataset.idx);

            cart.splice(idx, 1);    let total = 0;    });

            saveCart();

            updateCartUI();    let count = 0;

        };

    });          id: productId,  localStorage.setItem(CART_KEY, JSON.stringify(cart));

}

    cart.forEach((item, idx) => {

// Показ повідомлення про додавання в кошик

function showNotification() {        total += item.price * item.qty;    // Закриваємо кошик при кліку поза ним

    console.log('Showing notification');

    cartNotify.classList.add('show');        count += item.qty;

    setTimeout(() => {

        cartNotify.classList.remove('show');            document.addEventListener('click', (e) => {      name: name,}

    }, 2000);

}        const li = document.createElement('li');

        li.innerHTML = `        if (!cartElement.contains(e.target) && !cartToggleBtn.contains(e.target)) {

            <span>${item.name}</span>

            <div class="cart-controls">            cartElement.classList.remove('show');      price: price,

                <button class="cart-qty-btn" data-action="minus" data-idx="${idx}">−</button>

                <input type="number" min="1" value="${item.qty}" class="cart-qty-input" data-idx="${idx}">        }

                <button class="cart-qty-btn" data-action="plus" data-idx="${idx}">+</button>

                <span>${item.price * item.qty} грн</span>    });      quantity: 1function updateCartUI() {

                <button class="cart-remove" title="Видалити" data-idx="${idx}">✕</button>

            </div>});

        `;

        cartItemsElement.appendChild(li);    });  cartItemsElement.innerHTML = '';

    });

    // Завантаження кошика з localStorage

    cartTotalElement.innerText = `Сума: ${total} грн`;

    cartCountSpan.innerText = count;function loadCart() {  }  let total = 0, count = 0;

    cartCountSpan.style.display = count > 0 ? 'block' : 'none';

        try {

    // Додаємо обробники для кнопок в кошику

    setupCartControls();        cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];    cart.forEach((item, idx) => {

}

    } catch (e) {

// Налаштування контролів кошика

function setupCartControls() {        cart = [];  // Зберегти кошик в localStorage    total += item.price * item.qty;

    // Кнопки +/-

    cartItemsElement.querySelectorAll('.cart-qty-btn').forEach(btn => {    }

        btn.onclick = function() {

            const idx = parseInt(btn.dataset.idx);    updateCartUI();  localStorage.setItem('cart', JSON.stringify(cart));    count += item.qty;

            if (btn.dataset.action === "plus") {

                cart[idx].qty += 1;}

            } else if (btn.dataset.action === "minus" && cart[idx].qty > 1) {

                cart[idx].qty -= 1;  updateCartCount();

            }

            saveCart();// Збереження кошика в localStorage

            updateCartUI();

        };function saveCart() {  showAddToCartAnimation(product);    const li = document.createElement('li');

    });

        localStorage.setItem(CART_KEY, JSON.stringify(cart));

    // Поле вводу кількості

    cartItemsElement.querySelectorAll('.cart-qty-input').forEach(input => {}}    li.innerHTML = `

        input.onchange = function() {

            const idx = parseInt(input.dataset.idx);

            let val = parseInt(input.value);

            if (isNaN(val) || val < 1) val = 1;// Додавання товару в кошик      <span>${item.name}</span>

            cart[idx].qty = val;

            saveCart();function addToCart(id, name, price) {

            updateCartUI();

        };    const existingItem = cart.find(item => item.id === id);// Оновити лічильник товарів у кошику      <div class="cart-controls">

    });

        

    // Кнопки видалення

    cartItemsElement.querySelectorAll('.cart-remove').forEach(btn => {    if (existingItem) {function updateCartCount() {        <button class="cart-qty-btn" data-action="minus" data-idx="${idx}">−</button>

        btn.onclick = function() {

            const idx = parseInt(btn.dataset.idx);        existingItem.qty += 1;

            cart.splice(idx, 1);

            saveCart();    } else {  const cartCount = document.querySelector('.cart-count');        <input type="number" min="1" value="${item.qty}" class="cart-qty-input" data-idx="${idx}">

            updateCartUI();

        };        cart.push({

    });

}            id: id,  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);        <button class="cart-qty-btn" data-action="plus" data-idx="${idx}">+</button>



// Показ повідомлення про додавання в кошик            name: name,

function showNotification() {

    cartNotify.classList.add('show');            price: price,  cartCount.textContent = totalItems;        <span>${item.price * item.qty} грн</span>

    setTimeout(() => {

        cartNotify.classList.remove('show');            qty: 1

    }, 2000);

}        });  cartCount.style.display = totalItems > 0 ? 'block' : 'none';        <button class="cart-remove" title="Видалити" data-idx="${idx}">&#10005;</button>

    }

    }      </div>

    saveCart();

    updateCartUI();    `;

    showNotification();

}// Анімація додавання до кошика    cartItemsElement.appendChild(li);



// Оновлення інтерфейсу кошикаfunction showAddToCartAnimation(product) {  });

function updateCartUI() {

    cartItemsElement.innerHTML = '';  const animation = document.createElement('div');  cartTotalElement.innerText = `Сума: ${total} грн`;

    let total = 0;

    let count = 0;  animation.className = 'add-to-cart-animation';  cartCountSpan.innerText = count;

    

    cart.forEach((item, idx) => {  product.appendChild(animation);

        total += item.price * item.qty;

        count += item.qty;    // Додаємо stopPropagation на інтерактивні елементи, щоб не закривався кошик при взаємодії

        

        const li = document.createElement('li');  setTimeout(() => {  cartItemsElement.querySelectorAll('button, input').forEach(el => {

        li.innerHTML = `

            <span>${item.name}</span>    animation.remove();    el.addEventListener('mousedown', function(e){ e.stopPropagation(); }, true);

            <div class="cart-controls">

                <button class="cart-qty-btn" data-action="minus" data-idx="${idx}">−</button>  }, 1000);    el.addEventListener('touchstart', function(e){ e.stopPropagation(); }, true);

                <input type="number" min="1" value="${item.qty}" class="cart-qty-input" data-idx="${idx}">

                <button class="cart-qty-btn" data-action="plus" data-idx="${idx}">+</button>}  });

                <span>${item.price * item.qty} грн</span>

                <button class="cart-remove" title="Видалити" data-idx="${idx}">✕</button>

            </div>

        `;// Відкрити/закрити кошик  // Обробка кнопок +/-

        cartItemsElement.appendChild(li);

    });document.getElementById('cart-toggle').addEventListener('click', () => {  cartItemsElement.querySelectorAll('.cart-qty-btn').forEach(btn => {

    

    cartTotalElement.innerText = `Сума: ${total} грн`;  showCart();    btn.onclick = function(e) {

    cartCountSpan.innerText = count;

    });      const idx = parseInt(btn.dataset.idx, 10);

    // Додаємо обробники для кнопок в кошику

    setupCartControls();      if (btn.dataset.action === "plus") {

}

// Показати кошик        cart[idx].qty += 1;

// Налаштування контролів кошика

function setupCartControls() {function showCart() {      } else if (btn.dataset.action === "minus" && cart[idx].qty > 1) {

    // Кнопки +/-

    cartItemsElement.querySelectorAll('.cart-qty-btn').forEach(btn => {  const cartModal = document.createElement('div');        cart[idx].qty -= 1;

        btn.onclick = function() {

            const idx = parseInt(btn.dataset.idx);  cartModal.className = 'cart-modal';      }

            if (btn.dataset.action === "plus") {

                cart[idx].qty += 1;        saveCart(); updateCartUI();

            } else if (btn.dataset.action === "minus" && cart[idx].qty > 1) {

                cart[idx].qty -= 1;  let cartContent = '<div class="cart-content">';    }

            }

            saveCart();  cartContent += '<h2>Кошик</h2>';  });

            updateCartUI();

        };    // Обробка інпуту кількості

    });

      if (cart.length === 0) {  cartItemsElement.querySelectorAll('.cart-qty-input').forEach(input => {

    // Поле вводу кількості

    cartItemsElement.querySelectorAll('.cart-qty-input').forEach(input => {    cartContent += '<p>Кошик порожній</p>';    input.onchange = function(e) {

        input.onchange = function() {

            const idx = parseInt(input.dataset.idx);  } else {      const idx = parseInt(input.dataset.idx, 10);

            let val = parseInt(input.value);

            if (isNaN(val) || val < 1) val = 1;    cartContent += '<ul>';      let val = parseInt(input.value, 10);

            cart[idx].qty = val;

            saveCart();    let total = 0;      if (isNaN(val) || val < 1) val = 1;

            updateCartUI();

        };          cart[idx].qty = val;

    });

        cart.forEach(item => {      saveCart(); updateCartUI();

    // Кнопки видалення

    cartItemsElement.querySelectorAll('.cart-remove').forEach(btn => {      const itemTotal = item.price * item.quantity;    }

        btn.onclick = function() {

            const idx = parseInt(btn.dataset.idx);      total += itemTotal;  });

            cart.splice(idx, 1);

            saveCart();        // Видалення позиції

            updateCartUI();

        };      cartContent += `  cartItemsElement.querySelectorAll('.cart-remove').forEach(btn => {

    });

}        <li>    btn.onclick = function(e) {



// Показ повідомлення про додавання в кошик          <span>${item.name}</span>      const idx = parseInt(btn.dataset.idx, 10);

function showNotification() {

    cartNotify.classList.add('show');          <span>${item.quantity} x ${item.price}₴ = ${itemTotal}₴</span>      cart.splice(idx, 1);

    setTimeout(() => {

        cartNotify.classList.remove('show');          <button onclick="removeFromCart(${item.id})">Видалити</button>      saveCart();

    }, 2000);

}        </li>      updateCartUI();

      `;    }

    });  });

    }

    cartContent += '</ul>';

    cartContent += `<p class="cart-total">Всього: ${total}₴</p>`;function removeFromCart(id) {

    cartContent += '<button onclick="checkout()">Оформити замовлення</button>';  cart = cart.filter(it => it.id !== id);

  }  saveCart();

    updateCartUI();

  cartContent += '<button onclick="closeCart()">Закрити</button>';}

  cartContent += '</div>';

  // Додаємо обробник для всіх кнопок "До кошика"

  cartModal.innerHTML = cartContent;document.querySelectorAll('.add-to-cart-btn').forEach(btn => {

  document.body.appendChild(cartModal);  btn.addEventListener('click', function() {

}    const card = btn.closest('.product-card');

    const id = card.dataset.id;

// Видалити товар з кошика    const name = card.dataset.name;

function removeFromCart(productId) {    const price = parseInt(card.dataset.price, 10);

  cart = cart.filter(item => item.id !== productId);    let item = cart.find(i => i.id === id);

  localStorage.setItem('cart', JSON.stringify(cart));    if (item) {

  updateCartCount();      item.qty += 1;

  showCart(); // Оновити вікно кошика    } else {

}      cart.push({ id, name, price, qty: 1 });

    }

// Закрити кошик    saveCart();

function closeCart() {    updateCartUI();

  const cartModal = document.querySelector('.cart-modal');    showCartNotify();

  if (cartModal) {  });

    cartModal.remove();});

  }

}function showCartNotify() {

  cartNotify.classList.add('show');

// Оформлення замовлення  setTimeout(() => cartNotify.classList.remove('show'), 1200);

function checkout() {}

  if (cart.length === 0) {

    alert('Кошик порожній');// Очистити кошик

    return;clearCartButton.addEventListener('mousedown', function(e){ e.stopPropagation(); }, true);

  }clearCartButton.addEventListener('touchstart', function(e){ e.stopPropagation(); }, true);

  clearCartButton.addEventListener('click', function(e) {

  // Тут буде логіка оформлення замовлення  cart = [];

  alert('Функція оформлення замовлення в розробці');  saveCart();

}  updateCartUI();

});

// Прив'язуємо обробники подій до кнопок "Додати в кошик"

document.querySelectorAll('.add-to-cart').forEach(button => {// Відкрити кошик

  button.addEventListener('click', (e) => {cartToggleBtn.addEventListener('mousedown', function(e){ e.stopPropagation(); }, true);

    const productId = parseInt(e.target.closest('.product-card').dataset.id);cartToggleBtn.addEventListener('touchstart', function(e){ e.stopPropagation(); }, true);

    addToCart(productId);cartToggleBtn.addEventListener('click', function(e) {

  });  cartElement.classList.add('open');

});});

// Закрити кошик (іконка х)
closeCartBtn.addEventListener('mousedown', function(e){ e.stopPropagation(); }, true);
closeCartBtn.addEventListener('touchstart', function(e){ e.stopPropagation(); }, true);
closeCartBtn.addEventListener('click', function(e) {
  cartElement.classList.remove('open');
});

// Закрити кошик при кліку поза ним (mousedown для всіх браузерів)
document.addEventListener('mousedown', function(e) {
  if (!cartElement.contains(e.target) && !cartToggleBtn.contains(e.target)) {
    cartElement.classList.remove('open');
  }
});
document.addEventListener('touchstart', function(e) {
  if (!cartElement.contains(e.target) && !cartToggleBtn.contains(e.target)) {
    cartElement.classList.remove('open');
  }
});

// Обробка форми замовлення
const cartContent = document.getElementById('cart-content');
const orderForm = document.getElementById('order-form');
const backToCartBtn = document.getElementById('back-to-cart');

orderBtn.addEventListener('mousedown', function(e){ e.stopPropagation(); }, true);
orderBtn.addEventListener('touchstart', function(e){ e.stopPropagation(); }, true);
orderBtn.addEventListener('click', function(e) {
  if (cart.length === 0) {
    alert('Кошик порожній!');
    return;
  }
  cartContent.style.display = 'none';
  orderForm.style.display = 'block';
});

backToCartBtn.addEventListener('mousedown', function(e){ e.stopPropagation(); }, true);
backToCartBtn.addEventListener('touchstart', function(e){ e.stopPropagation(); }, true);
backToCartBtn.addEventListener('click', function() {
  orderForm.style.display = 'none';
  cartContent.style.display = 'block';
});

// Нова Пошта інтеграція
const npCitySearch = document.getElementById('npCitySearch');
const npCitiesList = document.getElementById('npCitiesList');
const npWarehouse = document.getElementById('npWarehouse');
const npCityRef = document.getElementById('npCityRef');
const npCityName = document.getElementById('npCityName');

let citySearchTimeout;

npCitySearch.addEventListener('input', (e) => {
  clearTimeout(citySearchTimeout);
  const query = e.target.value.trim();
  
  if (query.length < 2) {
    npCitiesList.innerHTML = '';
    npCitiesList.classList.remove('active');
    return;
  }

  citySearchTimeout = setTimeout(async () => {
    try {
      const response = await fetch(`/api/nova-poshta/cities?q=${encodeURIComponent(query)}`);
      const cities = await response.json();
      
      if (cities.length > 0) {
        npCitiesList.innerHTML = cities.map(city => `
          <div data-ref="${city.Ref}" data-name="${city.Present}">${city.Present}</div>
        `).join('');
        npCitiesList.classList.add('active');
      } else {
        npCitiesList.innerHTML = '<div>Міста не знайдено</div>';
        npCitiesList.classList.add('active');
      }
    } catch (error) {
      console.error('Failed to fetch cities:', error);
    }
  }, 300);
});

npCitiesList.addEventListener('click', async (e) => {
  const cityDiv = e.target.closest('div');
  if (!cityDiv || !cityDiv.dataset.ref) return;

  const cityRef = cityDiv.dataset.ref;
  const cityName = cityDiv.dataset.name;

  npCitySearch.value = cityName;
  npCityRef.value = cityRef;
  npCityName.value = cityName;
  npCitiesList.classList.remove('active');

  try {
    const response = await fetch(`/api/nova-poshta/warehouses/${cityRef}`);
    const warehouses = await response.json();

    npWarehouse.innerHTML = `
      <option value="">Оберіть відділення</option>
      ${warehouses.map(w => `
        <option value="${w.Description}">${w.Description}</option>
      `).join('')}
    `;
    npWarehouse.disabled = false;
  } catch (error) {
    console.error('Failed to fetch warehouses:', error);
  }
});

// Закриття випадаючого списку при кліку поза ним
document.addEventListener('click', (e) => {
  if (!e.target.closest('.np-cities-wrapper')) {
    npCitiesList.classList.remove('active');
  }
});

orderForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  if (!npCityRef.value || !npWarehouse.value) {
    alert('Будь ласка, оберіть місто та відділення Нової Пошти');
    return;
  }

  const formData = new FormData(orderForm);
  const orderData = {
    customerInfo: {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      delivery: {
        city: npCityName.value,
        cityRef: npCityRef.value,
        warehouse: npWarehouse.value
      },
      comment: formData.get('comment')
    },
    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.qty,
      total: item.price * item.qty
    })),
    totalAmount: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  };

  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Помилка при відправці замовлення');
    }
    
  const result = await response.json();
  // Успішне замовлення з номером
  alert(`Дякуємо за замовлення! Ваш номер замовлення: ${result.orderNumber}\nМи зв'яжемося з вами найближчим часом.`);
    cart = [];
    saveCart();
    updateCartUI();
    cartElement.classList.remove('open');
    orderForm.reset();
    orderForm.style.display = 'none';
    cartContent.style.display = 'block';
  } catch (error) {
    alert('Виникла помилка при оформленні замовлення. Будь ласка, спробуйте ще раз.');
  }
});

// ініціалізація
loadCart();
updateCartUI();