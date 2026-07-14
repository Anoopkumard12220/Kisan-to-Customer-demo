/* ============================================================
   Kisan to Customer — Demo PWA
   Client-side only. All data is mocked. No real backend.
   Developed by CodeNova Studio — Founded by Anoop Dubey
============================================================ */

/* ---------------- Mock Data ---------------- */
const CATEGORIES = [
  { id: 'leafy', name: 'Leafy', icon: '🥬', color: '#E9F6EC' },
  { id: 'root', name: 'Root', icon: '🥕', color: '#FFF0E1' },
  { id: 'seasonal', name: 'Seasonal', icon: '🎃', color: '#FDEFE0' },
  { id: 'organic', name: 'Organic', icon: '🌿', color: '#E9F6EC' },
  { id: 'essentials', name: 'Daily Essentials', icon: '🧄', color: '#EAF1FE' },
];

const PRODUCTS = [
  { id: 'tomato', name: 'Tomato', category: 'essentials', unit: '1 kg', price: 40, mrp: 50, icon: '🍅', organic:false, stock: 120,
    desc: 'Farm-fresh, hand-picked red tomatoes sourced daily from local farms near Varanasi. Juicy, firm and perfect for curries, salads and chutneys.',
    nutri: [['18','Kcal'],['0.9g','Protein'],['3.9g','Carbs'],['1.2g','Fibre']] },
  { id: 'potato', name: 'Potato', category: 'root', unit: '1 kg', price: 30, mrp: 35, icon: '🥔', organic:false, stock: 200,
    desc: 'Fresh, farm-grown potatoes with smooth skin, ideal for every kitchen — from fries to curries.',
    nutri: [['77','Kcal'],['2g','Protein'],['17g','Carbs'],['2.2g','Fibre']] },
  { id: 'onion', name: 'Onion', category: 'root', unit: '1 kg', price: 35, mrp: 40, icon: '🧅', organic:false, stock: 180,
    desc: 'Premium quality onions, firm and flavourful — a daily kitchen essential delivered fresh.',
    nutri: [['40','Kcal'],['1.1g','Protein'],['9.3g','Carbs'],['1.7g','Fibre']] },
  { id: 'brinjal', name: 'Brinjal', category: 'seasonal', unit: '500 g', price: 25, mrp: 30, icon: '🍆', organic:false, stock: 60,
    desc: 'Glossy, tender brinjals harvested at peak freshness — great for bharta, curry or fry.',
    nutri: [['25','Kcal'],['1g','Protein'],['6g','Carbs'],['3g','Fibre']] },
  { id: 'bottlegourd', name: 'Bottle Gourd', category: 'seasonal', unit: '1 pc (~800 g)', price: 28, mrp: 35, icon: '🥒', organic:false, stock: 40,
    desc: 'Light, fresh bottle gourd (lauki) — perfect for a healthy sabzi or dal.',
    nutri: [['15','Kcal'],['0.6g','Protein'],['3.4g','Carbs'],['1.2g','Fibre']] },
  { id: 'ladyfinger', name: 'Lady Finger', category: 'seasonal', unit: '500 g', price: 32, mrp: 38, icon: '🫛', organic:false, stock: 70,
    desc: 'Tender, freshly plucked okra with no stringy fibres — great for stir fry.',
    nutri: [['33','Kcal'],['1.9g','Protein'],['7g','Carbs'],['3.2g','Fibre']] },
  { id: 'spinach', name: 'Spinach', category: 'leafy', unit: '1 bunch', price: 20, mrp: 25, icon: '🥬', organic:true, stock: 50,
    desc: 'Deep-green, iron-rich spinach leaves washed and bunched fresh every morning.',
    nutri: [['23','Kcal'],['2.9g','Protein'],['3.6g','Carbs'],['2.2g','Fibre']] },
  { id: 'coriander', name: 'Coriander', category: 'leafy', unit: '1 bunch', price: 10, mrp: 12, icon: '🌿', organic:false, stock: 90,
    desc: 'Aromatic, freshly cut coriander leaves — the perfect finishing touch for any dish.',
    nutri: [['23','Kcal'],['2.1g','Protein'],['3.7g','Carbs'],['2.8g','Fibre']] },
  { id: 'cauliflower', name: 'Cauliflower', category: 'seasonal', unit: '1 pc (~700 g)', price: 32, mrp: 40, icon: '🥦', organic:false, stock: 45,
    desc: 'Crisp, white and tightly-packed cauliflower heads — ideal for gobi sabzi or paratha.',
    nutri: [['25','Kcal'],['1.9g','Protein'],['5g','Carbs'],['2g','Fibre']] },
  { id: 'cabbage', name: 'Cabbage', category: 'leafy', unit: '1 pc (~900 g)', price: 22, mrp: 28, icon: '🥬', organic:false, stock: 55,
    desc: 'Crunchy, fresh cabbage heads sourced from local farms, great for salads and stir-fry.',
    nutri: [['25','Kcal'],['1.3g','Protein'],['6g','Carbs'],['2.5g','Fibre']] },
  { id: 'greenchilli', name: 'Green Chilli', category: 'essentials', unit: '250 g', price: 15, mrp: 18, icon: '🌶️', organic:false, stock: 100,
    desc: 'Spicy, fresh green chillies — a must-have kitchen essential for every household.',
    nutri: [['40','Kcal'],['2g','Protein'],['9g','Carbs'],['1.5g','Fibre']] },
  { id: 'garlic', name: 'Garlic', category: 'essentials', unit: '250 g', price: 45, mrp: 55, icon: '🧄', organic:false, stock: 130,
    desc: 'Full, aromatic garlic bulbs with intense flavour — perfect for tempering and pastes.',
    nutri: [['149','Kcal'],['6.4g','Protein'],['33g','Carbs'],['2.1g','Fibre']] },
  { id: 'ginger', name: 'Ginger', category: 'essentials', unit: '250 g', price: 30, mrp: 35, icon: '🫚', organic:false, stock: 85,
    desc: 'Fresh, fibre-free ginger root with a sharp aroma — great for tea, curries and pastes.',
    nutri: [['80','Kcal'],['1.8g','Protein'],['18g','Carbs'],['2g','Fibre']] },
  { id: 'carrot', name: 'Carrot', category: 'root', unit: '500 g', price: 25, mrp: 30, icon: '🥕', organic:true, stock: 75,
    desc: 'Sweet, crunchy carrots packed with beta-carotene — great raw, juiced or cooked.',
    nutri: [['41','Kcal'],['0.9g','Protein'],['10g','Carbs'],['2.8g','Fibre']] },
  { id: 'radish', name: 'Radish', category: 'root', unit: '500 g', price: 18, mrp: 22, icon: '🥕', organic:false, stock: 40,
    desc: 'Crisp white radish (mooli) — refreshing in salads and traditional parathas.',
    nutri: [['16','Kcal'],['0.7g','Protein'],['3.4g','Carbs'],['1.6g','Fibre']] },
  { id: 'pumpkin', name: 'Pumpkin', category: 'seasonal', unit: '1 kg', price: 24, mrp: 30, icon: '🎃', organic:false, stock: 65,
    desc: 'Sweet, orange-fleshed pumpkin — great for sabzi, soups and halwa.',
    nutri: [['26','Kcal'],['1g','Protein'],['6.5g','Carbs'],['0.5g','Fibre']] },
  { id: 'organictomato', name: 'Organic Tomato', category: 'organic', unit: '1 kg', price: 55, mrp: 65, icon: '🍅', organic:true, stock: 30,
    desc: 'Certified organic tomatoes grown without chemical pesticides — richer taste, naturally grown.',
    nutri: [['18','Kcal'],['0.9g','Protein'],['3.9g','Carbs'],['1.2g','Fibre']] },
  { id: 'organicspinach', name: 'Organic Spinach', category: 'organic', unit: '1 bunch', price: 30, mrp: 36, icon: '🥬', organic:true, stock: 25,
    desc: 'Certified organic spinach, pesticide-free and packed with nutrients.',
    nutri: [['23','Kcal'],['2.9g','Protein'],['3.6g','Carbs'],['2.2g','Fibre']] },
];

