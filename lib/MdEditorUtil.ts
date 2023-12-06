import { MdHeadingId } from "md-editor-rt/lib/types/MdEditor/type";

/**
 * https://github.6bw.fun/imzbf/md-editor-rt/issues/108
 */
export const generateMdHeadingId: MdHeadingId = (text, level, index) => {
  // 拼接字符串并转为小写，去掉空格和井号
  return `heading-${level}-${index}-${text.toLowerCase().replace(/\s|#/g, "")}`;
};
