var php5000 = 0;
var php1000 = 0;
var php500 = 0;
var php100 = 0;
var php50 = 0;
var php20 = 0;
var php10 = 0;
var php5 = 0;
var php2 = 0;
var php1 = 0;
var total = 0;
var amt_enter = 0;
var phil = 0;
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;
var p5 = 0;
var p6 = 0;
var p7 = 0;
var p8 = 0;
var p9 = 0;
var p10 = 0;

function amount() {
    php5000 = parseInt(prompt("enter quantity for 5000 notes"))
    document.getElementById("php_fivethousand").innerHTML = php5000

    php1000 = parseInt(prompt("enter quantity for 1000 notes"))
    document.getElementById("php_onethousand").innerHTML = php1000

    php500 = parseInt(prompt("enter quantity for 500 notes"))
    document.getElementById("php_fivehundred").innerHTML = php500

    php100 = parseInt(prompt("enter quantity for 100 notes"))
    document.getElementById("php_hundred").innerHTML = php100

    php50 = parseInt(prompt("enter quantity for 50 notes"))
    document.getElementById("php_fifty").innerHTML = php50

    php20 = parseInt(prompt("enter quantity for 20 notes"))
    document.getElementById("twenty").innerHTML = php20

    php10 = parseInt(prompt("enter quantity for 10 notes"))
    document.getElementById("ten").innerHTML = php10

    php5 = parseInt(prompt("enter quantity for 5 coins"))
    document.getElementById("five").innerHTML = php5

    php2 = parseInt(prompt("enter quantity for 2 coins"))
    document.getElementById("two").innerHTML = php2

    php1 = parseInt(prompt("enter quantity for 1 coins"))
    document.getElementById("one").innerHTML = php1

    total = (php5000 * 5000) + (php1000 * 1000) + (php500 * 500) + (php100 * 100) + (php50 * 50) + (php20 * 20) + (
        php10 * 10) + (php5 * 5) + (php2 * 2) + (php1)
    document.getElementById("tot_Amounts").innerHTML = total;
    document.getElementById("zero").innerHTML = ""
}

document.getElementsByTagName('th').style.background = "red";

