**Frontend Intern**

### Test Assignment: "Mini Marketplace"

Create a small Single Page Application (SPA) where the user should be able to perform the following:
*   View a list of products
*   Add products to the cart
*   Remove products from the cart

### Functional Requirements

**1) Layout (HTML + CSS)**

Work on the following 2 sections:
*   **Products**
*   **Cart**
*   On the desktop version, they should be arranged in two columns side-by-side.
*   On mobile devices, the blocks should be arranged sequentially one below the other.
*   Buttons must have minimal hover/active states.
*   It is recommended to use Flex/Grid.
*   UI libraries are forbidden (Bootstrap, Tailwind, and others).
*   Using `normalize.css` is allowed.

**2) Data Fetching (JS - without React)**
Load the product list from the following open API:
[https://fakestoreapi.com/products](https://fakestoreapi.com/products)
And display the product cards with:
*   Photo
*   Name
*   Price
*   "Add to cart" button

**3) React Functionality (Separate Area)**
The cart is implemented as a separate React part of the page.

Cart functionalities:
*   Add product
*   Remove product
*   Display the number of products
*   Display the total amount

**Mandatory:**
*   `useState`
*   `useEffect` (for saving the cart in `localStorage`)
*   Products must be separate components (`CartItem`, `CartList`)

### Technology Stack:

*   React (Vite or CRA)
*   Vanilla JS (not React) for loading and displaying the catalog
*   CSS (any organization method, but without ready-made UI frameworks)

### After Completion:

1.  Post the code on GitHub in an open repository.
2.  Add a `README` containing the following:
    *   Name:
    *   How long the task took:
    *   Difficult parts:
    *   Interface screenshots:
    *   Demo link (if available):
3.  Send a link in the following format:
    `https://github.com/username/mini-marketplace`

```
