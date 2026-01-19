import React, { useId, useState } from "react";

const UseIDPage: React.FC = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

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
    <div className="container min-h-screen p-6 mx-auto bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-2 text-4xl font-bold text-gray-800">useId Hook</h1>
        <p className="mb-6 text-gray-600">
          useId tạo ra các ID duy nhất ổn định cho các phần tử HTML, rất hữu ích
          cho label, input, aria attributes
        </p>

        <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmit} id={formId}>
            <h2 className="mb-6 text-2xl font-bold text-blue-600">
              Form Với useId
            </h2>

            <div className="mb-6">
              <label
                htmlFor={nameId}
                className="block mb-2 text-lg font-semibold text-gray-700"
              >
                Tên:
              </label>
              <input
                id={nameId}
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Nhập tên của bạn"
                className="w-full px-4 py-2 transition border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <p className="mt-1 text-sm text-gray-500">
                ID:{" "}
                <code className="px-2 py-1 bg-gray-100 rounded">{nameId}</code>
              </p>
            </div>

            <div className="mb-6">
              <label
                htmlFor={emailId}
                className="block mb-2 text-lg font-semibold text-gray-700"
              >
                Email:
              </label>
              <input
                id={emailId}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Nhập email của bạn"
                className="w-full px-4 py-2 transition border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <p className="mt-1 text-sm text-gray-500">
                ID:{" "}
                <code className="px-2 py-1 bg-gray-100 rounded">{emailId}</code>
              </p>
            </div>

            <div className="mb-6">
              <label
                htmlFor={phoneId}
                className="block mb-2 text-lg font-semibold text-gray-700"
              >
                Điện thoại:
              </label>
              <input
                id={phoneId}
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
                className="w-full px-4 py-2 transition border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <p className="mt-1 text-sm text-gray-500">
                ID:{" "}
                <code className="px-2 py-1 bg-gray-100 rounded">{phoneId}</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 font-bold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Gửi Form
            </button>
          </form>
        </div>

        <div className="p-6 border-l-4 border-blue-500 rounded bg-blue-50">
          <h3 className="mb-3 text-xl font-bold text-blue-800">💡 Về useId</h3>
          <ul className="space-y-2 text-blue-700 list-disc list-inside">
            <li>
              <strong>Tạo ID duy nhất:</strong> Mỗi lần gọi useId() sẽ tạo một
              ID mới, duy nhất trong ứng dụng
            </li>
            <li>
              <strong>Ổn định giữa renders:</strong> ID không thay đổi giữa các
              lần render
            </li>
            <li>
              <strong>Server-side rendering:</strong> useId hỗ trợ SSR, không
              gây lỗi hydration
            </li>
            <li>
              <strong>Dùng cho label - input:</strong> Liên kết label với input
              bằng htmlFor attribute
            </li>
            <li>
              <strong>Dùng cho aria attributes:</strong> Tạo ARIA IDs cho
              accessibility
            </li>
            <li>
              <strong>Dùng cho form IDs:</strong> Tạo ID duy nhất cho form,
              dialog, tab panels, v.v...
            </li>
            <li>
              <strong>Không random ID:</strong> Không nên sử dụng Math.random()
              hay uuid trong component, hãy dùng useId
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseIDPage;
