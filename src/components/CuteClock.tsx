import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const CuteClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [pausedAt, setPausedAt] = useState<Date | null>(null);
  const [pausedDuration, setPausedDuration] = useState(0);
  const [showPausePopup, setShowPausePopup] = useState(false);
  const [totalPausedTime, setTotalPausedTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Main clock tick
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  // Pause duration counter
  useEffect(() => {
    if (!isRunning && pausedAt) {
      pauseIntervalRef.current = setInterval(() => {
        const now = new Date();
        const duration = Math.floor((now.getTime() - pausedAt.getTime()) / 1000);
        setPausedDuration(duration);
      }, 1000);
    } else {
      if (pauseIntervalRef.current) {
        clearInterval(pauseIntervalRef.current);
      }
    }

    return () => {
      if (pauseIntervalRef.current) {
        clearInterval(pauseIntervalRef.current);
      }
    };
  }, [isRunning, pausedAt]);

  const handleTogglePause = () => {
    if (isRunning) {
      // Pause the clock
      setIsRunning(false);
      setPausedAt(new Date());
      setPausedDuration(0);
    } else {
      // Resume the clock
      setIsRunning(true);
      setPausedAt(null);
      
      // Show the cute popup with total paused time
      setTotalPausedTime(pausedDuration);
      setShowPausePopup(true);
      
      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowPausePopup(false);
      }, 3000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDuration = (seconds: number) => {
    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? 's' : ''}`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes} minute${minutes !== 1 ? 's' : ''} and ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const remainingMinutes = Math.floor((seconds % 3600) / 60);
      return `${hours} hour${hours !== 1 ? 's' : ''} and ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--gradient-main)' }}>
      <div className="text-center space-y-6 max-w-lg w-full">
        {/* Main Clock Display */}
        <div className={`clock-container transition-all duration-300 ${isRunning ? 'animate-clock-tick' : ''}`}>
          <div className="clock-display">
            {formatTime(currentTime)}
          </div>
        </div>

        {/* Pause Message */}
        {!isRunning && (
          <div className="pause-message">
            <div className="text-lg font-semibold mb-2">
              💤 Taking a little break...
            </div>
            <div className="pause-counter">
              Paused for: {formatDuration(pausedDuration)}
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <Button
          onClick={handleTogglePause}
          className={`clock-button ${!isRunning ? 'animate-wiggle' : ''}`}
        >
          {isRunning ? '⏸️ Stop Time' : '▶️ Start Time'}
        </Button>

        {/* Cute Resume Popup */}
        {showPausePopup && (
          <div className="cute-popup">
            <div className="text-center">
              <div className="text-2xl mb-2">🎉</div>
              <div className="text-lg font-semibold mb-1">Welcome back!</div>
              <div className="text-sm">
                I was paused for {formatDuration(totalPausedTime)}!
              </div>
              <div className="text-xs mt-2 opacity-75">
                Time is flowing again~ ✨
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CuteClock;