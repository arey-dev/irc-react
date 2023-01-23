const model = () => {
  let rate = 0;

  const setRate = (value) => (rate = value);
  const getRate = () => rate;

  return {
    setRate,
    getRate,
  };
};

const data = model();

export default data;
