import ScrollAnimation from "../Components/ScrollAnimation";
import ScrollTrigger from "../Components/ScrollTrigger";
import Toolbar from "../Components/Toolbar";
import css from "../Styles/Home.module.css";

function Home() {
  return (
    <div>
      <Toolbar />
      <h1> Home </h1>

      <Blank value={500} />

      <ScrollAnimation dir="frame1" fname="frame-000" size={150} className={css.fixed} />

      <Blank value={500} />

      <ScrollTrigger dir="frame2" fname="frame-000" size={150} FPS={60} className={css.frame2} 
        boundTop={1000} boundBot={2500}
      />

      <Blank value={500} />

    </div>
  );
}

function Blank(props) {
  return (
    <div style={{height: `${props.value}px`}} />
  );
}

export default Home;

