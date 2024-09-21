import { useSelector } from "react-redux";
import Product from "../Component/Product";

// // dont use this because we are using redux

// // import { store } from "./store/Store";
// // console.log(store.getState().products);

export default function Home() {
  const productsList = useSelector((state) => state.products);

  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id} // Ensure each Product has a unique key
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
