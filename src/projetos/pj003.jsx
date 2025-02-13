import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "../styles/pj003.css";
export default function Pj003() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [photo, setPhoto] = useState("");
  const [dados, setDados] = useState([]);
  const [mostrarBox, setMostraBox] = useState(false);
  const boxRef = useRef(null);

  let pullGit = (event) => {
    setGitHub(event.target.value);
  };
  let pullEmail = (event) => {
    setEmail(event.target.value);
  };
  const pRef = useRef(null);

  let gitName = () => {
    setDados([
      <img className="photoUser" key={photo} src={photo} alt="Photo user" />,
      <div className="objects" key="info">
        <p>
          <strong>Name:</strong> {nome}
        </p>
        <p>
          <strong>E-mail:</strong> {email}
        </p>
        <p>
          <strong>GitHub:</strong> {gitHub}
        </p>
      </div>,
    ]);
    setMostraBox(true);
  };

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.display = mostrarBox ? "flex" : "none";
    }
  }, [mostrarBox, dados]);

  let pullInput = (event) => {
    setNome(event.target.value);
  };
  let pullPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <h2 className="tittle">Conference ticket generator</h2>
      <h4>
        In this challenge, i'll create a form that generates a ticket. There's a lot of scope for
        customizing the generated ticket and putting your own stamp on the project.
      </h4>
      <div className="formulario">
        <div className="box-each">
          <h5>Nome</h5>
          <input required type="text" placeholder="Your name" onChange={pullInput} />
        </div>
        <div className="box-each">
          <h5>E-mail</h5>
          <input required type="text" placeholder="email@example.com" onChange={pullEmail} />
        </div>
        <div className="box-each">
          <h5>Github</h5>
          <input required type="text" placeholder="@yourusername" onChange={pullGit} />
        </div>
        <div className="box-each">
          <h5>Choose Photo</h5>
          <input
            required
            type="file"
            accept="image/*"
            placeholder="Your Photo"
            onChange={pullPhoto}
          />
        </div>
      </div>
      <button onClick={gitName}>Generate</button>
      <div className="card">
        <div ref={boxRef} className="box-card">
          {dados}
        </div>
      </div>
    </>
  );
}
