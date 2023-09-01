import ContactItem from 'components/ContactItem';
import { PropTypes } from 'prop-types';
import { Ul } from './ContactList.styled';

export default function ContactList({ contacts, handleDelete }) {
  return (
    <Ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={handleDelete}
          />
        );
      })}
    </Ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
