import { useState } from 'react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const getButtonStyles = () => {
    const baseStyles = "w-full py-3 px-6 rounded-lg font-medium transition-all duration-300";
    
    if (status === 'success') {
      return `${baseStyles} bg-[#3D7B52] text-white cursor-default`;
    }
    if (status === 'loading') {
      return `${baseStyles} bg-[#2E5E3E]/70 text-white/80 cursor-wait`;
    }
    if (status === 'error') {
      return `${baseStyles} bg-red-600 hover:bg-red-700 text-white`;
    }
    return `${baseStyles} bg-[#2E5E3E] hover:bg-[#3D7B52] text-white`;
  };

  const getButtonText = () => {
    switch (status) {
      case 'loading':
        return 'Joining...';
      case 'success':
        return '✓ Joined Successfully';
      case 'error':
        return 'Try Again';
      default:
        return 'Join the Waitlist';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2E5E3E] disabled:opacity-50 transition-all duration-300"
            disabled={status === 'loading' || status === 'success'}
            required
          />
          {status === 'success' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-[#3D7B52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={getButtonStyles()}
        >
          {getButtonText()}
        </button>
      </form>

      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg text-sm">
          {errorMessage}
        </div>
      )}

      {status === 'success' && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-sm animate-fade-in">
          Thanks for joining! We'll keep you updated on our launch.
        </div>
      )}
    </div>
  );
};

export default WaitlistForm; 