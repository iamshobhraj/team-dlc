"use client";
import { useState, useEffect, useRef, ChangeEvent, FC, FormEvent } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { useCallback } from "react";
import CameraComponent from "./components/camera";

export default function UserProfile() {
  const [showPopup, setShowPopup] = useState(false);
  const [playerData, setPlayerData] = useState({ name: "", image: "" });
  const [players, setPlayers] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [detectedPlayerIndices, setDetectedPlayerIndices] = useState([]);
  const [isPlayerDetected, setPlayerDetected] = useState(false);
  const videoRef = useRef(null);
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [trigger, setTrigger] = useState(false);
  const [isCapturing, setIsCapturing] = useState(true);

  const handleStartCapture = () => {
    setIsCapturing(true);
  };

  const handleStopCapture = () => {
    setIsCapturing(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/users");
      setPlayers(response.data);
      console.log("Player data fetched", response.data);
    } catch (error) {
      console.error("Error fetching player data", error);
    }
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [trigger]);

  const addPlayer = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("photo", photo!);

    const image_path = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(image_path.data);

    const newuser = {
      name: username,
      image_path: image_path.data,
    };

    try {
      const response: AxiosResponse = await axios.post("/api/users", newuser);
      console.log(response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
    setTrigger(!trigger);
  };

  // const addPlayer = async () => {
  //   let newPlayers;
  //   if (editIndex >= 0) {
  //     newPlayers = [...players];
  //     newPlayers[editIndex] = playerData;
  //     setPlayers(newPlayers);
  //     setEditIndex(-1);
  //   } else {
  //     newPlayers = [...players, playerData];
  //     setPlayers(newPlayers);
  //   }
  //   setPlayerData({ name: "", image: "" });
  //   setShowPopup(false);

  //   try {
  //     await axios.post("/api/savePlayerData", playerData); // Send only the new player data to the server
  //   } catch (error) {
  //     console.error("Error saving player data", error);
  //   }
  // };

  const removePlayer = async (username: String) => {
    try {
      const response = await axios.delete("/api/users", {
        data: {
          username,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const togglePlayerDetected = (index: number) => {
    setDetectedPlayerIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  const handleImageCaptured = (blob: Blob) => {
    console.log("Image captured", blob);
  };
  return (
    <div className="flex flex-col md:flex-row justify-between min-h-screen py-2 bg-gray-200">
      <div className="flex flex-col items-center justify-center w-full md:w-2/3 m-2">
        <CameraComponent
          onImageCaptured={handleImageCaptured}
          startCapture={isCapturing}
          stopCapture={handleStopCapture}
        />
        <div className="flex gap-3">
        <button onClick={handleStartCapture} className="bg-blue-600 p-3 rounded-3xl">Start Capturing</button>
        <button onClick={handleStopCapture} className="bg-red-600 p-3 rounded-3xl">Stop Capturing</button>
        </div>
        
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0">
        <h1 className="text-2xl font-bold text-center text-black-600">
          Player Data
        </h1>
        <div className="mt-4 overflow-auto h-64 w-3/4">
          {players.map((player, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 mb-2 p-2 rounded-lg ${
                detectedPlayerIndices.includes(index)
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            >
              {" "}
              <span className="text-lg font-bold">{index + 1}.</span>
              <span>{player.name}</span>
              <div className="ml-auto">
                <button
                  className="ml-2 bg-red-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105"
                  onClick={() => removePlayer(player.name)}
                >
                  X
                </button>
                <button
                  className="ml-2 bg-orange-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105"
                  onClick={() => togglePlayerDetected(index)}
                >
                  ✓
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-4 px-4 py-2 rounded bg-green-500 text-white transition duration-200 ease-in-out transform hover:scale-105"
          onClick={() => setShowPopup(true)}
        >
          Add Player
        </button>
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Add Player</h2>
              {playerData.image && (
                <Image
                  src={playerData.image}
                  alt={playerData.name}
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
              )}
              <input
                type="text"
                placeholder="Player Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-2 py-1 rounded border border-gray-300 mb-2"
              />
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setPhoto(file || null);
                }}
                className="w-full px-2 py-1 rounded border border-gray-300 mb-4"
              />
              <button
                className="px-4 py-2 rounded bg-blue-500 text-white transition duration-200 ease-in-out transform hover:scale-105"
                onClick={(e) => {
                  addPlayer(e);
                  setShowPopup(false);
                }}
              >
                Save
              </button>
              <button
                className="ml-2 px-4 py-2 rounded bg-red-500 text-white transition duration-200 ease-in-out transform hover:scale-105"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
