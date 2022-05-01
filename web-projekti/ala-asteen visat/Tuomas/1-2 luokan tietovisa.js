function tarkista01() {

    /*1. kysymykset*/

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");

    /*1. Poista kaikki painikkeet käytöstä */

    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;

    /*2. kysymykset*/

    var d = document.getElementById("d");
    var e = document.getElementById("e");
    var f = document.getElementById("f");

    /*2. Poista kaikki painikkeet käytöstä */

    document.getElementById("d").disabled = true;
    document.getElementById("e").disabled = true;
    document.getElementById("f").disabled = true;


    /*3. kysymykset*/

    var g = document.getElementById("g");
    var h = document.getElementById("h");
    var i = document.getElementById("i");

    /*3. Poista kaikki painikkeet käytöstä */

    document.getElementById("g").disabled = true;
    document.getElementById("h").disabled = true;
    document.getElementById("i").disabled = true;

    /*4. kysymykset*/

    var j = document.getElementById("j");
    var k = document.getElementById("k");
    var l = document.getElementById("l");

    /*4. Poista kaikki painikkeet käytöstä */

    document.getElementById("j").disabled = true;
    document.getElementById("k").disabled = true;
    document.getElementById("l").disabled = true;

    /*5. kysymykset*/

    var m = document.getElementById("m");
    var n = document.getElementById("n");
    var o = document.getElementById("o");

    /*5. Poista kaikki painikkeet käytöstä */

    document.getElementById("m").disabled = true;
    document.getElementById("n").disabled = true;
    document.getElementById("o").disabled = true;

    /* laskuri */

    var score = 0;

    // Valinnat

    if (a.checked == true) {
        document.getElementById("football").innerHTML = a.value
        score += 2
       

    } else if (b.checked == true) {
        document.getElementById("football").innerHTML = b.value

    } else if (c.checked == true) {
        document.getElementById("football").innerHTML = c.value

    } else
        document.getElementById("football_error").innerHTML = "Vastaukset puuttuivat"

    // Valinnat

    if (d.checked == true) {
        document.getElementById("basket").innerHTML = d.value
    } else if (e.checked == true) {
        document.getElementById("basket").innerHTML = e.value
        score += 2
       
    } else if (f.checked == true)
        document.getElementById("basket").innerHTML = f.value

    else
        document.getElementById("basket_error").innerHTML = "Vastaukset puuttuivat"

    // Valinnat

    if (g.checked == true) {
        document.getElementById("volleyball").innerHTML = g.value
        score += 2
       
    } else if (h.checked == true)
        document.getElementById("volleyball").innerHTML = h.value

    else if (i.checked == true)
        document.getElementById("volleyball").innerHTML = i.value

    else
        document.getElementById("volleyball_error").innerHTML = "Vastaukset puuttuivat"

    // Valinnat

    if (j.checked == true) {
        document.getElementById("icehockey").innerHTML = j.value
    } else if (k.checked == true) {
        document.getElementById("icehockey").innerHTML = k.value
        score += 2
       
    } else if (l.checked == true)
        document.getElementById("icehockey").innerHTML = l.value

    else
        document.getElementById("icehockey_error").innerHTML = "Vastaukset puuttuivat"

    // Valinnat

    if (m.checked == true) {
        document.getElementById("baseball").innerHTML = m.value
    } else if (n.checked == true)
        document.getElementById("baseball").innerHTML = n.value

    else if (o.checked == true) {
        document.getElementById("baseball").innerHTML = o.value
        score += 2
       

    } else
        document.getElementById("baseball_error").innerHTML = "Vastaukset puuttuivat"
        swal("1-2 luokan tietovisan pisteet", "Sait pisteinä" + " " + score + " " + "/" + " " + "10p.")

}



function uusinta02() {

    // Vastauksien tyhjennys
    document.getElementById("reset").reset()
    document.getElementById("football").innerHTML = ""
    document.getElementById("basket").innerHTML = ""
    document.getElementById("volleyball").innerHTML = ""
    document.getElementById("icehockey").innerHTML = ""
    document.getElementById("baseball").innerHTML = ""

    // Virheiden tyhennys
    document.getElementById("football_error").innerHTML = ""
    document.getElementById("basket_error").innerHTML = ""
    document.getElementById("volleyball_error").innerHTML = ""
    document.getElementById("icehockey_error").innerHTML = ""
    document.getElementById("baseball_error").innerHTML = ""

    // Lukittuneiden painikkeiden tyhjennys

    document.getElementById("a").disabled = false;
    document.getElementById("b").disabled = false;
    document.getElementById("c").disabled = false;

    document.getElementById("d").disabled = false;
    document.getElementById("e").disabled = false;
    document.getElementById("f").disabled = false;

    document.getElementById("g").disabled = false;
    document.getElementById("h").disabled = false;
    document.getElementById("i").disabled = false;

    document.getElementById("j").disabled = false;
    document.getElementById("k").disabled = false;
    document.getElementById("l").disabled = false;

    document.getElementById("m").disabled = false;
    document.getElementById("n").disabled = false;
    document.getElementById("o").disabled = false;

}