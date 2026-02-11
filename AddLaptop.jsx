import { useState } from "react";
import { addLaptop } from "../services/laptopService";
import { useNavigate } from "react-router-dom";

const AddLaptop = () => {
  const [laptop, setLaptop] = useState({
    name: "",
    brand: "",
    price: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLaptop({ ...laptop, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addLaptop(laptop);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Laptop</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Laptop Name"
          onChange={handleChange}
        /><br /><br />

        <input
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
        /><br /><br />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
        /><br /><br />

        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Add Laptop</button>
      </form>
    </div>
  );
};

export default AddLaptop;
