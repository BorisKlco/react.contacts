import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
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
      <h1 className="hover">Hover Over Contact</h1>
      <div className="listBody">
        {contactList.map((contact) => (
          <Card contact={contact} key={contact.uid} />
        ))}
      </div>
    </div>
  );
};

export default List;
