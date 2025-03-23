import styled from "styled-components";
import { COLORS } from "../../utils/COLORS";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
  }

  .logo {
    height: 25px;
    width: 25px;
  }

  .nav-link {
    display: flex;
    gap: 50px;
    margin-left: 50px;
  }

  .link {
    color: ${COLORS.text};

    &:hover {
      color: ${COLORS.textHover};
    }
  }

  .link-selected {
    text-decoration: underline;
  }

  .actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 20px;

    .btn-outline {
      background: transparent;
      border-color: ${COLORS.accent};

      &:hover {
        border-color: ${COLORS.accentLight};
        color: ${COLORS.accent};
      }
    }

    .btn-primary {
      background-color: ${COLORS.accent};
      &:hover {
        background-color: ${COLORS.accentLight};
      }
    }
  }
`;
