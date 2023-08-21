/*จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว*/

const cloneObject =(obj)=> {return {...obj}};

let a = {name:"Banana",pass:"123"};

let b = cloneObject(a);

a.car = "Toyata"
console.log(b);
console.log(a);