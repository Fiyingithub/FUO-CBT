// components/Toast.tsx
import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#1f2937", // Tailwind gray-800
          color: "#fff",
        },
        success: {
          style: {
            background: "#16a34a", // Tailwind green-600
          },
        },
        error: {
          style: {
            background: "#dc2626", // Tailwind red-600
          },
        },
      }}
    />
  );
};

export default Toast;
