import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const BASE_API_URL = `https://dummyjson.com/products`;

function AddProductDialog({ open, onClose, products, setProducts }) {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = () => {
        axios
            .post(`${BASE_API_URL}/add`, {
                title: title,
                description: description,
                price: price,
                rating: '4.5'
            })
            .then((res) => {
                setProducts([...products, res.data]);
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add user</DialogTitle>
            <DialogContent
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                    padding: "8px 20px"
                }}
            >
                <TextField
                    name="title"
                    label="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    name="description"
                    label="Description"
                    value={description}
                    onChange={(event) => setDesc(event.target.value)}
                />
                <TextField
                    name="price"
                    label="Price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
                <Button onClick={handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddProductDialog;
