import React, { useState } from "react";
import "../App.css";
import aegis from "../Data.json";
import wonyoung from "../img/jisoo.jpg";
import { Button, Container, Image } from "react-bootstrap";
import TextInput from "./textinput";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from "react-bootstrap/Card";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";

export default function ConInput() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    setResult(
      aegis.filter((post) => {
        if (keyword === "") {
          return post;
        } else if (post.nama_lengkap.toLowerCase().includes(keyword)) {
          return post;
        }
      })
    );
  };

  return (
    <div className="App">
      <Container>
        {/* <h1 className="text-center">Kelompok 08</h1> */}
        <h1 className="text-center">Pencarian Data Customer</h1>
        <TextInput
          type="text"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="Masukkan Nama"
        />
        <Button variant="success" onClick={handleSubmit}>
          Sumbit
        </Button>
        <div className="containCard">
          {result.map((post) => (
            <div class="row d-flex justify-content-center">
              <div class="col-md-5">
                <Card key={post.nim} className="Cardcon">
                  <Card.Body>
                    <Card.Title>Customer #{post.nim}</Card.Title>
                    <div
                      className="text-center"
                      style={{
                        textAlign: "start",
                      }}
                    >
                      <Image
                        src={wonyoung}
                        style={{
                          textAlign: "center",
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                        }}
                        alt="wonyoung"
                        class="img-responsive center-block"
                        rounded="true"
                      />
                    </div>
                    <Card.Title>Nama Lengkap: {post.nama_lengkap}</Card.Title>
                    <Card.Text>
                      Nama Panggilan : {post.nama_panggilan}
                    </Card.Text>
                    <Card.Text>No_Telp : {post.nomor_telepon}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="footerCon">
                    <div className="d-flex justify-content-between">
                      <div>
                        <FontAwesomeIcon icon={faEnvelope} /> {post.email}
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faLine} /> @{post.id_line}
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
