import "../StudentCard.css";

// interface với kiểu dữ liệu props
interface StudentProps {
  name: string;
  age: number;
  major: string;
  status: "studying" | "graduated";
}

// TYPE ANNOTATION CHO FUNCTION COMPONENT VỚI PROPS
function StudentCard({ name, age, major, status }: StudentProps) {
  // TYPE ANNOTATION CHO BIẾN
  const statusText: string =
    status === "graduated" ? "Đã tốt nghiệp" : "Đang học";

  const isGraduated: boolean = status === "graduated";

  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>

      <div className="row">
        <span>Tuổi</span>
        <span>{age}</span>
      </div>

      <div className="row">
        <span>Ngành</span>
        <span>{major}</span>
      </div>

      <span className={`badge ${isGraduated ? "graduated" : "studying"}`}>
        {statusText}
      </span>
    </div>
  );
}

function App() {
  // TYPE ANNOTATION CHO BIẾN
  const studentName: string = "Trần Đình Phúc";
  const studentAge: number = 20;

  return (
    <div className="p-8">
      <StudentCard
        name={studentName}
        age={studentAge}
        major="Công nghệ thông tin"
        status="studying"
      />
    </div>
  );
}

export default App;
