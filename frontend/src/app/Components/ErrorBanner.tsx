"use client";
import React from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorBannerProps {
  message: string;
  onRetry?: () => void;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message, onRetry }) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-red-50 border border-red-200 text-red-700 rounded-lg px-5 py-4 mb-8">
      <div className="flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-medium">{message}</span>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm font-bold text-red-700 hover:text-red-900 uppercase tracking-wide flex-shrink-0"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorBanner;
