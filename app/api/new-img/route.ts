import fs from 'fs';
import path from 'path';

export const revalidate = 0;

export async function POST(req: Request) {
  const targetDir = path.join(process.cwd(), 'public');

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  const form = await req.formData();
  const file = form.get('file');

  if (!file || !(file instanceof Blob)) {
    return Response.json(
      { error: 'Файл не предоставлен или неверный формат данных' },
      { status: 400 }
    );
  }

  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const filename = `2.jpeg`;
  const filePath = path.join(targetDir, filename);

  try {
    fs.writeFileSync(filePath, fileBuffer);

    return Response.json({
      message: 'Файл успешно сохранен',
      path: filePath,
    });
  } catch (error) {
    console.error('Ошибка записи файла:', error);
    return Response.json(
      { error: 'Не удалось сохранить файл' },
      { status: 500 }
    );
  }
}