function EnteredAmounts() {
    amt_enter = parseInt(prompt("Enter amount You pay: "))
    phil = amt_enter
    if (amt_enter <= total) {
        total = total - amt_enter;
        document.getElementById("Ent_Amounts").innerHTML = amt_enter;
        document.getElementById("tot_Amounts").innerHTML = total;
        document.getElementById("Balance").innerHTML = total;

        if (amt_enter >= 5000) {
            if (amt_enter >= (php5000 * 5000) && php5000 > 0) {
                amt_enter = amt_enter - (php5000 * 5000)
                p1 = php5000
                php5000 = 0
            } else {
                if (php5000 > 0) {
                    p1 = Math.floor(amt_enter / 5000)
                    php5000 = php5000 - Math.floor(amt_enter / 5000)
                    amt_enter = amt_enter - (Math.floor(amt_enter / 5000) * 5000)

                }
            }
            document.getElementById("php_fivethousand").innerHTML = php5000;
        }

        if (amt_enter >= 1000) {
            if (amt_enter >= (php1000 * 1000) && php1000 > 0) {
                amt_enter = amt_enter - (php1000 * 1000)
                p2 = php1000
                php1000 = 0
            } else {
                if (php1000 > 0) {
                    p2 = Math.floor(amt_enter / 1000)
                    php1000 = php1000 - Math.floor(amt_enter / 1000)
                    amt_enter = amt_enter - (Math.floor(amt_enter / 1000) * 1000)

                }
            }
            document.getElementById("php_onethousand").innerHTML = php1000;
        }

        if (amt_enter >= 500) {
            if (amt_enter >= (php500 * 500) && php500 > 0) {
                amt_enter = amt_enter - (php500 * 500)
                p3 = php500
                php500 = 0
            } else {
                if (php500 > 0) {
                    p3 = Math.floor(amt_enter / 500)
                    php500 = php500 - Math.floor(amt_enter / 500)
                    amt_enter = amt_enter - (Math.floor(amt_enter / 500) * 500)

                }
            }
            document.getElementById("php_fivehundred").innerHTML = php500;
        }
        if (amt_enter >= 100) {
            if (amt_enter >= (php100 * 100) && php100 > 0) {
                amt_enter = amt_enter - (php100 * 100)
                p4 = php100
                php100 = 0
            } else {
                if (php100 > 0) {
                    p4 = Math.floor(amt_enter / 100)
                    php100 = php100 - Math.floor(amt_enter / 100)
                    amt_enter = amt_enter - (Math.floor(amt_enter / 100) * 100)

                }
            }
            document.getElementById("php_hundred").innerHTML = php100;
        }
        if (amt_enter >= 50) {
            if (amt_enter >= (php50 * 50) && php50 > 0) {
                amt_enter = amt_enter - (php50 * 50)
                p5 = php50
                php50 = 0
            } else {
                if (php50 > 0) {
                    p5 = Math.floor(amt_enter / 50)
                    php50 = php50 - Math.floor(amt_enter / 50)
                    amt_enter = amt_enter - (Math.floor(amt_enter / 50) * 50)

                }
            }
            document.getElementById("php_fifty").innerHTML = php50;
        }
        if (amt_enter >= 20) {
            if (amt_enter >= (php20 * 20) && php20 > 0) {
                amt_enter = amt_enter - (php20 * 20)
                p6 = php20
                php20 = 0
            } else {
                if (php20 > 0) {
                    p6 = Math.floor(amt_enter / 20)
                    php20 = php20 - Math.floor(amt_enter / 20)
                    amt_enter = amt_enter - (Math.floor(amt_enter / 20) * 20)

                }
            }
            document.getElementById("twenty").innerHTML = php20;
        }
        if (amt_enter >= 10) {
            if (amt_enter >= (php10 * 10) && php10 > 0) {
                amt_enter = amt_enter - (php10 * 10)
                p7 = php10
                php10 = 0
            } else {
                if (php10 > 0) {
                    p7 = Math.floor(amt_enter / 10)
                    php10 = php10 - Math.floor(amt_enter / 10)
                    amt_enter = amt_enter - (Math.floor(amt_enter / 10) * 10)

                }
            }
            document.getElementById("ten").innerHTML = php10;
        }
        if (amt_enter >= 5) {
            if (amt_enter >= (php5 * 5) && php5 > 0) {
                amt_enter = amt_enter - (php5 * 5)
                p8 = php5
                php5 = 0
            } else {
                if (php5 > 0) {
                    p8 = Math.floor(amt_enter / 5)
                    php5 = php5 - Math.floor(amt_enter / 5)
                    amt_enter = amt_enter - (Math.floor(amt_enter / 5) * 5)

                }
            }
            document.getElementById("five").innerHTML = php5;
        }
        if (amt_enter >= 2) {
            if (amt_enter >= (php2 * 2) && php2 > 0) {
                amt_enter = amt_enter - (php2 * 2)
                p9 = php2
                php2 = 0
            } else {
                if (php2 > 0) {
                    p9 = Math.floor(amt_enter / 2)
                    php2 = php2 - Math.floor(amt_enter / 2)
                    amt_enter = amt_enter - (Math.floor(amt_enter / 2) * 2)

                }
            }
            document.getElementById("two").innerHTML = php2;
        }
        if (amt_enter >= 1) {
            if (amt_enter >= (php1 * 1) && php1 > 0) {
                amt_enter = amt_enter - (php1 * 1)
                p10 = php1
                php1 = 0
            } else {
                if (php1 > 0) {
                    p10 = Math.floor(amt_enter / 1)
                    php1 = php1 - Math.floor(amt_enter / 1)
                    amt_enter = amt_enter - (Math.floor(amt_enter / 1) * 1)

                }
            }
            document.getElementById("one").innerHTML = php1;
        }
        document.getElementById("zero").innerHTML = ""
    } else {
        document.getElementById("Ent_Amounts").innerHTML = "We have insufficient Balance"
        document.getElementById("zero").innerHTML = ""
        document.getElementsByClassName("btn-2")[0].innerHTML = ""
    }
}



function GeneratingSlips() {
    var slip_tot = phil
    var obj = {
        "Total Amount:": slip_tot,
        "Five thousand Notes:": p1,
        "One thousand Notes:": p2,
        "Five Hundred Notes:": p3,
        "One Hundred Notes:": p4,
        "Fifty Notes:": p5,
        "Twenty Notes:": p6,
        "Ten Notes:": p7,
        "Five Coins:": p8,
        "Two Coins:": p9,
        "One Coins:": p10,
    }

    document.getElementById("zero").innerHTML += "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;" +
        "Thank You<br>"
    for (var i in obj) {
        if (obj[i] > 0) {
            document.getElementById("zero").innerHTML += (i + "&emsp;" + "&emsp;")
            document.getElementById("zero").innerHTML += ("\t\t" + obj[i] + "<br>")
        }

    }
    p1 = 0
    p2 = 0
    p3 = 0
    p4 = 0
    p5 = 0
    p6 = 0
    p7 = 0
    p8 = 0
    p9 = 0
    p10 = 0
}