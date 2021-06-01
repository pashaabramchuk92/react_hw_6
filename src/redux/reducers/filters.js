import { FILTER_TODOS } from '../action/actionTypes';
import { FilterStatus } from '../../utils/enums';

const BASE_FILTER = FilterStatus.ALL;

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case FILTER_TODOS:
      return activeFilter;
    default:
      return state;
  }
}

export default filter;