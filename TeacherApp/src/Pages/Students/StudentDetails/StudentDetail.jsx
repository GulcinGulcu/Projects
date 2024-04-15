import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import './styles.css';
import { GeneralInformation } from "./GeneralInformation";

export const StudentDetail = () => {
    const studentData = useSelector((state) => state.student);
    const { id } = useParams();
    const [studentDetail, setStudentDetail] = useState(null);
    useEffect(() => {
        const student = studentData.filter(student => student.generalInfo.id === id)
        setStudentDetail(student[0]);
    }, [id])

    
    return (
        <>
            {studentDetail && <div className="detail-container">
                <section className="avatar-container">
                    <span className={`avatar ${studentDetail.generalInfo.gender === 'Male' ? 'boy' : 'girl'}`}><CgProfile /></span>
                </section>
                <section>
                    <h4>General Information</h4>
                    <GeneralInformation generalInfo={studentDetail.generalInfo} />
                </section>
            </div>}
        </>
    )
}


/*
<span className={`avatar ${studentDetail.generalInfo.gender === 'Male' ? 'boy' : 'girl'}`}><CgProfile /></span>

<GeneralInformation generalInfo={studentDetail.generalInfo} />

*/