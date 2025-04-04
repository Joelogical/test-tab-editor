import GuitarNeck from "../components/GuitarNeck/GuitarNeck";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className="home-container">
        <h3>Guitar Tab Editor</h3>
        <div className="editor-section">
          <GuitarNeck />
        </div>
      </div>
    </main>
  );
};

export default Home;
