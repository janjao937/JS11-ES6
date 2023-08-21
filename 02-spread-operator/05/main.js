// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม

const rnd =(max,min)=>{
    const minForRnd =min+1;
    return Math.floor(Math.random()*(max+minForRnd))+minForRnd;
}
const removeRandom = (arr)=>{

    let rndd =rnd(arr.length-1,0);
    return arr.filter((e)=>arr[rndd] != e);
}

console.log(removeRandom([1,2,3,4,5]));
console.log(removeRandom(["AS","S","sadad","asd"]));