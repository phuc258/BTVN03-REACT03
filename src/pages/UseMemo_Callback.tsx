import React, { useMemo, useState, useCallback } from 'react'
import type { User } from '../interfaces/IUser';
import SubmitButton from '../components/SubmitButton';

const UseMemo_Callback = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | "">("");




    const handleAddUser = useCallback(() => {
        console.log("handleAddUser dang tao lai");
        setUsers(prevUsers => [
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
        return users.filter(user => user.age >= 18);
}, [users]);

    

  return (
    <div className="min-h-screen  py-8 px-4">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">useMemo/useCallback Demo</h1>
            

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thêm người dùng mới</h2>
                <form onSubmit={e => {
                    e.preventDefault();
                    handleAddUser();
                }} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Họ và tên
                        </label>
                        <input 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            type="text" 
                            placeholder="Nhập họ và tên"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tuổi
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
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

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Tất cả người dùng ({users.length})
                    </h2>
                    <div className="space-y-2">
                        {users.length > 0 ? (
                            users.map(user => (
                                <div key={user.id} className="bg-gray-50 p-3 rounded-md border-l-4 border-blue-500">
                                    <span className="font-medium text-gray-800">{user?.name}</span>
                                    <span className="text-gray-600"> - </span>
                                    <span className="text-indigo-600 font-semibold">{user.age} tuổi</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">Chưa có người dùng nào</p>
                        )}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Người trưởng thành (≥18 tuổi) ({adults.length})
                    </h2>
                    <div className="space-y-2">
                        {adults.length > 0 ? (
                            adults.map(adult => (
                                <div key={adult.id} className="bg-green-50 p-3 rounded-md border-l-4 border-green-500">
                                    <span className="font-medium text-gray-800">{adult.name}</span>
                                    <span className="text-gray-600"> - </span>
                                    <span className="text-green-600 font-semibold">{adult.age} tuổi</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">Chưa có người trưởng thành nào</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default UseMemo_Callback;