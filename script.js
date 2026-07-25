/* ==== LOCAL DATABASE SIMULATION ==== */

// Initialize LocalStorage if empty or empty array
let existingUsers = localStorage.getItem('fastswords_users');
if (!existingUsers || JSON.parse(existingUsers).length === 0) {
    const fakeUsers = [
        { id: 'usr_1', name: 'أحمد عبدالله', email: 'ahmed@example.com', password: '123' },
        { id: 'usr_2', name: 'سارة خالد', email: 'sara@example.com', password: '123' },
        { id: 'usr_3', name: 'محمد فهد', email: 'mohamed@example.com', password: '123' },
        { id: 'usr_4', name: 'نورة الدوسري', email: 'noura@example.com', password: '123' },
        { id: 'usr_5', name: 'فيصل المطيري', email: 'faisal@example.com', password: '123' }
    ];
    localStorage.setItem('fastswords_users', JSON.stringify(fakeUsers));
}

let existingOrders = localStorage.getItem('fastswords_orders');
if (!existingOrders || JSON.parse(existingOrders).length === 0) {
    const fakeOrders = [
        {
            id: 'ORD-892134',
            userId: 'usr_1',
            items: [
                { id: 'cart_1', restaurantId: 'r1', itemId: 'm1', name: 'نفر لحم مندي', price: 65, quantity: 2 },
                { id: 'cart_2', restaurantId: 'r1', itemId: 'm2', name: 'نصف حبة دجاج كبسة', price: 18, quantity: 1 }
            ],
            total: 148,
            address: 'الرياض, حي الياسمين',
            paymentMethod: 'credit',
            status: 'تم التوصيل',
            timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'ORD-541299',
            userId: 'usr_2',
            items: [
                { id: 'cart_3', restaurantId: 'r2', itemId: 'm7', name: 'صاروخ لحم بلدي', price: 12, quantity: 3 },
                { id: 'cart_4', restaurantId: 'r2', itemId: 'm9', name: 'بطاطس بالجبنة', price: 8, quantity: 2 }
            ],
            total: 52,
            address: 'الرياض, حي الملقا',
            paymentMethod: 'cash',
            status: 'قيد التوصيل',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'ORD-102938',
            userId: 'usr_3',
            items: [
                { id: 'cart_5', restaurantId: 'r3', itemId: 'm14', name: 'أوصال لحم', price: 38, quantity: 2 },
                { id: 'cart_6', restaurantId: 'r3', itemId: 'm16', name: 'مقبلات مشكلة', price: 15, quantity: 1 }
            ],
            total: 91,
            address: 'الرياض, حي العليا',
            paymentMethod: 'credit',
            status: 'جاري التحضير',
            timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString()
        },
        {
            id: 'ORD-773821',
            userId: 'usr_4',
            items: [
                { id: 'cart_7', restaurantId: 'r4', itemId: 'm20', name: 'معصوب ملكي بالقشطة', price: 12, quantity: 1 },
                { id: 'cart_8', restaurantId: 'r4', itemId: 'm22', name: 'شكشوكة', price: 9, quantity: 2 }
            ],
            total: 30,
            address: 'الرياض, حي النرجس',
            paymentMethod: 'cash',
            status: 'تم التوصيل',
            timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'ORD-982112',
            userId: 'usr_5',
            items: [
                { id: 'cart_9', restaurantId: 'r3', itemId: 'm12', name: 'كباب لحم نعيمي (نفر)', price: 35, quantity: 3 }
            ],
            total: 105,
            address: 'الرياض, حي الروابي',
            paymentMethod: 'credit',
            status: 'جاري التحضير',
            timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString()
        }
    ];
    localStorage.setItem('fastswords_orders', JSON.stringify(fakeOrders));
}

