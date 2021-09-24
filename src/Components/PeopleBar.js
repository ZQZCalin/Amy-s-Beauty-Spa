import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { PeopleContext } from '../Pages/People';
import css from '../Styles/People.module.css';


function PeopleBar() {

  const { peoples, selectedBlock, setSelectedBlock } = useContext(PeopleContext);

  // add select
  const clickBlock = (name) => {
    // set select block
    setSelectedBlock(peoples.find(people => people.name == name));
    // jump to next page
    setTimeout(() => {
      window.scrollTo(0, window.innerHeight);
    }, 100);
  };

  // initialize rotation config
  const _augPeoples = peoples.concat(peoples);
  const n = _augPeoples.length;
  const radius = 400;

  const _rotation = (i) => {
    const theta = i * 360/n;
    const range = Math.ceil(n/4);
    const hide = i < range || i > n-range;

    return {
      width: "120px",
      height: "360px",
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",

      WebkitTransition: "opacity 1s, -webkit-transform 1s",
      MozTransition: "opacity 1s, -moz-transform 1s",
      transition: "opacity 1s, transform 1s",

      position: "absolute",
      bottom: 0,

      WebkitTransform: `rotateY(${theta}deg) translateZ(${radius}px) scaleX(-1)`,
      transform: `rotateY(${theta}deg) translateZ(${radius}px) scaleX(-1)`,

      // display: hide && "none",
      cursor: "pointer",
    };
  };

  return (
    <div className={css.container} >
      <div className={css.outer} >
        <div className={css.inner}>
          {
            _augPeoples.map((people, i) =>
              <BioBlock name={people.name} imgUrl={people.avatarUrl} key={people.name}
                _selected={people.name == selectedBlock.name} _handleClick={clickBlock}
                _style={_rotation(i)}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

function BioBlock({
  name, imgUrl, _selected = false, _handleClick, _style
}) {

  return (
    <div className={`${css.block} ${_selected && css.selectedBio}`}
      onClick={() => { _handleClick(name) }}
      style={_style}
    >
      <img src={imgUrl} />
      <p>
        {parseFirstName(name)}
      </p>
    </div>
  );
}

const parseFirstName = (name) => {
  return name.split(" ")[0];
}

// declare class attribute
BioBlock.propTypes = {
  name: PropTypes.string,
  // desc: PropTypes.string,
  // specialty: PropTypes.array,
  img_url: PropTypes.string,
};


export default PeopleBar;