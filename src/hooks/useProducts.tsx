import { useEffect, useState } from "react";
import { Products } from "../_types/Product";

type NullableProducts = Products | null;
type Error = string | null;

export const useProducts = (
  page: number
): { products: NullableProducts; loading: boolean; error: Error } => {
  const [products, setProducts] = useState<NullableProducts>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://reqres.in/api/products?page=${page}`, {
      method: "GET",
    })
      .then(async (res) => {
        if (res.status === 200) {
          setProducts(await res.json());
        }
      })
      .catch((e) => {
        console.log(e);
        setError("Error fetching products");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return { products, loading, error };
};