const DEMO_ORDERS = [
  { id:'KTC1001', status:'delivered', date:'2026-07-09', items:[['Tomato',2],['Onion',1],['Spinach',1]], total:180 },
  { id:'KTC1002', status:'processing', date:'2026-07-13', items:[['Potato',3],['Garlic',1]], total:135 },
  { id:'KTC1003', status:'out', date:'2026-07-14', items:[['Carrot',1],['Cauliflower',1],['Coriander',2]], total:104 },
  { id:'KTC1004', status:'pending', date:'2026-07-14', items:[['Pumpkin',1],['Ginger',1]], total:54 },
];

const STATUS_LABELS = { delivered:'Delivered', processing:'Processing', out:'Out for delivery', pending:'Pending', cancelled:'Cancelled' };
const STATUS_STEPS = ['pending','processing','out','delivered'];

/* ---------------- Storage helpers ---------------- */
const DB = {
  get user(){ return JSON.parse(localStorage.getItem('ktc_user') || 'null'); },
  set user(v){ localStorage.setItem('ktc_user', JSON.stringify(v)); },
  get cart(){ return JSON.parse(localStorage.getItem('ktc_cart') || '{}'); },
  set cart(v){ localStorage.setItem('ktc_cart', JSON.stringify(v)); },
  get orders(){ return JSON.parse(localStorage.getItem('ktc_orders') || 'null') || DEMO_ORDERS.slice(); },
  set orders(v){ localStorage.setItem('ktc_orders', JSON.stringify(v)); },
  get pendingMobile(){ return sessionStorage.getItem('ktc_pending_mobile') || ''; },
  set pendingMobile(v){ sessionStorage.setItem('ktc_pending_mobile', v); },
};

function findProduct(id){ return PRODUCTS.find(p => p.id === id); }
function fmt(n){ return '₹' + n.toLocaleString('en-IN'); }
function cartCount(){ const c = DB.cart; return Object.values(c).reduce((a,b)=>a+b,0); }
function cartTotal(){ const c = DB.cart; return Object.entries(c).reduce((sum,[id,qty])=> sum + (findProduct(id)?.price||0)*qty, 0); }

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=> t.classList.remove('show'), 1800);
}

function addToCart(id, delta=1){
  const c = DB.cart;
  c[id] = (c[id]||0) + delta;
  if (c[id] <= 0) delete c[id];
  DB.cart = c;
  updateCartBadge();
}
function setQty(id, qty){
  const c = DB.cart;
  if (qty <= 0) delete c[id]; else c[id] = qty;
  DB.cart = c;
  updateCartBadge();
}
function updateCartBadge(){
  const n = cartCount();
  const el = document.getElementById('navCartCount');
  if (!el) return;
  el.textContent = n;
  el.classList.toggle('hidden', n === 0);
}

/* ---------------- Router ---------------- */
const routes = {};
function route(pattern, handler){ routes[pattern] = handler; }

