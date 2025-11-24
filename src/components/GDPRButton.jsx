import { useEffect, useState } from "react";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");

    if (consent === "true" || consent === "false") {
      setShowIcon(true); // Show icon only if a choice was made
    } else {
      setVisible(true);  // First time visitor → show banner
    }
  }, []);

  const accept = () => {
    localStorage.setItem("gdprConsent", "true");
    setVisible(false);
    setShowIcon(true);
  };

  const reject = () => {
    localStorage.setItem("gdprConsent", "false");
    setVisible(false);
    setShowIcon(true);
  };

  const openAgain = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* GDPR Banner */}
      {visible && (
        <div className="
          fixed bottom-4 left-4 right-4 md:right-6 md:left-auto max-w-full md:max-w-xs
          bg-[#161616] text-white p-4 rounded-lg shadow-xl z-50
        ">
          <p className="text-sm mb-2 text-gray-300 text-center">
            We use cookies to improve your experience.
          </p>

          <a
            href="/privacy"
            className="block text-center text-gray-400 underline mb-3 hover:text-white"
          >
            Privacy Policy
          </a>

          <div className="flex justify-center gap-3 mt-2">
            <button
              onClick={reject}
              className="
                px-4 py-2 rounded bg-[#303030] text-white text-sm
                hover:bg-[#404040] transition
              "
            >
              Reject
            </button>

            <button
              onClick={accept}
              className="
                px-4 py-2 rounded bg-white text-black text-sm
                hover:bg-gray-200 transition
              "
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={openAgain}
            className="
              w-12 h-12 rounded-full bg-[#2A2A2A] border border-gray-500 
              flex items-center justify-center hover:bg-[#2A2A2A] transition
            "
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              className="w-6 h-6 invert opacity-80"
              alt="Cookie Preferences"
            />
          </button>
        </div>
      )}
    </>
  );
}
