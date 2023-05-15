import ContactForm from "../Contact-form/Contact-form";
import ContactFilter from "../Contact-filter/Contact-filter";
import ContactsList from "../Contact-list/Contacts-list";
import { Div } from '../../styled/style.styled';

const App = () => {
  return (
    <Div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactsList />
    </Div>
  );
};

export default App;