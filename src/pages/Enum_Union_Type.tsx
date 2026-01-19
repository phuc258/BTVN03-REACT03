import { useState } from 'react'
import '../styles/UnionEnum.css'

enum UserRole  {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
};

enum Status  {
  ACTIVE = 1,
  INACTIVE = 2,
  PENDING = 3,
};


type ID = string | number;
type StatusType = 'success' | 'error' | 'warning' | 'info';
type Age = number | null;
type UserStatus = 'online' | 'offline' | 'away';

// Union Type với object
export type User = {
  id: ID;
  name: string;
  role: UserRole;
  status: UserStatus;
  age: Age;
};

function TypeDemo() {
  // State cho Enum demo
  const [enumRole, setEnumRole] = useState<string>('');
  const [enumStatus, setEnumStatus] = useState<string>('');
  const [enumResult, setEnumResult] = useState<{ valid: boolean; message: string } | null>(null);

  // State cho Union Type demo
  const [unionId, setUnionId] = useState<string>('');
  const [unionStatus, setUnionStatus] = useState<string>('');
  const [unionAge, setUnionAge] = useState<string>('');
  const [unionResult, setUnionResult] = useState<{ valid: boolean; message: string } | null>(null);

  // State cho demo ví dụ Enum (checkUserRole)
  const [demoRole, setDemoRole] = useState<string>('');
  const [demoRoleResult, setDemoRoleResult] = useState<string>('');

  // State cho demo ví dụ Union Type (processId)
  const [demoId, setDemoId] = useState<string>('');
  const [demoIdResult, setDemoIdResult] = useState<string>('');

  // Hàm helper để lấy tên enum key từ giá trị
  const getEnumKeyByValue = <T extends Record<string, string | number>>(
    enumObject: T,
    value: string | number
  ): string | null => {
    const entry = Object.entries(enumObject).find(([, val]) => val === value);
    return entry ? entry[0] : null;
  };

  // Hàm kiểm tra Enum
  const validateEnum = () => {
    const roleValid = Object.values(UserRole).includes(enumRole as UserRole);
    const statusNumber = Number(enumStatus);
    const statusValid = Object.values(Status).includes(statusNumber as Status);

    if (roleValid && statusValid) {
      // Lấy tên enum key cho Role từ giá trị nhập vào
      const roleDisplay = getEnumKeyByValue(UserRole, enumRole) || enumRole;
      // Lấy tên enum key cho Status từ giá trị nhập vào
      const statusDisplay = getEnumKeyByValue(Status, statusNumber) || enumStatus;
      
      setEnumResult({
        valid: true,
        message: `✅ Hợp lệ! Role: ${roleDisplay}, Status: ${statusDisplay}`
      });
    } else {
      const errors: string[] = [];
      if (!roleValid) {
        errors.push(`Role phải là một trong: ${Object.values(UserRole).join(', ')}`);
      }
      if (!statusValid) {
        errors.push(`Status phải là một trong: ${Object.values(Status).join(', ')}`);
      }
      setEnumResult({
        valid: false,
        message: `❌ Không hợp lệ! ${errors.join('; ')}`
      });
    }
  };

  // Hàm demo Enum: checkUserRole
  const checkUserRole = (role: UserRole): string => {
    switch (role) {
      case UserRole.ADMIN:
        return "Bạn là quản trị viên";
      case UserRole.USER:
        return "Bạn là người dùng";
      case UserRole.GUEST:
        return "Bạn là khách";
    }
  };

  // Hàm demo Union Type: processId
  const processId = (id: ID): string => {
    if (typeof id === 'string') {
      return `ID là chuỗi: ${id}`;
    } else {
      return `ID là số: ${id}`;
    }
  };

  // Hàm chạy demo Enum
  const runEnumDemo = () => {
    if (!demoRole) {
      setDemoRoleResult('Vui lòng nhập role (admin, user, guest)');
      return;
    }

    const roleValid = Object.values(UserRole).includes(demoRole as UserRole);
    if (roleValid) {
      const result = checkUserRole(demoRole as UserRole);
      setDemoRoleResult(result);
    } else {
      setDemoRoleResult(`❌ Role không hợp lệ! Phải là một trong: ${Object.values(UserRole).join(', ')}`);
    }
  };

  // Hàm chạy demo Union Type
  const runUnionTypeDemo = () => {
    if (!demoId) {
      setDemoIdResult('Vui lòng nhập ID (string hoặc number)');
      return;
    }

    // Kiểm tra xem là string hay number
    const idAsNumber = Number(demoId);
    const isNumber = !isNaN(idAsNumber) && demoId.trim() !== '' && !isNaN(Number(demoId));

    let idValue: ID;
    if (isNumber && !demoId.includes(' ')) {
      idValue = idAsNumber;
    } else {
      idValue = demoId;
    }

    const result = processId(idValue);
    setDemoIdResult(result);
  };

  // Hàm kiểm tra Union Type
  const validateUnionType = () => {
    const errors: string[] = [];
    let isValid = true;

    // Kiểm tra ID (string | number)
    const idAsNumber = Number(unionId);
    const idValid = unionId !== '' && (typeof unionId === 'string' || !isNaN(idAsNumber));
    if (!idValid) {
      errors.push('ID phải là string hoặc number');
      isValid = false;
    }

    // Kiểm tra Status (union type: 'success' | 'error' | 'warning' | 'info')
    const validStatuses: StatusType[] = ['success', 'error', 'warning', 'info'];
    const statusValid = validStatuses.includes(unionStatus as StatusType);
    if (!statusValid) {
      errors.push(`Status phải là một trong: ${validStatuses.join(', ')}`);
      isValid = false;
    }

    // Kiểm tra Age (number | null)
    const ageAsNumber = unionAge === '' || unionAge === 'null' ? null : Number(unionAge);
    const ageValid = ageAsNumber === null || (!isNaN(ageAsNumber) && ageAsNumber >= 0);
    if (!ageValid) {
      errors.push('Age phải là number hoặc null');
      isValid = false;
    }

    if (isValid) {
      setUnionResult({
        valid: true,
        message: `✅ Hợp lệ! ID: ${unionId} (${typeof unionId === 'string' ? 'string' : 'number'}), Status: ${unionStatus}, Age: ${ageAsNumber === null ? 'null' : ageAsNumber}`
      });
    } else {
      setUnionResult({
        valid: false,
        message: `❌ Không hợp lệ! ${errors.join('; ')}`
      });
    }
  };

  return (
    <div className="app-container">
      <h1>📚 Demo Union Type và Enum trong TypeScript</h1>

      {/* ENUM SECTION */}
      <section className="demo-section">
        <h2>🔢 Enum (Enumeration)</h2>
        <div className="explanation">
          <p><strong>Enum</strong> là một cách để định nghĩa một tập hợp các hằng số có tên, có giá trị cố định.</p>
          <pre className="code-block">
{`enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
  PENDING = 3
}`}
          </pre>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label>Nhập UserRole (admin, user, guest):</label>
            <input
              type="text"
              value={enumRole}
              onChange={(e) => setEnumRole(e.target.value)}
              placeholder="Ví dụ: admin"
            />
            <small>Các giá trị hợp lệ: {Object.values(UserRole).join(', ')}</small>
          </div>

          <div className="input-field">
            <label>Nhập Status (1, 2, 3):</label>
            <input
              type="text"
              value={enumStatus}
              onChange={(e) => setEnumStatus(e.target.value)}
              placeholder="Ví dụ: 1"
            />
            <small>Các giá trị hợp lệ: {Object.values(Status).join(', ')}</small>
          </div>

          <button onClick={validateEnum} className="validate-btn">
            Kiểm tra Enum
          </button>

          {enumResult && (
            <div className={`result ${enumResult.valid ? 'success' : 'error'}`}>
              {enumResult.message}
            </div>
          )}
        </div>

        {/* Demo ví dụ Enum */}
        <div className="demo-example">
          <h3>💡 Demo: Hàm checkUserRole</h3>
          <pre className="code-block">
{`function checkUserRole(role: UserRole) {
  switch (role) {
    case UserRole.ADMIN:
      return "Bạn là quản trị viên";
    case UserRole.USER:
      return "Bạn là người dùng";
    case UserRole.GUEST:
      return "Bạn là khách";
  }
}`}
          </pre>
          <div className="input-group">
            <div className="input-field">
              <label>Nhập role để test hàm checkUserRole:</label>
              <input
                type="text"
                value={demoRole}
                onChange={(e) => setDemoRole(e.target.value)}
                placeholder="Ví dụ: admin, user, guest"
              />
              <small>Các giá trị hợp lệ: {Object.values(UserRole).join(', ')}</small>
            </div>
            <button onClick={runEnumDemo} className="validate-btn">
              Run
            </button>
            {demoRoleResult && (
              <div className={`result ${demoRoleResult.startsWith('❌') ? 'error' : 'success'}`}>
                <strong>Kết quả:</strong> {demoRoleResult}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* UNION TYPE SECTION */}
      <section className="demo-section">
        <h2>🔗 Union Type</h2>
        <div className="explanation">
          <p><strong>Union Type</strong> cho phép một biến có thể là một trong nhiều kiểu khác nhau.</p>
          <pre className="code-block">
{`type ID = string | number;
type StatusType = 'success' | 'error' | 'warning' | 'info';
type Age = number | null;

// Sử dụng:
const userId: ID = "123";  // ✅ Hợp lệ
const userId2: ID = 123;   // ✅ Hợp lệ
const status: StatusType = 'success';  // ✅ Hợp lệ
const age: Age = 25;       // ✅ Hợp lệ
const age2: Age = null;    // ✅ Hợp lệ`}
          </pre>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label>Nhập ID (string hoặc number):</label>
            <input
              type="text"
              value={unionId}
              onChange={(e) => setUnionId(e.target.value)}
              placeholder="Ví dụ: 123 hoặc 'abc123'"
            />
            <small>ID có thể là string hoặc number</small>
          </div>

          <div className="input-field">
            <label>Nhập Status (success, error, warning, info):</label>
            <input
              type="text"
              value={unionStatus}
              onChange={(e) => setUnionStatus(e.target.value)}
              placeholder="Ví dụ: success"
            />
            <small>Các giá trị hợp lệ: success, error, warning, info</small>
          </div>

          <div className="input-field">
            <label>Nhập Age (number hoặc null):</label>
            <input
              type="text"
              value={unionAge}
              onChange={(e) => setUnionAge(e.target.value)}
              placeholder="Ví dụ: 25 hoặc null"
            />
            <small>Age có thể là number hoặc null (để trống hoặc nhập 'null')</small>
          </div>

          <button onClick={validateUnionType} className="validate-btn">
            Kiểm tra Union Type
          </button>

          {unionResult && (
            <div className={`result ${unionResult.valid ? 'success' : 'error'}`}>
              {unionResult.message}
            </div>
          )}
        </div>

        {/* Demo ví dụ Union Type */}
        <div className="demo-example">
          <h3>💡 Demo: Hàm processId</h3>
          <pre className="code-block">
{`function processId(id: ID) {
  if (typeof id === 'string') {
    return \`ID là chuỗi: \${id}\`;
  } else {
    return \`ID là số: \${id}\`;
  }
}`}
          </pre>
          <div className="input-group">
            <div className="input-field">
              <label>Nhập ID để test hàm processId:</label>
              <input
                type="text"
                value={demoId}
                onChange={(e) => setDemoId(e.target.value)}
                placeholder="Ví dụ: 123 hoặc 'abc123'"
              />
              <small>ID có thể là string hoặc number</small>
            </div>
            <button onClick={runUnionTypeDemo} className="validate-btn">
              Run
            </button>
            {demoIdResult && (
              <div className="result success">
                <strong>Kết quả:</strong> {demoIdResult}
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}

export default TypeDemo
