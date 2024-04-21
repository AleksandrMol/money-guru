interface IErrorMessage{
  code: string,
  property: string,
  trace: string[],
}

interface IErrorResponceData {
  error: string,
  message: IErrorMessage[] | string,
  statusCode: number,
}

interface IErrorsCodes {
  [N:number]: (err: IErrorResponceData | undefined) => void
}

export type { IErrorMessage, IErrorResponceData, IErrorsCodes }
