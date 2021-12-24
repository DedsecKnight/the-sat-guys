import RecentTab from "./RecentTab";
import { mockExam } from "../../lib/exams";
import { Badge } from "../utilities/Badge";

export default function RecentExam() {
  return (
    <RecentTab title="Recent Exam">
      <div className="p-3">
        {mockExam.map((exam, idx) => (
          <Badge
            key={idx}
            color={
              exam.score >= 90 ? "green" : exam.score >= 50 ? "yellow" : "red"
            }
          >
            <h1>{exam.id}</h1>
            <h1>{exam.category}</h1>
            <h1>{exam.time}</h1>
            <h1>{exam.score}%</h1>
          </Badge>
        ))}
      </div>
    </RecentTab>
  );
}
