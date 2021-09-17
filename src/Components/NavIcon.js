import { useContext } from "react";
import { PeopleContext } from "../Pages/People";
import css from "../Styles/People.module.css";

function NavIcon() {

  const {peoples, selectedBlock, setSelectedBlock} = useContext(PeopleContext);
  const selectedIndex = peoples.findIndex(people => people.name == selectedBlock.name);
  const length = peoples.length;

  const goLeft = () => {
    setSelectedBlock( peoples[(selectedIndex-1+length)%length] );
  };

  const goRight = () => {
    setSelectedBlock( peoples[(selectedIndex+1)%length] );
  };

  return (
    <div className={css.navContainer}>
      <div className={css.left} onClick={goLeft} />
      {/* <div className={css.up} onClick={() => {window.scrollTo(0,0)}} /> */}
      <div className={css.right} onClick={goRight} />
    </div>
  );
}

export default NavIcon;