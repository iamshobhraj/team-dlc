import React, { useEffect, useRef, useState } from 'react';

interface CameraProps {
  onImageCaptured: (blob: Blob) => void;
  startCapture: boolean;
  stopCapture: () => void;
}

const CameraComponent: React.FC<CameraProps> = ({ onImageCaptured, startCapture, stopCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const getMediaStream = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Failed to get media stream: ", err);
      }
    };
  
    getMediaStream();
  }, []);
  

  useEffect(() => {
    if (startCapture && !intervalId.current) {
      startCapturing();
    } else if (!startCapture && intervalId.current) {
      stopCapturing();
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [startCapture, stopCapture]);

  const startCapturing = () => {
    intervalId.current = setInterval(() => {
      capturePhoto();
    },  3000);
  };

  const stopCapturing = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
    stopCapture();
  };

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current!.videoWidth;
    canvas.height = videoRef.current!.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(videoRef.current!,  0,  0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (blob) {
        onImageCaptured(blob);
      }
    }, 'image/jpeg');
  };

  return <video ref={videoRef} autoPlay muted playsInline className='w-full' />;
};

export default CameraComponent;
