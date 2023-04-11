import readline from 'readline';
import { promptAction } from '/Users/karlagonzalez/Documents/CEN4010-software engineering/BookStore/src/shoppingCart.js';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('Welcome to the Book Store!');
  console.log('Please select an option:');
  console.log('1. Shopping Cart');
  console.log('2. Book Browsing');
  console.log('3. Book Detail');
  console.log('4. Quit');

  rl.question('Enter your choice: ', (answer) => {
    switch(answer) {
      case '1':
        promptAction();
        break;
      case '2':
        console.log('You selected Book Browsing');
        mainMenu();
        break;
      case '3':
        console.log('You selected Book Detail');
        mainMenu();
        break;
      case '4':
        console.log('Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid input');
        mainMenu();
        break;
    }
  });
}

mainMenu();
