{showInvestments && (
  <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

    <div className="bg-white text-black p-6 rounded-xl w-[500px] shadow-lg">

      <h2 className="text-lg font-bold mb-3">
        Investment Details 💰
      </h2>

      {/* ✅ Total Investors */}
      <p className="mb-2">
        <b>Total Investors:</b> {investments.length}
      </p>

      {/* ✅ Total Fund */}
      <p className="mb-4">
        <b>Total Fund:</b> ₹
        {investments.reduce((acc, curr) => acc + curr.amount, 0)}
      </p>

      {/* 🔥 Investors List */}
      <div className="max-h-[250px] overflow-y-auto space-y-2">

        {investments.length > 0 ? (
          investments.map((inv) => (
            <div
              key={inv._id}
              className="border p-2 rounded flex justify-between"
            >
              <span>
                👤 {inv.investorId?.name || "Unknown"}
              </span>

              <span className="text-green-600 font-semibold">
                ₹{inv.amount}
              </span>
            </div>
          ))
        ) : (
          <p>No investments yet 😔</p>
        )}

      </div>

      <button
        onClick={() => setShowInvestments(false)}
        className="mt-4 bg-black text-white px-4 py-1 rounded"
      >
        Close
      </button>

    </div>
  </div>
)}