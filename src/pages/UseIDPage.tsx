import React, { useId, useState } from "react";

const UseIDPage: React.FC = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Tạo các ID duy nhất cho form fields
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const formId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", values);
    alert(`Submitted: ${JSON.stringify(values, null, 2)}`);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">useId Hook</h1>
        <p className="text-gray-600 mb-6">
          useId tạo ra các ID duy nhất ổn định cho các phần tử HTML, rất hữu ích cho label, input, aria attributes
        </p>

        {/* Form Demo */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <form onSubmit={handleSubmit} id={formId}>
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Form Với useId</h2>

            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor={nameId} className="block text-lg font-semibold text-gray-700 mb-2">
                Tên:
              </label>
              <input
                id={nameId}
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Nhập tên của bạn"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
              />
              <p className="text-sm text-gray-500 mt-1">ID: <code className="bg-gray-100 px-2 py-1 rounded">{nameId}</code></p>
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor={emailId} className="block text-lg font-semibold text-gray-700 mb-2">
                Email:
              </label>
              <input
                id={emailId}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Nhập email của bạn"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
              />
              <p className="text-sm text-gray-500 mt-1">ID: <code className="bg-gray-100 px-2 py-1 rounded">{emailId}</code></p>
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <label htmlFor={phoneId} className="block text-lg font-semibold text-gray-700 mb-2">
                Điện thoại:
              </label>
              <input
                id={phoneId}
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
              />
              <p className="text-sm text-gray-500 mt-1">ID: <code className="bg-gray-100 px-2 py-1 rounded">{phoneId}</code></p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
            >
              Gửi Form
            </button>
          </form>
        </div>

       

        

        {/* Info Section */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="text-xl font-bold text-blue-800 mb-3">💡 Về useId</h3>
          <ul className="text-blue-700 space-y-2 list-disc list-inside">
            <li>
              <strong>Tạo ID duy nhất:</strong> Mỗi lần gọi useId() sẽ tạo một ID mới, duy nhất trong ứng dụng
            </li>
            <li>
              <strong>Ổn định giữa renders:</strong> ID không thay đổi giữa các lần render
            </li>
            <li>
              <strong>Server-side rendering:</strong> useId hỗ trợ SSR, không gây lỗi hydration
            </li>
            <li>
              <strong>Dùng cho label - input:</strong> Liên kết label với input bằng htmlFor attribute
            </li>
            <li>
              <strong>Dùng cho aria attributes:</strong> Tạo ARIA IDs cho accessibility
            </li>
            <li>
              <strong>Dùng cho form IDs:</strong> Tạo ID duy nhất cho form, dialog, tab panels, v.v...
            </li>
            <li>
              <strong>Không random ID:</strong> Không nên sử dụng Math.random() hay uuid trong component, hãy dùng useId
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseIDPage;