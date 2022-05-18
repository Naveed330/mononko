import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar_class " >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span
                  style={{
                    color: "#ff3d3d",
                    backgroundColor: "#E8E5DE",
                    padding: "10px 30px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:' rgba(213, 211, 199, 0.3)'
                  }}
                >
                  Home
                </span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span
                  style={{
                    color: "#222222",
                    backgroundColor: "#E8E5DE",
                    padding: "10px 30px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:' rgba(213, 211, 199, 0.3)'

                  }}
                >
                  About
                </span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span
                  style={{
                    color: "#222222",
                    backgroundColor: "#E8E5DE",
                    padding: "10px 30px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:' rgba(213, 211, 199, 0.3)'

                  }}
                >
                  Rarity
                </span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span
                  style={{
                    color: "#222222",
                    backgroundColor: "#E8E5DE",
                    padding: "10px 30px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:' rgba(213, 211, 199, 0.3)'

                  }}
                >
                  Roadmap
                </span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span
                  style={{
                    color: "#222222",
                    backgroundColor: "#E8E5DE",
                    padding: "10px 30px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:' rgba(213, 211, 199, 0.3)'

                  }}
                >
                  Mindmap
                </span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span
                  style={{
                    color: "#222222",
                    backgroundColor: "#E8E5DE",
                    padding: "10px 30px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:' rgba(213, 211, 199, 0.3)'

                  }}
                >
                  Team
                </span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span
                  style={{
                    color: "#222222",
                    backgroundColor: "#E8E5DE",
                    padding: "10px 30px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:' rgba(213, 211, 199, 0.3)'

                  }}
                >
                  OpenSea
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