function parseHash(){
  let h = location.hash.replace(/^#\//,'') || 'splash';
  const [path, query] = h.split('?');
  const parts = path.split('/').filter(Boolean);
  return { parts, query };
}

function navigate(hash){ location.hash = hash; }

function render(){
  window.scrollTo(0,0);
  const { parts } = parseHash();
  const top = parts[0] || 'splash';
  const app = document.getElementById('app');
  const bottomNav = document.getElementById('bottomNav');
  const body = document.body;

  const customerScreensWithNav = ['home','categories','category','cart','checkout','orders','order','profile','product'];
  const noShellScreens = ['splash','login','otp','register','order-success'];

  body.classList.toggle('admin-mode', top === 'admin');
  body.classList.toggle('no-shell', noShellScreens.includes(top));

  if (top === 'admin'){
    bottomNav.classList.add('hidden');
    renderAdmin(parts);
    return;
  }

  bottomNav.classList.toggle('hidden', !customerScreensWithNav.includes(top));
  document.querySelectorAll('.nav-item').forEach(el=>{
    el.classList.toggle('active', el.dataset.route === (top === 'category' ? 'categories' : top === 'order' ? 'orders' : top));
  });
  updateCartBadge();

  // auth guard (soft) — redirect to login if not registered and trying to access app
  const user = DB.user;
  if (!user && !['splash','login','otp','register'].includes(top)){
    navigate('/login'); return;
  }

  switch(top){
    case 'splash': app.innerHTML = screenSplash(); initSplash(); break;
    case 'login': app.innerHTML = screenLogin(); initLogin(); break;
    case 'otp': app.innerHTML = screenOtp(); initOtp(); break;
    case 'register': app.innerHTML = screenRegister(); initRegister(); break;
    case 'home': app.innerHTML = screenHome(); initHome(); break;
    case 'categories': app.innerHTML = screenCategories(); break;
    case 'category': app.innerHTML = screenCategoryDetail(parts[1]); break;
    case 'product': app.innerHTML = screenProduct(parts[1]); initProduct(parts[1]); break;
    case 'cart': app.innerHTML = screenCart(); break;
    case 'checkout': app.innerHTML = screenCheckout(); initCheckout(); break;
    case 'order-success': app.innerHTML = screenOrderSuccess(parts[1]); break;
    case 'orders': app.innerHTML = screenOrders(); break;
    case 'order': app.innerHTML = screenOrderDetail(parts[1]); break;
    case 'profile': app.innerHTML = screenProfile(); break;
    default: app.innerHTML = screenHome();
  }
}
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', ()=>{ updateCartBadge(); render(); registerSW(); });

/* ---------------- Footer partial ---------------- */
function footer(){
  return `<div class="app-footer">Developed by <b>CodeNova Studio</b> — Founded by Anoop Dubey</div>`;
}
function topBar(title, backHash, sub=''){
  return `<div class="top-bar solid">
    <a class="back-btn" href="${backHash}">‹</a>
    <div><h2>${title}</h2>${sub?`<div class="sub">${sub}</div>`:''}</div>
  </div>`;
}

/* ================= SPLASH ================= */
function screenSplash(){
  return `<div class="splash">
    <div class="splash-logo">🥬</div>
    <h1>Kisan to Customer</h1>
    <p>Fresh Vegetables Delivered to Your Doorstep</p>
    <div class="splash-loader"></div>
  </div>`;
}
function initSplash(){
  setTimeout(()=>{
    const user = DB.user;
    navigate(user ? '/home' : '/login');
  }, 1900);
}

/* ================= LOGIN (OTP request) ================= */
function screenLogin(){
  return `<div class="auth-wrap">
    <div class="auth-hero">
      <div class="auth-badge">🥕</div>
      <h1>Welcome back</h1>
      <p>Login with your mobile number to get fresh vegetables delivered to your doorstep.</p>
    </div>
    <div class="field">
      <label>Mobile Number</label>
      <div class="input-wrap">
        <span class="prefix">+91</span>
        <input id="mobileInput" type="tel" maxlength="10" inputmode="numeric" placeholder="98765 43210" />
      </div>
    </div>
    <button class="btn btn-primary btn-block" id="continueBtn" disabled>Continue</button>
    <p class="auth-footer-note">This is a demo login flow. No real OTP will be sent.</p>
    ${footer()}
  </div>`;
}
function initLogin(){
  const input = document.getElementById('mobileInput');
  const btn = document.getElementById('continueBtn');
  input.addEventListener('input', ()=>{
    input.value = input.value.replace(/\D/g,'').slice(0,10);
    btn.disabled = input.value.length !== 10;
  });
  btn.addEventListener('click', ()=>{
    if (btn.disabled) return;
    DB.pendingMobile = input.value;
    navigate('/otp');
  });
  input.focus();
}

/* ================= OTP ================= */
function screenOtp(){
  const mobile = DB.pendingMobile || '9876543210';
  const masked = mobile.slice(0,2) + '••••' + mobile.slice(-4);
  return `<div class="auth-wrap">
    <div class="auth-hero">
      <div class="auth-badge">🔐</div>
      <h1>Verify OTP</h1>
      <p>Enter the 4-digit demo code sent to <b>+91 ${masked}</b></p>
    </div>
    <div class="otp-boxes">
      ${[0,1,2,3].map(i=>`<input class="otpBox" data-i="${i}" maxlength="1" inputmode="numeric" />`).join('')}
    </div>
    <div class="hint-row">
      <span>Demo OTP: <b>1234</b></span>
      <span class="link-text" id="resendBtn">Resend</span>
    </div>
    <div style="height:24px"></div>
    <button class="btn btn-primary btn-block" id="verifyBtn">Verify &amp; Continue</button>
    ${footer()}
  </div>`;
}
function initOtp(){
  const boxes = Array.from(document.querySelectorAll('.otpBox'));
  boxes[0].focus();
  boxes.forEach((b,i)=>{
    b.addEventListener('input', ()=>{
      b.value = b.value.replace(/\D/g,'').slice(0,1);
      if (b.value && boxes[i+1]) boxes[i+1].focus();
    });
    b.addEventListener('keydown', (e)=>{
      if (e.key === 'Backspace' && !b.value && boxes[i-1]) boxes[i-1].focus();
    });
  });
  document.getElementById('resendBtn').addEventListener('click', ()=> showToast('Demo OTP resent: 1234'));
  document.getElementById('verifyBtn').addEventListener('click', ()=>{
    const code = boxes.map(b=>b.value).join('');
    if (code.length !== 4){ showToast('Enter the 4-digit code'); return; }
    const existing = DB.user;
    if (existing){ navigate('/home'); }
    else { navigate('/register'); }
  });
}

/* ================= REGISTER ================= */
function screenRegister(){
  return `<div class="auth-wrap">
    <div class="auth-hero">
      <div class="auth-badge">📝</div>
      <h1>Create your profile</h1>
      <p>Tell us where to deliver your fresh vegetables.</p>
    </div>
    <div class="field"><label>Full Name</label>
      <div class="input-wrap"><input id="regName" type="text" placeholder="Rahul Sharma" /></div>
    </div>
    <div class="field"><label>Mobile Number</label>
      <div class="input-wrap"><span class="prefix">+91</span><input id="regMobile" type="tel" value="${DB.pendingMobile||''}" maxlength="10" /></div>
    </div>
    <div class="field"><label>Area</label>
      <div class="input-wrap">
        <select id="regArea" style="border:none;outline:none;background:transparent;padding:15px 0;width:100%;font-size:15.5px;">
          <option value="">Select your area</option>
          <option>Assi</option><option>Lanka</option><option>Sigra</option><option>Bhelupur</option><option>Cantt</option>
        </select>
      </div>
    </div>
    <div class="field"><label>Full Address</label>
      <div class="input-wrap"><input id="regAddress" type="text" placeholder="House no, Street, Landmark" /></div>
    </div>
    <button class="btn btn-primary btn-block" id="saveBtn">Save &amp; Continue</button>
    ${footer()}
  </div>`;
}
function initRegister(){
  document.getElementById('saveBtn').addEventListener('click', ()=>{
    const name = document.getElementById('regName').value.trim() || 'Rahul Sharma';
    const mobile = document.getElementById('regMobile').value.trim() || DB.pendingMobile || '9876543210';
    const area = document.getElementById('regArea').value || 'Assi';
    const address = document.getElementById('regAddress').value.trim() || 'B-12, Ganga Vihar Colony, Near Assi Ghat';
    DB.user = { name, mobile, area, address };
    showToast('Profile saved');
    navigate('/home');
  });
}

/* ================= HOME ================= */
function catIcon(catId){ return CATEGORIES.find(c=>c.id===catId)?.icon || '🥬'; }

function productCard(p, wide=false){
  const c = DB.cart;
  const qty = c[p.id] || 0;
  const off = Math.round((1 - p.price/p.mrp) * 100);
  return `<div class="prod-card" ${wide?'':''}>
    <a href="#/product/${p.id}">
      <div class="prod-img" style="background:${CATEGORIES.find(x=>x.id===p.category)?.color||'#F2FAF4'}">
        ${p.icon}
        <span class="fresh-badge">🌿 Fresh</span>
        ${off>0?`<span class="discount-badge">${off}% OFF</span>`:''}
      </div>
    </a>
    <div class="prod-body">
      <a href="#/product/${p.id}"><div class="prod-name">${p.name}</div></a>
      <div class="prod-unit">${p.unit}</div>
      <div class="prod-price-row">
        <div class="price-group">
          <span class="price-now">${fmt(p.price)}</span>
          ${p.mrp>p.price?`<span class="price-mrp">${fmt(p.mrp)}</span>`:''}
        </div>
        ${qty>0
          ? `<div class="qty-stepper" data-id="${p.id}">
               <button class="qtyMinus">−</button><span>${qty}</span><button class="qtyPlus">+</button>
             </div>`
          : `<button class="add-btn addBtn" data-id="${p.id}">+</button>`
        }
      </div>
    </div>
  </div>`;
}

function screenHome(){
  const user = DB.user;
  const featured = PRODUCTS.slice(0,6);
  const popular = PRODUCTS.slice(6,12);
  const seasonal = PRODUCTS.filter(p=>p.category==='seasonal');
  return `
  <div class="home-header">
    <div class="greet-row">
      <div class="greet-left">
        <div class="eyebrow">📍 ${user?.area || 'Varanasi'}, Uttar Pradesh</div>
        <h2>Namaste, ${(user?.name||'Guest').split(' ')[0]} 👋</h2>
      </div>
      <a href="#/profile" class="avatar-btn">${(user?.name||'G').charAt(0)}</a>
    </div>
    <a href="#/categories" class="search-bar"><span class="ico">🔍</span><input placeholder="Search for tomato, potato, spinach..." readonly /></a>
  </div>

  <div class="section" style="padding-top:0;">
    <a href="#/category/seasonal" class="offer-banner">
      <span class="tag">🎉 TODAY'S OFFER</span>
      <h3>Fresh Seasonal Veggies</h3>
      <p>Up to 20% off — harvested this morning, delivered by evening.</p>
    </a>
  </div>

  <div class="section" style="padding-top:0;padding-bottom:6px;">
    <div class="section-head"><h3>Categories</h3></div>
  </div>
  <div class="cat-scroll">
    ${CATEGORIES.map(c=>`
      <a href="#/category/${c.id}" class="cat-pill">
        <div class="ico-wrap" style="background:${c.color}">${c.icon}</div>
        <span>${c.name}</span>
      </a>`).join('')}
  </div>

  <div class="section">
    <div class="section-head"><h3>Fresh Today</h3><a href="#/category/seasonal" class="see-all">See all</a></div>
  </div>
  <div class="prod-scroll">${seasonal.map(p=>productCard(p)).join('')}</div>

  <div class="section">
    <div class="section-head"><h3>Featured Products</h3><a href="#/categories" class="see-all">See all</a></div>
  </div>
  <div class="prod-scroll">${featured.map(p=>productCard(p)).join('')}</div>

  <div class="section">
    <div class="section-head"><h3>Popular Products</h3><a href="#/categories" class="see-all">See all</a></div>
    <div class="prod-grid">${popular.map(p=>productCard(p)).join('')}</div>
  </div>

  <div class="delivery-info-card">
    <span>🚚</span>
    <div><b>Delivering to ${user?.area||'your area'} today.</b><br/>Order before 6 PM for same-day evening delivery. Free delivery on orders above ₹199.</div>
  </div>

  ${footer()}
  `;
}
function initHome(){ bindProductCardEvents(); }

function bindProductCardEvents(){
  document.querySelectorAll('.addBtn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault(); e.stopPropagation();
      addToCart(btn.dataset.id, 1);
      showToast('Added to cart');
      render();
    });
  });
}

