export default function moneyFormatter(
  amount:number,
  currency = 'USD',
) {
  const options = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  };

  if ((amount * 100) % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = new Intl.NumberFormat('en-US', options as any);
  return formatter.format(amount);
}
