let count = 0;
function increase_count() {
    count ++;
    display_count();
    check_count_value();
}
function display_count() {
    document.getElementById('count_display').innerHTML = count;
}
function check_count_value() {
    if (count == 10) {
        alert("You got 10 followers.");
    }
    if (count == 20) {
        alert("You got 20 followers.");
    }
}
