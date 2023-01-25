import axios from "axios";

const API_BASE_URL = 'https://localhost:7026';

export const POST_GET_COUNT: string = `${API_BASE_URL}/Post/getCount`;
export const POST_GET_COUNT_BY_CATEGORYNAME: string = `${API_BASE_URL}/Post/getCount/`;
export const POST_GET_BY_CATEGORY_COUNT: string = `${API_BASE_URL}/Post/getCount/`;
export const POST_GET_ALL: string = `${API_BASE_URL}/Post/getAll`;
export const POST_GET_ALL_WITH_PAGINATION: string = `${API_BASE_URL}/Post/getAll/page/`;
export const POST_GET_BY_ID : string = `${API_BASE_URL}​/Post/getById/`;
export const POST_GET_BY_CATEGORYNAME : string = `${API_BASE_URL}/Post/getByCategory/`;
export const POST_GET_RECENTS : string = `${API_BASE_URL}/Post/getRecents/`;

export const USER_ENDPOINT: string = `${API_BASE_URL}/users`;

export const LOGIN: string = `${API_BASE_URL}/Auth/login`;
export const REFRESH: string = `${API_BASE_URL}/Auth/refreshToken`;

export const CATEGORY_GET_ALL: string = `${API_BASE_URL}/Category/getAll`;
export const CATEGORY_GET_BY_NAME: string = `${API_BASE_URL}/Category/getByName/`;

export const setAuthToken = (token : string) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
}}
