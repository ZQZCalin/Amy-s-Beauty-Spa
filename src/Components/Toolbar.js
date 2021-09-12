import LinkBtn from "./LinkBtn";

function Toolbar() {

  const links = ["Home", "People", "Service", "Contact Me"];

  return (
    <div>
      {links.map(link => <LinkBtn name={link} key={link} />)}
    </div>
  );
}

export default Toolbar;