import "./App.css";
import Button from "./ButtonComponent";
import Img from "./ImageComponent";

const App = () => {
  return (
    <div className="flex">
      <header className="App-header">
        <Img src={"https://placekitten.com/450"} alt={"immagine di prova"} />
        <Img src={"https://placekitten.com/350"} alt={"immagine di prova 2"} />

        <p>
          Perri Alessandro - <code>Prova React</code> - D1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          textColor="green"
          border="15px"
          margin="1em"
          bg="yellow"
          borderStyle="none"
          w="20%"
          h="5vh"
          text="reset"
          fs="1em"
          d="inline-block"
          m="1em"
        />
        <Button
          textColor="purple"
          border="15px"
          margin="1em"
          borderStyle="none"
          w="20%"
          bg="yellow"
          h="5vh"
          text="download"
          fs="1em"
          d="inline-block"
          m="1em"
        />
      </header>
    </div>
  );
};

export default App;
