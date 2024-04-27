// jSpreadsheet用

import { parseCSV } from "../src/utils/parseCSV";

const csvPath = "./13TOKYO.CSV";

export const getData = async (): Promise<any[][]> => {
  let data: any[][] = [];
  try {
    data = await parseCSV(csvPath, encoding="shift-jis");
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const columns = [
  { type: "numeric", title: "全国地方公共団体コード" },
  { type: "numeric", title: "（旧）郵便番号（5桁）" },
  { type: "numeric", title: "郵便番号（7桁）" },
  { type: "text", title: "都道府県名" },
  { type: "text", title: "市区町村名" },
  { type: "text", title: "町域名" },
  { type: "text", title: "都道府県名" },
  { type: "text", title: "市区町村名" },
  { type: "text", title: "町域名" },
  { type: "numeric", title: "一町域が二以上の郵便番号で表される場合の表示" },
  { type: "numeric", title: "小字毎に番地が起番されている町域の表示" },
  { type: "numeric", title: "丁目を有する町域の場合の表示" },
  { type: "numeric", title: "一つの郵便番号で二以上の町域を表す場合の表示" },
  { type: "numeric", title: "更新の表示" },
  { type: "numeric", title: "変更理由" },
];

// 郵便番号データファイルの形式
//  1. 全国地方公共団体コード（JIS X0401、X0402）………　半角数字
//  2. （旧）郵便番号（5桁）………………………………………　半角数字
//  3. 郵便番号（7桁）………………………………………　半角数字
//  4. 都道府県名　…………　半角カタカナ（コード順に掲載）　（※1）
//  5. 市区町村名　…………　半角カタカナ（コード順に掲載）　（※1）
//  6. 町域名　………………　半角カタカナ（五十音順に掲載）　（※1）
//  7. 都道府県名　…………　漢字（コード順に掲載）　（※1,2）
//  8. 市区町村名　…………　漢字（コード順に掲載）　（※1,2）
//  9. 町域名　………………　漢字（五十音順に掲載）　（※1,2）
// 10. 一町域が二以上の郵便番号で表される場合の表示　（※3）　（「1」は該当、「0」は該当せず）
// 11. 小字毎に番地が起番されている町域の表示　（※4）　（「1」は該当、「0」は該当せず）
// 12. 丁目を有する町域の場合の表示　（「1」は該当、「0」は該当せず）
// 13. 一つの郵便番号で二以上の町域を表す場合の表示　（※5）　（「1」は該当、「0」は該当せず）
// 14. 更新の表示（※6）（「0」は変更なし、「1」は変更あり、「2」廃止（廃止データのみ使用））
// 15. 変更理由　（「0」は変更なし、「1」市政・区政・町政・分区・政令指定都市施行、「2」住居表示の実施、「3」区画整理、「4」郵便区調整等、「5」訂正、「6」廃止（廃止データのみ使用））
