import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contactsList, deleteContact }) => {
  return (
    <ul className={css.ul}>
      {contactsList.map((contact) => {
        return (
          <li className={css.li} key={contact.id}>
            <Contact contact={contact} deleteContact={deleteContact} />
            <button
              className={css.btn}
              type="button"
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
