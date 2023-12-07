/**
 * 格式化数字返回 1.1k 这种字符串
 */
export const formatCount = (num: number | undefined | null): string => {
  if (!num) {
    return "0";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
};
