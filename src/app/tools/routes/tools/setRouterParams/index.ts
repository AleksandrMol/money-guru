import { RouterPaths } from "@app/tools/common/enums/router-paths"

interface IParamTo<T> {
  param: T,
  to: string
}

interface ISetRouterParamsProps<T> {
  link: RouterPaths
  replace: IParamTo<T>[]
}

 /**
  * Функция для установки параметров в маршруты
  * @param link маршрут из enum RouterPaths
  * @param replace Массив из объектов какие параметры и на что менять
  */
const setRouterParams= <T> ({ link, replace }: ISetRouterParamsProps<T>): string => {
  let result = link as string;

  replace.forEach((el) => {
    result = result.replace(el.param as string, el.to)
  })

  return result;
}

export { setRouterParams }