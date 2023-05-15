import { useSelector, useDispatch } from "react-redux";
import { remove } from "Redux/Slices/Slices";
import ContactsListElement from "../Contact-list-element/Contacts-list-element";
import { Button } from "../../styled/style.styled";

const ContactsList = () => {

    const contacts = useSelector((state) => state.contacts);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul>
         {filteredContacts.map((contact) => (
        <ContactsListElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}>
        <Button onClick={() => dispatch(remove(contact.id))}>Delete</Button>
        </ContactsListElement>
      ))}
      </ul>
    )
}

export default ContactsList;