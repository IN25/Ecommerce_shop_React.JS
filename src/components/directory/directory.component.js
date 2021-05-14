import React from "react";
import "./directory.scss";
import { MenuItem } from "../../components/menu_item/menu_item.component";
import { data } from "./directory.data";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: data,
    };
  }

  render() {
    return (
      <div className="menu_directory">
        {this.state.sections.map((section) => {
          return <MenuItem key={section.id} {...section}></MenuItem>;
        })}
      </div>
    );
  }
}

export default Directory;

// export const Directory = () => {
//   return (
//     <>
//       <div className="menu_directory">
//         <MenuItem title={"HATS"}></MenuItem>
//         <MenuItem title={"JACKETS"}></MenuItem>
//         <MenuItem title={"SNEAKERS"}></MenuItem>
//         <MenuItem title={"WOMENS"}></MenuItem>
//         <MenuItem title={"MENS"}></MenuItem>
//       </div>
//     </>
//   );
// };
