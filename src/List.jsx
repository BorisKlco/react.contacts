import { useQuery } from "@tanstack/react-query";
import fetchContacs from "./fetchContacs";

const List = () => {
  const result = useQuery(["contacts"], fetchContacs);
  const contactList = result?.data ?? [];

  {
    console.log(contactList);
  }

  if (contactList.isLoading) return "Loading...";

  return (
    <div className="listContainer">
      <div className="listBody">
        {contactList.map((contact) => (
          <div key={contact.id} className="listItem">
            <p className="gender">{contact.gender}</p>
            <p className="name">
              {contact.first_name} {contact.last_name}
            </p>
            <p className="user">{contact.username}</p>
            <p className="email">{contact.email}</p>
            <input
              className="title"
              type="text"
              value={contact.employment.title}
              disabled
            ></input>
            {/*  <p className="title">{contact.employment.title}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
