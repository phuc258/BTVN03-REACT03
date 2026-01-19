enum Direction {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3
}

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
  Blocked = "BLOCKED"
}

enum Mixed {
  Yes = 1,
  No = "NO",
  Maybe = 0,
  Unknown = "UNKNOWN"
}

const EnumPage = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">TypeScript Enum Examples</h1>

        {/* 1. NUMERIC ENUM */}
        <div className="section">
          <h2 className="subtitle">1. NUMERIC ENUM (Enum Số)</h2>
          <div className="enum-content">
            <p><strong>Direction.Up:</strong> {Direction.Up}</p>
            <p><strong>Direction.Down:</strong> {Direction.Down}</p>
            <p><strong>Direction.Left:</strong> {Direction.Left}</p>
            <p><strong>Direction.Right:</strong> {Direction.Right}</p>
            <p><strong>Reverse mapping Direction[0]:</strong> {Direction[0]}</p>
          </div>
        </div>

        {/* 2. STRING ENUM */}
        <div className="section">
          <h2 className="subtitle">2. STRING ENUM</h2>
          <div className="enum-content">
            <p><strong>Status.Active:</strong> {Status.Active}</p>
            <p><strong>Status.Inactive:</strong> {Status.Inactive}</p>
            <p><strong>Status.Pending:</strong> {Status.Pending}</p>
            <p><strong>Status.Blocked:</strong> {Status.Blocked}</p>
          </div>
        </div>

        {/* 3. HETEROGENEOUS ENUM */}
        <div className="section">
          <h2 className="subtitle">3. HETEROGENEOUS ENUM (Enum Hỗn Hợp)</h2>
          <div className="enum-content">
            <p><strong>Mixed.Yes:</strong> {Mixed.Yes}</p>
            <p><strong>Mixed.No:</strong> {Mixed.No}</p>
            <p><strong>Mixed.Maybe:</strong> {Mixed.Maybe}</p>
            <p><strong>Mixed.Unknown:</strong> {Mixed.Unknown}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnumPage;
