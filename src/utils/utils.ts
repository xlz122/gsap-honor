/**
 * @description 加载静态资源
 * @param { string } path - 资源路径(相对于src目录)
 */
export function getImageUrl(path: string): string {
  return new URL(`../${path}`, import.meta.url).href;
}
