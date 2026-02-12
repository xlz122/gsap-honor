/**
 * @description 获取图片路径
 */
export const getImageUrl = (path: string): string => {
  const modules: Record<string, { default: string }> = import.meta.glob('/src/assets/**/*', {
    query: '?url',
    eager: true,
  });
  if (!modules[path]) return '';

  return modules[path].default;
};
