
const Taskone=()=> {
  return (
    <div>
      <StudentProfile />
      <hr />

      <EmployeeCard />
      <hr />

      <ProductCard />
      <hr />

      <MovieDetails />
      <hr />

      <CompanyInfo />
      <hr />

      <Header />
      <hr />

      <MainContent />
      <Footer />
      <hr />

      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Taskone;

const StudentProfile = () => {

  return(<><div>
    <h1>task1 </h1>
    <h2>Student Profile</h2>
    <p>Student Name: Ramya</p>
    <p>Course: B.Tech IT</p>
    <p>City: Chennai</p>
    <p>Institute: Vellammal Engineering College</p>
  </div></>)
  
  }

const EmployeeCard = () => {
   return(<><div>
    <h1>task2 </h1>
    <h2>Employee Card</h2>
    <p>Employee Name: Sudhan</p>
    <p>Employee ID: EMP101</p>
    <p>Department: Training</p>
    <p>Salary: ₹50,000</p>
  </div></>)
  
   }

const ProductCard = () => {
   return(<><div>
    
 <h1>task3 </h1>
    <h2>Product Card</h2>
    <p>Product Name: Laptop</p>
    <p>Product Price: ₹55,000</p>
    <p>Product Category: Electronics</p>
    <p>Product Description: High Performance Laptop</p>
  </div></>)
  
   }

const MovieDetails = () => {
   return(<><div>
     <h1>task4 </h1>
    <h2>Movie Details</h2>
    <p>Movie Name: Leo</p>
    <p>Hero Name: Vijay</p>
    <p>Director Name: Lokesh Kanagaraj</p>
    <p>Release Year: 2023</p>
  </div></>)
  
   }

const CompanyInfo = () => {
   return(<> <div>
     <h1>task5 </h1>
    <h2>Company Information</h2>
    <p>Company Name: Google</p>
    <p>Location: California</p>
    <p>Founder: Larry Page & Sergey Brin</p>
    <p>Established Year: 1998</p>
  </div></>)
 
   }

const Header = () => {
   return(<><header>
     <h1>task6 </h1>
    <h1>ABC Technologies</h1>
    <p>LOGO</p>
    <nav>
      <a href="/">Home</a> | <a href="/">About</a> |{" "}
      <a href="/">Contact</a>
    </nav>
  </header></>)
  
   }

const MainContent = () => {
   return(<> <main>
     <h1>task7 </h1>
    <h2>Main Content</h2>
    <p>Welcome to our React Application.</p>
  </main></>)
 
   }

const Footer = () => {
   return(<> <footer>
     <h1>task8 </h1>
    <p>© 2026 All Rights Reserved</p>
  </footer></>)
 
   }

const Navbar = () => {
   return(<><nav>
     <h1>task9 </h1>
    <h2>My Brand</h2>
  </nav></>)
  
   };

const HeroSection = () => {

   return(<> <section>
     <h1>task10 </h1>
    <h1>Welcome to Our Website</h1>
    <p>Learn React and Build Amazing Projects.</p>
    <button>Get Started</button>
  </section></>)
 }
;
