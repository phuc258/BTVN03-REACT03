import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Bạn đã nhấn ${count} lần`);
  }, [count]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Demo</h2>

        <div style={styles.countBox}>
          <div style={styles.label}>Giá trị hiện tại</div>
          <div style={styles.number}>{count}</div>
        </div>

        <button style={styles.button} onClick={() => setCount(c => c + 1)}>
          + Tăng số
        </button>

        <div style={styles.theorySection}>
          <h4 style={styles.theoryTitle}>
            Các loại Dependency Array trong useEffect
          </h4>

          <table style={styles.table}>
            <thead>
              <tr style={styles.thRow}>
                <th style={styles.th}>STT</th>
                <th style={styles.th}>Cú pháp Dependency Array</th>
                <th style={styles.th}>Tên gọi</th>
                <th style={styles.th}>Cách hoạt động</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={styles.td}>1</td>
                <td style={styles.td}>
                  <code>useEffect(() =&gt; {"{...}"})</code>
                </td>
                <td style={styles.td}>No dependencies</td>
                <td style={styles.td}>
                  Chạy lại sau <strong>mọi lần component render</strong>.
                </td>
              </tr>

              <tr>
                <td style={styles.td}>2</td>
                <td style={styles.td}>
                  <code>useEffect(() =&gt; {"{...}"}, [])</code>
                </td>
                <td style={styles.td}>Empty dependencies</td>
                <td style={styles.td}>
                  Chỉ chạy <strong>1 lần duy nhất</strong> sau khi component mount.
                </td>
              </tr>

              <tr>
                <td style={styles.td}>3</td>
                <td style={styles.td}>
                  <code>useEffect(() =&gt; {"{...}"}, [count])</code>
                </td>
                <td style={styles.td}>Has dependencies</td>
                <td style={styles.td}>
                  Chạy sau lần đầu và <strong>chạy lại khi dependency thay đổi</strong>.
                </td>
              </tr>
            </tbody>
          </table>

          <div style={styles.usageSection}>
            <h4 style={styles.usageTitle}>Cách sử dụng thực tế</h4>

            <ul style={styles.usageList}>
              <li>
                <strong>Không có []: </strong>
                Hạn chế dùng. Chủ yếu để debug / log. Dễ gây loop & lag.
              </li>

              <li>
                <strong>Mảng rỗng []: </strong>
                Dùng để gọi API, lấy dữ liệu ban đầu, gắn event listener.
              </li>

              <li>
                <strong>Có biến [state/props]: </strong>
                Dùng khi xử lý logic theo thay đổi (filter, search, update title…)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;


const styles = {
  page: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    width: "100%",
    maxWidth: "1300px",
    padding: "28px",
    borderRadius: "20px",
    fontFamily: "Inter, system-ui, sans-serif",
    border: "1px solid #dcfce7",
  },

  title: {
    textAlign: "center" as const,
    color: "#166534",
    fontSize: "22px",
    fontWeight: 800,
    marginBottom: "20px",
  },

    countBox: {
      textAlign: "center" as const,
      background: "#f0fdf4",
      padding: "14px",
      borderRadius: "14px",
      marginBottom: "16px",
      border: "2px solid #bbf7d0",
      maxWidth: "350px",
      width: "100%", 
      marginInline: "auto",
    },

    label: {
      fontSize: "11px",
      color: "#4d7c5a",
    },

    number: {
      fontSize: "32px",
      fontWeight: 800,
      color: "#14532d",
      marginTop: "4px",
    },

    button: {
      width: "100%", 
      maxWidth: "350px",
      display: "block",
      margin: "0 auto 24px",
      padding: "10px 18px",
      borderRadius: "12px",
      border: "none",
      background: "#22c55e",
      color: "#fff",
      fontSize: "14px",
      fontWeight: 700,
      cursor: "pointer",
    },

  theorySection: {
    marginTop: "20px",
    borderTop: "1px solid #eee",
    paddingTop: "20px",
  },

  theoryTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#166534",
    marginBottom: "14px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "14px",
    textAlign: "left" as const,
  },

  thRow: {
    background: "#f8fafc",
  },

  th: {
    padding: "12px",
    borderBottom: "2px solid #e2e8f0",
    color: "#475569",
    fontWeight: 700,
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #f1f5f9",
    color: "#334155",
    lineHeight: "1.6",
    verticalAlign: "top" as const,
  },

  usageSection: {
    marginTop: "22px",
    paddingTop: "18px",
    borderTop: "1px dashed #e5e7eb",
  },

  usageTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#166534",
    marginBottom: "12px",
  },

  usageList: {
    paddingLeft: "20px",
    fontSize: "15px",
    color: "#374151",
    lineHeight: "1.7",
  },
};
