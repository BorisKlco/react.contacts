const fetchContacs = async () => {
  const req = await fetch("https://random-data-api.com/api/v2/users?size=20");

  if (!req.ok) {
    throw new Error("Fetching contacs Error");
  }

  return req.json();
};

export default fetchContacs;
