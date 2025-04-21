const readline = require("readline");

const makanan = [
  { name: "Nasi Goreng", price: 10000 },
  { name: "Ayam Goreng", price: 12000 },
  { name: "Bakso", price: 15000 },
  { name: "Soto", price: 20000 },
];

const minuman = [
  { name: "Soda", price: 10000 },
  { name: "Coffee", price: 12000 },
  { name: "Tea", price: 15000 },
];

const snack = [
  { name: "Chips", price: 10000 },
  { name: "Popcorn", price: 12000 },
  { name: "Nugget", price: 15000 },
];

const menu = [
  { category: "Makanan", items: makanan },
  { category: "Minuman", items: minuman },
  { category: "Snack", items: snack },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cart = [];

function showCart() {
  if (cart.length === 0) {
    console.log("\n🛒 Keranjang kamu masih kosong.");
    return;
  }

  console.log("\n🧾 Keranjang Pesanan:");
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    console.log(
      `${i + 1}. ${item.name} x${item.quantity} = Rp ${item.subtotal}`
    );
    total += item.subtotal;
  }
  console.log(`\n💰 Total Bayar: Rp ${total}`);
}

function showCategories() {
  console.log("\n📋 Menu Kategori:");
  for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1}. ${menu[i].category}`);
  }
  console.log("4. 🛒 Lihat Keranjang");
  console.log("5. ✅ Checkout dan Selesai");

  rl.question("\nPilih kategori atau opsi lain (1-5): ", (input) => {
    const pilihan = parseInt(input);

    if (pilihan >= 1 && pilihan <= 3) {
      const selectedCategory = menu[pilihan - 1];
      showItems(selectedCategory);
    } else if (pilihan === 4) {
      showCategories();

      showCart();
    } else if (pilihan === 5) {
      checkout();
    } else {
      console.log("❌ Pilihan tidak valid.");
      showCategories();
    }
  });
}

function showItems(categoryObj) {
  console.log(`\n🍽️ Menu ${categoryObj.category}:`);
  for (let i = 0; i < categoryObj.items.length; i++) {
    const item = categoryObj.items[i];
    console.log(`${i + 1}. ${item.name} - Rp ${item.price}`);
  }

  rl.question(
    `\nPilih item dari ${categoryObj.category} (1-${categoryObj.items.length}): `,
    (input) => {
      const itemIndex = parseInt(input) - 1;

      if (itemIndex < 0 || itemIndex >= categoryObj.items.length) {
        console.log("❌ Pilihan tidak valid.");
        return showCategories();
      }

      const chosenItem = categoryObj.items[itemIndex];

      rl.question(
        `Berapa banyak ${chosenItem.name} yang ingin dipesan? `,
        (qtyInput) => {
          const quantity = parseInt(qtyInput);

          if (isNaN(quantity) || quantity < 1) {
            console.log("❌ Jumlah tidak valid.");
            return showCategories();
          }

          const subtotal = chosenItem.price * quantity;

          let existingIndex = -1;
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === chosenItem.name) {
              existingIndex = i;
              break;
            }
          }

          if (existingIndex !== -1) {
            cart[existingIndex].quantity += quantity;
            cart[existingIndex].subtotal += subtotal;
          } else {
            cart.push({
              name: chosenItem.name,
              quantity,
              subtotal,
            });
          }

          console.log(
            `\n✅ Ditambahkan ke keranjang: ${quantity} x ${chosenItem.name} = Rp ${subtotal}`
          );
          showCategories();
        }
      );
    }
  );
}

function checkout() {
  if (cart.length === 0) {
    console.log("\n⚠️ Keranjang kosong. Silakan pesan dulu.");
    return showCategories();
  }

  showCart();
  console.log("\n🙏 Terima kasih telah memesan di HoseaCafe!");
  rl.close();
}

console.log("📢 Selamat datang di HoseaCafe!");
showCategories();
