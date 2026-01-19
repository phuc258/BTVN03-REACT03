import { useMemo, useState, useCallback } from "react";
import type { User } from "../interfaces/IUser";
import SubmitButton from "../components/SubmitButton";

const UseMemoPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");

  const handleAddUser = useCallback(() => {
    console.log("handleAddUser dang tao lai");
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: prevUsers.length + 1,
        name: name,
        age: age,
      },
    ]);
    setName("");
    setAge("");
  }, [name, age]);

  console.log("users:", users);

  const adults = useMemo(() => {
    console.log("dang goi toi");
    return users.filter(
      (user) => typeof user.age === "number" && user.age >= 18,
    );
  }, [users]);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-indigo-900">
          useMemo/useCallback Demo
        </h1>

        <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Thêm người dùng mới
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddUser();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Họ và tên
              </label>
              <input
                className="w-full px-4 py-2 transition border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                type="text"
                placeholder="Nhập họ và tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Tuổi
              </label>
              <input
                className="w-full px-4 py-2 transition border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                type="number"
                placeholder="Nhập tuổi"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                required
              />
            </div>
            <SubmitButton onClick={handleAddUser} />
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="pb-2 mb-4 text-2xl font-semibold text-gray-800 border-b">
              Tất cả người dùng ({users.length})
            </h2>
            <div className="space-y-2">
              {users.length > 0 ? (
                users.map((user) => (
                  <div
                    key={user.id}
                    className="p-3 border-l-4 border-blue-500 rounded-md bg-gray-50"
                  >
                    <span className="font-medium text-gray-800">
                      {user?.name}
                    </span>
                    <span className="text-gray-600"> - </span>
                    <span className="font-semibold text-indigo-600">
                      {user.age} tuổi
                    </span>
                  </div>
                ))
              ) : (
                <p className="italic text-gray-500">Chưa có người dùng nào</p>
              )}
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="pb-2 mb-4 text-2xl font-semibold text-gray-800 border-b">
              Người trưởng thành (≥18 tuổi) ({adults.length})
            </h2>
            <div className="space-y-2">
              {adults.length > 0 ? (
                adults.map((adult) => (
                  <div
                    key={adult.id}
                    className="p-3 border-l-4 border-green-500 rounded-md bg-green-50"
                  >
                    <span className="font-medium text-gray-800">
                      {adult.name}
                    </span>
                    <span className="text-gray-600"> - </span>
                    <span className="font-semibold text-green-600">
                      {adult.age} tuổi
                    </span>
                  </div>
                ))
              ) : (
                <p className="italic text-gray-500">
                  Chưa có người trưởng thành nào
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseMemoPage;
