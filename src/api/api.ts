import axios from "axios";

const API_BASE_URL = 'https://localhost:7026';
const POST_BASE_URL = `${API_BASE_URL}/Post`;
const AUTH_BASE_URL = `${API_BASE_URL}/Auth`;
const CATEGORY_BASE_URL = `${API_BASE_URL}/Category`;

//Post
export const POST_GET_COUNT: string = `${POST_BASE_URL}/getCount`;
export const POST_GET_COUNT_BY_CATEGORYNAME: string = `${POST_BASE_URL}/getCount/`;
export const POST_GET_BY_CATEGORY_COUNT: string = `${POST_BASE_URL}/getCount/`;
export const POST_GET_ALL: string = `${POST_BASE_URL}/getAll`;
export const POST_GET_ALL_WITH_PAGINATION: string = `${POST_BASE_URL}/getAll/page/`;
export const POST_GET_BY_ID : string = `${POST_BASE_URL}/getById/`;
export const POST_GET_BY_CATEGORYNAME : string = `${POST_BASE_URL}/getByCategory/`;
export const POST_GET_RECENTS : string = `${POST_BASE_URL}/getRecents/`;

export const POST_POST_ADD : string = `${POST_BASE_URL}/Add`
export const POST_POST_DELETE : string = `${POST_BASE_URL}/Delete`

//  Users
export const USER_ENDPOINT: string = `${API_BASE_URL}/users`;

//  Auth
export const LOGIN: string = `${AUTH_BASE_URL}/login`;
export const REFRESH: string = `${AUTH_BASE_URL}/refreshToken`;

//  Category
export const CATEGORY_GET_ALL: string = `${CATEGORY_BASE_URL}/getAll`;
export const CATEGORY_GET_BY_NAME: string = `${CATEGORY_BASE_URL}/getByName/`;

//  AuthToken
export const setAuthToken = (token : string) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
}}
