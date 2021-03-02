import styled from "styled-components";
import AuthorName from "../../components/AuthorName/AuthorName";
import { useRouter } from "next/router";
import Quote from "../../components/Quote/Quote.js";
import { useState } from "react";
import Link from "next/link";
const StyledBackButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  padding: 20px 25px;
  border-radius: 50%;
  outline: none;
  border: none;
  color: var(--light-grey);
  font-size: 22px;
  background: var(--yellow);
  cursor: pointer;
  transition: 0.2s ease all;

  &:hover {
    color: var(--grey-hover);
    top: 13px;
  }
`;
const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 25px 100px;
  position: relative;
`;
const Author = ({ data }) => {
  const [quotes, setQuotes] = useState(data.data);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let nameArray = router.query.author.split(" ");
  let name = "";
  nameArray.forEach(
    (item) => (name += item[0].toUpperCase() + item.slice(1) + " ")
  );

  return (
    <div>
      <AuthorWrapper>
        <Link href="/">
          <StyledBackButton
            onClick={() => {
              setLoading(true);
            }}
          >
            {"<"}
          </StyledBackButton>
        </Link>
        <div
          style={
            loading
              ? {
                  opacity: "0.5",
                  filter: "blur(2px)",
                  transition: ".3s ease all",
                }
              : {}
          }
        >
          <AuthorName name={name} />
          {quotes.map((quote, index) => {
            return <Quote key={index} quoteText={quote.quoteText} />;
          })}
        </div>
      </AuthorWrapper>
    </div>
  );
};
export default Author;
export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    `http://quote-garden.herokuapp.com/api/v3/quotes?author=${ctx.query.author}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
