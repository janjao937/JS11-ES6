/*จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัวi*/

const cloneArray = (arr)=>[...arr];


let a = [5,6,8,7];
let b = cloneArray(a);
console.log(b)
