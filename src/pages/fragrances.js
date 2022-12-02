import "./style.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Card, IconButton, List, Paper, Typography } from "@mui/material";
import ListItemProduct from "../components/ListItemProduct";
import { useEffect, useState } from "react";
import { AddCircle } from "@mui/icons-material";
import axios from "axios";
import AddProductDialog from "../components/AddUserDialog";
import { Button, Container, Image, Row } from "react-bootstrap";

const BASE_API_URL = `https://dummyjson.com`;

function Perfume() {
  const [newProducts, setNewProducts] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      await axios
        .get(`${BASE_API_URL}/products/category/fragrances`)
        .then((res) => {
          const responseData = res.data.products;
          setProducts(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }

    getProducts();
  }, []);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleDeleteProducts = (id, idx) => {
    async function delProducts() {
      await axios
        .delete(`${BASE_API_URL}/products/${id}`)
        .then((res) => {
          let arr = products;
          if (idx !== -1) {
            arr.splice(idx, 1);
          }
          setProducts([...arr]);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }

    delProducts();
  };

  return (
    <div className="App">
      <div className="list-container">
        <div className="d-flex justify-content-between">
          <div className="titleTypo">
            <Typography variant="h4">Fragrances</Typography>
            <IconButton onClick={openDialog}>
              <AddCircle />
            </IconButton>
          </div>
        </div>
        <Card elevation={2} style={{ maxHeight: "700px", overflow: "auto", width: "80%", margin: "auto" }}>
          <List>
            {products.map((d, idx) => (
              <ListItemProduct
                key={d.id}
                image={d.thumbnail}
                primaryText={`$${d.price} | ${d.title}`}
                secondaryText={`${d.description}`}
                rating={`${d.rating}`}
                onDelete={() => handleDeleteProducts(d.id, idx)}
              />
            ))}
            {newProducts.map((d, idx) => (
              <ListItemProduct
                key={d.id}
                primaryText={`$${d.price} | ${d.title}`}
                secondaryText={`${d.description}`}
                rating={`${d.rating}`}
              />
            ))}
          </List>
        </Card>
      </div>
      {isDialogOpen && (
        <AddProductDialog
          open={isDialogOpen}
          onClose={closeDialog}
          products={newProducts}
          setProducts={setNewProducts}
        />
      )}
    </div>
  );
}

export default Perfume;
