import { Alert, Button } from "antd";
import Header from "../../components/Header/Header";
import { Wrapper } from "./HomeStyles";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Alert
        className="alert"
        message={
          <div className="alert-msg">
            <p>
              Slack is your digital HQ. Meet the new features keeping connected
              in a work from anywhere world.
            </p>
            <Button className="alert-action" size="small" type="text">
              Lets go
              <AiOutlineArrowRight />
            </Button>
          </div>
        }
        type="success"
        closable={{
          closeIcon: <AiOutlineClose size={"1.4em"} color="white" />,
        }}
      />
    </Wrapper>
  );
};

export default Home;
