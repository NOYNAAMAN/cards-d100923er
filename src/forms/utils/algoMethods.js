export default function algoMethods() {
  const makeFirstLetterCapital = (text) => {
    const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    return capitalized;
  };
  return { makeFirstLetterCapital };
}
