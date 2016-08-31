/*
* zadanie: napisać grę kółko i krzyżyk. Można dostarczyć dokument html
*
* poruszane zagadnienia ze slajdów:
* funkcje, tablice, pętle, Document Object Model, zdarzenia
*/

// Tablica 2 wymiarowa reprezentująca planszę do gry
var result = new Array(new Array(3),new Array(3),new Array(3));

// Zmiana przechowująca oznaczenie gracza, który ma wykonać ruch (rozpoczynamy od kółka)
var player = 'O';

function start() {

}

// Sprawdzenie czy wszystkie pola są już zajęte, jeżeli tak to remin.
// Wcześniej sprawdzaliśmy czy ktoś wygrał, więc nie potrzeba nam dodatkowego sprawdzenia
// True oznacza, że wszystkie pola są zajęte (więc remis), false że są jeszcze wolne pola
function draw() {

}

// Sprawdzenie czy gra została zakończona zwycieństwem zadanego gracza (wywoływane po ruchu gracza)
// True oznacza że zadany gracz wygrał, false że gra jeszcze jest nie rozstrzygnięta lub jest remis
function win(player) {

}