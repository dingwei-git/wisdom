import request from '@/utils/request'
// const baseUrl = 'https://www.fastmock.site/mock/90906a317a506fcb46fe137e89b7eec0/mes';
const baseUrl = 'http://localhost:30000';

//获取生产任务下达列表；
export function getUserApi(data) {
  return request({
    url: baseUrl +'/api/wisdom/getUserApi',
    method: 'get',
    data: data,
    datatype: 'json'
  })
}