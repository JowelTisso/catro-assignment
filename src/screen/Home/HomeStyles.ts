import styled from "styled-components";
import { COLORS } from "../../utils/COLORS";

export const Wrapper = styled.div`
  background-color: ${COLORS.bg};
  width: 80%;
  margin: auto;

  .alert {
    background-color: ${COLORS.accent2};
    border-radius: 30px;
    border: none;
    color: ${COLORS.textSecondary};
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
  }

  .alert-msg {
    display: flex;
    align-items: center;
  }

  .alert-action {
    color: ${COLORS.textSecondary};
    text-decoration: underline;
  }
`;
