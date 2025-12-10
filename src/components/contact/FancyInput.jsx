export default function FancyInput({ children }) {
  return (
    <label className="block focus-within:scale-[1.01] transform transition-all duration-200">
      {children}
    </label>
  );
}
