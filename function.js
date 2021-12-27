function age_cal(name, year) {

    let date = new Date();
    age = date.getFullYear() - year;
    let ageCalc = ageCal(age)
   
    return `<p style= "font-weight:bold; font-size:25px;" class= "alert alert-${ageCalc.status}">Hi ${name} you are ${age} years old && you are ${ageCalc.name1}</p> `



}


function ageCal(age) {
    if (age >= 0 && age < 10) {
        return {
            name1: 'Baby',
            status: 'primary',
        };
    } else if (age >= 10 && age < 18) {
        return {
            name1: 'Teenager',
            status: 'success',
        };
    } else if (age >= 18 && age < 35) {
        return {
            name1: 'Still Young',
            status: 'info',
        };
    }else if (age >= 35 && age < 55) {
        return {
            name1: 'Going to old',
            status: 'warning',
        };
    }else if (age >= 55 && age < 150) {
        return {
            name1: 'Going to old',
            status: 'danger',
        };
    }else{
       return{
        name1 : '//Sorry out of date//',
        status: 'danger',
       } 
    }
}


let npattern = /^[a-zA-Z]{3,20}$/
