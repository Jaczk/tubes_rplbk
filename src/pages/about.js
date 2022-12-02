import React from "react";
import "./style.css";
import ShowTeam from "../components/showTeam";
import { Button, Container, Image } from "react-bootstrap";
import kazuha from "../img/perfumemod.jpg";

const About = () => {
  return (
    <div className="App">
      <div className="abouts">
        <Container>
          <Container className="Con">
            <Image
              src={kazuha}
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
            <h1>Eau de toilette</h1>
            <p className="fs-5">
              Berikut merupakan aplikasi Katalog Parfum sebagai tugas akhir
              praktikum RPLBK{" "}
            </p>
          </Container>
          <Container className="timShow">
            <ShowTeam />
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default About;
