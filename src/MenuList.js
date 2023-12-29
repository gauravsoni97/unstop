
import _ from "lodash";
import Dashboard  from "../src/assets/sidebar/Vector.svg";
import Assessment  from "../src/assets/sidebar/note_alt.svg";
import Library  from "../src/assets/sidebar/quiz.svg";
const MenuList = [
  {
    text: "Dashboard",
    icon: Dashboard, 
    rootpath: "dashboard", 
    url: "/dashboard", 
    active: false,
    child: [],
  },
  {
    text: "Assessment",
    icon: Assessment, 
    rootpath: "assessment", 
    url: "/assessment", 
    active: false,
    child: [],
  },
  {
    text: "My Library",
    icon: Library, 
    rootpath: "library", 
    url: "/library", 
    active: false,
    child: [],
  },
 
 
];
export { MenuList };
