/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var totalBalance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalBalance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      totalBalance -= this.transactions[i].amount;
    }
  }
  return totalBalance;
};
