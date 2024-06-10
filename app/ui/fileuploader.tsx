import React, { useState } from 'react';
import { axiosImageInstance } from '../axios/axiosIntances';

interface FileUploaderProps {
    setLocation: (location: string) => void;
}

function FileUploader({setLocation}: FileUploaderProps) {
    const [file, setFile] = useState("");
    const [uploadProgress, setUploadProgress] = useState(0);
    const [status, setStatus] = useState('');
    const [loadedBytes, setLoadedBytes] = useState(0);
    const [totalBytes, setTotalBytes] = useState(0);

    const uploadFile = (event: any) => {
        const file = event.target.files[0];
        setFile(URL.createObjectURL(file));
        const formData = new FormData();
        formData.append("file", file);

        axiosImageInstance.post('files/upload', formData, {
        onUploadProgress: (progressEvent) => {
            const loaded = progressEvent.loaded;
            const total = progressEvent.total;
            if(total){
                setLoadedBytes(loaded);
                setTotalBytes(total);
                const percent = (loaded / total) * 100;
                setUploadProgress(Math.round(percent));
                setStatus(Math.round(percent) + "% uploaded...");
            }
        }
        })
        .then((response) => {
        setStatus("Upload successful!");
        setUploadProgress(100);
        setLocation(response.data.location)
        console.log(response.data);
        })
        .catch((error) => {
        setStatus("Upload failed!");
        console.error(error);
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <input 
          type="file" 
          name="file" 
          onChange={uploadFile} 
          className="w-full px-4 py-2 mb-4 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="block w-full mb-2 text-center">
          File progress: 
          <progress 
            value={uploadProgress} 
            max="100" 
            className="w-full h-4 mt-2 bg-gray-200 rounded-lg"
          />
        </label>
        <p className="text-center">{status}</p>
        <p className="text-center">
          Uploaded {loadedBytes} bytes of {totalBytes}
        </p>
        {file && 
          <img 
            src={file} 
            alt="Preview" 
            className="block w-full max-w-xs mx-auto mt-4 rounded-lg"
          />
        }
      </div>
    </div>
    );
}

export default FileUploader;