import { useState } from "react";

function TypeAnnotationDemo() {
  const studentName: string = "Trần Đình Phúc";
  const age: number = 20;
  const isStudent: boolean = true;

  const subjects: string[] = ["Math", "Physics", "Chemistry"];
  const grades: Array<number> = [8, 9, 7];

  const calculateGPA = (scores: number[]): number => {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  };

  return (
    <div className="p-4 mb-4 rounded-lg bg-blue-50">
      <h3 className="mb-2 text-xl font-bold">Demo: Type Annotation</h3>
      <p>Tên: {studentName}</p>
      <p>Tuổi: {age}</p>
      <p>Là sinh viên: {isStudent ? "Có" : "Không"}</p>
      <p>Môn học: {subjects.join(", ")}</p>
      <p>GPA: {calculateGPA(grades).toFixed(2)}</p>
    </div>
  );
}

interface IStudent {
  id: number;
  name: string;
  age: number;
  major: string;
  status: "studying" | "graduated";
  email?: string;
}

interface StudentCardProps {
  student: IStudent;
  onSelect?: (id: number) => void;
}

function StudentCard({ student, onSelect }: StudentCardProps) {
  const statusText =
    student.status === "graduated" ? "Đã tốt nghiệp" : "Đang học";
  const isGraduated = student.status === "graduated";

  return (
    <div
      className="p-4 mb-3 transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
      onClick={() => onSelect?.(student.id)}
    >
      <h3 className="text-lg font-bold text-blue-600">{student.name}</h3>
      <p className="text-gray-600">Tuổi: {student.age}</p>
      <p className="text-gray-600">Ngành: {student.major}</p>
      {student.email && (
        <p className="text-sm text-gray-500">Email: {student.email}</p>
      )}
      <span
        className={`inline-block mt-2 px-3 py-1 rounded text-white ${
          isGraduated ? "bg-green-500" : "bg-yellow-500"
        }`}
      >
        {statusText}
      </span>
    </div>
  );
}

type Status = "studying" | "graduated" | "suspended";
type ID = string | number;

type TStudent = {
  id: ID;
  name: string;
  age: number;
  major: string;
  status: Status;
  email?: string;
};

// Intersection type
type ContactInfo = {
  email: string;
  phone: string;
};

type StudentWithContact = TStudent & ContactInfo;

function TypeDemo() {
  const studentData: TStudent = {
    id: 1,
    name: "Nguyễn Văn A",
    age: 21,
    major: "CNTT",
    status: "studying",
  };

  const studentWithContact: StudentWithContact = {
    ...studentData,
    email: "student@example.com",
    phone: "0123456789",
  };

  return (
    <div className="p-4 mb-4 rounded-lg bg-purple-50">
      <h3 className="mb-2 text-xl font-bold">Demo: Type Alias</h3>
      <p>ID: {studentData.id}</p>
      <p>Tên: {studentData.name}</p>
      <p>Trạng thái: {studentData.status}</p>
      <p className="mt-2 font-semibold">Student with Contact Info:</p>
      <p>Email: {studentWithContact.email}</p>
      <p>Phone: {studentWithContact.phone}</p>
    </div>
  );
}

