"use client";

export const PrimaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-gray-800 duration-300 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  onClick,
  prefix,
}: {
  children: React.ReactNode;
  onClick: () => void;
  prefix?: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-blue-500 duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      <div>{prefix}</div>
      <div>{children}</div>
    </button>
  );
};

export const TabButton = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      className={`w-full duration-300  focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
        active ? "text-white" : "text-blue-500"
      } 
        ${active ? "bg-blue-500" : "bg-blue-100"}  ${
        active ? "hover:bg-blue-600" : "hover:bg-blue-200/90"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
