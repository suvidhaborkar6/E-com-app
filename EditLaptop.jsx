import { useEffect, useState } from "react";
import { getLaptopById, updateLaptop } from "../services/laptopService";
import { useNavigate, useParams } from "react-router-dom";

const EditLaptop = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [laptop, setLaptop] = useState({
    name: "",
    brand: "",
    price: "",
    image: ""
  });

  useEffect(() => {
    getLaptopById(id).then((res) => {
      setLaptop(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setLaptop({ ...laptop, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateLaptop(id, laptop);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Laptop</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={laptop.name}
          onChange={handleChange}
        /><br /><br />

        <input
          name="brand"
          value={laptop.brand}
          onChange={handleChange}
        /><br /><br />

        <input
          name="price"
          value={laptop.price}
          onChange={handleChange}
        /><br /><br />

        <input
          name="image"
          value={laptop.image}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Update Laptop</button>
      </form>
    </div>
  );
};

export default EditLaptop;
