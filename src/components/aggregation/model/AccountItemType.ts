enum AccountItemType {
  食費 = '食費',
  食費_個別 = '食費(個別)',
  日用品費 = '日用品費',
  娯楽費 = '娯楽費',
  医療費 = '医療費',
  水道光熱費 = '水道光熱費',
  通信費 = '通信費',
  住居費 = '住居費',
  特別費 = '特別費',
  元入金 = '元入金',
}

export default AccountItemType

export function specOf(accountItemType: AccountItemType) {
  switch (accountItemType) {
    case AccountItemType.食費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.食費,
      }
    case AccountItemType.食費_個別:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.食費,
      }
    case AccountItemType.日用品費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.日用品費,
      }
    case AccountItemType.娯楽費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.娯楽費,
      }
    case AccountItemType.医療費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.医療費,
      }
    case AccountItemType.水道光熱費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.水道光熱費,
      }
    case AccountItemType.通信費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.通信費,
      }
    case AccountItemType.住居費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.住居費,
      }
    case AccountItemType.特別費:
      return {
        is収入: () => false,
        is特別費: () => true,
        category: () => AccountItemType.特別費,
      }
    case AccountItemType.元入金:
      return {
        is収入: () => true,
        is特別費: () => false,
        category: () => AccountItemType.元入金,
      }
  }
}
