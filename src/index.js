import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocalStorageCache, StorageProvider } from "./core/storage";
import "./index.css";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetails.page";
import ProductListPage from "./pages/ProductList/ProductList.page";
import "./theme.css";
import { Header } from "./ui/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
const cacheProvider = new LocalStorageCache({
  cacheTime: 1000 * 60 * 60, // 1 hour
});

root.render(
  <React.StrictMode>
    <StorageProvider provider={cacheProvider}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/:productId" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </StorageProvider>
  </React.StrictMode>
);
