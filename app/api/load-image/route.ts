import fs from 'fs';
import path from 'path';
import {headers} from "next/headers";

export const revalidate = 0

export async function GET(request: Request) {
  const newFolderPath = path.join(process.cwd(), 'assets');

  const headersList = headers()
  const referer = headersList.get('referer')

  if (!fs.existsSync(newFolderPath)) {
    fs.mkdirSync(newFolderPath);
    return Response.json({ message: 'Папка успешно создана!', newFolderPath });
  } else {
    return Response.json({message: 'Папка уже существует.'});
  }
}