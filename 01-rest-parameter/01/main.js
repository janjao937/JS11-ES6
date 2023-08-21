/*จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด*/
const multiply =(...arg)=>
{
    let temp=1;
    arg.forEach((e)=>temp*=e)
    return temp;
}
console.log(multiply(5,4,3,2))