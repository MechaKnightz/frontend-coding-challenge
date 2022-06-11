import { FC, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { UserInfo } from "../_types/UserInfo";

const Products: FC<{ userInfo: UserInfo }> = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { products, loading, error } = useProducts(pageNumber);
  return (
    <div id="products-container">
      <div className="header">Page {pageNumber}</div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          {products && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Pantone</th>
                  </tr>
                </thead>
                <tbody>
                  {products.data.map((product) => (
                    <tr key={product.id} className="product">
                      <td>{product.name}</td>
                      <td>{product.year}</td>
                      <td>{product.color}</td>
                      <td>{product.pantone_value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="footer">
                {pageNumber > 1 && (
                  <button onClick={() => setPageNumber(pageNumber - 1)}>
                    {"<"}
                  </button>
                )}
                {pageNumber < products.total_pages && (
                  <button onClick={() => setPageNumber(pageNumber + 1)}>
                    {">"}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { Products };
