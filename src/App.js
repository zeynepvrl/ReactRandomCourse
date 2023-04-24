import Course from './Course';
import './App.css';
import { useState } from 'react';

function getRandomCourse() {
  const courseArray=['Angularc','Bootstrapc','Csharpc','KompleWebc'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]  //math random 0 ile 1 arasında bir değer alıyor.
}
function App() {
  const [courses, setCourses] = useState([]);  //[] boş bir dizi oluşturuyor, course adında
  const handleClick = () =>{
    setCourses([...courses, getRandomCourse()]);  //...course;daha öndekiler geçerli,yeni elemanın getRandomCourse demek
  };  
  const courseList = courses.map((course,index) => {
    return <Course key={index} courseName={course} />;
  });

return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Kurs Ekle
      </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;

/*   <div className="App">
      <button onClick={handleClick} >Kurs Ekle</button>
      {     //Jsx formatında süslü parantezleri açmak lazım, button ile alakası yok course arrayinin içinde gezinmek için map fonksiyonu kullanılacak
         Courses.map((course, index) =>{        //map course arrayindeki her bir elemanı tek tek gezer 
          return <Course key={index} courseName={course}/>;
         })}
    </div>  */