// Mock Restaurants Data (Arabic & Categorized)
const restaurantsDb = [
    {
        id: "r1",
        name: "مطعم شعبيات",
        category: "شعبي",
        description: "أصالة الطبخ السعودي، كبسة ومندي على الأصول.",
        image: "kabsa.png",
        menu: [
            { id: "m1", name: "نفر لحم مندي", price: 65.00 },
            { id: "m2", name: "نصف حبة دجاج كبسة", price: 18.00 },
            { id: "m3", name: "مظبي دجاج مع الرز", price: 20.00 },
            { id: "m4", name: "جريش باللحم", price: 15.00 },
            { id: "m5", name: "قرصان بالخضار", price: 12.00 }
        ]
    },
    {
        id: "r2",
        name: "شاورما وعصير",
        category: "شاورما",
        description: "شاورما طازجة بخبز الصاج وعصائر طبيعية.",
        image: "shawarma.png",
        menu: [
            { id: "m6", name: "شاورما دجاج صغير", price: 6.00 },
            { id: "m7", name: "صاروخ لحم بلدي", price: 12.00 },
            { id: "m8", name: "وجبة عربي دجاج", price: 18.00 },
            { id: "m9", name: "بطاطس بالجبنة", price: 8.00 },
            { id: "m10", name: "عصير برتقال كبس", price: 10.00 },
            { id: "m11", name: "شاورما دجاج بخبز الصاج", price: 8.00 }
        ]
    },
    {
        id: "r3",
        name: "مشويات السلطان",
        category: "مشويات",
        description: "أفضل المشويات التركية والشامية بالمدينة.",
        image: "grills.png",
        menu: [
            { id: "m12", name: "كباب لحم نعيمي (نفر)", price: 35.00 },
            { id: "m13", name: "شيش طاووق", price: 28.00 },
            { id: "m14", name: "أوصال لحم", price: 38.00 },
            { id: "m15", name: "ريش مشوية", price: 45.00 },
            { id: "m16", name: "مقبلات مشكلة", price: 15.00 }
        ]
    },
    {
        id: "r4",
        name: "فطور الصباح",
        category: "فطور",
        description: "ابدأ يومك بنشاط مع الفول والمطبق.",
        image: "breakfast.png",
        menu: [
            { id: "m17", name: "فول قلابة بالسمن", price: 8.00 },
            { id: "m18", name: "مطبق مالح لحم", price: 7.00 },
            { id: "m19", name: "مطبق حلو موز", price: 6.00 },
            { id: "m20", name: "معصوب ملكي بالقشطة", price: 12.00 },
            { id: "m21", name: "كبدة غنم طازجة", price: 18.00 },
            { id: "m22", name: "شكشوكة", price: 9.00 }
        ]
    }
];

/* ==== STATE MANAGEMENT ==== */
let currentUser = JSON.parse(localStorage.getItem('fastswords_currentUser')) || null;
let cart = []; // Array of { id, name, price, quantity, restaurantId }
let currentCategory = 'all';
let currentSort = 'default';

/* ==== DOM ELEMENTS ==== */
// Navigation
const navMenuBtn = document.getElementById('nav-menu');
const navProfileBtn = document.getElementById('nav-profile');
const navCartBtn = document.getElementById('nav-cart');
const navLoginBtn = document.getElementById('nav-login');
const navLogoutBtn = document.getElementById('nav-logout');
const cartCount = document.getElementById('cart-count');

// Sections
const sectionMenu = document.getElementById('section-menu');
const sectionProfile = document.getElementById('section-profile');
const restaurantGrid = document.getElementById('restaurant-grid');

// Controls
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');

// Modals
const authModal = document.getElementById('auth-modal');
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal');
const closeAuthBtn = document.getElementById('close-auth');
const closeCartBtn = document.getElementById('close-cart');
const closeCheckoutBtn = document.getElementById('close-checkout');

// Auth Form
const authForm = document.getElementById('auth-form');
const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');
const nameGroup = document.getElementById('name-group');
const authSubmitBtn = document.getElementById('auth-submit');
const authError = document.getElementById('auth-error');
const authName = document.getElementById('auth-name');
const authEmail = document.getElementById('auth-email');
const authPassword = document.getElementById('auth-password');

// Profile
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const orderHistoryList = document.getElementById('order-history');

// Cart & Checkout
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const btnCheckout = document.getElementById('btn-checkout');
const checkoutForm = document.getElementById('checkout-form');
const checkoutAddress = document.getElementById('checkout-address');
const checkoutPayment = document.getElementById('checkout-payment');
const checkoutError = document.getElementById('checkout-error');

let isSignup = false;

/* ==== INITIALIZATION ==== */
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updateAuthState();
    renderRestaurants();
});

/* ==== EVENT LISTENERS ==== */
function setupEventListeners() {
    // Navigation
    navMenuBtn.addEventListener('click', () => switchView('menu'));
    navProfileBtn.addEventListener('click', () => {
        if (!currentUser) return promptAuth();
        switchView('profile');
        renderOrderHistory();
    });
    navCartBtn.addEventListener('click', openCart);
    navLoginBtn.addEventListener('click', () => { isSignup = false; updateAuthTabs(); authModal.classList.remove('hidden'); });
    navLogoutBtn.addEventListener('click', handleLogout);

    // Controls
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderRestaurants();
        });
    });

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderRestaurants();
    });

    // Modal Close Buttons
    closeAuthBtn.addEventListener('click', () => authModal.classList.add('hidden'));
    closeCartBtn.addEventListener('click', () => cartModal.classList.add('hidden'));
    closeCheckoutBtn.addEventListener('click', () => checkoutModal.classList.add('hidden'));

    // Auth Tabs
    tabLogin.addEventListener('click', () => { isSignup = false; updateAuthTabs(); });
    tabSignup.addEventListener('click', () => { isSignup = true; updateAuthTabs(); });

    // Forms
    authForm.addEventListener('submit', handleAuthSubmit);
    btnCheckout.addEventListener('click', promptCheckout);
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
}

