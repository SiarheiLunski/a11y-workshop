export const bindUpdateCartAmount = ({ id, amount, onIncrease, onDecrease }) => e => {
  const value = Number(e.target.value);
  if (value === 0) return;

  if (value > amount) {
    onIncrease(id, 1);
  } else {
    onDecrease(id);
  }
};
