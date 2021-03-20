import AccountItemType, { specOf } from "./AccountItemType";

export default class AccountItem {
  accountItem!: AccountItemType;
  amount!: number;

  constructor(init: Partial<AccountItem>) {
    Object.assign(this, init);
  }

  category(): AccountItemType {
    return specOf(this.accountItem).category();
  }

  is(accountItemType: AccountItemType): boolean {
    return accountItemType === this.accountItem;
  }

  is収入(): boolean {
    return specOf(this.accountItem).is収入();
  }

  is特別費(): boolean {
    return specOf(this.accountItem).is特別費();
  }
}
