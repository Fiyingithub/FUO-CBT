import React from "react";

interface LoaderProps {
  size?: string;
  color?: string;
}

interface SpinnerProps {
  color?: string;
  size?: string;
}

// 1. Morphing Circles Loader
export const MorphingCircles: React.FC<LoaderProps> = ({
  size = "w-8 h-8",
  color = "bg-blue-500",
}) => (
  <>
    <div className="flex items-center justify-center space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${size} ${color} rounded-full`}
          style={{
            animation: `morphing 1.5s ease-in-out ${i * 0.2}s infinite`,
            animationFillMode: "both",
          }}
        />
      ))}
    </div>
    <style>{`
      @keyframes morphing {
        0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
        40% { transform: scale(1.2); opacity: 1; }
      }
    `}</style>
  </>
);

// 2. Spinning Ring
export const SpinningRing: React.FC<{ size?: string }> = ({
  size = "w-8 h-8",
}) => (
  <div className={`${size} relative`}>
    <div
      className={`${size} rounded-full border-4 border-transparent animate-spin`}
      style={{
        background:
          "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
        borderRadius: "50%",
      }}
    />
    <div className={`absolute inset-1 bg-white rounded-full`} />
  </div>
);

// 3. Bouncing Squares
export const BouncingSquares: React.FC<{ color?: string }> = ({
  color = "bg-green-500",
}) => (
  <div className="flex items-end justify-center space-x-1">
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className={`w-2 h-8 ${color} rounded-sm animate-bounce`}
        style={{
          animationDelay: `${i * 0.1}s`,
          animationDuration: "1s",
        }}
      />
    ))}
  </div>
);

// 4. Pulsing Hexagon
export const PulsingHexagon: React.FC<{ color?: string }> = ({
  color = "border-purple-500",
}) => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <div
      className={`w-8 h-8 ${color} border-4 animate-spin`}
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        animationDuration: "2s",
      }}
    />
    <div
      className={`absolute w-4 h-4 ${color.replace(
        "border",
        "bg"
      )} animate-pulse`}
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    />
  </div>
);

// 5. Wave Loader
export const WaveLoader: React.FC<{ color?: string }> = ({
  color = "bg-green-700",
}) => (
  <>
    <div className="flex items-center justify-center space-x-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-1 h-8 ${color} rounded-full`}
          style={{
            animation: `wave 1s ease-in-out ${i * 0.1}s infinite`,
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
    <style>{`
      @keyframes wave {
        0%, 100% { transform: scaleY(0.4); }
        50% { transform: scaleY(1); }
      }
    `}</style>
  </>
);

// 6. Orbiting Dots
export const OrbitingDots: React.FC<{ color?: string }> = ({
  color = "bg-orange-500",
}) => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <div
      className="absolute w-12 h-12 animate-spin"
      style={{ animationDuration: "2s" }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 ${color} rounded-full`}
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${
              i * 120
            }deg) translateX(18px) translateY(-50%)`,
            transformOrigin: "0 50%",
          }}
        />
      ))}
    </div>
  </div>
);

// 7. Spinner Dots (simplified for buttons)
export const SpinnerDots: React.FC<SpinnerProps> = ({
  color = "bg-white",
  size = "w-2 h-2",
}) => (
  <div className="flex items-center h-12 space-x-1">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className={`${size} ${color} rounded-full animate-bounce`}
        style={{
          animationDelay: `${i * 0.2}s`,
          animationDuration: "1.4s",
        }}
      />
    ))}
  </div>
);

// 8. Simple Spinner (most common for buttons)
export const SimpleSpinner: React.FC<SpinnerProps> = ({
  color = "border-white",
  size = "w-5 h-5",
}) => (
  <div
    className={`${size} ${color} border-2 border-t-transparent rounded-full animate-spin`}
  />
);

// 9. Pulse Ring
export const PulseRing: React.FC<SpinnerProps> = ({
  color = "bg-blue-500",
  size = "w-6 h-6",
}) => (
  <div className={`${size} ${color} rounded-full animate-ping opacity-75`} />
);

// 10. Typing Dots
export const TypingDots: React.FC<{ color?: string }> = ({
  color = "bg-gray-600",
}) => (
  <div className="flex items-center space-x-1">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className={`w-2 h-2 ${color} rounded-full animate-bounce`}
        style={{
          animationDelay: `${i * 0.2}s`,
          animationDuration: "1.4s",
        }}
      />
    ))}
  </div>
);
