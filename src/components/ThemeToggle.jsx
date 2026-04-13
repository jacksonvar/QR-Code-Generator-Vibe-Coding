export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 rounded-xl bg-yellow-400"
    >
      {dark ? "🌞" : "🌙"}
    </button>
  );
}