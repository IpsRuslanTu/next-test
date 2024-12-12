import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const newFolderPath = path.join(process.cwd(), 'new-folder');

  if (!fs.existsSync(newFolderPath)) {
    fs.mkdirSync(newFolderPath);
    return Response.json({ message: 'Папка успешно создана!', newFolderPath });
  } else {
    return Response.json({message: 'Папка уже существует.'});
  }
}