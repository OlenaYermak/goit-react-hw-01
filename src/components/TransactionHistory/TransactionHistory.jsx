import css from "./TransactionHistory.module.css"

export default function TransactionHistory ({items}) {
    return (
        <table className={css.transactionTable}>
  <thead className={css.transactionTabletHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map((item) => (
          <tr className={css.tableRow} key={item.id}>
            <td className={css.tableData}>{item.type}</td>
            <td className={css.tableData}>{item.amount}</td>
            <td className={css.tableData}>{item.currency}</td>
          </tr>
        ))}
  </tbody>
</table>
    )
}