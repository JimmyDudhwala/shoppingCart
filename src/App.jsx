// import Product from "./Component/Product";

// import "./App.css";
// import { useSelector } from "react-redux";

// // dont use this because we are using redux

// // import { store } from "./store/Store";
// // console.log(store.getState().products);

// export default function App() {
//   const ProductsList = useSelector((state) => state.products);
//   console.log(ProductsList);
//   return (
//     <div className="products-container">
//       {ProductsList.map(({ id, title, rating, price, image }) => (
//         <Product
//           key={id}
//           title={title}
//           rating={rating.rate}
//           price={price}
//           imageUrl={image}
//         />
//       ))}
//     </div>
//   );
// }

import Header from "./component/Header";
import { Outlet } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
