//You will be given a number N that represents where the minute hand currently is on a clock. Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.

const angle = (num) =>{
    const total_degree = 360;
    const per_min_degree = (total_degree/60);
    const angle = num* per_min_degree;
    console.log(angle);

}

angle(15)