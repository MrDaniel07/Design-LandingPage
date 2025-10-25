import SocialShareImage from './SocialShareImage';

export default function OGImagePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-8">
      <div className="mb-6 text-center">
        <h1 className="text-white text-2xl mb-2">Social Share Image Preview</h1>
        <p className="text-slate-400 text-sm">
          Screenshot the image below (1200 × 630 pixels)
        </p>
      </div>
      
      <div id="og-image" className="shadow-2xl">
        <SocialShareImage />
      </div>
      
      <div className="mt-6 text-slate-400 text-sm max-w-2xl text-center space-y-2">
        <p className="font-semibold text-white">How to save this image:</p>
        <p>1. Right-click on the image above → "Save image as..." (if browser allows)</p>
        <p>2. OR take a screenshot of just the colorful area</p>
        <p>3. OR use browser DevTools: Right-click the image → Inspect → Screenshot Node</p>
        <p className="mt-4">Save as: <code className="bg-slate-800 px-2 py-1 rounded">public/og-image.jpg</code></p>
      </div>
      
      <div className="mt-6">
        <button
          onClick={() => {
            window.location.hash = '';
            window.location.reload();
          }}
          className="text-purple-400 hover:text-purple-300 underline cursor-pointer"
        >
          ← Back to main site
        </button>
      </div>
    </div>
  );
}
