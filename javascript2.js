const countDiscount = (price) => {
  let discount = null;
  let result = null;
  if (price >= 1000000) {
    discount = 10 / 100;
    result = price - price * discount;
    console.log(
      `Anda mendapatkan diskon sebesar ${
        discount * 100
      }% dengan harga ${result}`
    );

    return discount;
  } else if (price >= 500000 && price < 1000000) {
    discount = 5 / 100;
    result = price - price * discount;
    console.log(
      `Anda mendapatkan diskon sebesar ${
        discount * 100
      }% dengan harga ${result}`
    );
  } else {
    console.log(`Anda tidak mendapatkan diskon dengan harga ${price}`);
  }
};
countDiscount(600000);
countDiscount(500000);
countDiscount(1000000);
countDiscount(300000);
