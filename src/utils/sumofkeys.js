// export default function sumOfKeys (expenses, key) {
//   // extract this function & import it later!
//   let total = 0;
//   expenses.forEach(expense => {
//   total = total + expense[key];
// });
// return total;
// }

export default function sumOfKeys (expenses, key) {
  return expenses.reduce((acc, expense) => {
    return acc + expense[key];
  }, 0);
}