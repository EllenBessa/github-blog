import styled from "styled-components";

export const Cover = styled.header`
  position: relative;

  width: 100vw;
  height: 296px;

  padding: 2rem 0;

  background-color: ${({ theme }) => theme["base-profile"]};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    img:nth-child(odd) {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