/* ================= CATEGORIES ================= */
function screenCategories(){
  return `
  ${topBar('All Categories', '#/home')}
  <div class="section">
    ${CATEGORIES.map(c=>{
      const items = PRODUCTS.filter(p=>p.category===c.id);
      return `<div class="section-head" style="margin-top:6px;">
        <h3>${c.icon} ${c.name}</h3><a href="#/category/${c.id}" class="see-all">See all</a>
      </div>
      <div class="prod-scroll">${items.map(p=>productCard(p)).join('')}</div>`;
    }).join('')}
  </div>
  ${footer()}
  `;
}

function screenCategoryDetail(catId){
  const cat = CATEGORIES.find(c=>c.id===catId) || CATEGORIES[0];
  const items = PRODUCTS.filter(p=>p.category===cat.id);
  setTimeout(bindProductCardEvents, 0);
  return `
  ${topBar(cat.name, '#/categories', items.length + ' items')}
  <div class="chip-row">
    ${CATEGORIES.map(c=>`<a href="#/category/${c.id}" class="chip ${c.id===cat.id?'active':''}">${c.icon} ${c.name}</a>`).join('')}
  </div>
  <div class="section">
    <div class="prod-grid">${items.map(p=>productCard(p)).join('')}</div>
    ${items.length===0?`<div class="empty-state"><div class="emoji">🌱</div><h3>No items yet</h3><p>Check back soon for fresh stock in this category.</p></div>`:''}
  </div>
  ${footer()}
  `;
}

/* ================= PRODUCT DETAIL ================= */
function screenProduct(id){
  const p = findProduct(id);
  if (!p) return `${topBar('Not found','#/home')}<div class="empty-state"><div class="emoji">🤔</div><h3>Product not found</h3></div>`;
  const off = Math.round((1 - p.price/p.mrp) * 100);
  const related = PRODUCTS.filter(x=>x.category===p.category && x.id!==p.id).slice(0,4);
  const c = DB.cart; const qty = c[p.id] || 0;
  return `
  <div class="top-bar" style="position:absolute; z-index:5; width:100%;">
    <a class="back-btn" href="#/home">‹</a>
  </div>
  <div class="pd-gallery" style="background:linear-gradient(160deg, ${CATEGORIES.find(x=>x.id===p.category)?.color||'#EFF7F1'}, #fff)">
    ${p.icon}
    <div class="pd-dots"><span class="active"></span><span></span><span></span></div>
  </div>
  <div class="pd-body">
    <div class="pd-top">
      <div>
        <h1>${p.name}</h1>
        <div class="unit">${p.unit} ${p.organic?'<span class="badge-organic">ORGANIC</span>':''}</div>
      </div>
    </div>
    <div class="pd-price-row">
      <span class="now">${fmt(p.price)}</span>
      ${p.mrp>p.price?`<span class="mrp">${fmt(p.mrp)}</span><span class="off">${off}% OFF</span>`:''}
    </div>

    <div class="pd-qty-row">
      <div><b>Quantity</b><div style="font-size:11.5px;color:var(--gray);margin-top:2px;">${p.stock} in stock</div></div>
      <div class="qty-stepper" id="pdStepper" data-id="${p.id}">
        <button id="pdMinus">−</button><span id="pdQty">${qty||1}</span><button id="pdPlus">+</button>
      </div>
    </div>

    <div class="pd-section">
      <h4>Description</h4>
      <p>${p.desc}</p>
    </div>
    <div class="pd-section">
      <h4>Nutrition (per 100g)</h4>
      <div class="nutri-grid">
        ${p.nutri.map(([v,l])=>`<div class="nutri-item"><div class="val">${v}</div><div class="lbl">${l}</div></div>`).join('')}
      </div>
    </div>

    ${related.length ? `<div class="pd-section">
      <h4>Related Products</h4>
      <div class="prod-scroll" style="padding-left:0;padding-right:0;">${related.map(r=>productCard(r)).join('')}</div>
    </div>` : ''}
  </div>

  <div class="pd-cta-bar">
    <button class="btn btn-outline" style="flex:1" id="addToCartBtn">Add to Cart</button>
    <button class="btn btn-primary" style="flex:1" id="buyNowBtn">Buy Now</button>
  </div>
  `;
}
function initProduct(id){
  bindProductCardEvents();
  let local = document.getElementById('pdQty');
  if (!local) return;
  const getQty = ()=> parseInt(document.getElementById('pdQty').textContent,10);
  document.getElementById('pdPlus').addEventListener('click', ()=>{
    document.getElementById('pdQty').textContent = getQty()+1;
  });
  document.getElementById('pdMinus').addEventListener('click', ()=>{
    const q = getQty(); if (q>1) document.getElementById('pdQty').textContent = q-1;
  });
  document.getElementById('addToCartBtn').addEventListener('click', ()=>{
    setQty(id, getQty());
    showToast('Added to cart');
    render();
  });
  document.getElementById('buyNowBtn').addEventListener('click', ()=>{
    setQty(id, getQty());
    navigate('/checkout');
  });
}

