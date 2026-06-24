const Usercard_spltwo = ({ Name, Email, Phone, City }) => {
  const companyData = {
    companyName: "TCS",
    employeeName: "Ramya",
    role: "Frontend Developer",
    salary: "6 LPA",
  };

  return (
    <>
      <Company {...companyData} />

      <div>
        <p>{Name}</p>
        <p>{Email}</p>
        <p>{Phone}</p>
        <p>{City}</p>
      </div><hr />
    </>
  );
};

export const Employee = ({
  companyName,
  employeeName,
  role,
  salary,
}) => {
  return (<>
    <div>
      <h2>Company Name: {companyName}</h2>
      <h2>Employee Name: {employeeName}</h2>
      <h2>Role: {role}</h2>
      <h2>Salary: {salary}</h2>
    </div><hr /></>
  );
};

export const Company = (props) => {
  return <Employee {...props} />;
};

export default Usercard_spltwo;