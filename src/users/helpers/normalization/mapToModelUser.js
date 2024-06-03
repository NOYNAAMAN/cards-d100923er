const mapToModelUser = (userData) => ({
  name: {
    first: userData.first,
    middle: userData.middle,
    last: userData.last,
  },
  phone: userData.phone,
  image: {
    url: userData.url,
    alt: userData.alt,
  },
  address: {
    state: userData.state,
    country: userData.country,
    city: userData.city,
    street: userData.street,
    zip: userData.zip,
    houseNumber: userData.houseNumber,
  },
});
export default mapToModelUser;
