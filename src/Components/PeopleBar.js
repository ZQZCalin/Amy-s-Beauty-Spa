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

  return (
    <div className={css.barContainer}>
      <div className={css.barInner}>
        {
          peoples.map(people =>
            <BioBlock name={people.name} imgUrl={people.avatarUrl} key={people.name}
              _selected={people.name == selectedBlock.name} _handleClick={clickBlock}
            />
          )
        }
      </div>
    </div>
  );
}

function BioBlock({
  name, imgUrl, _selected = false, _handleClick
}) {
  return (
    <div className={`${css.BioBlock} ${_selected && css.selectedBio}`}
      onClick={() => { _handleClick(name) }}>
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