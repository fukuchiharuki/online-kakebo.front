enum AccountItemType {
  予算 = '予算',
  食費 = '食費',
  食費_外食等 = '食費(外食等)',
  生活費 = '生活費',
  子育て費用 = '子育て費用',
  家族レク = '家族レク',
  交際費 = '交際費',
  趣味娯楽費 = '趣味娯楽費',
  医療費 = '医療費',
  水道光熱費 = '水道光熱費',
  水道光熱費_電気 = '水道光熱費(電気)',
  水道光熱費_ガス = '水道光熱費(ガス)',
  水道光熱費_水道 = '水道光熱費(水道)',
  通信費 = '通信費',
  住居費 = '住居費',
  特別費 = '特別費',
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
    case AccountItemType.予算:
      return {
        ...defaultSpec,
        is予算: () => true,
        shortName: () => '予算',
        category: () => AccountItemType.予算,
        excluded: () => true,
      }
    case AccountItemType.食費:
      return {
        ...defaultSpec,
        shortName: () => '食費',
        category: () => AccountItemType.食費,
      }
    case AccountItemType.食費_外食等:
      return {
        ...defaultSpec,
        shortName: () => '外食等',
        category: () => AccountItemType.食費,
      }
    case AccountItemType.生活費:
      return {
        ...defaultSpec,
        shortName: () => '生活費',
        category: () => AccountItemType.生活費,
      }
    case AccountItemType.子育て費用:
      return {
        ...defaultSpec,
        shortName: () => '子育て費用',
        category: () => AccountItemType.子育て費用,
        hidden: () => true,
      }
    case AccountItemType.家族レク:
      return {
        ...defaultSpec,
        shortName: () => '家族レク',
        category: () => AccountItemType.家族レク,
        hidden: () => true,
      }
    case AccountItemType.交際費:
      return {
        ...defaultSpec,
        shortName: () => '交際費',
        category: () => AccountItemType.交際費,
        hidden: () => true,
      }
    case AccountItemType.趣味娯楽費:
      return {
        ...defaultSpec,
        shortName: () => '趣味娯楽費',
        category: () => AccountItemType.趣味娯楽費,
        hidden: () => true,
      }
    case AccountItemType.医療費:
      return {
        ...defaultSpec,
        shortName: () => '医療費',
        category: () => AccountItemType.医療費,
        excluded: () => true,
      }
    case AccountItemType.水道光熱費:
      return {
        ...defaultSpec,
        shortName: () => '水道光熱費',
        category: () => AccountItemType.水道光熱費,
        list: () => false,
      }
    case AccountItemType.水道光熱費_電気:
      return {
        ...defaultSpec,
        shortName: () => '電気',
        category: () => AccountItemType.水道光熱費,
        hidden: () => true,
      }
    case AccountItemType.水道光熱費_ガス:
      return {
        ...defaultSpec,
        shortName: () => 'ガス',
        category: () => AccountItemType.水道光熱費,
        hidden: () => true,
      }
    case AccountItemType.水道光熱費_水道:
      return {
        ...defaultSpec,
        shortName: () => '水道',
        category: () => AccountItemType.水道光熱費,
        hidden: () => true,
      }
    case AccountItemType.通信費:
      return {
        ...defaultSpec,
        shortName: () => '通信費',
        category: () => AccountItemType.通信費,
        excluded: () => true,
      }
    case AccountItemType.住居費:
      return {
        ...defaultSpec,
        shortName: () => '住居費',
        category: () => AccountItemType.住居費,
        excluded: () => true,
      }
    case AccountItemType.特別費:
      return {
        ...defaultSpec,
        is特別費: () => true,
        shortName: () => '特別費',
        category: () => AccountItemType.特別費,
        hidden: () => true,
      }
  }
}

const defaultSpec = {
  is予算: () => false,
  is特別費: () => false,
  category: () => AccountItemType.食費,
  shortName: () => '食費',
  list: () => true, // false if 明細でリストしない
  hidden: () => false, // true if 折れ線でデフォルト非表示にする
  excluded: () => false, // true if 折れ線で除外する
}
