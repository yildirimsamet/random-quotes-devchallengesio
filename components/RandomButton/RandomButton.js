import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";
const StyledButton = styled.button`
  color: var(--grey);
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Raleway";
  background: none;
  display: flex;
  justify-content: center;
  align-self: flex-end;
`;

const RandomButton = ({ onClick, disabled }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      random <BiRefresh fontSize="18px" opacity="0.8" />
    </StyledButton>
  );
};
export default RandomButton;
