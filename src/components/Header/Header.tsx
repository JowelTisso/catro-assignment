import { Wrapper } from "./HeaderStyles";
import slack from "../../assets/slack.png";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "antd";

const Header = () => {
  return (
    <Wrapper>
      <div className="logo-wrapper">
        <img className="logo" src={slack} alt="logo" />
        <h3>slack</h3>
      </div>

      <div className="nav-link">
        <NavLink
          className={({ isActive }) =>
            `link ${isActive ? "link-selected" : ""}`
          }
          to={"/"}
        >
          Product
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link ${isActive ? "link-selected" : ""}`
          }
          to={"/enterprise"}
        >
          Enterprise
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link ${isActive ? "link-selected" : ""}`
          }
          to={"/resources"}
        >
          Resources
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link ${isActive ? "link-selected" : ""}`
          }
          to={"/pricing"}
        >
          Pricing
        </NavLink>
      </div>

      <div className="actions">
        <Button type="text" icon={<AiOutlineSearch size={"1.4em"} />} />

        <Button type="text">Sign in</Button>
        <Button className="btn-outline radius">TALK TO SALES</Button>
        <Button className="btn-primary radius" type="primary">
          TRY FOR FREE
        </Button>
      </div>
    </Wrapper>
  );
};

export default Header;
