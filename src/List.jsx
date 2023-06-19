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
    <div className="list">
      {contactList.map((contact) => (
        <div key={contact.id} className="listItem">
          <p>{contact.first_name}</p>
          <p>{contact.last_name}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
