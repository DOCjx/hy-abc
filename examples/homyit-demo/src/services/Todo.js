import request from '../utils/request';

export async function show() {
  return request('https://api.github.com/repos/homkai/deef');
}
