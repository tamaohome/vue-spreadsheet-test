import * as Papa from 'papaparse';

export const parseCSV = async (csvPath: string, encoding = 'utf-8'): Promise<any[][]> => {
  const response = await fetch(csvPath);
  const buffer = await response.arrayBuffer();
  const textDecoder = new TextDecoder(encoding);
  const csvString = textDecoder.decode(buffer);
  const parsedData = Papa.parse(csvString, { header: false }).data as any[][];
  return parsedData;
};
