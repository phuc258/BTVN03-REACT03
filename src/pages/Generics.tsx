import React, { useState } from "react";

// 1. Generic Function - Hàm trả về phần tử đầu tiên của mảng
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// 2. Generic Interface - Interface cho response API
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// 3. Generic Type - Type cho một cặp key-value
type Pair<K, V> = {
  key: K;
  value: V;
};

// 4. Generic Class - Class để quản lý danh sách
class DataManager<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}

// 5. Generic với constraints - Chỉ chấp nhận object có property 'id'
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find((item) => item.id === id);
}

// 6. Multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Interfaces cho demo
interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function Generics() {
  const [selectedTab, setSelectedTab] = useState<string>("basic");

  // Demo data
  const numbers = [1, 2, 3, 4, 5];
  const strings = ["apple", "banana", "cherry"];
  const users: User[] = [
    { id: 1, name: "Nguyễn Văn A", email: "a@example.com" },
    { id: 2, name: "Trần Thị B", email: "b@example.com" },
  ];

  // Demo Generic Function
  const firstNumber = getFirstElement(numbers); // type: number | undefined
  const firstString = getFirstElement(strings); // type: string | undefined
  const firstUser = getFirstElement(users); // type: User | undefined

  // Demo Generic Interface
  const userResponse: ApiResponse<User> = {
    data: { id: 1, name: "Nguyễn Văn A", email: "a@example.com" },
    status: 200,
    message: "Success",
  };

  const productsResponse: ApiResponse<Product[]> = {
    data: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 500 },
    ],
    status: 200,
    message: "Success",
  };

  // Demo Generic Type
  const stringNumberPair: Pair<string, number> = {
    key: "age",
    value: 25,
  };

  const stringUserPair: Pair<string, User> = {
    key: "admin",
    value: { id: 1, name: "Admin", email: "admin@example.com" },
  };

  // Demo Generic Class
  const userManager = new DataManager<User>();
  userManager.addItem({ id: 1, name: "User 1", email: "user1@example.com" });
  userManager.addItem({ id: 2, name: "User 2", email: "user2@example.com" });

  // Demo Generic with constraints
  const foundUser = findById(users, 1);

  // Demo Multiple type parameters
  const person = { name: "John", age: 30 };
  const address = { city: "Hanoi", country: "Vietnam" };
  const mergedData = merge(person, address);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="mb-6 text-4xl font-bold text-blue-600">
        TypeScript Generics Demo
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["basic", "interface", "class", "constraints", "advanced"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded ${
                selectedTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ),
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-white rounded-lg shadow-lg">
        {selectedTab === "basic" && (
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              1. Generic Functions - Hàm Generic
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="mb-2 font-semibold">Code:</h3>
                <pre className="p-3 overflow-x-auto text-white bg-gray-800 rounded">
                  {`function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}`}
                </pre>
              </div>

              <div className="p-4 rounded bg-blue-50">
                <h3 className="mb-2 font-semibold">Kết quả:</h3>
                <p>
                  📝 First number: <strong>{firstNumber}</strong>
                </p>
                <p>
                  📝 First string: <strong>{firstString}</strong>
                </p>
                <p>
                  📝 First user: <strong>{firstUser?.name}</strong>
                </p>
              </div>

              <div className="p-4 rounded bg-green-50">
                <h3 className="mb-2 font-semibold">✅ Lợi ích:</h3>
                <ul className="list-disc list-inside">
                  <li>Type safety - An toàn về kiểu dữ liệu</li>
                  <li>Tái sử dụng code cho nhiều kiểu dữ liệu</li>
                  <li>TypeScript tự động infer (suy luận) type</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "interface" && (
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              2. Generic Interface & Type
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="mb-2 font-semibold">Code:</h3>
                <pre className="p-3 overflow-x-auto text-white bg-gray-800 rounded">
                  {`interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type Pair<K, V> = {
  key: K;
  value: V;
};`}
                </pre>
              </div>

              <div className="p-4 rounded bg-blue-50">
                <h3 className="mb-2 font-semibold">User Response:</h3>
                <pre className="p-3 bg-white rounded">
                  {JSON.stringify(userResponse, null, 2)}
                </pre>
              </div>

              <div className="p-4 rounded bg-purple-50">
                <h3 className="mb-2 font-semibold">Products Response:</h3>
                <pre className="p-3 bg-white rounded">
                  {JSON.stringify(productsResponse, null, 2)}
                </pre>
              </div>

              <div className="p-4 rounded bg-yellow-50">
                <h3 className="mb-2 font-semibold">Pair Examples:</h3>
                <p>
                  🔑 String-Number: {stringNumberPair.key} ={" "}
                  {stringNumberPair.value}
                </p>
                <p>
                  🔑 String-User: {stringUserPair.key} ={" "}
                  {stringUserPair.value.name}
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "class" && (
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              3. Generic Class - Lớp Generic
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="mb-2 font-semibold">Code:</h3>
                <pre className="p-3 overflow-x-auto text-white bg-gray-800 rounded">
                  {`class DataManager<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}`}
                </pre>
              </div>

              <div className="p-4 rounded bg-blue-50">
                <h3 className="mb-2 font-semibold">User Manager:</h3>
                <ul className="list-disc list-inside">
                  {userManager.getItems().map((user, index) => (
                    <li key={index}>
                      ID: {user.id}, Name: {user.name}, Email: {user.email}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded bg-green-50">
                <h3 className="mb-2 font-semibold">💡 Use Cases:</h3>
                <ul className="list-disc list-inside">
                  <li>Quản lý danh sách bất kỳ kiểu dữ liệu nào</li>
                  <li>Repository pattern trong backend</li>
                  <li>State management</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "constraints" && (
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              4. Generic Constraints - Ràng buộc Generic
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="mb-2 font-semibold">Code:</h3>
                <pre className="p-3 overflow-x-auto text-white bg-gray-800 rounded">
                  {`interface HasId {
  id: number;
}

function findById<T extends HasId>(
  items: T[], 
  id: number
): T | undefined {
  return items.find(item => item.id === id);
}`}
                </pre>
              </div>

              <div className="p-4 rounded bg-blue-50">
                <h3 className="mb-2 font-semibold">Tìm user với ID = 1:</h3>
                <pre className="p-3 bg-white rounded">
                  {JSON.stringify(foundUser, null, 2)}
                </pre>
              </div>

              <div className="p-4 rounded bg-yellow-50">
                <h3 className="mb-2 font-semibold">⚠️ Giải thích:</h3>
                <ul className="list-disc list-inside">
                  <li>
                    <code>T extends HasId</code> - T phải có property 'id'
                  </li>
                  <li>Đảm bảo an toàn khi truy cập item.id</li>
                  <li>TypeScript sẽ báo lỗi nếu truyền type không có 'id'</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "advanced" && (
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              5. Advanced - Multiple Type Parameters
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="mb-2 font-semibold">Code:</h3>
                <pre className="p-3 overflow-x-auto text-white bg-gray-800 rounded">
                  {`function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = { name: "John", age: 30 };
const address = { city: "Hanoi", country: "Vietnam" };
const merged = merge(person, address);`}
                </pre>
              </div>

              <div className="p-4 rounded bg-blue-50">
                <h3 className="mb-2 font-semibold">Merged Object:</h3>
                <pre className="p-3 bg-white rounded">
                  {JSON.stringify(mergedData, null, 2)}
                </pre>
              </div>

              <div className="p-4 rounded bg-purple-50">
                <h3 className="mb-2 font-semibold">🚀 Thực tế sử dụng:</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>React Hooks: useState&lt;T&gt;, useRef&lt;T&gt;</li>
                  <li>API calls: Promise&lt;T&gt;, Response&lt;T&gt;</li>
                  <li>Array methods: map&lt;T, U&gt;, filter&lt;T&gt;</li>
                  <li>Redux: Action&lt;T&gt;, Reducer&lt;S, A&gt;</li>
                </ul>
              </div>

              <div className="p-4 rounded bg-green-50">
                <h3 className="mb-2 font-semibold">✨ Best Practices:</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>
                    Đặt tên type parameter có ý nghĩa (T = Type, K = Key, V =
                    Value)
                  </li>
                  <li>Sử dụng constraints khi cần thiết</li>
                  <li>Tránh lạm dụng generics cho code đơn giản</li>
                  <li>Ưu tiên type inference thay vì explicit types</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="p-6 mt-6 text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600">
        <h3 className="mb-3 text-xl font-bold">📚 Tóm tắt Generics</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="mb-2 font-semibold">Khi nào dùng Generics?</h4>
            <ul className="text-sm list-disc list-inside">
              <li>Muốn tái sử dụng code cho nhiều kiểu dữ liệu</li>
              <li>Cần type safety nhưng không biết trước kiểu cụ thể</li>
              <li>Xây dựng utilities, libraries, components tái sử dụng</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Lợi ích:</h4>
            <ul className="text-sm list-disc list-inside">
              <li>✅ Type safety - An toàn kiểu dữ liệu</li>
              <li>✅ Code reusability - Tái sử dụng code</li>
              <li>✅ Better IntelliSense - Gợi ý code tốt hơn</li>
              <li>✅ Catch errors at compile time - Bắt lỗi sớm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
