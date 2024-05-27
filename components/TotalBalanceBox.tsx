import React from "react";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/* Doughnut chart */}</div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Account: {totalBanks} </h2>
      </div>
      <div className="flex flex-col gap-2">
        <p className="total-balance-label">Total Current Balance</p>
      </div>
    </section>
  );
};

export default TotalBalanceBox;