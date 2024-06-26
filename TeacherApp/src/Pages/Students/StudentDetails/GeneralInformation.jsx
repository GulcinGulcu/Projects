import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const GeneralInformation = () => {
  const { id } = useParams();
  const student = useSelector((state) =>
    state.student);
  const selectedStudent = student.filter(stu => stu.generalInfo.id === id);

  return (
    <>
      {student && (
        <ul className="student-detail general-info">
          <li className="student-detail-item">
            <span>Student ID:</span>
            <span>{selectedStudent[0].generalInfo.id}</span>
          </li>
          <li className="student-detail-item">
            <span>First Name:</span>
            <span>{selectedStudent[0].generalInfo.firstName}</span>
          </li>
          <li className="student-detail-item">
            <span>Last Name:</span>
            <span>{selectedStudent[0].generalInfo.lastName}</span>
          </li>
        </ul>
      )}
    </>
  );
};
