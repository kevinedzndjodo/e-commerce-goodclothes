import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import PostProductPage from "./pages/PostProductPage"
import SellerProfilePage from "./pages/SellerProfilePage"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostProductPage />} />
        <Route path="/seller/:id" element={<SellerProfilePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App