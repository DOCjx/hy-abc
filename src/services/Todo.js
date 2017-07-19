import {request, config} from '../utils/';
const {api} = config;
const {todos} = api;

export async function show() {
    return request(`${todos}`);
};