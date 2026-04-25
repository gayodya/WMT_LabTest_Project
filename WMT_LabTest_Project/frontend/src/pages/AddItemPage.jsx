import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ItemForm from "../components/ItemForm.jsx";
import { createItem } from "../api/itemApi.js";

function AddItemPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreate = async (formData) => {
    setLoading(true);
    setErrorMessage(""); 

    try {      
      await createItem(formData);
      navigate("/"); 
    } catch (error) {
      console.error("Failed to create item", error);
      setErrorMessage("Failed to create item. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Add New Item</h1>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <ItemForm submitText="Add Item" onSubmit={handleCreate} />
      {loading && <div className="loading">Submitting...</div>}
    </div>
  );
}

export default AddItemPage;