import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function Photo({ image }) {
    return (
        <Container className="cardYear">
            <Col>
                <Image
                    src={image}
                    style={{
                        textAlign: "center",
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                    }}
                    alt="nakamura"
                    class="img-responsive center-block"
                    rounded="true"
                />
            </Col>
        </Container>
    )
}