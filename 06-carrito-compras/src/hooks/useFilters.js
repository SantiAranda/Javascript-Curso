import { useContext, useEffect, useMemo, useState } from "react";
import { FiltersContext } from "../context/filters";
import { getProducts } from "../services/products";

export function useFilters() {

  const [products, setProducts] = useState([]);
  const {filters, setFilters} = useContext(FiltersContext);

  useEffect(() => {
    const fetchProducts = async () => {
        const productsData = await getProducts()
        setProducts(productsData);
    }

    fetchProducts();
  },[])

  const filteredProducts = useMemo(() => {
    if (!products.length) return [];

    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
    );
  }, [filters, products]);

  return { filters, filteredProducts, setFilters };
}
