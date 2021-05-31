import ClearComplete from "./ClearComplete";
import FilterNotes from "./FilterNotes";
import LeftNotes from "./LeftNotes";

const Footer = () => {
  return (
    <footer className="footer">
      <LeftNotes />
      <FilterNotes />
      <ClearComplete />
    </footer>
  )
}

export default Footer;