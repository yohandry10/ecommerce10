// frontend/src/components/ProductSearch.js

useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await fetch('http://localhost:5000/api/products').then(res => res.json());
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);
  