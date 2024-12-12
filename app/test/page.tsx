'use client';

import React, { useState } from 'react';

export default function Test() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target?.files[0]) {
      setSelectedFile(event.target?.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('Пожалуйста, выберите файл.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const requestOptions = {
        method: 'POST',
        body: formData,
      };

      // @ts-ignore
      const response = await fetch('/api/new-img', requestOptions);

      if (!response.ok) {
        throw new Error('Ошибка загрузки файла');
      }

      const data = await response.json();
      setMessage(data.message || 'Файл успешно загружен');
    } catch (error) {
      console.error('Ошибка:', error);
      setMessage('Не удалось загрузить файл');
    }
  };

  return (
    <div>
      <h1>Загрузить изображение</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'block', marginBottom: '10px' }}
      />

      <button
        onClick={handleUpload}
        style={{
          padding: '10px 15px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Загрузить
      </button>

      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
}