import { createSelector } from 'reselect';

const selectMainReducer = () => state => state.get('main');

export const getFields = () => createSelector(
    selectMainReducer(),
    state => state.get('fields').toJS()
  );