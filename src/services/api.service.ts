import { IPagination, IPokemon } from '../interfaces';

import applyCaseMiddleware from 'axios-case-converter';
import axios from "axios";
import { host } from "./config";

const options = {
  ignoreHeaders: true,
  ignoreParams: true,
};

const repository = applyCaseMiddleware(axios.create({
  baseURL: host,
  headers: { "Content-Type": "application/json" },
}), options);

repository.interceptors.request.use(
  function (config: any) {
    return config;
  },
  function (error: any) {
    console.error(error);
    
    return Promise.reject(error);
  }
);

repository.interceptors.response.use(
  function (response: any) {
    //Aqui Podemos manejar algun caso.
    return response;
  },
  function (error: any) {
    //Aqui podemos manejar algun caso
    throw error;
  }
);


const apiConnector = {
  pagination: async <IPagination>(offset: number, limit : number): Promise<IPagination> => {
    const { data } = await repository.get<IPagination>('pokemon', { params : { offset, limit }});
    return data;
  },
  getOne: async <IPokemon>(name: string): Promise<IPokemon> => {
    const { data } = await repository.get<IPokemon>(`pokemon/${name}`);
    return data;
  }
};

export default apiConnector;

