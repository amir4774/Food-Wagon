import { Container } from "../style/Container";
import {
  StyledNavbar,
  NavLogo,
  Location,
  Login,
  Search,
} from "../style/Navbar.styled";
import { Button } from "../style/Button";
import Logo from "../assets/Logo.png";
import MaskGroup from "../assets/Mask Group.png";
import map from "../assets/map-marker-alt.png";
import search from "../assets/Search.png";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <Container>
      <StyledNavbar>
        <div>
          <img src={MaskGroup} />
          <NavLogo id="logo-text" src={Logo} alt="foodwagon" />
        </div>

        <Location>
          <p>
            <span><b>Deliver to:</b></span> <img id="map" src={map} alt="" />
            <span>Current Location</span> <b>Mohammadpur Bus Stand, Dhaka</b>
          </p>
        </Location>

        <Login>
          <Search className="search">
            <p>
              <img src={search} /> <b>Search Food</b>
            </p>
          </Search>

          <div>
            <Button className="login-btn">
              <img src={user} alt="" />
              Login
            </Button>
          </div>
        </Login>
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;
