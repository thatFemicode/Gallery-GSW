import React from "react";
import { SidebarStyled, ItemStyled } from "./SidebarStyled";
function Item({ active, refs, index }) {
  const handleCLick = () => {
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <ItemStyled
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={() => handleCLick()}
    ></ItemStyled>
  );
}

const Sidebar = ({ sections, refs }) => {
  // console.log(sections, refs);
  const items = sections.map((section, index) => {
    return (
      <Item
        key={section.props.id}
        active={section.props.active}
        refs={refs}
        index={index}
      ></Item>
    );
  });
  return (
    <SidebarStyled>
      <ul className="sidebar-list">{items}</ul>
    </SidebarStyled>
  );
};

export default Sidebar;
