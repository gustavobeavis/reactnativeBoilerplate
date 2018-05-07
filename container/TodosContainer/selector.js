import { createSelector } from 'reselect';

const selectTodosContainerDomain = (state) => state.get('todosContainer');

const makeSelectorTodosContainer = () => {
  createSelector(selectTodosContainerDomain, (container) => container.ToJS());
};

export default makeSelectorTodosContainer;

export { selectTodosContainerDomain };
