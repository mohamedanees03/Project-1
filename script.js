function sum() {
    // Getting values from the user 
    var grade_1 = parseInt(document.getElementById('MPMC').value, 10);
    var grade_2 = parseInt(document.getElementById('VLSI').value, 10);
    var grade_3 = parseInt(document.getElementById('WC').value, 10);
    var grade_4 = parseInt(document.getElementById('ANTENNA').value, 10);
    var grade_5 = parseInt(document.getElementById('MMC').value, 10);
    var grade_6 = parseInt(document.getElementById('DIP_CUM_LAB').value, 10);
    var grade_7 = parseInt(document.getElementById('MPMC_LAB').value, 10);
    var grade_8 = parseInt(document.getElementById('VLSI_LAB').value, 10);
    var grade_9 = parseInt(document.getElementById('VAC').value, 10);
    var grade_10 = parseInt(document.getElementById('MINIPROJECT').value, 10);

    if (grade_1 && grade_2 && grade_3 && grade_4 && grade_5 && grade_6 && grade_7 && grade_8 && grade_9 && grade_10) {
        // Calculating the GPA from the user value
        var SumOfGrades = (grade_1 * 3) + (grade_2 * 3) + (grade_3 * 3) + (grade_4 * 4) + (grade_5 * 3) + (grade_6 * 4) + (grade_7 * 2) + (grade_8 * 2) + (grade_9 * 1) + (grade_10 * 1);
        var result = (SumOfGrades / 26);

        // Since the resultant values will have more number of digits we should round off to 2 digits
        var round_off = result.toFixed(2);
        document.getElementById('result').value = "Your GPA : " + round_off;
    }
    else {
        alert('Please select the grade for all the subjects !!');
    }
}