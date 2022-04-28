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

    /*6. kysymykset*/

    var p = document.getElementById("p");
    var q = document.getElementById("q");
    var r = document.getElementById("r");


    /*6. Poista kaikki painikkeet käytöstä */

    document.getElementById("p").disabled = true;
    document.getElementById("q").disabled = true;
    document.getElementById("r").disabled = true;

    /*7. kysymykset*/

    var s = document.getElementById("s");
    var t = document.getElementById("t");
    var u = document.getElementById("u");


    /*7. Poista kaikki painikkeet käytöstä */

    document.getElementById("s").disabled = true;
    document.getElementById("t").disabled = true;
    document.getElementById("u").disabled = true;

    /*8. kysymykset*/

    var v = document.getElementById("v");
    var x = document.getElementById("x");
    var y = document.getElementById("y");


    /*8. Poista kaikki painikkeet käytöstä */

    document.getElementById("v").disabled = true;
    document.getElementById("x").disabled = true;
    document.getElementById("y").disabled = true;

    /*9. kysymykset*/

    var z = document.getElementById("z");
    var ä = document.getElementById("ä");
    var ö = document.getElementById("ö");


    /*9. Poista kaikki painikkeet käytöstä */

    document.getElementById("z").disabled = true;
    document.getElementById("ä").disabled = true;
    document.getElementById("ö").disabled = true;

    /*10. kysymykset*/

    var å = document.getElementById("å");
    var w = document.getElementById("w");
    var wå = document.getElementById("wå");


    /*9. Poista kaikki painikkeet käytöstä */

    document.getElementById("å").disabled = true;
    document.getElementById("w").disabled = true;
    document.getElementById("wå").disabled = true;

    /* laskuri */

    var score = 0;

    // Valinnat

    if (a.checked == true) {
        document.getElementById("football").innerHTML = a.value
        score += 2
       

    } else if (b.checked == true) {
        document.getElementById("football").innerHTML = b.value
        document.getElementById("laskuri").innerHTML = ""

    } else if (c.checked == true) {
        document.getElementById("football").innerHTML = c.value
        document.getElementById("laskuri").innerHTML = ""

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

    // Valinnat

    if (p.checked == true) {
        document.getElementById("american").innerHTML = p.value
        score += 2
       

    } else if (q.checked == true)
        document.getElementById("american").innerHTML = q.value

    else if (r.checked == true) {
        document.getElementById("american").innerHTML = r.value


    } else
        document.getElementById("american_error").innerHTML = "Vastaukset puuttuivat"

    // Valinnat

    if (s.checked == true) {
        document.getElementById("tennis").innerHTML = s.value
    } else if (t.checked == true)
        document.getElementById("tennis").innerHTML = t.value

    else if (u.checked == true) {
        document.getElementById("tennis").innerHTML = u.value
        score += 2
       

    } else
        document.getElementById("tennis_error").innerHTML = "Vastaukset puuttuivat"

    // Valinnat

    if (v.checked == true) {
        document.getElementById("badminton").innerHTML = v.value
    } else if (x.checked == true)
        document.getElementById("badminton").innerHTML = x.value

    else if (y.checked == true) {
        document.getElementById("badminton").innerHTML = y.value
        score += 2
       

    } else
        document.getElementById("badminton_error").innerHTML = "Vastaukset puuttuivat"

    // Valinnat

    if (z.checked == true) {
        document.getElementById("race").innerHTML = z.value
        score += 2
       
    } else if (ä.checked == true)
        document.getElementById("race").innerHTML = ä.value

    else if (ö.checked == true) {
        document.getElementById("race").innerHTML = ö.value

    } else
        document.getElementById("race_error").innerHTML = "Vastaukset puuttuivat"

    // Valinnat


    if (w.checked == true) {
        document.getElementById("fitness").innerHTML = w.value
        score += 2

    } else if (å.checked == true)
        document.getElementById("fitness").innerHTML = å.value

    else if (wå.checked == true) {
        document.getElementById("fitness").innerHTML = wå.value


    } else
        document.getElementById("fitness_error").innerHTML = "Vastaukset puuttuivat"
        swal("1-2 luokan tietovisan pisteet", "Sait pisteinä" + " " + score + " " + "/" + " " + "20p.")
}



function uusinta02() {

    // Vastauksien tyhjennys
    document.getElementById("reset").reset()
    document.getElementById("football").innerHTML = ""
    document.getElementById("basket").innerHTML = ""
    document.getElementById("volleyball").innerHTML = ""
    document.getElementById("icehockey").innerHTML = ""
    document.getElementById("baseball").innerHTML = ""
    document.getElementById("american").innerHTML = ""
    document.getElementById("tennis").innerHTML = ""
    document.getElementById("badminton").innerHTML = ""
    document.getElementById("race").innerHTML = ""
    document.getElementById("fitness").innerHTML = ""

    // Virheiden tyhennys
    document.getElementById("football_error").innerHTML = ""
    document.getElementById("basket_error").innerHTML = ""
    document.getElementById("volleyball_error").innerHTML = ""
    document.getElementById("icehockey_error").innerHTML = ""
    document.getElementById("baseball_error").innerHTML = ""
    document.getElementById("american_error").innerHTML = ""
    document.getElementById("tennis_error").innerHTML = ""
    document.getElementById("badminton_error").innerHTML = ""
    document.getElementById("race_error").innerHTML = ""
    document.getElementById("fitness_error").innerHTML = ""

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

    document.getElementById("p").disabled = false;
    document.getElementById("q").disabled = false;
    document.getElementById("r").disabled = false;

    document.getElementById("s").disabled = false;
    document.getElementById("t").disabled = false;
    document.getElementById("u").disabled = false;

    document.getElementById("v").disabled = false;
    document.getElementById("x").disabled = false;
    document.getElementById("y").disabled = false;

    document.getElementById("z").disabled = false;
    document.getElementById("ä").disabled = false;
    document.getElementById("ö").disabled = false;

    document.getElementById("å").disabled = false;
    document.getElementById("w").disabled = false
    document.getElementById("wå").disabled = false;

}