import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;



public class ShoppingCartManager {

    private static final String BASE_URL = "http://example.com/api";
    private HttpClient httpClient;
    private Gson gson;

    public ShoppingCartManager() {
        httpClient = HttpClientBuilder.create().build();
        gson = new GsonBuilder().create();
    }

    public double getSubtotalPrice(int userId) throws Exception {
        String url = BASE_URL + "/subtotal?userId=" + userId;
        HttpGet request = new HttpGet(url);
        HttpResponse response = httpClient.execute(request);
        String responseString = EntityUtils.toString(response.getEntity());
        return Double.parseDouble(responseString);
    }

    public void addBookToCart(int bookId, int userId) throws Exception {
        String url = BASE_URL + "/cart";
        HttpPost request = new HttpPost(url);
        request.setHeader("Content-Type", "application/json");
        String jsonBody = String.format("{\"bookId\": %d, \"userId\": %d}", bookId, userId);
        request.setEntity(new StringEntity(jsonBody));
        HttpResponse response = httpClient.execute(request);
        EntityUtils.consume(response.getEntity());
    }

    public List<Book> getCartItems(int userId) throws Exception {
        String url = BASE_URL + "/cart?userId=" + userId;
        HttpGet request = new HttpGet(url);
        HttpResponse response = httpClient.execute(request);
        String responseString = EntityUtils.toString(response.getEntity());
        return gson.fromJson(responseString, new ArrayList<Book>().getClass());
    }

    public void removeBookFromCart(int bookId, int userId) throws Exception {
        String url = BASE_URL + "/cart?bookId=" + bookId + "&userId=" + userId;
        HttpDelete request = new HttpDelete(url);
        HttpResponse response = httpClient.execute(request);
        EntityUtils.consume(response.getEntity());
    }
}
