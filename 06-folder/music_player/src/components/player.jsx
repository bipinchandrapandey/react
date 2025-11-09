import React, { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";
import "./player.css";

const Player = () => {
  const songs = [
    { title: "Song1", src: "http://localhost:5000/songs/song1.mp3" },
    { title: "Song2", src: "http://localhost:5000/songs/song2.mp3" },
    { title: "Song3", src: "http://localhost:5000/songs/song3.mp3" },
    { title: "Song4", src: "http://localhost:5000/songs/song4.mp3" },
    { title: "Song5", src: "http://localhost:5000/songs/song5.mp3" },
    { title: "Song6", src: "http://localhost:5000/songs/song6.mp3" },
    { title: "Song7", src: "http://localhost:5000/songs/song7.mp3" },
    { title: "Song8", src: "http://localhost:5000/songs/song8.mp3" },
    { title: "Song9", src: "http://localhost:5000/songs/song9.mp3" }
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMuteState = !isMuted;
    audioRef.current.muted = newMuteState;
    setIsMuted(newMuteState);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeEventListener("timeupdate", updateProgress);
      audioRef.current.removeEventListener("ended", handleNext);
    }

    const newAudio = new Audio(songs[currentSongIndex].src);
    audioRef.current = newAudio;

    newAudio.volume = volume;
    newAudio.muted = isMuted;
    newAudio.addEventListener("timeupdate", updateProgress);
    newAudio.addEventListener("ended", handleNext);

    if (isPlaying) newAudio.play();

    return () => {
      newAudio.pause();
      newAudio.removeEventListener("timeupdate", updateProgress);
      newAudio.removeEventListener("ended", handleNext);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const updateProgress = () => {
    if (!audioRef.current) return;
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current) return;
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleVolumeUp = () => {
    if (volume < 1) setVolume((v) => Math.min(v + 0.1, 1));
  };
  const handleVolumeDown = () => {
    if (volume > 0) setVolume((v) => Math.max(v - 0.1, 0));
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="player-container">
      <h2 className="player-title">🎵 React Music Player </h2>
      <p className="song-title">{songs[currentSongIndex].title}</p>

      <div className="player-controls">
        <FaBackward onClick={handlePrev} className="player-icon" />
        {isPlaying ? (
          <FaPause onClick={togglePlay} className="player-icon play-pause" />
        ) : (
          <FaPlay onClick={togglePlay} className="player-icon play-pause" />
        )}
        <FaForward onClick={handleNext} className="player-icon" />
      </div>

      <div className="progress-container" onClick={handleProgressClick}>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="time-display">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>

      {/* ✅ Volume Section with Mute Before Volume Down */}
      <div className="volume-controls">
        <button onClick={toggleMute} className="mute-button" title={isMuted ? "Unmute" : "Mute"}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <FaVolumeDown onClick={handleVolumeDown} className="volume-icon" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
        <FaVolumeUp onClick={handleVolumeUp} className="volume-icon" />
      </div>
  <h6 className="player-subtitle">CREATED BY : BIPIN </h6>
    <footer className="player-footer">
  <p>© {new Date().getFullYear()} My Music Player. All rights reserved.</p>
</footer>
</div>
);
};

export default Player;
