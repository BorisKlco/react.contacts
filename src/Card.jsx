const Card = ({ contact }) => {
  return (
    <div className="listItem">
      <div className="itemInfo">
        <p className="id">#{contact.id}</p>
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
      </div>
      <div className="itemExtended">
        <div className="left">
          <img
            src={contact.avatar}
            alt={contact.id}
            data-color={
              contact.id < 1500
                ? "green"
                : contact.id < 3500
                ? "yellow"
                : contact.id < 5000
                ? "blue"
                : "red"
            }
          />
          <h2>
            {contact.first_name} <span>{contact.last_name}</span>
          </h2>
          <h3>{contact.employment.title}</h3>
        </div>
        <div className="middle">
          <div className="personal">
            <h2 className="padding">Personal Info</h2>
            <p>
              ID: <span>#{contact.id}</span>
            </p>
            <p>
              Nick: <span>{contact.username}</span>
            </p>
            <p>
              Email: <span>{contact.email}</span>
            </p>
            <p>
              Birth: <span>{contact.date_of_birth}</span>
            </p>
          </div>
          <div className="address">
            <h2 className="padding">Address</h2>
            <p>
              State: <span>{contact.address.state}</span>
            </p>
            <p>
              City: <span>{contact.address.city}</span>
            </p>
            <p>
              Street: <span>{contact.address.street_name}</span>
            </p>
          </div>
        </div>
        <div
          className="right"
          data-rank={
            contact.subscription.plan === "Diamond"
              ? "dia"
              : contact.subscription.plan === "Silver"
              ? "silver"
              : contact.subscription.plan === "Gold"
              ? "gold"
              : contact.subscription.plan === "Bronze"
              ? "bronze"
              : contact.subscription.plan === "Starter"
              ? "starter"
              : contact.subscription.plan === "Professional"
              ? "professional"
              : "others"
          }
        >
          <h2 className="padding">Subscription</h2>
          <div>
            <p>
              Plan: <span>{contact.subscription.plan}</span>
            </p>
            <p>
              Status: <span>{contact.subscription.status}</span>
            </p>
            <p>
              Payment: <span>{contact.subscription.payment_method}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
