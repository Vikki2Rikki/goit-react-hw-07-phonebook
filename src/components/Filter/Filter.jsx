import React from 'react';
import { FilterWrap, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const inputFilter = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue.toLowerCase()));
  };
  return (
    <FilterWrap>
      <FilterLabel>Find contacts by name</FilterLabel>
      <input type="text" name="filter" onChange={inputFilter} />
    </FilterWrap>
  );
};

export default Filter;
