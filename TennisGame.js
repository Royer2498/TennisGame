var TennisGame = function(player1Name, player2Name) {
    this.player1Point = 0;
    this.player2Point = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame.prototype.getScore = function() {
    let score = "";
    if (this.isAllPoint()) {
        score = this.getThePointInLetters(this.player1Point) + "-All";
        return score;
    }
    if (this.isDeuce()){
        score = "Deuce";
        return score;
    }
    if( this.player1Point < 4 && this.player2Point<4){
        score = this.getThePointInLetters(this.player1Point) + "-" + this.getThePointInLetters(this.player2Point);
        return score;
    }
    if(this.isThereWinner()){
        score = "Win for "+ this.getTheWinner();
        return score;
    }

    if (this.player1Point > this.player2Point && this.player2Point >= 3) {
        score = "Advantage player1";
    }

    if (this.player2Point > this.player1Point && this.player1Point >= 3) {
        score = "Advantage player2";
    }

    return score;
};

TennisGame.prototype.getThePointInLetters = function(point){
    let pointInLetters = "";
    if(this.isLovePoint(point))
        pointInLetters = "Love";
    if(this.isFifteenPoint(point))
        pointInLetters = "Fifteen";
    if(this.isThirtyPoint(point))
        pointInLetters = "Thirty";
    if(this.isFortyPoint(point))
        pointInLetters = "Forty";
    return pointInLetters;
};

TennisGame.prototype.isThereWinner = function(){
    return ((this.player1Point - this.player2Point) >= 2) || ((this.player2Point - this.player1Point) >= 2);
};

TennisGame.prototype.getTheWinner = function(){
    if(this.player1Point > this.player2Point)
        return "player1";
    else
        return "player2";
};

TennisGame.prototype.isDeuce = function() {
    return this.player1Point === this.player2Point && this.player1Point > 2;
};

TennisGame.prototype.isAllPoint = function () {
    return this.player1Point === this.player2Point && this.player1Point < 3;
};

TennisGame.prototype.isLovePoint = function (point) {
    return point === 0;
};

TennisGame.prototype.isFifteenPoint = function (point) {
    return point === 1;
};

TennisGame.prototype.isThirtyPoint = function (point) {
    return point === 2;
};

TennisGame.prototype.isFortyPoint = function (point) {
    return point === 3;
};

TennisGame.prototype.P1Score = function() {
    this.player1Point++;
};

TennisGame.prototype.P2Score = function() {
    this.player2Point++;
};

TennisGame.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame;
}
