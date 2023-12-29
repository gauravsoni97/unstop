
import _ from "lodash";
import Dashboard  from "../src/assets/sidebar/Vector.svg";
import Assessment  from "../src/assets/sidebar/note_alt.svg";
import Library  from "../src/assets/sidebar/quiz.svg";
const MenuList = [
  {
    text: "Dashboard",
    icon: Dashboard, 
    rootpath: "Dashboard", 
    url: "/Dashboard", 
    active: false,
    child: [],
  },
  {
    text: "Assessment",
    icon: Assessment, 
    rootpath: "Assessment", 
    url: "/Assessment", 
    active: false,
    child: [],
  },
  {
    text: "My Library",
    icon: Library, 
    rootpath: "Library", 
    url: "/Library", 
    active: false,
    child: [],
  },
 
 
];
export { MenuList };
