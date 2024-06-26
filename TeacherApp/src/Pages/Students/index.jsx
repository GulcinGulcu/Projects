import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";

export const StudentList = () => {
  const studentData = useSelector((state) => state.student);
  const { isDarkMode } = useSelector(state => state.darkMode);

  return (
    <section className="student-page-wrapper">
      <div>
        <h4>All Students</h4>
        <p>You can find all your students information</p>
      </div>
      <table className={isDarkMode ? 'student-table dark' : 'student-table'}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Grade</th>
            <th className="student-table-number">Parent Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.generalInfo.id} className="student-table-tr">
              <td className="student-name-and-image">
                <img
                  src={student.generalInfo.image}
                  className="student-table-img"
                />
                <div>
                  <span>
                    {student.generalInfo.firstName}{" "}
                    {student.generalInfo.lastName}
                  </span>
                </div>
              </td>
              <td className="student-table-grade">
                {student.generalInfo.grade}th grade student
              </td>
              <td className="student-table-number">
                {student.communicationInfo.phoneNumber}
              </td>
              <td>
                <Link
                  to={`${student.generalInfo.id}/details`}
                  className="detail-link"
                >
                  See Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
