import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="px-4 py-2 my-5 text-center">
        <Image rounded={true} src="/apple-touch-icon.png" style={{ width: "5rem", height: "5rem" }}></Image>
        <h1 className="display-5 fw-bold gold mt-3">Joyas Geda</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Para todos los gustos, un regalo fino y elegante, la plata más fina.</p>
          <Link to="/catalog" className="btn btn-primary watch-catalog bg-gold">
            Ver Catálogo
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
