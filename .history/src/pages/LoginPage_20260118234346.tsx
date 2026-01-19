import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (username === "admin" && password === "1") {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/todo");
        } else {
            setError("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    };

    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-4">Đăng nhập</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên đăng nhập:</label><br></br>
                    <input 
                        className="border-black border-2 rounded-md p-1"
                        type="text" 
                        placeholder="Nhập tên đăng nhập" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Mật khẩu:</label><br></br>
                    <input 
                        className="border-black border-2 rounded-md p-1"
                        type="password" 
                        placeholder="Nhập mật khẩu" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
};

export default LoginPage;