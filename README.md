# By Tony steve


# Product Pagination and Search App

This is a simple React application that displays a paginated list of products fetched from a server using API endpoints. Users can navigate through the paginated list, search for specific products, and customize the number of items displayed per page.

## Features

- Fetches paginated product data from the server API.
- Implements server-side searching based on user-entered keywords.
- Allows users to customize the number of items displayed per page.
- Provides pagination buttons for easy navigation through the product list.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript that adds optional static typing.
- CSS: Cascading Style Sheets for styling the application.
- Fetch API: For making HTTP requests to the server endpoints.

## Getting Started

Follow the steps below to get started with the project:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Run the development server using `npm start`.
4. Open the application in your web browser at `http://localhost:3000`.

## Usage

- The application will load with a paginated table displaying the first set of products.
- Use the search bar at the top to search for products based on keywords. Press the "Search" button to trigger the search.
- Select the number of items to display per page from the dropdown menu labeled "Items per Page."
- Use the "Previous" and "Next" buttons to navigate through the paginated list of products.

## API Endpoints

The application uses the following API endpoints to fetch product data:

1. `https://dummyjson.com/products?limit={limit}&skip={skip}`: This endpoint returns a paginated list of products. The `limit` parameter determines the number of items to return per page, and the `skip` parameter indicates the number of items to skip for pagination.

2. `https://dummyjson.com/products/search?q={keyword}`: This endpoint provides server-side searching based on the entered `keyword`. It returns products that match the search criteria.

Please note that these are dummy endpoints used for demonstration purposes. Replace them with actual API endpoints when integrating the application with your server.

## Contribution

Contributions are welcome! If you find any issues or want to add new features, please feel free to open a pull request or report an issue.

## License

This project is licensed under the [MIT License](LICENSE).
