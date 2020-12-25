import { Request, Response } from 'express';

export interface IRequest extends Request {
  [property: string]: any;
}

export interface IResponse extends Response {
  [property: string]: any;
}

export interface IError extends Error {
  [property: string]: any;
}
export interface IEnums {
  id: number;
  name: string;
  title: string;
  sn: number;
  activity: boolean;
}

export interface IBaseResp<T> {
  results: T;
  errorCode: number;
  errorMsg: string;
}