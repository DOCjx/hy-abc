import {request, config} from '../utils/';
const {api} = config;
const {lists, v1test} = api;

export async function show() {
    return request(`${lists}`);
};
export async function find({id}) {
    return request(`${v1test}/${id}`);
};