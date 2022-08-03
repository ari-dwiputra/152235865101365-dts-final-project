import { Button, Typography } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import icon from "../assets/food.png";
import { useNavigate } from "react-router-dom";
import { logOut, auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const buttonLogoutOnClickHandler = async () => {
    await logOut();
    navigate("/");
  };
  return (
    <Navbar
      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
      bg="light"
      expand="lg"
    >
      <Container fluid style={{ marginLeft: "100px", marginRight: "100px" }}>
        <Navbar.Brand className="ms-3 me-5">
          <img alt="icon" height="90px" src={icon} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#7ec746ff",
                marginRight: "15px",
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#7ec746ff",
                marginRight: "15px",
              }}
              to="/category"
            >
              Category
            </Link>
          </Nav>

          <Nav className="justify-content-end">
            <Typography color="#212121" variant="h6" sx={{ paddingTop:"10px" }} >{user !== null ? user.email : ""}</Typography>
            <Nav.Link>
              {user !== null ? (
                <Button
                  variant="contained"
                  sx={{
                    width: "80px",
                    backgroundColor: "#ff2929",
                    "&:hover": {
                      backgroundColor: "#ed3939",
                    },
                  }}
                  onClick={buttonLogoutOnClickHandler}
                >
                  Logout
                </Button>
              ) : (
                <Link
                  type="button"
                  className="btn"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    backgroundColor: "#7ec746ff",
                    "&:hover": {
                      backgroundColor: "#0dbf0d",
                    },
                  }}
                  to="/login"
                >
                  Login
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
