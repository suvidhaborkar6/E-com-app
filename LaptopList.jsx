

import { useEffect, useState } from "react";
import { getLaptops, deleteLaptop } from "../services/laptopService";
import { Link } from "react-router-dom";
import "./LaptopList.css";

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    loadLaptops();
  }, []);

  const loadLaptops = async () => {
    const res = await getLaptops();
    setLaptops(res.data);
  };

  const handleDelete = async (id) => {
    await deleteLaptop(id);
    loadLaptops();
  };

  return (
    <div className="page">
      <h1 className="title">Laptop Store</h1>

      {/* FLEX CONTAINER */}
      <div className="cards">
        {laptops.map((laptop) => (
          <div className="card" key={laptop.id}>
            <img src={laptop.image} alt={laptop.name} />

            <h3>{laptop.name}</h3>
            <p>{laptop.brand}</p>
            <p className="price">₹{laptop.price}</p>

            <div className="actions">
              <Link to={`/edit/${laptop.id}`}>Edit</Link>
              <button onClick={() => handleDelete(laptop.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaptopList;
