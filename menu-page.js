const menuData = [
  { category: "Most Popular", items: [
      { name: "Breakfast Ham Bagel", desc: "Bagel with ham, perfect for breakfast", price: "$1.50", image: "/images/bagel/breakfast_ham.jpg" },
      { name: "Breakfast Sausage Bagel", desc: "Bagel with sausage, savory and delicious", price: "$1.75", image: "images/bagel/breakfast_sausage.jpg" },
      { name: "Breakfast Bacon Bagel", desc: "Bagel with crispy bacon", price: "$1.75", image: "images/bagel/breakfast_bacon.jpg" },
      { name: "Ham Croissant", desc: "Flaky croissant with ham", price: "$1.75", image: "images/crossaint_ham.jpg" },
      { name: "Nova Lox Bagel", desc: "Bagel with smoked salmon", price: "$1.75", image: "images/nova_lox.jpg" },
      { name: "Vietnamese Coffee", desc: "Rich and sweet iced coffee", price: "$1.75", image: "images/vietnamese_coffee.jpg" }
    ]
  },
  { category: "Bagels", items: [
      { name: "Classic Plain Bagel", desc: "Freshly baked classic bagels", price: "$1.50", image: "images/bagel/classic_bagel.jpg" },
      { name: "Gourmet Bagel", desc: "Topped with extra toppings for more flavor", price: "$1.75", image: "images/bagel/gourmet_bagel.jpg" },
      { name: "Special Bagel", desc: "Unique flavors baked fresh daily", price: "$1.75", image: "images/bagel/special_bagel.jpg" }
    ]
  },
  { category: "Sandwiches", items: [
      { name: "Main Street Club Sandwich", desc: "Classic club sandwich with turkey and bacon", price: "$1.50", image: "images/sandwich/main_street_club_sandwich.jpg" },
      { name: "Main Street Special", desc: "Signature sandwich with fresh ingredients", price: "$1.50", image: "images/sandwich/main_street_special_sandwich.jpg" },
      { name: "Pastrami Sandwich", desc: "Savory pastrami with mustard on fresh bread", price: "$1.50", image: "images/sandwich/pastrami_sandwich.jpg" },
      { name: "Roast Beef Sandwich", desc: "Tender roast beef with cheese", price: "$1.50", image: "images/sandwich/roast_beef_sandwich.jpg" },
      { name: "Tuna Salad Sandwich", desc: "Fresh tuna salad on a soft roll", price: "$1.50", image: "images/sandwich/tuna_salad_sandwich.jpg" },
      { name: "Turkey Bacon Avocado Sandwich", desc: "Turkey, bacon, and avocado on fresh bread", price: "$1.50", image: "images/sandwich/turkey_bacon_avacado_sandwich.jpg" }
    ]
  },
  { category: "Drinks", items: [
      { name: "Vietnamese Coffee", desc: "Rich and sweet iced coffee", price: "$1.75", image: "images/vietnamese_coffee.jpg" },
      { name: "Sesame Milk Drink", desc: "Creamy sesame-flavored milk beverage", price: "$1.75", image: "images/sesame.jpg" }
    ]
  },
  { category: "Other", items: [
      { name: "Pepperoni Pizza Bagel", desc: "Bagel topped with pepperoni and cheese", price: "$1.50", image: "images/other/pep_pizza_bagel.jpg" },
      { name: "Plain Bagel Dog", desc: "Bagel wrapped around a hot dog", price: "$1.75", image: "images/other/plain_bagel_dog.jpg" }
    ]
  },
];


function renderMenu() {
  const container = document.getElementById("menu-container");

  menuData.forEach(category => {
    const section = document.createElement("section");
    section.className = "menu-category";

    // create an id like "bagels", "drinks"
    const sectionId = category.category.toLowerCase().replace(/\s+/g, "-");
    section.id = sectionId;

    section.innerHTML = `
      <h2 class="category-title">${category.category}</h2>
      <div class="menu-grid">
        ${category.items.map(item => `
          <div class="menu-item">
            <div class="item-text">
              <h4 class="item-name">${item.name}</h4>
              <p class="item-desc">${item.desc}</p>
              <span class="item-price">${item.price}</span>
            </div>
            <div class="item-image">
              <img src="${item.image}" alt="${item.name}">
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(section);
  });
}

renderMenu();

let lastScroll = 0;
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');


// Get the subnav container
const subnav = document.getElementById("menu-subnav");

// Use a Set to get unique category names (avoids duplicates)
const categories = [...new Set(menuData.map(cat => cat.category))];

// Generate links dynamically
categories.forEach(category => {
  const link = document.createElement("a");
  link.href = `#${category.replace(/\s+/g, '-').toLowerCase()}`; // convert "Most Popular" -> "#most-popular"
  link.className = "menu-subnav-link";
  link.textContent = category;
  subnav.appendChild(link);
});
