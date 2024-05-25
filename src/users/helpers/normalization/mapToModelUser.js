// normalizeUser.js
const mapToModelUser = (userData) => {
  return {
    name: {
      first: userData.name.first,
      middle: userData.name.middle,
      last: userData.name.last,
    },

    phone: userData.phone,
    image: {
      url: userData.image.url,
      alt: userData.image.alt,
    },

    address: {
      state: userData.address.state,
      country: userData.address.country,
      city: userData.address.city,
      street: userData.address.street,
      houseNumber: userData.address.houseNumber,
      zip: userData.address.zip,
    },
  };
};
export default mapToModelUser;
