import "./SideBar.css";
import Button from "@material-ui/core/Button";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div>
        <Button className="note-btn">Notes</Button>
      </div>
      <div>
        <Button className="archive-btn">Archive</Button>
      </div>
    </div>
  );
};

export default SideBar;
