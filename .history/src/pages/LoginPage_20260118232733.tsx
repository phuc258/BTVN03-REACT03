import React from "react";

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <h1>Đăng nhập</h1>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Nhập email" />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" placeholder="Nhập mật khẩu" />
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
};

export default LoginPage;