import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa"
import { SiNodedotjs } from "react-icons/si"
import { SiFirebase } from "react-icons/si"

function About() {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <p>
        <strong>Tecnologias e ferramentas utilizadas no projeto:</strong>
        <br/>
        <br/>
        <FaReact/> React
        <br/>
        <FaReact/> React Hooks 
        <br/>
        <FaReact/> React Router
        <br/>
        <FaReact/> React Context
        <br/>
        <SiNodedotjs/> NodeJS
        <br/>
        <SiFirebase/> Firebase
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
}

export default About;
