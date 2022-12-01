import React, { useState } from "react";
import "./com.css";
import { Container, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from "react-bootstrap/Card";

export default function ShowTeam() {
    const [showKelompok, setShowKelompok] = useState(false);
    const hideKelompok = () => {
        setShowKelompok(!showKelompok);
    };
    return (
        <Container>
            <div className="ViewKelompok">
                <div
                    className="ViewKelompok1"
                    style={{
                        display: showKelompok === true ? "flex" : "none", width: '100%'
                    }}
                >
                    <Card className="cardKelompok">
                        <Card.Title>Liem Christopher Jaya Mulyawan</Card.Title>
                        <Card.Text>21120119130073</Card.Text>
                    </Card>
                    <Card className="cardKelompok">
                        <Card.Title>Muhammad Dzulfiqar Rafli Anwar</Card.Title>
                        <Card.Text>21120119130065</Card.Text>
                    </Card>
                    <Card className="cardKelompok">
                        <Card.Title>Nisrina Shofa</Card.Title>
                        <Card.Text>21120119120002</Card.Text>
                    </Card>
                    <Card className="cardKelompok">
                        <Card.Title>Muhammad Ilham W.</Card.Title>
                        <Card.Text>21120119140118</Card.Text>
                    </Card>
                </div>
                <Button onClick={hideKelompok}>
                    {showKelompok !== true ? "Show" : "Hide"}
                </Button>
            </div>
        </Container>
    )
}