function App() {
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null,
  );

  const students: IStudent[] = [
    {
      id: 1,
      name: "Trần Đình Phúc",
      age: 20,
      major: "Công nghệ thông tin",
      status: "studying",
      email: "phuc@example.com",
    },
    {
      id: 2,
      name: "Nguyễn Văn An",
      age: 22,
      major: "Khoa học máy tính",
      status: "graduated",
    },
    {
      id: 3,
      name: "Lê Thị Bình",
      age: 21,
      major: "An toàn thông tin",
      status: "studying",
      email: "binh@example.com",
    },
  ];

  const handleSelectStudent = (id: number) => {
    setSelectedStudentId(id);
    console.log("Selected student ID:", id);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Type Annotation, Interface & Type
        </h1>

        {/* Demo Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-700">PHẦN DEMO</h2>

          <TypeAnnotationDemo />
          <TypeDemo />

          <div className="p-4 rounded-lg bg-green-50">
            <h3 className="mb-3 text-xl font-bold">
              Demo: Interface với Props
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {students.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onSelect={handleSelectStudent}
                />
              ))}
            </div>
            {selectedStudentId && (
              <p className="mt-4 font-semibold text-center text-green-700">
                Đã chọn sinh viên ID: {selectedStudentId}
              </p>
            )}
          </div>
        </div>

        {/* Theory Section */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-gray-700">LÝ THUYẾT</h2>

          <div className="space-y-6">
            {/* Type Annotation */}
            <div className="pl-4 border-l-4 border-blue-500">
              <h3 className="mb-2 text-2xl font-bold text-blue-600">
                1. Type Annotation (Chú thích kiểu)
              </h3>
              <p className="mb-2 text-gray-700">
                Là cách khai báo tường minh kiểu dữ liệu cho biến, tham số, và
                giá trị trả về.
              </p>
              <div className="p-3 rounded bg-gray-50">
                <code className="text-sm">
                  const name: string = "Phúc";
                  <br />
                  const age: number = 20;
                  <br />
                  const isStudent: boolean = true;
                  <br />
                  const scores: number[] = [8, 9, 7];
                  <br />
                  function add(a: number, b: number): number &#123; return a +
                  b; &#125;
                </code>
              </div>
              <ul className="mt-2 ml-6 text-gray-600 list-disc">
                <li>Giúp phát hiện lỗi sớm trong quá trình phát triển</li>
                <li>Tăng khả năng đọc và bảo trì code</li>
                <li>Cải thiện IntelliSense và auto-completion</li>
              </ul>
            </div>

            {/* Interface */}
            <div className="pl-4 border-l-4 border-green-500">
              <h3 className="mb-2 text-2xl font-bold text-green-600">
                2. Interface
              </h3>
              <p className="mb-2 text-gray-700">
                Định nghĩa cấu trúc của một object, mô tả hình dạng (shape) của
                dữ liệu.
              </p>
              <div className="p-3 mb-2 rounded bg-gray-50">
                <code className="text-sm">
                  interface Student &#123;
                  <br />
                  &nbsp;&nbsp;name: string;
                  <br />
                  &nbsp;&nbsp;age: number;
                  <br />
                  &nbsp;&nbsp;email?: string; // Optional
                  <br />
                  &#125;
                </code>
              </div>
              <p className="mb-1 font-semibold text-gray-700">Đặc điểm:</p>
              <ul className="ml-6 text-gray-600 list-disc">
                <li>Có thể extends (kế thừa) từ interface khác</li>
                <li>Có thể merge (gộp) nhiều khai báo cùng tên</li>
                <li>Chỉ dùng cho objects và function signatures</li>
                <li>Phù hợp cho OOP (Object-Oriented Programming)</li>
              </ul>
            </div>

            {/* Type */}
            <div className="pl-4 border-l-4 border-purple-500">
              <h3 className="mb-2 text-2xl font-bold text-purple-600">
                3. Type Alias
              </h3>
              <p className="mb-2 text-gray-700">
                Tạo tên mới cho một kiểu dữ liệu, có thể đơn giản hoặc phức tạp.
              </p>
              <div className="p-3 mb-2 rounded bg-gray-50">
                <code className="text-sm">
                  type ID = string | number;
                  <br />
                  type Status = "active" | "inactive";
                  <br />
                  type Student = &#123;
                  <br />
                  &nbsp;&nbsp;name: string;
                  <br />
                  &nbsp;&nbsp;age: number;
                  <br />
                  &#125;;
                </code>
              </div>
              <p className="mb-1 font-semibold text-gray-700">Đặc điểm:</p>
              <ul className="ml-6 text-gray-600 list-disc">
                <li>
                  Hỗ trợ Union types (A | B) và Intersection types (A & B)
                </li>
                <li>Có thể định nghĩa primitive, tuple, function types</li>
                <li>Không thể merge như interface</li>
                <li>Linh hoạt và mạnh mẽ hơn interface</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-gray-700">
            SO SÁNH TYPE vs INTERFACE
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left border border-gray-300">
                    Tiêu chí
                  </th>
                  <th className="p-3 text-left border border-gray-300">
                    Interface
                  </th>
                  <th className="p-3 text-left border border-gray-300">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-semibold border border-gray-300">
                    Extends/Kế thừa
                  </td>
                  <td className="p-3 border border-gray-300 bg-green-50">
                    Có (extends keyword)
                    <br />
                    <code className="text-xs">
                      interface B extends A &#123;&#125;
                    </code>
                  </td>
                  <td className="p-3 border border-gray-300 bg-purple-50">
                    Có (intersection &)
                    <br />
                    <code className="text-xs">type B = A & &#123;&#125;</code>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border border-gray-300">
                    Declaration Merging
                  </td>
                  <td className="p-3 border border-gray-300 bg-green-50">
                    Có - Tự động gộp các khai báo cùng tên
                  </td>
                  <td className="p-3 border border-gray-300 bg-red-50">
                    Không - Báo lỗi duplicate identifier
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border border-gray-300">
                    Union Types
                  </td>
                  <td className="p-3 border border-gray-300 bg-red-50">
                    Không hỗ trợ trực tiếp
                  </td>
                  <td className="p-3 border border-gray-300 bg-green-50">
                    Có (A | B)
                    <br />
                    <code className="text-xs">type ID = string | number</code>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border border-gray-300">
                    Primitive Types
                  </td>
                  <td className="p-3 border border-gray-300 bg-red-50">
                    Không thể alias primitive types
                  </td>
                  <td className="p-3 border border-gray-300 bg-green-50">
                    Có
                    <br />
                    <code className="text-xs">type Name = string</code>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border border-gray-300">
                    Tuple Types
                  </td>
                  <td className="p-3 border border-gray-300 bg-red-50">
                    Không hỗ trợ tốt
                  </td>
                  <td className="p-3 border border-gray-300 bg-green-50">
                    Có
                    <br />
                    <code className="text-xs">
                      type Point = [number, number]
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border border-gray-300">
                    Computed Properties
                  </td>
                  <td className="p-3 border border-gray-300 bg-red-50">
                    Không hỗ trợ
                  </td>
                  <td className="p-3 border border-gray-300 bg-green-50">
                    Có (mapped types)
                    <br />
                    <code className="text-xs">
                      type Keys = &#123;[K in "a"|"b"]: string&#125;
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border border-gray-300">
                    Performance
                  </td>
                  <td className="p-3 border border-gray-300 bg-green-50">
                    Nhanh hơn một chút trong compile time
                  </td>
                  <td className="p-3 border border-gray-300 bg-yellow-50">
                    Chậm hơn một chút với union types phức tạp
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border border-gray-300">
                    Use Case
                  </td>
                  <td className="p-3 border border-gray-300 bg-blue-50">
                    Public API, Libraries, OOP patterns
                  </td>
                  <td className="p-3 border border-gray-300 bg-purple-50">
                    Utility types, Complex types, Union/Intersection
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Recommendations */}
          <div className="mt-6 space-y-4">
            <div className="p-4 border-l-4 border-green-500 bg-green-50">
              <h4 className="mb-2 font-bold text-green-700">
                Khi nào dùng INTERFACE:
              </h4>
              <ul className="ml-6 text-gray-700 list-disc">
                <li>Định nghĩa shape của objects và classes</li>
                <li>Khi cần extends hoặc implements trong OOP</li>
                <li>Khi viết public APIs hoặc libraries cần mở rộng</li>
                <li>Khi cần declaration merging (hiếm gặp)</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
              <h4 className="mb-2 font-bold text-purple-700">
                Khi nào dùng TYPE:
              </h4>
              <ul className="ml-6 text-gray-700 list-disc">
                <li>Khi cần union types hoặc intersection types</li>
                <li>Khi tạo alias cho primitive types</li>
                <li>Khi dùng tuple, mapped types, conditional types</li>
                <li>Khi cần type utilities phức tạp</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
              <h4 className="mb-2 font-bold text-yellow-700">LỜI KHUYÊN:</h4>
              <p className="text-gray-700">
                Trong React với TypeScript, cả hai đều được dùng rộng rãi. Nhiều
                team chọn <strong>Interface cho Props và State</strong>, và{" "}
                <strong>Type cho các utility types phức tạp</strong>. Quan trọng
                nhất là <strong>consistency</strong> (nhất quán) trong codebase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
