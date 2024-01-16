import effectLeft from "../../assets/effect-left.svg";
import effectRight from "../../assets/effect-right.svg";
import logo from "../../assets/logo.svg";
import { Cover, Logo } from "./styles";

export function Header() {
  return (
    <Cover>
      <img src={effectLeft} alt="" />
      <Logo src={logo} alt="" />
      <img src={effectRight} alt="" />
    </Cover>
  );
}
