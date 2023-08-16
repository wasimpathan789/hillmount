import "./MenuList.css";
import { AiOutlineHome } from "react-icons/ai";
import {
  PiExamLight,
  PiChalkboardTeacherDuotone,
  PiCalendarDuotone,
  PiTimerDuotone,
} from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";

const MenuList = ({ toggle }) => {
  return (
    <div className="menu-list">
      {toggle ? (
        <div className="menu-items">
          <Link to={"dashboard"} className="menu-item">
            <MdOutlineDashboardCustomize title="Dashboard" />
          </Link>
          <Link className="menu-item">
            <PiExamLight title="Exam" />
          </Link>
          <Link to={"teacher"} className="menu-item">
            <PiChalkboardTeacherDuotone title="Teacher" />
          </Link>

          <Link className="menu-item">
            <PiCalendarDuotone title="Calendar" />
          </Link>
          <Link className="menu-item">
            <PiTimerDuotone title="Timetable" />
          </Link>
          <Link className="menu-item">
            <GiMoneyStack title="Fees" />
          </Link>
        </div>
      ) : (
        <div className="menu-items">
          <Link to={"dashboard"} className="menu-item">
            <MdOutlineDashboardCustomize title="Dashboard" />
            Dashboard
          </Link>
          <Link className="menu-item">
            <PiExamLight title="Exam" />
            Exam
          </Link>
          <Link to={"teacher"} className="menu-item">
            <PiChalkboardTeacherDuotone title="Teacher" />
            Teacher
          </Link>

          <Link className="menu-item">
            <PiCalendarDuotone title="Calendar" />
            Calendar
          </Link>
          <Link className="menu-item">
            <PiTimerDuotone title="Timetable" />
            Timaetable
          </Link>
          <Link className="menu-item">
            <GiMoneyStack title="Fees" />
            Fees Structure
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuList;
