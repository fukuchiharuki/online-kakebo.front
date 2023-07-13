enum AccountItemType {
  食費 = '食費',
  食費_個別 = '食費(個別)',
  日用品費 = '日用品費',
  娯楽費 = '娯楽費',
  医療費 = '医療費',
  水道光熱費 = '水道光熱費',
  水道光熱費_電気 = '水道光熱費(電気)',
  水道光熱費_ガス = '水道光熱費(ガス)',
  水道光熱費_水道 = '水道光熱費(水道)',
  通信費 = '通信費',
  住居費 = '住居費',
  特別費 = '特別費',
  元入金 = '元入金',
}

export default AccountItemType

export function values(): AccountItemType[] {
  return Object.entries(AccountItemType).map(([_, value]) => value)
}

export function valuesOf(category: AccountItemType): AccountItemType[] {
  return values().filter((it) => specOf(it).category() === category)
}

export function specOf(accountItemType: AccountItemType) {
  switch (accountItemType) {
    case AccountItemType.食費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.食費,
        list: () => true, // false if 明細でリストしない
        hidden: () => false, // true if 折れ線でデフォルト非表示にする
        excluded: () => false, // true if 折れ線で除外する
        shortName: () => "食費",
      }
    case AccountItemType.食費_個別:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.食費,
        list: () => true,
        hidden: () => false,
        excluded: () => false,
        shortName: () => "個別",
      }
    case AccountItemType.日用品費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.日用品費,
        list: () => true,
        hidden: () => false,
        excluded: () => false,
        shortName: () => "日用品費",
      }
    case AccountItemType.娯楽費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.娯楽費,
        list: () => true,
        hidden: () => false,
        excluded: () => false,
        shortName: () => "娯楽費",
      }
    case AccountItemType.医療費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.医療費,
        list: () => true,
        hidden: () => true,
        excluded: () => false,
        shortName: () => "医療費",
      }
    case AccountItemType.水道光熱費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.水道光熱費,
        list: () => false,
        hidden: () => true,
        excluded: () => false,
        shortName: () => "水道光熱費",
      }
    case AccountItemType.水道光熱費_電気:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.水道光熱費,
        list: () => true,
        hidden: () => true,
        excluded: () => false,
        shortName: () => "電気",
      }
    case AccountItemType.水道光熱費_ガス:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.水道光熱費,
        list: () => true,
        hidden: () => true,
        excluded: () => false,
        shortName: () => "ガス",
      }
    case AccountItemType.水道光熱費_水道:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.水道光熱費,
        list: () => true,
        hidden: () => true,
        excluded: () => false,
        shortName: () => "水道",
      }
    case AccountItemType.通信費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.通信費,
        list: () => true,
        hidden: () => true,
        excluded: () => true,
        shortName: () => "通信費",
      }
    case AccountItemType.住居費:
      return {
        is収入: () => false,
        is特別費: () => false,
        category: () => AccountItemType.住居費,
        list: () => true,
        hidden: () => true,
        excluded: () => true,
        shortName: () => "住居費",
      }
    case AccountItemType.特別費:
      return {
        is収入: () => false,
        is特別費: () => true,
        category: () => AccountItemType.特別費,
        list: () => true,
        hidden: () => true,
        excluded: () => true,
        shortName: () => "特別費",
      }
    case AccountItemType.元入金:
      return {
        is収入: () => true,
        is特別費: () => false,
        category: () => AccountItemType.元入金,
        list: () => true,
        hidden: () => true,
        excluded: () => true,
        shortName: () => "元入金",
      }
  }
}
