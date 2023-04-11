import readline from "readline";
import axios from "axios";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cart = {}; // This object will store the user's cart data

function promptAction() {
  rl.question(
    "What would you like to do? (1. Add to cart, 2. View cart, 3. Remove from cart, 4. Calculate total) ",
    (answer) => {
      switch (answer) {
        case "1":
          addToCart();
          break;
        case "2":
          viewCart();
          break;
        case "3":
          removeFromCart();
          break;
        case "4":
          calculateTotal();
          break;
        default:
          console.log("Invalid input");
          promptAction();
          break;
      }
    }
  );
}

function addToCart() {
  const data = {};
  rl.question("Please enter your user ID: ", (userId) => {
    data.userId = userId;
    rl.question("Please enter the book ID: ", async (bookId) => {
      data.bookId = bookId;
      console.log(data);
    });
  });
  axios
    .post("http://localhost:3000/api/shoppingCart", data)
    .then((response) => {
      console.log("Success:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  promptAction();
}

function viewCart() {
  rl.question("Please enter your user ID: ", (userId) => {
    axios
      .get("http://localhost:3000/api/shoppingCart", {
        data: {
          userId: userId,
        },
      })
      .then((response) => {
        console.log(
          "User " + userId + " has the following books in their cart:"
        );
        for (let i = 0; i < response.data.length; i++) {
          const { userID, bookList } = response.data[i];
          console.log(bookList);
        }

        promptAction();
      })

      .catch((error) => {
        console.log(error);
      });
  });
}

function removeFromCart() {
  rl.question("Please enter your user ID: ", (userId) => {
    rl.question("Please enter the book ID you want to remove: ", (bookId) => {
      axios
        .delete("http://localhost:3000/api/shoppingCart", {
          data: {
            userId: userId,
            bookId: bookId,
          },
        })
        .then((response) => {
          console.log(response.data);
          promptAction();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
}

function calculateTotal() {
  rl.question("Please enter your user ID: ", (userId) => {
    axios
      .get("http://localhost:3000/api/calculateCartTotal", {
        data: {
          userId: userId,
        },
      })
      .then((response) => {
        const { total_price } = response.data[0];
        console.log(
          `The items in the cart for user ${userId} are ${total_price}`
        );
        promptAction();
      })

      .catch((error) => {
        console.log(error);
      });
   
  });
}

export { promptAction };
