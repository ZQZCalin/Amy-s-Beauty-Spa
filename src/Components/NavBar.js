import { useHistory, useLocation } from 'react-router-dom';
import css from '../Styles/Navbar.module.css';
import Search from './Search';

const navBtns = [
  {
    name: "Home",
    to: "/",
    btnUrl: "/icon/people_outlined.svg",
    boldUrl: "/icon/people_filled.svg",
    iconHeight: 380,
  },
  {
    name: "People",
    to: "/people",
    btnUrl: "/icon/people_outlined.svg",
    boldUrl: "/icon/people_filled.svg",
    iconHeight: 380,
  },
  {
    name: "Service",
    to: "/service",
    btnUrl: "/icon/service_outlined.svg",
    boldUrl: "/icon/service_filled.svg",
    iconHeight: 370,
  },
  {
    name: "Contact",
    to: "/contact",
    btnUrl: "/icon/contact_outlined.svg",
    boldUrl: "/icon/contact_filled.svg",
    iconHeight: 300,
  },
];

const iconHeightScaleRatio = 15;

function NavBar() {

  return (
    <div className={css.container}>
      {
        navBtns.map(btn =>
          <NavBtn name={btn.name} to={btn.to}
            url1={btn.btnUrl} url2={btn.boldUrl} iconHeight={btn.iconHeight / iconHeightScaleRatio}
            key={btn.name}
          />
        )
      }

      <div className={ css.searchBtn }>
        <img src="/icon/search_outlined.svg" style={{
          height: `${400 / iconHeightScaleRatio}px`,
        }} />
      </div>

      <Search />
    </div>
  );
}

function NavBtn({
  name, to, url1, url2, iconHeight
}) {

  const history = useHistory();
  const loc = useLocation();

  const currentPage = locParser(loc.pathname) === locParser(to);

  return (
    <div className={`${css.navBtn} ${currentPage && css.navBtnCurrent}`} onClick={() => { history.push(to) }} >
      {currentPage ?
        <img src={url2} style={{ height: `${iconHeight}px` }} /> :
        <img src={url1} style={{ height: `${iconHeight}px` }} />
      }
    </div>
  );
}

// remove / and .
function locParser(loc) {
  return loc.replaceAll("/", "").replaceAll(".", "");
}

export default NavBar;