import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isLogin: boolean;
  user: string;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!auth) return null;

  const handleLogin = () => {
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (username === "admin" && password === "123456") {
      auth.login(username);
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div style={styles.box}>
      <h4>Đăng nhập</h4>

      <input
        style={styles.input}
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button style={styles.btn} onClick={handleLogin}>
        Đăng nhập
      </button>

      <p style={styles.hint}>
        Demo account: <strong>admin / 123456</strong>
      </p>
    </div>
  );
};

const UserInfo = () => {
  const auth = useContext(AuthContext);
  if (!auth) return null;

  return (
    <div style={styles.box}>
      <p>
        👋 Xin chào <strong>{auth.user}</strong>
      </p>

      <button style={styles.btn} onClick={auth.logout}>
        Đăng xuất
      </button>
    </div>
  );
};

const UseContext = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");

  const login = (username: string) => {
    setUser(username);
    setIsLogin(true);
  };

  const logout = () => {
    setUser("");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, user, login, logout }}>
      <div style={styles.page}>
        <div style={styles.card}>
          <h2 style={styles.title}>Demo</h2>

          {isLogin ? <UserInfo /> : <LoginForm />}

          <div style={styles.theorySection}>
            <p style={styles.paragraph}>
              <strong style={styles.theoryTitle}>
                Cách hoạt động của useContext:
              </strong>{" "}
              <strong>useContext</strong> hoạt động theo cơ chế chia sẻ state
              toàn cục cho các component con mà không cần truyền props thủ công.
            </p>

            <p style={styles.paragraph}>
              Đầu tiên, ta sử dụng <strong>createContext</strong> để tạo ra một
              Context (ở đây là <strong>AuthContext</strong>) dùng để lưu dữ liệu
              chung như trạng thái đăng nhập và thông tin người dùng.
            </p>

            <p style={styles.paragraph}>
              Sau đó, component <strong>AuthContext.Provider</strong> sẽ bọc toàn
              bộ page. Những dữ liệu truyền vào thuộc tính{" "}
              <code>value</code> sẽ được cung cấp cho tất cả component con bên
              trong.
            </p>

            <p style={styles.paragraph}>
              Khi một component con gọi{" "}
              <strong>useContext(AuthContext)</strong>, nó sẽ lấy trực tiếp dữ
              liệu từ Provider mà không cần nhận props từ component cha.
            </p>

            <p style={styles.paragraph}>
              Khi state trong Provider thay đổi (ví dụ gọi{" "}
              <strong>login</strong> hoặc <strong>logout</strong>), React sẽ tự
              động render lại tất cả component đang sử dụng context đó.
            </p>
          </div>
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default UseContext;

const styles = {
  page: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },

  card: {
    width: "100%",
    maxWidth: "1300px",
    padding: "28px",
    borderRadius: "20px",
    border: "1px solid #dcfce7",
    fontFamily: "Inter, system-ui",
  },

  title: {
    textAlign: "center" as const,
    fontSize: "22px",
    fontWeight: 800,
    color: "#166534",
    marginBottom: "20px",
  },

  box: {
    maxWidth: "360px",
    margin: "0 auto 24px",
    padding: "16px",
    borderRadius: "14px",
    background: "#f0fdf4",
    border: "2px solid #bbf7d0",
    textAlign: "center" as const,
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: "1px solid #bbf7d0",
  },

  btn: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#22c55e",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },

  hint: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#166534",
  },

  theorySection: {
    marginTop: "30px",
    borderTop: "1px solid #eee",
    paddingTop: "20px",
  },

  theoryTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#166534",
  },

  paragraph: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#374151",
    marginBottom: "12px",
  },
};
