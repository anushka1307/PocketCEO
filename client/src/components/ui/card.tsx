// components/ui/card.tsx


export const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }: any) => (
  <div className={`px-2 py-2 ${className}`}>{children}</div>
);
