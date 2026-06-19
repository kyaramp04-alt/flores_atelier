// Base de datos estructurada fiel a tus catálogos de imágenes
const DB_DETALLES = [
  { name: "Ramo wedding", price: 250.00, img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400" },
  { name: "Detalle Perla", price: 168.00, img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=400" },
  { name: "Detalle kitty", price: 190.00, img: "https://images.unsplash.com/photo-1562594244-44a77aa95909?q=80&w=400" },
  { name: "Ramo Lirios", price: 105.00, img: "https://images.unsplash.com/photo-1587334206506-ee21e3f70615?q=80&w=400" },
  { name: "Detail Revelation", price: 150.00, img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=400" },
  { name: "Detalle eterno", price: 195.00, img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400" },
  { name: "Detalle Baby", price: 119.00, img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400" },
  { name: "Detalle Birthday", price: 250.00, img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400" }
];

const DB_BOXES = [
  { name: "Box Adriana", price: 180.00, img: "https://images.unsplash.com/photo-1587334206506-ee21e3f70615?q=80&w=400" },
  { name: "Box Beauty", price: 105.00, img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400" },
  { name: "Box Brindis", price: 170.00, img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400" },
  { name: "Box Mamá", price: 230.00, img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=400" },
  { name: "Box Adriana II", price: 195.00, img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=400" },
  { name: "Box Temático", price: 105.00, img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400" },
  { name: "Box Lovely", price: 230.00, img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400" },
  { name: "Box Felicidad", price: 350.00, img: "https://images.unsplash.com/photo-1562594244-44a77aa95909?q=80&w=400" }
];

const DB_VALENTIN = [
  { name: "Ramo aurora", price: 200.00, img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400" },
  { name: "Ramo bella", price: 450.00, img: "https://images.unsplash.com/photo-1587334206506-ee21e3f70615?q=80&w=400" },
  { name: "Arreglo María", price: 250.00, img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400" },
  { name: "Ramo Amor", price: 230.00, img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=400" },
  { name: "Box Adriana", price: 195.00, img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400" },
  { name: "Ramo margarita", price: 150.00, img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=400" },
  { name: "Arreglo Corazón", price: 500.00, img: "https://images.unsplash.com/photo-1562594244-44a77aa95909?q=80&w=400" },
  { name: "Ramo Classic", price: 250.00, img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400" }
];

// Simulador de Carrito Basado en tu Diapositiva de Cuentas
let virtualCart = [
  { name: "Ramo wedding", price: 250.00, img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400", qty: 1 },
  { name: "Detalle Perla", price: 168.00, img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=400", qty: 1 }
];

// Sistema de Intercambio de Secciones (Pestañas Multi-página)
function switchPage(pageId) {
  // Desactivar todas las vistas
  const modules = document.querySelectorAll('.web-page');
  modules.forEach(mod => mod.classList.remove('active'));
  
  // Quitar el estilo activo de los botones de la barra de menú
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => btn.classList.remove('active'));
  
  // Activar la vista solicitada
  document.getElementById(`page-${pageId}`).classList.add('active');
  
  // Iluminar el botón correcto en la barra superior
  const matchingButton = Array.from(navButtons).find(btn => btn.getAttribute('onclick').includes(pageId));
  if(matchingButton) matchingButton.classList.add('active');
  
  // Scroll hacia arriba automático al cambiar de sección
  window.scrollTo(0, 0);
}

// Renderizador Dinámico de Grillas de Productos
function injectCatalogData(containerId, productDataset) {
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = '';
  
  productDataset.forEach(item => {
    container.innerHTML += `
      <div class="flower-product-card">
        <div class="card-img-container">
          <img src="${item.img}" alt="${item.name}">
        </div>
        <h4>${item.name}</h4>
        <p class="card-price">S/. ${item.price.toFixed(2)}</p>
        <button class="add-to-cart-btn">Agregar al carrito</button>
      </div>
    `;
  });
}

// Pintar los Elementos en la vista de Carrito de Compras
function renderCartView() {
  const container = document.getElementById('cart-items-output');
  if(!container) return;
  container.innerHTML = '';
  
  let currentSubtotal = 0;
  
  virtualCart.forEach((item, index) => {
    const itemSubtotal = item.price * item.qty;
    currentSubtotal += itemSubtotal;
    
    container.innerHTML += `
      <div class="individual-cart-item-row">
        <div class="cart-item-thumbnail"><img src="${item.img}"></div>
        <div class="cart-item-name">${item.name}</div>
        <div class="quantity-adjustment-control">
          <button onclick="modifyQty(${index}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="modifyQty(${index}, 1)">+</button>
        </div>
        <div class="cart-item-price-subtotal">S/. ${itemSubtotal.toFixed(2)}</div>
      </div>
    `;
  });
  
  const discountDelivery = 10.00;
  document.getElementById('summary-subtotal').innerText = `S/. ${currentSubtotal.toFixed(2)}`;
  document.getElementById('summary-total').innerText = `S/. ${(currentSubtotal + discountDelivery).toFixed(2)}`;
}

function modifyQty(index, offset) {
  virtualCart[index].qty += offset;
  if(virtualCart[index].qty <= 0) {
    virtualCart.splice(index, 1);
  }
  renderCartView();
}

// Inicialización Automática al cargar la página
window.onload = () => {
  injectCatalogData('detalles-grid-injection', DB_DETALLES);
  injectCatalogData('boxes-grid-injection', DB_BOXES);
  injectCatalogData('valentin-grid-injection', DB_VALENTIN);
  renderCartView();
};