function switchView(view) {
    if (view === 'menu') {
        sectionMenu.classList.remove('hidden');
        sectionProfile.classList.add('hidden');
        navMenuBtn.classList.add('active');
        navProfileBtn.classList.remove('active');
    } else if (view === 'profile') {
        sectionMenu.classList.add('hidden');
        sectionProfile.classList.remove('hidden');
        navMenuBtn.classList.remove('active');
        navProfileBtn.classList.add('active');
    }
}

/* ==== AUTHENTICATION (LOCAL STORAGE) ==== */
function updateAuthState() {
    if (currentUser) {
        navLoginBtn.classList.add('hidden');
        navLogoutBtn.classList.remove('hidden');
        navProfileBtn.classList.remove('hidden');
        profileName.textContent = currentUser.name;
        profileEmail.textContent = currentUser.email;
    } else {
        navLoginBtn.classList.remove('hidden');
        navLogoutBtn.classList.add('hidden');
        navProfileBtn.classList.add('hidden');
        switchView('menu');
    }
}

function updateAuthTabs() {
    authError.textContent = '';
    if (isSignup) {
        tabSignup.classList.add('active');
        tabLogin.classList.remove('active');
        nameGroup.classList.remove('hidden');
        authSubmitBtn.textContent = 'إنشاء حساب جديد';
    } else {
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        nameGroup.classList.add('hidden');
        authSubmitBtn.textContent = 'تسجيل الدخول';
    }
}

function handleAuthSubmit(e) {
    e.preventDefault();
    authError.textContent = '';

    const email = authEmail.value.trim().toLowerCase();
    const password = authPassword.value;
    const name = authName.value.trim();

    let users = JSON.parse(localStorage.getItem('fastswords_users'));

    if (isSignup) {
        const userExists = users.find(u => u.email === email);
        if (userExists) {
            authError.textContent = 'البريد الإلكتروني مستخدم مسبقاً.';
            return;
        }

        const newUser = { id: 'usr_' + Date.now(), name, email, password };
        users.push(newUser);
        localStorage.setItem('fastswords_users', JSON.stringify(users));

        currentUser = newUser;
    } else {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            authError.textContent = 'البريد الإلكتروني أو كلمة المرور غير صحيحة.';
            return;
        }
        currentUser = user;
    }

    // Login successful
    localStorage.setItem('fastswords_currentUser', JSON.stringify(currentUser));
    authModal.classList.add('hidden');
    authForm.reset();
    updateAuthState();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('fastswords_currentUser');
    updateAuthState();
}

function promptAuth() {
    cartModal.classList.add('hidden');
    isSignup = false;
    updateAuthTabs();
    authModal.classList.remove('hidden');
}

/* ==== RESTAURANTS UI ==== */
function renderRestaurants() {
    restaurantGrid.innerHTML = '';

    // 1. Filter
    let filteredRestaurants = restaurantsDb;
    if (currentCategory !== 'all') {
        filteredRestaurants = restaurantsDb.filter(r => r.category === currentCategory);
    }

    if (filteredRestaurants.length === 0) {
        restaurantGrid.innerHTML = '<p style="text-align: center; color: var(--text-muted); grid-column: 1 / -1;">لا توجد مطاعم في هذا التصنيف حالياً.</p>';
        return;
    }

    // 2. Clone and Sort
    filteredRestaurants.forEach(data => {
        const card = document.createElement('div');
        card.className = 'restaurant-card card';

        // Clone menu to sort without mutating original db
        let sortedMenu = [...data.menu];

        if (currentSort === 'price-asc') {
            sortedMenu.sort((a, b) => a.price - b.price);
        } else if (currentSort === 'price-desc') {
            sortedMenu.sort((a, b) => b.price - a.price);
        }

        let itemsHtml = '';
        sortedMenu.forEach(item => {
            itemsHtml += `
                <div class="menu-item">
                    <div>
                        <div class="item-name">${item.name}</div>
                        <div class="item-price">${item.price.toFixed(2)} ريال</div>
                    </div>
                    <button class="btn-add" onclick="window.addToCart('${data.id}', '${item.id}', '${item.name}', ${item.price})">+</button>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="restaurant-image" style="background-image: url('${data.image}')"></div>
            <div class="restaurant-info">
                <div class="restaurant-header">
                    <h3 class="restaurant-title">${data.name}</h3>
                    <span class="restaurant-badge">${data.category}</span>
                </div>
                <p class="restaurant-desc">${data.description}</p>
                <div class="menu-items">
                    ${itemsHtml}
                </div>
            </div>
        `;
        restaurantGrid.appendChild(card);
    });
}

/* ==== CART LOGIC ==== */
window.addToCart = function (restaurantId, itemId, itemName, itemPrice) {
    const existingItem = cart.find(i => i.itemId === itemId && i.restaurantId === restaurantId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: 'cart_' + Date.now(),
            restaurantId,
            itemId,
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }
    updateCartUI();
}

window.updateQuantity = function (cartId, delta) {
    const itemIndex = cart.findIndex(i => i.id === cartId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += delta;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (!cartModal.classList.contains('hidden')) {
        renderCartItems();
    }
}

function openCart() {
    renderCartItems();
    cartModal.classList.remove('hidden');
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted);">سلة المشتريات فارغة.</p>';
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} ريال</div>
                </div>
                <div class="cart-controls">
                    <button class="btn-qty" onclick="window.updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn-qty" onclick="window.updateQuantity('${item.id}', 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(el);
        });
    }

    cartTotalPrice.textContent = total.toFixed(2);
}

