import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selector';
import { filterContacts } from '../../redux/filterSlice';
import { Input } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label>
      <Input
        type="text"
        placeholder="Find contacts by name..."
        value={filter}
        onChange={evt => dispatch(filterContacts(evt.target.value))}
      />
    </label>
  );
}
