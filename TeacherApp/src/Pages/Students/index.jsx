import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "../../Components/Card";
import { IoMdCall } from "react-icons/io";


import './styles.css';
import { Button } from "../../Components/Button";


export const StudentList = () => {
    const studentData = useSelector((state) => state.student);
    return (
        <div className="page-wrapper">
            <section className="student__card-wrapper">
                {
                    studentData.map(student => (
                        <Card className='student__card' key={student.generalInfo.id}>
                            <div className="student__card-img-wrapper">
                                <img src={student.generalInfo.image} className="student__card-img" />
                            </div>
                            <div className="student__card-info">
                                <span>{student.generalInfo.firstName} {student.generalInfo.lastName}</span>
                                <span className="light-font">{student.generalInfo.grade}th Grade Student</span>
                                <div>
                                   <IoMdCall /> {student.communicationInfo.phoneNumber}
                                </div>
                                <Link className="details-link" to={`${student.generalInfo.id}/details`}>See Details</Link>
                            </div>
                        </Card>
                    ))
                }
            </section>
        </div>
    )
}