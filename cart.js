// Ініціалізація кошика// Корзина// Повністю робочий кошик з коректною зміною кількості, кнопками, адаптацією до мобільних, без закриття при взаємодії

let cart = [];

const CART_KEY = 'paw_cart_v1';let cart = [];



// DOM елементиconst CART_KEY = 'paw_cart_v1';

let cartElement, cartItemsElement, cartTotalElement, cartToggleBtn, 

    cartCountSpan, cartNotify, closeCartBtn, orderBtn;// Отримати кошик з localStorage при завантаженні сторінкиlet cart = [];



// Ініціалізація при завантаженні сторінкиdocument.addEventListener('DOMContentLoaded', () => {

document.addEventListener('DOMContentLoaded', () => {

    // Отримуємо всі потрібні елементи  const savedCart = localStorage.getItem('cart');const cartElement = document.getElementById('cart');

    cartElement = document.getElementById('cart');

    cartItemsElement = document.getElementById('cart-items');  if (savedCart) {const cartItemsElement = document.getElementById('cart-items');

    cartTotalElement = document.getElementById('cart-total');

    cartToggleBtn = document.getElementById('cart-toggle');    cart = JSON.parse(savedCart);const cartTotalElement = document.getElementById('cart-total');

    cartCountSpan = document.getElementById('cart-count');

    cartNotify = document.getElementById('cart-notify');    updateCartCount();const clearCartButton = document.getElementById('clear-cart');

    closeCartBtn = document.getElementById('close-cart');

    orderBtn = document.getElementById('order-cart');  }const cartToggleBtn = document.getElementById('cart-toggle');



    // Завантажуємо кошик});const cartCountSpan = document.getElementById('cart-count');

    loadCart();

const cartNotify = document.getElementById('cart-notify');

    // Додаємо обробники подій для кнопок "До кошика"

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {// Додати товар до кошикаconst closeCartBtn = document.getElementById('close-cart');

        btn.addEventListener('click', function() {

            const card = btn.closest('.product-card');function addToCart(productId) {const orderBtn = document.getElementById('order-cart');

            const id = parseInt(card.dataset.id);

            const name = card.querySelector('h4').textContent;  const product = document.querySelector(`[data-id="${productId}"]`);

            const price = parseInt(card.dataset.price);

              const name = product.querySelector('h3').textContent;// Завантаження кошика з localStorage

            addToCart(id, name, price);

        });  const price = parseFloat(product.querySelector('.price').textContent.replace('₴', ''));function loadCart() {

    });

    try {

    // Додаємо обробники для кошика

    cartToggleBtn.addEventListener('click', () => {  const existingItem = cart.find(item => item.id === productId);    cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

        cartElement.classList.toggle('show');

    });    } catch (e) {



    closeCartBtn.addEventListener('click', () => {  if (existingItem) {    cart = [];

        cartElement.classList.remove('show');

    });    existingItem.quantity += 1;  }



    // Запобігаємо закриттю кошика при кліку всередині  } else {}

    cartElement.addEventListener('click', (e) => {

        e.stopPropagation();    cart.push({function saveCart() {

    });

      id: productId,  localStorage.setItem(CART_KEY, JSON.stringify(cart));

    // Закриваємо кошик при кліку поза ним

    document.addEventListener('click', (e) => {      name: name,}

        if (!cartElement.contains(e.target) && !cartToggleBtn.contains(e.target)) {

            cartElement.classList.remove('show');      price: price,

        }

    });      quantity: 1function updateCartUI() {

});

    });  cartItemsElement.innerHTML = '';

// Завантаження кошика з localStorage

function loadCart() {  }  let total = 0, count = 0;

    try {

        cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];    cart.forEach((item, idx) => {

    } catch (e) {

        cart = [];  // Зберегти кошик в localStorage    total += item.price * item.qty;

    }

    updateCartUI();  localStorage.setItem('cart', JSON.stringify(cart));    count += item.qty;

}

  updateCartCount();

// Збереження кошика в localStorage

function saveCart() {  showAddToCartAnimation(product);    const li = document.createElement('li');

    localStorage.setItem(CART_KEY, JSON.stringify(cart));

}}    li.innerHTML = `



// Додавання товару в кошик      <span>${item.name}</span>

function addToCart(id, name, price) {

    const existingItem = cart.find(item => item.id === id);// Оновити лічильник товарів у кошику      <div class="cart-controls">

    

    if (existingItem) {function updateCartCount() {        <button class="cart-qty-btn" data-action="minus" data-idx="${idx}">−</button>

        existingItem.qty += 1;

    } else {  const cartCount = document.querySelector('.cart-count');        <input type="number" min="1" value="${item.qty}" class="cart-qty-input" data-idx="${idx}">

        cart.push({

            id: id,  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);        <button class="cart-qty-btn" data-action="plus" data-idx="${idx}">+</button>

            name: name,

            price: price,  cartCount.textContent = totalItems;        <span>${item.price * item.qty} грн</span>

            qty: 1

        });  cartCount.style.display = totalItems > 0 ? 'block' : 'none';        <button class="cart-remove" title="Видалити" data-idx="${idx}">&#10005;</button>

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