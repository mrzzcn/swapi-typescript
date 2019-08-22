/*
 * @Date: 2019-08-22 15:18:10
 * @LastEditTime: 2019-08-22 15:19:25
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
export default interface PagedResults<T> {
  count: number;
  next?: string;
  previous: string;
  results: T[];
}; // eslint-disable-line