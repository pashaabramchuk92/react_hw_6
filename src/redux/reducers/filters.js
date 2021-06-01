import { CHANGE_FILTER } from '../action/actionTypes';
import { FilterStatus } from '../../utils/enums';

const BASE_FILTER = FilterStatus.ALL;

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
}

export default filter;