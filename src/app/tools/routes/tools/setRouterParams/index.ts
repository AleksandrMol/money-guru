import { RouterPaths } from "@app/tools/common/enums/router-paths"

interface IParamTo {
  param: string
  to: string
}

interface ISetRouterParamsProps {
  link: RouterPaths
  replace: IParamTo[]
}

 /**
  * Функция для установки параметров в маршруты
  * @param link маршрут из enum RouterPaths
  * @param replace Массив из объектов какие параметры и на что менять
  */
const setRouterParams = ({ link, replace }: ISetRouterParamsProps): string => {
  let result = link as string;

  replace.forEach((el) => {
    result = result.replace(el.param, el.to)
  })

  return result;
}

export { setRouterParams }