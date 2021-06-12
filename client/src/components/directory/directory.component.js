import React from "react";
import "./directory.scss";
import MenuItem from "../../components/menu_item/menu_item.component";
import { connect } from "react-redux";

const Directory = ({ sections }) => {
  return (
    <div className="menu_directory">
      {sections.map((section) => {
        return <MenuItem key={section.id} {...section}></MenuItem>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { sections: state.data.sections };
};

export default connect(mapStateToProps)(Directory);
