import { createContext, useState } from "react";
import BioDesc from "../Components/BioDesc";
import NavIcon from "../Components/NavIcon";
import PeopleBar from "../Components/PeopleBar";

export const PeopleContext = createContext();

const peoples = [
  {
    name: "Peilin Rao",
    avatarUrl: "people/peilin_rao.jpg",
    bioUrl: "people/peilin_rao.jpg",
    desc: "顶级美容师",
    specialty: ["hair"],
  },
  {
    name: "Feiyang Xue",
    avatarUrl: "people/feiyang_xue.jpg",
    bioUrl: "people/feiyang_xue.jpg",
    desc: "顶级美容师",
    specialty: ["hair"],
  },
  {
    name: "Jiayi Xu",
    avatarUrl: "people/jiayi_xu.jpg",
    bioUrl: "people/jiayi_xu.jpg",
    desc: "一般美容师",
    specialty: ["face"],
  },
  {
    name: "Jiayi Li",
    avatarUrl: "people/jiayi_li.jpg",
    bioUrl: "people/jiayi_li.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    specialty: ["nose"],
  },
  {
    name: "Tianyu Bai",
    avatarUrl: "people/tianyu_bai.jpg",
    bioUrl: "people/tianyu_bai.jpg",
    desc: "特级美容师",
    specialty: ["nose"],
  },
  {
    name: "Dongning Lyu",
    avatarUrl: "people/dongning_lyu.jpg",
    bioUrl: "people/dongning_lyu.jpg",
    desc: "一般美容师",
    specialty: ["nose"],
  },
  {
    name: "Ruici Gao",
    avatarUrl: "people/ruici_gao.jpg",
    bioUrl: "people/ruici_gao.jpg",
    desc: "一般美容师",
    specialty: ["face"],
  },
  {
    name: "Yi'an Wu",
    avatarUrl: "people/yian_wu.jpg",
    bioUrl: "people/yian_wu.jpg",
    desc: "普通美容师",
    specialty: ["neck"],
  },
  {
    name: "Dan Zhang",
    avatarUrl: "people/dan_zhang.jpg",
    bioUrl: "people/dan_zhang.jpg",
    desc: "强行美容师",
    specialty: ["ear"],
  },
];

function People() {

  const [selectedBlock, setSelectedBlock] = useState({});

  return (
    <PeopleContext.Provider value={{
      peoples, selectedBlock, setSelectedBlock,
    }}>
      <div>
        <PeopleBar />

        {selectedBlock.name &&
          <BioDesc name={selectedBlock.name} imgUrl={selectedBlock.bioUrl} 
            desc={selectedBlock.desc} specialty={selectedBlock.specialty}
          />
        }

        <NavIcon />
      </div>
    </PeopleContext.Provider>
  );
}

export default People;