import SidebarCard from "./SidebarCard";
import Task from "./Task";

import "styles/Sidebar.css";

export interface SidebarProps {
  activeTaskIndex: number;
  setActiveTaskIndex: (index: number) => void;
  tasks: Task[];
}

const Sidebar = ({
  setActiveTaskIndex,
  activeTaskIndex,
  tasks,
}: SidebarProps) => {
  const updateActive = (index: number) => {
    setActiveTaskIndex(index);
  };

  const questions = tasks.map((task) => task.question);
  const questionCards = questions.map((title: string, index: number) => {
    const link = "#";
    return activeTaskIndex == index ? (
      <SidebarCard
        key={index}
        onClick={updateActive}
        className={"active"}
        link={link}
        cardTitle={title}
        index={index}
      />
    ) : (
      <SidebarCard
        key={index}
        onClick={updateActive}
        link={link}
        cardTitle={title}
        index={index}
      />
    );
  });

  return <div className="sideBar">{questionCards}</div>;
};

export default Sidebar;
