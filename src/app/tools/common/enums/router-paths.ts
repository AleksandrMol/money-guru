/**
 * Список параметров для ссылки страницы списков
 */
enum ListsParamsEnum {
  ENTITY = ':entity',
}

/**
 * Список параметров для ссылки страницы транзакций
 */
enum TransferParamsEnum {
  TYPE = ':type',
  FROM = ':from',
  TO = ':to',
}

/**
 * Список эндпоинтов для роутинга
 */
enum RouterPaths {
  DEFAULT = '/',
  LISTS = `/lists/${ListsParamsEnum.ENTITY}`,
  TRANSFER = `/transfer/type/${TransferParamsEnum.TYPE}/from/${TransferParamsEnum.FROM}/to/${TransferParamsEnum.TO}`
}

export { RouterPaths, TransferParamsEnum, ListsParamsEnum }
