export default function PageWrapper({ children }) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
        {children}
      </div>
    )
  }
