export default function History({ history, setText, show, toggle }) {
  const limited = history.slice(0, 3);

  return (
    <div className="mt-6">

      <button
        onClick={toggle}
        className="w-full bg-purple-500 text-white py-2 rounded-lg"
      >
        {show ? "Hide History" : "Show History"}
      </button>

      {/* ✅ NO ABSOLUTE → NO BREAK */}
      {show && (
        <div className="mt-2 bg-white dark:bg-gray-800 rounded-lg shadow border">

          {limited.length === 0 ? (
            <p className="p-3 text-sm text-gray-500">No history</p>
          ) : (
            limited.map((item, i) => (
              <div
                key={i}
                onClick={() => setText(item)}
                className="p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-sm break-all"
              >
                {item}
              </div>
            ))
          )}

        </div>
      )}

    </div>
  );
}