/* ==== CHECKOUT ==== */
function promptCheckout() {
    if (cart.length === 0) return;

    if (!currentUser) {
        promptAuth();
        return;
    }

    cartModal.classList.add('hidden');
    checkoutModal.classList.remove('hidden');
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    checkoutError.textContent = '';

    const address = checkoutAddress.value;
    const payment = checkoutPayment.value;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const orderData = {
        id: 'ORD-' + Math.floor(Math.random() * 1000000),
        userId: currentUser.id,
        items: [...cart], // clone cart
        total: total,
        address: address,
        paymentMethod: payment,
        status: 'جاري التحضير',
        timestamp: new Date().toISOString()
    };

    // Save order
    let orders = JSON.parse(localStorage.getItem('fastswords_orders'));
    orders.push(orderData);
    localStorage.setItem('fastswords_orders', JSON.stringify(orders));

    // Success UI updates
    cart = [];
    updateCartUI();
    checkoutModal.classList.add('hidden');
    checkoutForm.reset();

    alert(`تم استلام طلبك بنجاح! رقم الطلب: ${orderData.id}`);
}

/* ==== PROFILE HISTORY ==== */
function renderOrderHistory() {
    if (!currentUser) return;

    let allOrders = JSON.parse(localStorage.getItem('fastswords_orders')) || [];
    let userOrders = allOrders.filter(o => o.userId === currentUser.id);

    userOrders.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    orderHistoryList.innerHTML = '';

    if (userOrders.length === 0) {
        orderHistoryList.innerHTML = '<p style="color: var(--text-muted);">لا توجد لديك طلبات سابقة.</p>';
        return;
    }

    userOrders.forEach(order => {
        const date = new Date(order.timestamp).toLocaleString('ar-SA');
        const itemsList = order.items.map(i => `${i.quantity}x ${i.name}`).join('، ');

        const el = document.createElement('div');
        el.className = 'history-item card';
        el.innerHTML = `
            <div class="history-header">
                <strong>طلب #${order.id}</strong>
                <span style="color: var(--primary-color); font-weight: bold; background: #000; padding: 2px 8px; border-radius: 4px;">${order.total.toFixed(2)} ريال</span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 0.5rem;">${date}</p>
            <p><strong>العناصر:</strong> ${itemsList}</p>
            <p style="margin-top: 0.5rem;"><span class="badge" style="background-color: #10b981; color: white;">${order.status}</span></p>
        `;
        orderHistoryList.appendChild(el);
    });
}

/* ==== PROMO CODES ==== */
window.copyPromoCode = function (element, code) {
    navigator.clipboard.writeText(code).then(() => {
        const originalText = element.textContent;
        element.textContent = 'تم النسخ! ✅';
        setTimeout(() => {
            element.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

/* ==== CROSS-TAB SYNC ==== */
window.addEventListener('storage', (e) => {
    if (e.key === 'fastswords_orders') {
        renderOrderHistory();
    }
    if (e.key === 'fastswords_users' && currentUser) {
        // If the current user was modified or deleted, we can handle it here
        let users = JSON.parse(localStorage.getItem('fastswords_users')) || [];
        let updatedUser = users.find(u => u.id === currentUser.id);
        if(!updatedUser) {
            handleLogout(); // User was deleted
        } else {
            currentUser = updatedUser;
            localStorage.setItem('fastswords_currentUser', JSON.stringify(currentUser));
            updateAuthState();
        }
    }
});
