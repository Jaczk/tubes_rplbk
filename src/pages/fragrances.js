import "./style.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Card,
  IconButton,
  List,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
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
  const [searchProd, setSearchProd] = useState("");

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
          <Typography variant="h4">Fragrances</Typography>
          <TextField
            id="outlined-basic"
            label="Search Products"
            variant="outlined"
            sx={{ m: 1, width: "50ch" }}
            onChange={(e) => setSearchProd(e.target.value)}
          ></TextField>
          <IconButton onClick={openDialog}>
            <AddCircle />
          </IconButton>
        </div>
        <Card
          elevation={2}
          style={{
            maxHeight: "700px",
            overflow: "auto",
            width: "80%",
            margin: "auto",
          }}
        >
          <List>
            {products
              .filter((value) => {
                if (searchProd === "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(searchProd.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((d, idx) => (
                <ListItemProduct
                  key={d.id}
                  image={d.thumbnail}
                  primaryText={`$${d.price} | ${d.title}`}
                  secondaryText={`${d.description}`}
                  rating={`${d.rating}`}
                  onDelete={() => handleDeleteProducts(d.id, idx)}
                />
              ))}
            {newProducts
              .filter((value) => {
                if (searchProd === "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(searchProd.toLowerCase())
                ) {
                  return value;
                }
              }).map((d, idx) => (
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