/* ================= CART ================= */
function screenCart(){
  const cart = DB.cart;
  const ids = Object.keys(cart);
  if (ids.length === 0){
    return `
    ${topBar('My Cart', '#/home')}
    <div class="empty-state">
      <div class="emoji">🛒</div>
      <h3>Your cart is empty</h3>
      <p>Add some fresh vegetables to get started.</p>
      <a href="#/home" class="btn btn-primary" style="margin-top:8px;">Start Shopping</a>
    </div>
    ${footer()}
    `;
  }
  const subtotal = cartTotal();
  const delivery = subtotal >= 199 ? 0 : 25;
  const total = subtotal + delivery;
  return `
  ${topBar('My Cart', '#/home', ids.length + ' items')}
  <div style="padding-top:6px;">
    ${ids.map(id=>{
      const p = findProduct(id); const qty = cart[id];
      return `<div class="cart-item">
        <div class="ci-img" style="background:${CATEGORIES.find(c=>c.id===p.category)?.color||'#F2FAF4'}">${p.icon}</div>
        <div class="ci-body">
          <div class="ci-name">${p.name}</div>
          <div class="ci-unit">${p.unit}</div>
          <div class="ci-row">
            <div class="qty-stepper" data-id="${p.id}">
              <button class="qtyMinus">−</button><span>${qty}</span><button class="qtyPlus">+</button>
            </div>
            <span class="ci-price">${fmt(p.price*qty)}</span>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>
  <div class="summary-card">
    <div class="summary-row"><span>Item Total</span><span>${fmt(subtotal)}</span></div>
    <div class="summary-row"><span>Delivery Charges</span><span class="${delivery===0?'free':''}">${delivery===0?'FREE':fmt(delivery)}</span></div>
    ${delivery>0?`<div class="summary-row"><span></span><span style="color:var(--green-dark);font-size:12px;">Add ${fmt(199-subtotal)} more for free delivery</span></div>`:''}
    <div class="summary-row total"><span>Total Amount</span><span>${fmt(total)}</span></div>
  </div>
  <div style="padding:0 18px;">
    <a href="#/checkout" class="btn btn-primary btn-block">Proceed to Checkout</a>
  </div>
  ${footer()}
  `;
}
document.addEventListener('click', (e)=>{
  const step = e.target.closest('.qty-stepper');
  if (!step) return;
  const id = step.dataset.id;
  if (e.target.classList.contains('qtyPlus')){ addToCart(id,1); render(); }
  if (e.target.classList.contains('qtyMinus')){ addToCart(id,-1); render(); }
});

/* ================= CHECKOUT ================= */
let checkoutState = { slot: 'evening', payment: 'cod' };
function screenCheckout(){
  const user = DB.user;
  const cart = DB.cart;
  const ids = Object.keys(cart);
  if (ids.length === 0){ setTimeout(()=>navigate('/home'),0); return ''; }
  const subtotal = cartTotal();
  const delivery = subtotal >= 199 ? 0 : 25;
  const total = subtotal + delivery;
  return `
  ${topBar('Checkout', '#/cart')}
  <div class="step-bar"><div class="seg done"></div><div class="seg done"></div><div class="seg"></div></div>

  <div class="ck-card">
    <div class="ck-card-head"><h4>📍 Delivery Address</h4><a href="#/profile" class="edit">Change</a></div>
    <div class="addr-box">
      <div class="name">${user?.name||'Rahul Sharma'}</div>
      <p>${user?.address||'B-12, Ganga Vihar Colony'}, ${user?.area||'Assi'}, Varanasi, Uttar Pradesh</p>
      <p>📞 +91 ${user?.mobile||'9876543210'}</p>
    </div>
  </div>

  <div class="ck-card">
    <div class="ck-card-head"><h4>🕐 Delivery Slot</h4></div>
    <div class="slot-grid">
      <div class="slot-opt ${checkoutState.slot==='morning'?'active':''}" data-slot="morning">Tomorrow<br/>7 AM – 9 AM</div>
      <div class="slot-opt ${checkoutState.slot==='evening'?'active':''}" data-slot="evening">Today<br/>5 PM – 8 PM</div>
    </div>
  </div>

  <div class="ck-card">
    <div class="ck-card-head"><h4>💳 Payment Method</h4></div>
    <div class="pay-opt ${checkoutState.payment==='upi'?'active':''}" data-pay="upi">
      <div class="ico">📱</div><div class="txt"><b>UPI</b><span>Pay via Google Pay, PhonePe, Paytm</span></div><div class="radio-dot"></div>
    </div>
    <div class="pay-opt ${checkoutState.payment==='cod'?'active':''}" data-pay="cod">
      <div class="ico">💵</div><div class="txt"><b>Cash on Delivery</b><span>Pay when your order arrives</span></div><div class="radio-dot"></div>
    </div>
  </div>

  <div class="ck-card">
    <div class="ck-card-head"><h4>🧾 Order Summary</h4></div>
    <div class="summary-row"><span>Item Total (${ids.length})</span><span>${fmt(subtotal)}</span></div>
    <div class="summary-row"><span>Delivery Charges</span><span>${delivery===0?'FREE':fmt(delivery)}</span></div>
    <div class="summary-row total"><span>Total Amount</span><span>${fmt(total)}</span></div>
  </div>

  <div style="padding:6px 18px 18px;">
    <button class="btn btn-primary btn-block" id="placeOrderBtn">Place Order — ${fmt(total)}</button>
    <p style="text-align:center;font-size:11px;color:var(--gray-light);margin-top:10px;">This is a demo checkout. No real payment will be processed.</p>
  </div>
  `;
}
function initCheckout(){
  document.querySelectorAll('.slot-opt').forEach(el=>{
    el.addEventListener('click', ()=>{ checkoutState.slot = el.dataset.slot; render(); });
  });
  document.querySelectorAll('.pay-opt').forEach(el=>{
    el.addEventListener('click', ()=>{ checkoutState.payment = el.dataset.pay; render(); });
  });
  const placeBtn = document.getElementById('placeOrderBtn');
  if (!placeBtn) return;
  placeBtn.addEventListener('click', ()=>{
    placeBtn.disabled = true;
    placeBtn.textContent = 'Placing order...';
    setTimeout(()=>{
      const cart = DB.cart;
      const items = Object.entries(cart).map(([id,qty])=>[findProduct(id).name, qty]);
      const subtotal = cartTotal();
      const delivery = subtotal >= 199 ? 0 : 25;
      const orders = DB.orders;
      const newId = 'KTC' + (1000 + orders.length + 1);
      orders.unshift({ id:newId, status:'pending', date: new Date().toISOString().slice(0,10), items, total: subtotal+delivery });
      DB.orders = orders;
      DB.cart = {};
      updateCartBadge();
      navigate('/order-success/' + newId);
    }, 900);
  });
}

/* ================= ORDER SUCCESS ================= */
function screenOrderSuccess(id){
  return `
  <div class="success-wrap">
    <div class="success-ring"><div class="check">✓</div></div>
    <h1>Order Placed!</h1>
    <p>Thank you! Your fresh vegetables are being prepared and will reach your doorstep soon.</p>
    <div class="order-id-card">
      <div class="lbl">Order ID</div>
      <div class="val">${id}</div>
    </div>
    <div class="eta-row">🚚 Estimated delivery: Today, 5 PM – 8 PM</div>
    <a href="#/home" class="btn btn-primary btn-block">Continue Shopping</a>
    <a href="#/order/${id}" class="btn btn-ghost btn-block" style="margin-top:10px;">Track Order</a>
    ${footer()}
  </div>
  `;
}

/* ================= MY ORDERS ================= */
let orderFilter = 'all';
function screenOrders(){
  const orders = DB.orders;
  const tabs = ['all','pending','processing','out','delivered','cancelled'];
  const filtered = orderFilter==='all' ? orders : orders.filter(o=>o.status===orderFilter);
  return `
  ${topBar('My Orders', '#/home')}
  <div class="status-tabs">
    ${tabs.map(t=>`<div class="chip ${orderFilter===t?'active':''}" data-tab="${t}">${t==='all'?'All':STATUS_LABELS[t]}</div>`).join('')}
  </div>
  <div class="section" style="padding-top:10px;">
    ${filtered.length===0?`<div class="empty-state"><div class="emoji">📦</div><h3>No orders here</h3><p>Try a different filter.</p></div>`:''}
    ${filtered.map(o=>`
      <a href="#/order/${o.id}" class="order-card" style="display:block;">
        <div class="order-card-top">
          <div><div class="oid">${o.id}</div><div class="odate">${o.date}</div></div>
          <span class="status-pill ${o.status}">${STATUS_LABELS[o.status]}</span>
        </div>
        <div class="order-items-line">${o.items.map(i=>i[0]+' × '+i[1]).join(', ')}</div>
        <div class="order-card-bottom">
          <span class="order-total">${fmt(o.total)}</span>
          <span class="link-text" style="font-size:12.5px;">Track Order ›</span>
        </div>
      </a>
    `).join('')}
  </div>
  ${footer()}
  `;
}
document.addEventListener('click', (e)=>{
  const tab = e.target.closest('[data-tab]');
  if (tab){ orderFilter = tab.dataset.tab; render(); }
});

function screenOrderDetail(id){
  const order = DB.orders.find(o=>o.id===id);
  if (!order) return `${topBar('Order', '#/orders')}<div class="empty-state"><div class="emoji">🤔</div><h3>Order not found</h3></div>`;
  const stepIdx = order.status==='cancelled' ? -1 : STATUS_STEPS.indexOf(order.status);
  const steps = [
    ['pending','Order Placed','Your order has been received'],
    ['processing','Processing','Being packed at our warehouse'],
    ['out','Out for Delivery','On its way to your doorstep'],
    ['delivered','Delivered','Order delivered successfully'],
  ];
  return `
  ${topBar(order.id, '#/orders', order.date)}
  ${order.status==='cancelled' ? `<div class="section"><span class="status-pill cancelled">Cancelled</span></div>` : `
  <div class="timeline">
    ${steps.map((s,i)=>{
      const done = i <= stepIdx;
      return `<div class="tl-item ${done?'done':''}">
        <div class="tl-dot-wrap"><div class="tl-dot">${done?'✓':''}</div>${i<steps.length-1?'<div class="tl-line"></div>':''}</div>
        <div class="tl-body"><b>${s[1]}</b><span>${s[2]}</span></div>
      </div>`;
    }).join('')}
  </div>`}
  <div class="ck-card">
    <div class="ck-card-head"><h4>Items</h4></div>
    ${order.items.map(i=>`<div class="summary-row"><span>${i[0]} × ${i[1]}</span></div>`).join('')}
    <div class="summary-row total"><span>Total Paid</span><span>${fmt(order.total)}</span></div>
  </div>
  <div style="padding:0 18px 20px;">
    <a href="#/home" class="btn btn-outline btn-block">Back to Home</a>
  </div>
  ${footer()}
  `;
}

/* ================= PROFILE ================= */
function screenProfile(){
  const user = DB.user || { name:'Guest', mobile:'', area:'', address:'' };
  return `
  <div class="profile-head">
    <div class="profile-avatar">${user.name.charAt(0)}</div>
    <h2>${user.name}</h2>
    <p>+91 ${user.mobile} · ${user.area}, Varanasi</p>
  </div>
  <div class="profile-list">
    <div class="profile-row"><div class="ico">👤</div><div class="txt"><b>Personal Details</b><span>Name, mobile number</span></div><span class="chev">›</span></div>
    <div class="profile-row"><div class="ico">📍</div><div class="txt"><b>Saved Address</b><span>${user.address||'No address saved'}</span></div><span class="chev">›</span></div>
    <a href="#/orders" class="profile-row"><div class="ico">📦</div><div class="txt"><b>Order History</b><span>${DB.orders.length} past orders</span></div><span class="chev">›</span></a>
    <div class="profile-row"><div class="ico">💬</div><div class="txt"><b>Support</b><span>Chat with us, FAQs</span></div><span class="chev">›</span></div>
    <a href="#/admin" class="profile-row"><div class="ico">🛠️</div><div class="txt"><b>Admin Panel</b><span>Demo — business dashboard</span></div><span class="chev">›</span></a>
  </div>
  <div class="profile-list">
    <div class="profile-row danger" id="logoutBtn"><div class="ico">🚪</div><div class="txt"><b>Logout</b></div><span class="chev">›</span></div>
  </div>
  ${footer()}
  `;
}
document.addEventListener('click', (e)=>{
  if (e.target.closest('#logoutBtn')){
    localStorage.removeItem('ktc_user');
    showToast('Logged out');
    navigate('/login');
  }
});

/* ================= ADMIN PANEL ================= */
const ADMIN_NAV = [
  ['dashboard','⌂','Dashboard'],
  ['products','🥕','Products'],
  ['orders','📦','Orders'],
  ['customers','👥','Customers'],
  ['delivery','🚚','Delivery'],
  ['reports','📊','Reports'],
];

const DEMO_CUSTOMERS = [
  { name:'Rahul Sharma', area:'Assi', phone:'9876543210', orders:14 },
  { name:'Priya Verma', area:'Lanka', phone:'9123456780', orders:9 },
  { name:'Amit Yadav', area:'Sigra', phone:'9988776655', orders:22 },
  { name:'Neha Singh', area:'Bhelupur', phone:'9012345678', orders:5 },
  { name:'Suresh Gupta', area:'Cantt', phone:'9871234560', orders:31 },
  { name:'Kavita Mishra', area:'Assi', phone:'9765432109', orders:2 },
];

const SALES_WEEK = [
  ['Mon',4200],['Tue',5100],['Wed',3900],['Thu',6200],['Fri',7100],['Sat',9400],['Sun',8300]
];
const TOP_PRODUCTS = [
  ['Tomato', 92], ['Potato', 85], ['Onion', 78], ['Spinach', 61], ['Carrot', 54]
];

function adminShell(active, contentHtml, title, sub){
  const maxSales = Math.max(...SALES_WEEK.map(s=>s[1]));
  return `
  <div class="admin-shell">
    <div class="admin-overlay" id="adminOverlay" style="display:none;"></div>
    <aside class="admin-sidebar" id="adminSidebar">
      <div class="admin-brand"><div class="dot">🥬</div> Kisan to Customer</div>
      <nav class="admin-nav">
        ${ADMIN_NAV.map(([id,ico,label])=>`
          <a href="#/admin/${id}" class="${active===id?'active':''}"><span class="ico">${ico}</span>${label}</a>
        `).join('')}
      </nav>
      <div class="admin-exit">
        <a href="#/home"><span class="ico">⇦</span> Exit to Customer App</a>
      </div>
    </aside>
    <main class="admin-main">
      <div class="admin-mobile-bar">
        <button class="icon-chip" id="hamburgerBtn">☰</button>
        <b style="font-family:var(--font-display);">Admin Panel</b>
      </div>
      <div class="admin-topbar">
        <div><h1>${title}</h1><div class="sub">${sub}</div></div>
        <div style="display:flex;gap:10px;align-items:center;">
          <div class="avatar-btn" style="background:var(--green-dark);color:#fff;">A</div>
        </div>
      </div>
      ${contentHtml}
    </main>
  </div>
  `;
}

function renderAdmin(parts){
  const sub = parts[1] || 'dashboard';
  const app = document.getElementById('app');
  let html = '';
  if (sub === 'dashboard') html = adminDashboard();
  else if (sub === 'products') html = adminProducts();
  else if (sub === 'orders') html = adminOrders();
  else if (sub === 'customers') html = adminCustomers();
  else if (sub === 'delivery') html = adminDelivery();
  else if (sub === 'reports') html = adminReports();
  else html = adminDashboard();

  const titles = {
    dashboard:['Dashboard','Welcome back, here\u2019s what\u2019s happening today.'],
    products:['Products','Manage your vegetable catalog.'],
    orders:['Orders','Track and manage customer orders.'],
    customers:['Customers','View and manage your customer base.'],
    delivery:['Delivery','Manage delivery areas, slots and charges.'],
    reports:['Reports','Sales performance and insights.'],
  };
  const [title, subtitle] = titles[sub] || titles.dashboard;
  app.innerHTML = adminShell(sub, html, title, subtitle);

  document.getElementById('hamburgerBtn')?.addEventListener('click', ()=>{
    document.getElementById('adminSidebar').classList.add('open');
    document.getElementById('adminOverlay').style.display = 'block';
  });
  document.getElementById('adminOverlay')?.addEventListener('click', ()=>{
    document.getElementById('adminSidebar').classList.remove('open');
    document.getElementById('adminOverlay').style.display = 'none';
  });
}

function adminDashboard(){
  const maxSales = Math.max(...SALES_WEEK.map(s=>s[1]));
  const orders = DB.orders;
  return `
  <div class="kpi-grid">
    <div class="kpi-card">
      <div class="top"><div class="ico" style="background:var(--green-light);">💰</div><span class="delta up">+12.4%</span></div>
      <div class="val">₹84,320</div><div class="lbl">Revenue (this month)</div>
    </div>
    <div class="kpi-card">
      <div class="top"><div class="ico" style="background:var(--blue-light);">📦</div><span class="delta up">+8.1%</span></div>
      <div class="val">${312 + orders.length}</div><div class="lbl">Total Orders</div>
    </div>
    <div class="kpi-card">
      <div class="top"><div class="ico" style="background:var(--orange-light);">👥</div><span class="delta up">+4.6%</span></div>
      <div class="val">${DEMO_CUSTOMERS.length + 214}</div><div class="lbl">Customers</div>
    </div>
    <div class="kpi-card">
      <div class="top"><div class="ico" style="background:#F2EBFF;">🥕</div><span class="delta down">−1.2%</span></div>
      <div class="val">${PRODUCTS.length}</div><div class="lbl">Active Products</div>
    </div>
  </div>

  <div class="admin-grid-2">
    <div class="panel">
      <div class="panel-head"><h3>Sales — This Week</h3><span class="see-all">Weekly ▾</span></div>
      <div class="bar-chart">
        ${SALES_WEEK.map(([d,v])=>`
          <div class="bar-col">
            <div class="bar" style="height:${(v/maxSales*100).toFixed(0)}%"></div>
            <div class="bar-lbl">${d}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>Quick Actions</h3></div>
      <div class="quick-actions">
        <a href="#/admin/products" class="qa-btn"><span class="ico">➕</span>Add Product</a>
        <a href="#/admin/orders" class="qa-btn"><span class="ico">📦</span>View Orders</a>
        <a href="#/admin/delivery" class="qa-btn"><span class="ico">🚚</span>Delivery Areas</a>
        <a href="#/admin/reports" class="qa-btn"><span class="ico">📊</span>View Reports</a>
      </div>
    </div>
  </div>

  <div class="panel">
    <div class="panel-head"><h3>Recent Orders</h3><a href="#/admin/orders" class="see-all">View all</a></div>
    <div class="table-wrap">
      <table class="admin-table">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody>
          ${orders.slice(0,5).map(o=>`
            <tr>
              <td><b>${o.id}</b></td>
              <td>Rahul Sharma</td>
              <td>${o.items.length} items</td>
              <td>${fmt(o.total)}</td>
              <td><span class="mini-pill status-pill ${o.status}">${STATUS_LABELS[o.status]}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
  `;
}

function adminProducts(){
  return `
  <div class="toolbar">
    <div class="search-bar"><span class="ico">🔍</span><input placeholder="Search products..." /></div>
    <button class="btn btn-primary btn-sm">➕ Add Product</button>
  </div>
  <div class="filter-chips">
    <div class="chip active">All (${PRODUCTS.length})</div>
    ${CATEGORIES.map(c=>`<div class="chip">${c.icon} ${c.name}</div>`).join('')}
  </div>
  <div style="height:18px;"></div>
  <div class="admin-prod-grid">
    ${PRODUCTS.map(p=>`
      <div class="admin-prod-card">
        <div class="img" style="background:${CATEGORIES.find(c=>c.id===p.category)?.color}">${p.icon}</div>
        <div class="body">
          <div class="name">${p.name}</div>
          <div class="meta">${p.unit} · ${fmt(p.price)}</div>
          <div class="row">
            <span class="stock-tag ${p.stock>50?'ok':'low'}">${p.stock>50?'In Stock':'Low Stock'} (${p.stock})</span>
          </div>
          <div class="row" style="margin-top:10px;gap:6px;">
            <span class="icon-chip" title="Edit">✏️</span>
            <span class="icon-chip" title="Update Stock">📦</span>
            <span class="icon-chip" title="Delete">🗑️</span>
          </div>
        </div>
      </div>
    `).join('')}
  </div>
  `;
}

function adminOrders(){
  const orders = DB.orders;
  return `
  <div class="toolbar">
    <div class="search-bar"><span class="ico">🔍</span><input placeholder="Search order ID, customer..." /></div>
    <div class="filter-chips">
      ${['All','Pending','Processing','Out for delivery','Delivered','Cancelled'].map((s,i)=>`<div class="chip ${i===0?'active':''}">${s}</div>`).join('')}
    </div>
  </div>
  <div class="panel">
    <div class="table-wrap">
      <table class="admin-table">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Area</th><th>Items</th><th>Amount</th><th>Status</th><th>Delivery</th><th></th></tr></thead>
        <tbody>
          ${orders.map(o=>`
            <tr>
              <td><b>${o.id}</b><br/><span style="color:var(--gray);font-size:11px;">${o.date}</span></td>
              <td>Rahul Sharma</td>
              <td>Assi</td>
              <td>${o.items.length} items</td>
              <td>${fmt(o.total)}</td>
              <td><span class="mini-pill status-pill ${o.status}">${STATUS_LABELS[o.status]}</span></td>
              <td>${o.status==='delivered'?'Ramesh Kumar':o.status==='out'?'Suresh Yadav':'Unassigned'}</td>
              <td><div class="row-actions"><span class="icon-chip">👁️</span><span class="icon-chip">✏️</span></div></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
  `;
}

function adminCustomers(){
  return `
  <div class="toolbar">
    <div class="search-bar"><span class="ico">🔍</span><input placeholder="Search customers..." /></div>
  </div>
  <div class="panel">
    <div class="table-wrap">
      <table class="admin-table">
        <thead><tr><th>Customer</th><th>Phone</th><th>Area</th><th>Total Orders</th><th></th></tr></thead>
        <tbody>
          ${DEMO_CUSTOMERS.map(c=>`
            <tr>
              <td style="display:flex;align-items:center;gap:10px;">
                <div class="avatar-btn" style="width:32px;height:32px;font-size:12px;">${c.name.charAt(0)}</div><b>${c.name}</b>
              </td>
              <td>+91 ${c.phone}</td>
              <td>${c.area}</td>
              <td>${c.orders} orders</td>
              <td><div class="row-actions"><span class="icon-chip">👁️</span><span class="icon-chip">💬</span></div></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
  `;
}

function adminDelivery(){
  const areas = ['Assi','Lanka','Sigra','Bhelupur','Cantt'];
  return `
  <div class="admin-grid-2">
    <div class="panel">
      <div class="panel-head"><h3>Delivery Areas &amp; Charges</h3><button class="btn btn-ghost btn-sm">➕ Add Area</button></div>
      <div class="table-wrap">
        <table class="admin-table">
          <thead><tr><th>Area</th><th>Charge</th><th>Free above</th><th>Status</th></tr></thead>
          <tbody>
            ${areas.map(a=>`<tr><td><b>${a}</b></td><td>₹25</td><td>₹199</td><td><span class="mini-pill status-pill delivered">Active</span></td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>Delivery Slots</h3></div>
      <div class="quick-actions" style="grid-template-columns:1fr;">
        <div class="qa-btn" style="flex-direction:row;align-items:center;justify-content:space-between;">Morning · 7 AM – 9 AM <span class="mini-pill status-pill delivered">Active</span></div>
        <div class="qa-btn" style="flex-direction:row;align-items:center;justify-content:space-between;">Evening · 5 PM – 8 PM <span class="mini-pill status-pill delivered">Active</span></div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="panel-head"><h3>Assigned Orders — Today</h3></div>
    <div class="table-wrap">
      <table class="admin-table">
        <thead><tr><th>Order ID</th><th>Delivery Partner</th><th>Area</th><th>Slot</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td><b>KTC1003</b></td><td>Suresh Yadav</td><td>Sigra</td><td>5 PM – 8 PM</td><td><span class="mini-pill status-pill out">Out for delivery</span></td></tr>
          <tr><td><b>KTC1002</b></td><td>Ramesh Kumar</td><td>Assi</td><td>7 AM – 9 AM</td><td><span class="mini-pill status-pill processing">Processing</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
  `;
}

function adminReports(){
  const maxTop = Math.max(...TOP_PRODUCTS.map(t=>t[1]));
  const maxSales = Math.max(...SALES_WEEK.map(s=>s[1]));
  return `
  <div class="kpi-grid">
    <div class="kpi-card"><div class="top"><div class="ico" style="background:var(--green-light);">💰</div></div><div class="val">₹2.86L</div><div class="lbl">Monthly Sales</div></div>
    <div class="kpi-card"><div class="top"><div class="ico" style="background:var(--blue-light);">📈</div></div><div class="val">₹61,200</div><div class="lbl">Monthly Profit</div></div>
    <div class="kpi-card"><div class="top"><div class="ico" style="background:var(--orange-light);">🧾</div></div><div class="val">1,284</div><div class="lbl">Orders This Month</div></div>
    <div class="kpi-card"><div class="top"><div class="ico" style="background:#F2EBFF;">📊</div></div><div class="val">₹428</div><div class="lbl">Avg. Order Value</div></div>
  </div>
  <div class="report-grid">
    <div class="panel">
      <div class="panel-head"><h3>Daily Sales — This Week</h3></div>
      <div class="bar-chart">
        ${SALES_WEEK.map(([d,v])=>`<div class="bar-col"><div class="bar" style="height:${(v/maxSales*100).toFixed(0)}%"></div><div class="bar-lbl">${d}</div></div>`).join('')}
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>Top Selling Products</h3></div>
      <div class="rank-list">
        ${TOP_PRODUCTS.map(([name,v],i)=>`
          <div class="rank-item">
            <div class="num">${i+1}</div>
            <div style="flex:1;">
              <div style="font-size:12.5px;font-weight:700;margin-bottom:5px;">${name}</div>
              <div class="bar-bg"><div class="bar-fg" style="width:${(v/maxTop*100).toFixed(0)}%"></div></div>
            </div>
            <div class="amt">${v} kg</div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="panel-head"><h3>Monthly Sales Trend</h3></div>
    <div class="bar-chart" style="height:140px;">
      ${['Feb','Mar','Apr','May','Jun','Jul'].map((m,i)=>`<div class="bar-col"><div class="bar" style="height:${[52,61,58,74,80,93][i]}%"></div><div class="bar-lbl">${m}</div></div>`).join('')}
    </div>
  </div>
  `;
}

/* ================= Service Worker ================= */
function registerSW(){
  if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
}
