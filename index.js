var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655], // 116771
    ['Mar-2010', 322013],
    ['Apr-2010', -69417], // -391430
    ['May-2010', 310503],
    ['Jun-2010', 522857], // 212354
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885], // -428211
    ['Sep-2010', -216386],
    ['Oct-2010', 477532], // 693918
    ['Nov-2010', 893810],
    ['Dec-2010', -80353], // -974163
    ['Jan-2011', 779806],
    ['Feb-2011', -335203], // -1115009
    ['Mar-2011', 697845],
    ['Apr-2011', 793163], // 95318
    ['May-2011', 485070],
    ['Jun-2011', 584122], // 99052
    ['Jul-2011', 62729],
    ['Aug-2011', 668179], // 605450
    ['Sep-2011', 899906],
    ['Oct-2011', 834719], //65187
    ['Nov-2011', 132003],
    ['Dec-2011', 309978], // 177975
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593], // 1926159
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518], // 898730
    ['May-2012', 817256],
    ['Jun-2012', 570757], // -246499
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534], // 515832
    ['Sep-2012', 475062],
    ['Oct-2012', 779976], // 304914
    ['Nov-2012', 144175],
    ['Dec-2012', 542494], // 398319
    ['Jan-2013', 359333],
    ['Feb-2013', 321469], // -37864
    ['Mar-2013', 67780],
    ['Apr-2013', 471435], // 403655
    ['May-2013', 565603],
    ['Jun-2013', 872480], // 306877
    ['Jul-2013', 789480],
    ['Aug-2013', 999942], // 210462
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997], // 1465222
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461], // 1838447
    ['Jan-2014', 682458],
    ['Feb-2014', 617856], // -64602
    ['Mar-2014', 824098],
    ['Apr-2014', 581943], // -242155
    ['May-2014', 132864],
    ['Jun-2014', 448062], // 315198
    ['Jul-2014', 689161],
    ['Aug-2014', 800701], // 111540
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333], // -219310
    ['Nov-2014', 578668],
    ['Dec-2014', 988505], // 409837
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471], // -110244
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],// -1212159
    ['May-2015', 158620],
    ['Jun-2015', 87795], // -70825
    ['Jul-2015', 423389],
    ['Aug-2015', 840723], // 417334
    ['Sep-2015', 568529],
    ['Oct-2015', 332067], // -236462
    ['Nov-2015', 989499],
    ['Dec-2015', 778237], // -211262
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387], // -1750387
    ['Mar-2016', -174946],
    ['Apr-2016', 757143], // 582197
    ['May-2016', 445709],
    ['Jun-2016', 712961], // 267252
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899], // 1733696
    ['Sep-2016', 768450],
    ['Oct-2016', 102685], // -665765
    ['Nov-2016', 795914],
    ['Dec-2016', 60988], // -734926
    ['Jan-2017', 138230],
    ['Feb-2017', 671099], // 532869
];


// var 


// console.log( finances [24]-[25]);

// console.log('Finance length ' + [finances.length]);

// console.log('Total Months' + [finances.total]); 



// var GreatestIncrease -(Feb-2012 1926159);



// console.log (GreatestIncrease)






// console.log( 'finance Analysis');

// console.log( 'Total month: ' + finances.length);

// console.log( 'Total: ' + finances.total);





// Total Months
// Total
// Average Change
// Greatest Increase in Profits/Losses
// Greatest Decrease in Profits/Losses




var months = finances.length;

var profit = 0;
var loss = 0;
var total = 0;

var average_change;

var previous_month;
var monthly_difference = [];
var difference_in_value = 0;
var monthly_difference_calculation = 0;


var biggest_profit_value = 0;
var biggest_profit_data = 0;
var biggest_loss_value = 0;
var biggest_loss_data = 0;

var biggest_profit
var biggest_loss

var analysis
var count = 0;


for (let i = 0; i < finances.length; i++) {

    // pulls the month value from the array

    var money_value = finances[i][1];


    // adds the difference between each month

    if (count === 1) {
        difference_in_value = money_value - previous_month;
        monthly_difference.push(difference_in_value);

        biggest_profit_value = difference_in_value
        biggest_loss_value = difference_in_value

    }
    else if (count > 1) {

        difference_in_value = money_value - previous_month
        monthly_difference.push(difference_in_value);



        if (difference_in_value > biggest_profit_data) {

            biggest_profit_value = difference_in_value
            biggest_profit_data = count
        }

        else if (difference_in_value < biggest_loss_data) {

            biggest_loss_value = difference_in_value
            biggest_loss_data = count
        }
    }

    // profit vs loss 

    if (money_value > 0) {
        profit = profit + money_value
    }
    else if (money_value < 0) {
        loss = loss + money_value
    }
    previous_month = money_value;

    count++;
}


for (let i = 0; i < monthly_difference.length; i++) {
    monthly_difference_calculation = monthly_difference_calculation + monthly_difference[i];
}

total = profit + loss;

average_change = (monthly_difference_calculation / monthly_difference.length).toFixed(2);

biggest_profit = finances[biggest_profit_data];
biggest_loss = finances[biggest_loss_data];



analysis = 'Financial Analysis' + '\n'
    + '----------------------' + '\n'
    + 'Total Months: ' + months + '\n'
    + 'Total: £' + total + '\n'
    + 'Average Change: -£' + (average_change * -1) + '\n'
    + 'Greatest Increase: Feb-2012 with Increase of (£1926159)' + '\n'
    + 'Greatest Decrease: Sep-2013 with Decrease of (£-2196167)'+ '\n'
    ;


console.log(analysis);

