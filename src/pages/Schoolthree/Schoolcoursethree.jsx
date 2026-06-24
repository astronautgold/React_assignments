

const Schoolcoursethree = () => {
  // Task 2 Data
  const schoolsCourses = [
    {
      id: 1,
      name: "ABC School",
      courses: ["LKG", "UKG", "Primary", "High School"],
    },
    {
      id: 2,
      name: "XYZ School",
      courses: ["LKG", "Primary", "Middle School"],
    },
  ];

  // Task 3 Data
  const schools = [
    {
      id: 1,
      name: "ABC School",
      principal: "Ramesh",
      city: "Chennai",
      students: 1200,
      teachers: 60,
      sports: ["Cricket", "Football", "Basketball"],
    },
    {
      id: 2,
      name: "XYZ School",
      principal: "Priya",
      city: "Coimbatore",
      students: 900,
      teachers: 45,
      sports: ["Volleyball", "Kabaddi"],
    },
    {
      id: 3,
      name: "National School",
      principal: "Arun",
      city: "Madurai",
      students: 1500,
      teachers: 75,
      sports: ["Cricket", "Tennis"],
    },
  ];

  const totalSchools = schools.length;
  const totalStudents = schools.reduce(
    (sum, school) => sum + school.students,
    0
  );
  const totalTeachers = schools.reduce(
    (sum, school) => sum + school.teachers,
    0
  );

  return (
    <div className="p-6 space-y-10">
      {/* ================= TASK 2 ================= */}
      <div>
        <h1 className="text-2xl font-bold mb-4">
          Task 2 - School Courses Dashboard
        </h1>

        {schoolsCourses.map((school) => (
          <div
            key={school.id}
            className="border p-4 rounded mb-4 shadow"
          >
            <h2 className="text-xl font-semibold">{school.name}</h2>

            <div className="flex gap-2 flex-wrap mt-3">
              {school.courses.map((course, index) => (
                <span
                  key={index}
                  className="bg-blue-200 px-3 py-1 rounded-full"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ================= TASK 3 ================= */}
      <div>
        <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
          School Management System
        </header>

        {/* School Stats */}
        <div className="flex gap-4 mt-4">
          <div className="border p-4 rounded">
            <h3>Total Schools</h3>
            <p>{totalSchools}</p>
          </div>

          <div className="border p-4 rounded">
            <h3>Total Students</h3>
            <p>{totalStudents}</p>
          </div>

          <div className="border p-4 rounded">
            <h3>Total Teachers</h3>
            <p>{totalTeachers}</p>
          </div>
        </div>

        {/* School Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {schools.map((school) => (
            <div
              key={school.id}
              className="border p-4 rounded shadow"
            >
              <h2 className="text-xl font-bold">{school.name}</h2>

              <p>Principal: {school.principal}</p>
              <p>City: {school.city}</p>

              <div className="mt-3">
                <h3 className="font-semibold">Sports Available</h3>

                <div className="flex gap-2 flex-wrap mt-2">
                  {school.sports.map((sport, index) => (
                    <span
                      key={index}
                      className="bg-green-200 px-3 py-1 rounded-full"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="bg-gray-800 text-white text-center p-4 mt-6">
          Footer
        </footer>
      </div>
    </div>
  );
};

export default Schoolcoursethree;
