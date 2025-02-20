import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name) || "";

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map((cont) => (
        <li className={s.item} key={cont.id}>
          <Contact data={cont} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
