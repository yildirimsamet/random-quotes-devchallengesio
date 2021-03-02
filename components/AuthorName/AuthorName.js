import styled from "styled-components";

const StyledAuthorName = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: 100px;
  transition: 0.3s ease all;
  padding: 15px;
  border-radius: 3px;

  &:hover {
    background: ${({ isLink }) => isLink && "var(--grey-hover)"};
    h2 {
      color: ${({ isLink }) => isLink && "var(--white)"};
    }
  }
  > h2 {
    color: var(--grey);
    font-weight: bold;
    font-size: 24px;
    transition: 0.3s ease all;
  }
  > h4 {
    font-weight: medium;
    font-size: 14px;
    color: var(--light-grey);
  }
`;

const AuthorName = ({ name, genre, marginTop, isLink }) => {
  return (
    <StyledAuthorName isLink={isLink} marginTop={marginTop}>
      <h2>{name}</h2>
      <h4>{genre}</h4>
    </StyledAuthorName>
  );
};
export default AuthorName;
