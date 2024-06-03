const normalizeAddress = (address) => {
  const fullAddress = `${address.street}  ${address.houseNumber} ${address.city}`;
  return fullAddress;
};

export default normalizeAddress;
