import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const OtherInfo = () => {
  const { id } = useParams();
  const student = useSelector((state) =>
    state.student);
  const selectedStudent = student.filter(stu => stu.generalInfo.id === id);

  return (
    <>
      {student && (
        <ul className="student-detail student-detail-other">
          <li className="student-detail-item">
            <span>Phone Number: </span>
            <span>{selectedStudent[0].communicationInfo.phoneNumber}</span>
          </li>
          <li className="student-detail-item">
            <span>Address: </span>
            <span>{selectedStudent[0].communicationInfo.address}</span>
          </li>
          <li className="student-detail-item">
            <span>Selective Lesson: </span>
            <span>{selectedStudent[0].otherInfo.selectiveLesson}</span>
          </li>
        </ul>
      )}
    </>
  );
};
