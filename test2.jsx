import React, { useState, useEffect, useRef } from "react";

const TextCaptcha = ({
  onVerify,
  onRefresh,
  showVerifyButton = false,
  autoVerify = true,
}) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState(false);

  const canvasRef = useRef(null);
  const inputRef = useRef(null); // ✅ input ref

  const generateTextCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let text = "";

    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setCaptchaText(text);
    drawTextCaptcha(text);
    setUserInput("");
    setIsVerified(false);
    setVerificationError(false);

    if (onRefresh) onRefresh();

    // focus input when captcha refresh
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const drawTextCaptcha = (text) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#fef3c7";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 80; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 100}, ${
        Math.random() * 100
      }, ${Math.random() * 100}, 0.15)`;

      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        2,
        2
      );
    }

    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "#b45309";

    for (let i = 0; i < text.length; i++) {
      const x = 12 + i * 20;
      const y = 28 + Math.random() * 4;
      const rotation = Math.random() * 0.4 - 0.2;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }

    ctx.strokeStyle = "rgba(180, 83, 9, 0.2)";
    ctx.lineWidth = 1;

    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
      ctx.lineTo(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
      ctx.stroke();
    }
  };

  const verifyCaptcha = () => {
    if (userInput.toUpperCase() === captchaText) {
      setIsVerified(true);
      setVerificationError(false);
      if (onVerify) onVerify(true);
    } else {
      setIsVerified(false);
      setVerificationError(true);
      generateTextCaptcha();
      if (onVerify) onVerify(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      verifyCaptcha();
    }
  };

  useEffect(() => {
    if (autoVerify && userInput.length === 6) {
      verifyCaptcha();
    }
  }, [userInput, captchaText]);

  useEffect(() => {
    generateTextCaptcha();
  }, []);

  return (
    <div className="w-full">
      <div className="mb-2">
        <div className="flex flex-row items-start sm:items-center gap-3">
          <canvas
            ref={canvasRef}
            width="155"
            height="40"
            className="border border-amber-300 rounded-md bg-white shrink-0"
          ></canvas>

          <div className="flex-grow flex flex-col gap-2 w-full">
            <input
              ref={inputRef}   // ✅ inputRef added
              type="text"
              value={userInput}
              onChange={(e) =>
                setUserInput(e.target.value.toUpperCase())
              }
              onKeyPress={handleKeyPress}
              maxLength={6}
              className="px-3 py-2 w-30 md:w-48 bg-white text-black text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 flex-grow"
              placeholder="Enter 6 characters"
            />

            {verificationError && (
              <div className="text-red-500 text-xs flex items-center">
                Verification failed. Please try again.
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          {isVerified && (
            <span className="text-xs text-green-600 font-medium">
              Verified successfully!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextCaptcha;