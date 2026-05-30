export default function AuthLayout({ children }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-50 px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          {children}
        </div>
      </div>
    );
  }