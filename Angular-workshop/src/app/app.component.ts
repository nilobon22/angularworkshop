import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-workshop';
  score:number = 100;
  name: string = "Rin";

  student :any = {
    studentId : "5921600202",
    name: "Rinchag", 
    weight : 45,
    height : 155
  }
  studentList =[{
    studentId : "5921600211",
    name: "Pigbig", 
    weight : 80,
    height : 145
  },{
    studentId : "5921600333",
    name: "Jin", 
    weight : 46,
    height : 168
  },{
    studentId : "5921602544",
    name: "Aribaba", 
    weight : 50,
    height : 175
  }]

  constructor(){
    this.student.bmi = (this.student.weight/((this.student.height/100)*(this.student.height/100))).toFixed(2);
    this.studentList.map((object,index)=>{
      let obj :any= object;
      obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2);
        return obj;
    })
    console.log(this.studentList);
  }
  
}
