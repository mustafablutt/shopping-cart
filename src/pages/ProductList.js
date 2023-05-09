import { Typography, Divider } from "@mui/material";
import ProductCard from "../components/ProductCard";
import "./ProductList.css";
import products from "../data";
import Product from "./Product";

const ProductList = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mt: 1, ml: 6.5 }}>
        Ürün Listesi ({products.length} ürün)
      </Typography>
      <Divider sx={{ mt: 2, mb: 5, ml: 6.5, mr: 10 }} />
      <div className="products_wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductList;
