// ProductPage.tsx
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import './ProductPage.css'; // Import the CSS file

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState(10); // Default limit value, you can adjust as needed
  const [skip, setSkip] = useState(0); // Initial skip value
  const totalProducts = 100; // Assuming a total of 100 products in the list (you should replace this with the actual total from the API)

  useEffect(() => {
    fetchData();
  }, [limit, skip]); // Fetch data whenever the limit or skip changes

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=5`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
      setLoading(false);
    }
  };

  const handleSearch = async (keyword: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=phone`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error('Error searching data:', error);
      setError('Error searching data. Please try again later.');
      setLoading(false);
    }
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(event.target.value));
  };

  const handleNextPage = () => {
    const newSkip = skip + limit;
    if (newSkip < totalProducts) {
      setSkip(newSkip);
    }
  };

  const handlePreviousPage = () => {
    const newSkip = skip - limit;
    if (newSkip >= 0) {
      setSkip(newSkip);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="pagination-container">
        <label htmlFor="limitSelect">Items per Page:</label>
        <select id="limitSelect" value={limit} onChange={handleLimitChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          {/* Add more options as needed */}
        </select>
        <button onClick={handlePreviousPage} disabled={skip === 0}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={skip + limit >= totalProducts}>
          Next
        </button>
      </div> <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount %</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Thumbnail</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.discountPercentage}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>
                <img src={product.thumbnail} alt="Thumbnail" />
              </td>
              <td>
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index}`} />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
