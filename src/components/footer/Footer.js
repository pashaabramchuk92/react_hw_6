import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { changeFilter, deleteAllCompleted } from '../../redux/action';
import { FilterStatus } from "../../utils/enums";

import ClearComplete from "./ClearComplete";
import FilterItem from "./FilterItem";
import LeftTodos from "./LeftTodos";

const FilterConfig = [
  {
    title: "All",
    itemEnum: FilterStatus.ALL,
  },  
  {
    title: "Active",
    itemEnum: FilterStatus.ACTIVE,
  },
  {
    title: "Completed",
    itemEnum: FilterStatus.COMPLETED,
  }
];

const Footer = ({ todos, changeFilter, filters, deleteAllCompleted }) => {

  const completedTodos = (todos) => todos.filter(todo => todo.completed);

  return (
    <footer className="footer">
      <LeftTodos
        counter={todos.length - completedTodos(todos).length}
      />
      <ul className="filters">
        {FilterConfig.map(filterItem => (
          <FilterItem
            key={filterItem.itemEnum}
            isSelected={filters === filterItem.itemEnum}
            itemEnum={filterItem.itemEnum}
            title={filterItem.title}
            changeFilter={changeFilter}
          />
        ))}
      </ul>
      <ClearComplete
        completedTodos={completedTodos(todos)}
        deleteAllCompleted={deleteAllCompleted}
      />
    </footer>
  );
}

Footer.propTypes = {
  todos: PropTypes.array,
  changeFilter: PropTypes.func,
  filters: PropTypes.string,
  deleteAllCompleted: PropTypes.func
}

const mapStateToProps = ({ todos, filters }) => ({ todos, filters });

export default connect(mapStateToProps, { changeFilter, deleteAllCompleted })(Footer);