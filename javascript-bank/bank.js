/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var accountTest = new Account(this.nextAccountNumber, holder);
    accountTest.deposit(balance);
    this.accounts.push(accountTest);
    this.nextAccountNumber++;
    return accountTest.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    for (var j = 0; j < this.accounts[i].transactions.length; j++) {
      if (this.accounts[i].transactions[j].type === 'deposit') {
        totalAssets += this.accounts[i].transactions[j].amount;
      } else if (this.accounts[i].transactions[j].type === 'withdrawal') {
        totalAssets -= this.accounts[i].transactions[j].amount;
      }
    }
  }
  return totalAssets;
};
