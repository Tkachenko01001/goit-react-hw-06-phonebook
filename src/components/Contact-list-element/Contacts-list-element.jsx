import { ListElement } from "../../styled/style.styled";

const ContactsListElement = ({id, name, number, children}) => {

    return (
        <ListElement key={id}>{name}: {number} {children}</ListElement>
    )

}

export default ContactsListElement;