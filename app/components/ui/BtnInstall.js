"use client";

import React, { useState, useEffect } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      const rejectionTime = localStorage.getItem("installRejectedTime");
      if (!rejectionTime || Date.now() - rejectionTime > 0 * 0 * 0 * 60 * 1000) {
        setIsButtonVisible(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("App installed");
        setIsButtonVisible(false);
        localStorage.removeItem("installRejectedTime");
      } else {
        console.log("User dismissed the installation prompt");
        localStorage.setItem("installRejectedTime", Date.now());
        setIsButtonVisible(false);
      }
    }
  };

  return (
    <>
      {isButtonVisible && (
        <button
          onClick={handleInstallClick}
          className="px-2 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Instalar Aplicación
        </button>
      )}
    </>
  );
};

export default InstallButton;
