import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import './Course.css';

const courseMap= {
    Angularc:Angular,       //courseName parametresi ile gelenler beyaz yazılanları temsil ediyor
    Bootstrapc:Bootstrap,   //burdaki kırmızıları silip beyazların ve App.js deki dizinin elemanlarının isimlerini yukardaki kırmızılarla aynı yapsan da çalışırdı
    Csharpc:Csharp,
    KompleWebc:KompleWeb,
};
function Course({ courseName }) {
    // console.log(Angular);
    // console.log(courseName);
    console.log(courseMap[courseName]);
    return (
      <div className="courseDiv">
        <img className="course" src={courseMap[courseName]} alt="course" />
      </div>
    );
  }
  
  export default Course;