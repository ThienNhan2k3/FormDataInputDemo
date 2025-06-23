interface Step {
  id: number
  title: string
  completed: boolean
  current?: boolean
}

const steps: Step[] = [
  {
    id: 1,
    title: "Chọn vé số",
    completed: true,
  },
  {
    id: 2,
    title: "Cập nhật thông tin",
    completed: true,
    current: true,
  },
  {
    id: 3,
    title: "In phiếu yêu cầu",
    completed: true,
  },
  {
    id: 4,
    title: "Gửi hồ sơ",
    completed: true,
  },
]

export default function StatusBar() {
  return (
    <div className="w-full p-6">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Step Circle and Title */}
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                  step.current ? "bg-teal-800" : step.completed ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {step.id}
              </div>
              <span className="ml-3 text-sm text-gray-600 whitespace-nowrap">{step.title}</span>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && <div className="w-10 h-1 mx-2 bg-gray-300 rounded-full" />}
          </div>
        ))}
      </div>
    </div>
  )
}
