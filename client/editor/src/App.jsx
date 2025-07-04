
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PostPage from "./pages/PostPage.jsx";
import CreatePostPage from "./pages/CreatePostPage.jsx";
import Navigation from "./components/Layout/Navigation.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import ProtectedRoute from "./components/Common/ProtectedRoute.jsx";



const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          < Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route
              path="/create"
             element={
             <ProtectedRoute>
             <CreatePostPage />
             </ProtectedRoute>
  }
/>


        </Routes>
      </main>

      <footer className="bg-blue-600 text-white text-center p-4">
        © 2025 My Blog App
      </footer>
    </div>
  );
};

export default App;
