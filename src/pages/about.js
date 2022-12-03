import React from "react";
import "./style.css";
import ShowTeam from "../components/showTeam";
import { Button, Container, Image } from "react-bootstrap";
import kazuha from "../img/perfumemod.jpg";

const About = () => {
  return (
    
      <div className="abouts">
        <Container >
          <Container className="Con">
            <Image
              src={kazuha}
              style={{
                textAlign: "center",
                height: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              }}
              alt="nakamura"
              class="img-responsive center-block"
              rounded="true"
            />

            <h1 style={{display: 'flex',color : 'black', justifyContent: 'center'}}>Eau de toilette</h1>
            <p className="fs-5" style={{display: 'flex',color : 'black', justifyContent: 'center', textAlign : "center"}}>
              Aplikasi Katalog Parfum yang menyediakan berbagai macam jenis parfum ini dibuat sebagai tugas akhir praktikum RPLBK{" "}
            </p>

          </Container>
          <Container className="timShow">
            <ShowTeam />
          </Container>
        </Container>
      </div>
    
  );
};

export default About;
