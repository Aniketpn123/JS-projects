// ═══════════════════════════════════════════════════
//  PRODUCT LIST — script.js
//  Features: Search, Category Filter, Sort
//  JS Methods used: map(), filter(), sort()
// ═══════════════════════════════════════════════════


// ── 1. Product Data Array ───────────────────────────
const products = [
  { id: 1,  name: "Wireless Headphones", price: 2999,  rating: 4.5, category: "Tech",    desc: "Noise-cancelling, 30hr battery, premium sound." },
  { id: 2,  name: "Running Shoes",        price: 3499,  rating: 4.3, category: "Sports",  desc: "Lightweight foam sole, breathable mesh upper." },
  { id: 3,  name: "Cotton T-Shirt",       price: 599,   rating: 4.1, category: "Fashion", desc: "100% organic cotton, available in 12 colors." },
  { id: 4,  name: "Smart Watch",          price: 7999,  rating: 4.7, category: "Tech",    desc: "Health tracking, GPS, 7-day battery life." },
  { id: 5,  name: "Yoga Mat",             price: 1299,  rating: 4.4, category: "Sports",  desc: "Non-slip, 6mm thick, eco-friendly material." },
  { id: 6,  name: "Denim Jacket",         price: 2499,  rating: 4.2, category: "Fashion", desc: "Classic fit, stone-washed denim, very durable." },
  { id: 7,  name: "Table Lamp",           price: 1799,  rating: 4.0, category: "Home",    desc: "Adjustable brightness, USB charging port." },
  { id: 8,  name: "Bluetooth Speaker",    price: 1999,  rating: 4.6, category: "Tech",    desc: "360° sound, waterproof, 12hr playtime." },
  { id: 9,  name: "Cookware Set",         price: 4999,  rating: 4.5, category: "Home",    desc: "Non-stick coating, oven safe, 8-piece set." },
  { id: 10, name: "Football",             price: 899,   rating: 4.2, category: "Sports",  desc: "Size 5, match quality, textured grip." },
  { id: 11, name: "Sunglasses",           price: 1599,  rating: 4.3, category: "Fashion", desc: "UV400 protection, polarized lenses." },
  { id: 12, name: "Air Purifier",         price: 8999,  rating: 4.8, category: "Home",    desc: "HEPA filter, quiet mode, covers 400 sq ft." },
];


// ── 2. Categories ────────────────────────────────────
const categories = ["All", "Tech", "Fashion", "Sports", "Home"];
let activeCategory = "All";


// ── 3. Build Category Filter Buttons ─────────────────
const catFilter = document.getElementById("catFilter");

categories.forEach(function(cat) {
  const btn = document.createElement("button");
  btn.className = "cat-btn" + (cat === "All" ? " active" : "");
  btn.textContent = cat;

  btn.addEventListener("click", function() {
    activeCategory = cat;

    // Remove active class from all buttons
    document.querySelectorAll(".cat-btn").forEach(function(b) {
      b.classList.remove("active");
    });

    // Add active class to clicked button
    btn.classList.add("active");

    render();
  });

  catFilter.appendChild(btn);
});


// ── 4. Event Listeners for Search & Sort ─────────────
document.getElementById("searchInput").addEventListener("input", render);
document.getElementById("sortSelect").addEventListener("change", render);


// ── 5. Helper: Generate Star Rating String ────────────
function getStars(rating) {
  const fullStars  = Math.floor(rating);
  const halfStar   = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    "★".repeat(fullStars) +
    (halfStar ? "⯨" : "") +
    "☆".repeat(emptyStars)
  );
}


// ── 6. Helper: Create One Card HTML String ────────────
function createCard(product) {
  return `
    <div class="card">
      <span class="badge badge-${product.category.toLowerCase()}">${product.category}</span>
      <div class="card-name">${product.name}</div>
      <div class="card-price">₹${product.price.toLocaleString("en-IN")}</div>
      <div class="card-rating">
        <span class="stars">${getStars(product.rating)}</span>
        ${product.rating} / 5
      </div>
      <div class="card-desc">${product.desc}</div>
    </div>
  `;
}


// ── 7. Main Render Function ───────────────────────────
function render() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const sort  = document.getElementById("sortSelect").value;


  // ── STEP 1: filter() by Category ─────────────────
  const byCategory = products.filter(function(product) {
    return activeCategory === "All" || product.category === activeCategory;
  });


  // ── STEP 2: filter() by Search Query ─────────────
  const searched = byCategory.filter(function(product) {
    return (
      product.name.toLowerCase().includes(query) ||
      product.desc.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });


  // ── STEP 3: sort() based on selected option ───────
  const sorted = [...searched].sort(function(a, b) {
    if (sort === "price-asc")   return a.price - b.price;
    if (sort === "price-desc")  return b.price - a.price;
    if (sort === "name-asc")    return a.name.localeCompare(b.name);
    if (sort === "name-desc")   return b.name.localeCompare(a.name);
    if (sort === "rating-desc") return b.rating - a.rating;
    return a.id - b.id; // default: original order
  });


  // ── STEP 4: map() products to HTML card strings ───
  const cardHTMLArray = sorted.map(function(product) {
    return createCard(product);
  });


  // ── STEP 5: Update the stats line ─────────────────
  document.getElementById("stats").innerHTML =
    `Showing <span>${sorted.length}</span> of <span>${products.length}</span> products`;


  // ── STEP 6: Inject cards into grid ────────────────
  const grid = document.getElementById("grid");

  if (cardHTMLArray.length === 0) {
    grid.innerHTML = `
      <div class="empty">
        <span class="empty-icon">🔍</span>
        No products found. Try a different search.
      </div>
    `;
  } else {
    grid.innerHTML = cardHTMLArray.join("");
  }
}


// ── 8. Initial Render on Page Load ───────────────────
render();
