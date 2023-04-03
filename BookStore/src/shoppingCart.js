import readline from 'readline';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cart = {}; // This object will store the user's cart data

 function promptAction() {
  rl.question('What would you like to do? (1. Add to cart, 2. View cart, 3. Remove from cart, 4. Calculate total) ', (answer) => {
    switch(answer) {
      case '1':
        addToCart();
        break;
      case '2':
        viewCart();
        break;
      case '3':
        removeFromCart();
        break;
      case '4':
        calculateTotal();
        break;
      default:
        console.log('Invalid input');
        promptAction();
        break;
    }
  });
}

function addToCart() {
  rl.question('Please enter your user ID: ', (userId) => {
    rl.question('Please enter the book ID: ', (bookId) => {
      if (!cart[userId]) {
        cart[userId] = [];
      }
      cart[userId].push(bookId);
      console.log(`You are user number ${userId} and have the following book IDs in your cart: ${cart[userId].join(', ')}`);
      promptAction();
    });
  });
}

function viewCart() {
  rl.question('Please enter your user ID: ', (userId) => {
    if (!cart[userId] || cart[userId].length === 0) {
      console.log(`Your cart is empty, user ${userId}`);
    } else {
      console.log(`User ${userId} has the following books in their cart: ${cart[userId].join(', ')}`);
    }
    promptAction();
  });
}

function removeFromCart() {
  rl.question('Please enter your user ID: ', (userId) => {
    rl.question('Please enter the book ID you want to remove: ', (bookId) => {
      if (!cart[userId] || cart[userId].length === 0) {
        console.log(`Your cart is empty, user ${userId}`);
      } else if (!cart[userId].includes(bookId)) {
        console.log(`User ${userId} does not have book ${bookId} in their cart`);
      } else {
        cart[userId] = cart[userId].filter(id => id !== bookId);
        console.log(`Book ${bookId} has been removed from user ${userId}'s cart`);
      }
      promptAction();
    });
  });
}

function calculateTotal() {
  rl.question('Please enter your user ID: ', (userId) => {
    if (!cart[userId] || cart[userId].length === 0) {
      console.log(`Your cart is empty, user ${userId}`);
    } else {
      console.log(`User ${userId}'s cart total is ${cart[userId].length * 10} dollars`);
    }
    promptAction();
  });
}

export {promptAction}