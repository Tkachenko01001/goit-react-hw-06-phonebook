import { useDispatch } from "react-redux";
import { remove } from "Redux/Slices/Slices";
import ContactsListElement from "../Contact-list-element/Contacts-list-element"
import { Button } from "../../styled/style.styled";

const ContactsList = ({filteredContacts}) => {

    const dispatch = useDispatch();

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