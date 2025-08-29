import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import ItemList from "./pages/ItemList";
import ItemForm from "./pages/ItemForm";
import ItemEdit from "./pages/ItemEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/new" element={<ItemForm />} />
          <Route path="/items/:id/edit" element={<ItemEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
