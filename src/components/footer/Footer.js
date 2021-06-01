import ClearComplete from "./ClearComplete";
import FilterTodos from "./FilterTodos";
import LeftTodos from "./LeftTodos";

const Footer = ({ filter, filterTodos }) => {
  console.log(filter);
  return (
    <footer className="footer">
      <LeftTodos />
      <FilterTodos filter={filter} />
      <ClearComplete />
    </footer>
  )
}

export default Footer;