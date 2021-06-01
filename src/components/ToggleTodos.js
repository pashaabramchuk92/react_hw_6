import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { setAllComplete } from '../redux/action';

const ToggleTodos = ({ setAllComplete }) => {

  const [checked, setCheked] = useState(false);

  return (
    <>
      <input
        checked={checked}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={(e) => {
          setCheked(e.target.checked);
          setAllComplete(!checked);
        }}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  )
}

ToggleTodos.propTypes = {
  setAllComplete: PropTypes.func
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps, { setAllComplete })(ToggleTodos);