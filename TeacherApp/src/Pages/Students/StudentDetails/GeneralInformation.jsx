export const GeneralInformation = ({ generalInfo }) => {
    return (
        <ul className="general-info">
            <li key={generalInfo.id}>
                <span>Student ID:</span><span>{generalInfo.id}</span>
            </li>
            <li>
                <span>First Name:</span>
                <span>{generalInfo.firstName}</span>
            </li>
            <li>
                <span>Last Name:</span>
                <span>{generalInfo.lastName}</span>
            </li>

        </ul>
    )
}