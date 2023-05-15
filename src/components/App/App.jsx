import { useSelector, useDispatch } from "react-redux";
import { add } from "Redux/Slices/Slices";
import { nanoid } from "nanoid";
import ContactForm from "../Contact-form/Contact-form";
import ContactFilter from "../Contact-filter/Contact-filter";
import ContactsList from "../Contact-list/Contacts-list";
import { Div } from '../../styled/style.styled';

const App = () => {

  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const newContact = { id: nanoid(), name: name.value, number: number.value };

    if (checkDuplicateContact(newContact)) {
        alert(`${newContact.name} is already in contacts`);
        return;
    }

    dispatch(add(newContact));
    e.target.reset();
  };

  const checkDuplicateContact = (newContact) => {
    return contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <Div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit}/>
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactsList filteredContacts={filteredContacts}/>
    </Div>
  );
};

export default App;