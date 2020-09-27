// rules source : wikipedia.org

import readlineSync from 'readline-sync'

const freRULES = `Le but du jeu est d'aligner une suite de 4 pions de même couleur sur une grille comptant 6 rangées et 7 colonnes. 
Chaque joueur dispose de 21 pions d'une couleur (par convention, en général jaune ou rouge). 
Tour à tour, les deux joueurs placent un pion dans la colonne de leur choix, le pion coulisse alors jusqu'à la position la plus basse possible dans la dite colonne à la suite de quoi c'est à l'adversaire de jouer. 
Le vainqueur est le joueur qui réalise le premier un alignement (horizontal, vertical ou diagonal) consécutif d'au moins quatre pions de sa couleur. 
Si, alors que toutes les cases de la grille de jeu sont remplies, aucun des deux joueurs n'a réalisé un tel alignement, la partie est déclarée nulle.`

const gerRULES = `Das Spiel wird auf einem senkrecht stehenden hohlen Spielbrett gespielt, in das die Spieler abwechselnd ihre Spielsteine fallen lassen. 
Das Spielbrett besteht aus sieben Spalten (senkrecht) und sechs Reihen (waagerecht). 
Jeder Spieler besitzt 21 gleichfarbige Spielsteine. Wenn ein Spieler einen Spielstein in eine Spalte fallen lässt, besetzt dieser den untersten freien Platz der Spalte. 
Gewinner ist der Spieler, der es als erster schafft, vier oder mehr seiner Spielsteine waagerecht, senkrecht oder diagonal in eine Linie zu bringen. Das Spiel endet unentschieden, wenn das Spielbrett komplett gefüllt ist, ohne dass ein Spieler eine Viererlinie gebildet hat.`

const spaRULES = `El objetivo de Conecta 4 es alinear cuatro fichas sobre un tablero formado por seis filas y siete columnas. 
Cada jugador dispone de 21 fichas de un color (por lo general, rojas o amarillas). 
Por turnos, los jugadores deben introducir una ficha en la columna que prefieran (siempre que no esté completa) y ésta caerá a la posición más baja. 
Gana la partida el primero que consiga alinear cuatro fichas consecutivas de un mismo color en horizontal, vertical o diagonal. 
Si todas las columnas están llenas pero nadie ha hecho una fila válida, hay empate`

const engRULES = `The aim for both players is to make a straight line of four own pieces; the line can be vertical, horizontal or diagonal.
This game is played on a vertical board with 42 windows distributed in 6 rows and 7 columns.
Before starting, players decide randomly which of them will be the beginner; moves are made alternatively, one by turn.
Moves entails in placing new pieces on the board; pieces slide downwards from upper holes, falling down to the last row or piling up on the last piece introduced in the same column. 
So, in every turn the introduced piece may be placed at most on seven different squares.
The winner is the first player who gets a straight line made with four own pieces and no gaps between them.`

const playRULES = () => {
    return null
}

export default playRules
