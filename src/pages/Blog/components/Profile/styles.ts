import styled from "styled-components";

export const ProfileCard = styled.div`
  padding: 2rem 2.5rem;
  margin-top: -140px;
  z-index: 1;

  background-color: ${({ theme }) => theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.3);

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileCardContent = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme["base-title"]};
      font-family: Nunito;
      font-size: 1.5rem;
      font-weight: 700;
    }

    a {
      color: ${({ theme }) => theme["blue"]};
      font-family: Nunito;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;

      display: flex;
      gap: 8px;

      transition: 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  p {
    margin-top: 8px;

    color: ${({ theme }) => theme["base-text"]};
    font-family: Nunito;
    font-size: 1rem;
    line-height: 160%;
    text-align: justify;
  }

  footer {
    margin-top: 24px;

    display: flex;
    gap: 24px;

    div {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${({ theme }) => theme["base-label"]};
      }

      span {
        color: ${({ theme }) => theme["base-subtitle"]};
        font-family: Nunito;
        font-size: 1rem;
        line-height: 160%;
      }
    }
  }
`;
