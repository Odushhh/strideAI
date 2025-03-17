import { useEffect } from 'react';

interface TallyFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TallyForm = ({ isOpen, onClose }: TallyFormProps) => {
  useEffect(() => {
    // Load Tally script
    const loadTallyScript = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          if (window.Tally) {
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    if (isOpen) {
      loadTallyScript();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-[900px] mx-auto">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-200"
        >
          Close
        </button>
        <iframe
          src="https://tally.so/embed/mYkvzz?alignLeft=1&hideTitle=1&transparentBackground=1"
          width="100%"
          height="750"
          frameBorder="0"
          title="StrideAI Waiting List"
          style={{ 
            border: "none", 
            borderRadius: "12px", 
            background: "white",
            margin: "0 auto",
            display: "block",
            padding: "20px",
            maxHeight: "90vh",
            minHeight: "500px"
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default TallyForm; 