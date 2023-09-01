import { PropTypes } from 'prop-types';
import { Input, P } from './Filter.styled';

export default function Filter({ handleSearch }) {
  return (
    <>
      <P>Find contact by name</P>
      <label htmlFor="filter">
        <Input type="text" name="filter" onChange={handleSearch} />
      </label>
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
