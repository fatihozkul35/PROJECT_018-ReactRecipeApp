import { PDiv, Img, Span, Link, Header } from "./AboutStyles";

const About = () => {
  return (
    <div>
      <Img
        src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg"
        alt=""
      />
      <Header>
        About Software Developer <Span>HERR ÖZKUL</Span>
      </Header>

      <PDiv>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae
          nemo delectus deserunt repellat. Nemo excepturi, a ipsa beatae soluta
          odio autem voluptatem sit natus! Ipsa cumque recusandae ratione fugit
          excepturi fuga quisquam nobis veritatis, placeat officia. Velit eum
          reprehenderit eveniet ea quae laborum officia repellendus quaerat
          consectetur possimus. Quas!
        </p>
        <Span>Email : </Span>
        <Link href="#">example@gmail.com </Link>
      </PDiv>
    </div>
  );
};

export default About;
