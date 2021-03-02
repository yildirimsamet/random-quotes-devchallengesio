import styled from "styled-components";

const StyledQuote = styled.div`
  border-left: 5px solid var(--yellow);
  padding-left: 100px;
  max-width: 380px;
  font-size: 36px;
  font-weight: medium;
  margin: 70px 0;
`;

const Quote = ({ quoteText }) => {
  return <StyledQuote>{`"${quoteText}"`}</StyledQuote>;
};
export default Quote;
