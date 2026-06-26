import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/Products";

export default function Products() {
    
    const products = getProducts();

    return (
        <>
        <div className="page">
            <div className="container">
                <h2 className="page-title">All Items</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}


