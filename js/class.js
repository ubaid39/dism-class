// class lab209{
//     constructor(name,course,semester){
//         this.name=name;
//         this.course=course;
//         this.semester=semester
//     }
//     learning(name,course,semester){
//         alert(name +"is the student of"+ course +"and his current semester is"+semester)
//     }
//     writing(){
//         alert("this is writing method")
//     }
//     teaching(){

//     }
// }
// let std1 = new lab209();
// std1.learning("ali","adse","second");




class lab209{
    constructor(name,course,semester){
        this.name=name;
        this.course=course;
        this.semester=semester
    }
    learning(name,course,semester){
        const inerh1 = document.getElementById('output');
        inerh1.innerHTML = (name+ "is the student of"+course+ "and his current semester is" +semester)
    }
    writing(){
        alert("this is writing method")
    }
    teaching(){

    }
}
let std1 = new lab209();
std1.learning("ali","adse","second");
