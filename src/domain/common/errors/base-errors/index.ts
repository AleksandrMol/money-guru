import { enqueueSnackbar } from "notistack"

import type { IErrorResponceData, IErrorsCodes } from "../interface"

export const useErrors = () => {

  const baseErrorsCode: IErrorsCodes = {
    400: (err) => {
      enqueueSnackbar("Плохой запрос", {variant: "error"})
    },
    401: (err) => {
      enqueueSnackbar("Не авторизован", {variant: "error"})

    },
    403: (err) => {
      enqueueSnackbar("Не достаточно прав", {variant: "error"})
    },
    404: (err) => {
      enqueueSnackbar("Не найдено", {variant: "error"})
    },
    500: (err) => {
      enqueueSnackbar("Ошибка со стороны сервера", {variant: "error"})
    },
  }
  
  const errorsResponse = (err: IErrorResponceData | undefined) => {
    const code = err?.statusCode;
    if(code && Object.prototype.hasOwnProperty.call(baseErrorsCode, code)) {
      baseErrorsCode[code](err)
    }else {
      enqueueSnackbar("Что-то пошло не так...", {variant: "error"});
    }
  }

  const onError = (err: any) => {
    console.log(err)
    const error: IErrorResponceData | undefined = err.response?.data? {
      statusCode: err.response.status,
      error: err.response.statusText,
      message: err.message
    } : undefined;
    errorsResponse(error);
  }

  return{
    baseErrorsCode,
    errorsResponse,
    onError,
  }
}