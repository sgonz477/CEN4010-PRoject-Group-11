import java.util.List;

public class Library {
    public static void main(String[] args) {
        ShoppingCartManager cartManager = new ShoppingCartManager();

        // Add a book to the cart
        int bookId = 123;
        int userId = 456;
        try {
            cartManager.addBookToCart(bookId, userId);
            System.out.println("Book added to cart.");
        } catch (Exception e) {
            System.err.println("Error adding book to cart: " + e.getMessage());
        }

        // Retrieve cart items
        try {
            List<Book> cartItems = cartManager.getCartItems(userId);
            if (cartItems.isEmpty()) {
                System.out.println("No items in cart.");
            } else {
                System.out.println("Cart items:");
                for (Book book : cartItems) {
                    System.out.println("- " + book.getTitle() + " by " + book.getAuthor());
                }
            }
        } catch (Exception e) {
            System.err.println("Error retrieving cart items: " + e.getMessage());
        }

        // Remove a book from the cart
        try {
            cartManager.removeBookFromCart(bookId, userId);
            System.out.println("Book removed from cart.");
        } catch (Exception e) {
            System.err.println("Error removing book from cart: " + e.getMessage());
        }

        // Get subtotal price
        try {
            double subtotal = cartManager.getSubtotalPrice(userId);
            System.out.printf("Subtotal: $%.2f\n", subtotal);
        } catch (Exception e) {
            System.err.println("Error retrieving subtotal: " + e.getMessage());
        }
    }

}
