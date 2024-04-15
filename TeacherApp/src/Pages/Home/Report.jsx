import { reportData } from './reportData';
import { Card } from '../../Components/Card';
import { useSelector } from 'react-redux';
import { GoPlus } from "react-icons/go";




export const Report = () => {
    const student = useSelector((state) => state.student);
    const list = useSelector((state) => state.list);
    const assignments = list.filter(item => item.type === 'Assignment');
    const announcements = list.filter(item => item.type === 'Announcement');
    const reportNumbers = [student.length, 2, assignments.length, announcements.length ]


    return (
        <section className='home__report'>
            <p>Report</p>
            <div className='home__report-cards'>
                {reportData.map((report) => {
                    return (
                        <Card key={report.id} className='home__report-card'>
                            <span className={`home__report-icon ${report.backgroundColor}`}>{report.icon}</span>
                            <span className='home__report-title'>{report.title}</span>
                            <span>{report.number}</span>
                            <span>{reportNumbers[report.id - 1]}</span>
                        </Card>
                    )
                })}
                <div className='home__report-empty'>
                    <span><GoPlus /></span>
                </div>
            </div>
        </section>
    )
}