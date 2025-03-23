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

  .main {
    width: 100%;
    display: flex;
    min-height: 300px;

    .left-content {
      flex: 1;

      .hero {
        width: 80%;
      }
      .btn-wrapper {
        display: flex;
        gap: 10px;
      }

      .btn-primary {
        font-size: 12px;
        font-weight: 500;
        background-color: ${COLORS.accent};
        &:hover {
          background-color: ${COLORS.accentLight};
        }
      }

      .btn-signup {
        font-size: 12px;
        font-weight: 500;
        padding-left: 0;
      }

      .icon-google {
        background-color: white;
        height: 34px;
        width: 34px;
        margin: 2px;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .right-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .banner-img {
        width: 420px;
        border-radius: 10px;
      }
    }

    .bottom-right-content {
      flex: 1;
      .hero {
        width: 70%;
        h2 {
          margin-top: 0;
        }
      }

      .btn-action {
        background: transparent;
        border-color: ${COLORS.accent};
        color: ${COLORS.accent};

        &:hover {
          background-color: white;
        }
      }
    }
  }

  .client-banner {
    margin-top: 50px;
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 80px;

    .client-logo {
      height: 40px;
    }
  }

  .radius {
    border-radius: 3px;
  }
`;
