var TennisGame = function(player1Name, player2Name) {
    this.player1Point = 0;
    this.player2Point = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame.prototype.getScore = function() {
    var score = "";

    if (this.player1Point === this.player2Point && this.player1Point < 3) {
        if (this.isLove(this.player1Point))
            score = "Love";
        if (this.isFifteen(this.player1Point))
            score = "Fifteen";
        if (this.isThirty(this.player1Point))
            score = "Thirty";
        score += "-All";
    }
    if (this.player1Point === this.player2Point && this.player1Point > 2)
        score = "Deuce";

    if (this.player1Point > 0 && this.player2Point === 0) {
        if (this.isFifteen(this.player1Point))
            this.P1res = "Fifteen";
        if (this.isThirty(this.player1Point))
            this.P1res = "Thirty";
        if (this.isForty(this.player1Point))
            this.P1res = "Forty";

        this.P2res = "Love";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.player2Point > 0 && this.player1Point === 0) {
        if (this.isFifteen(this.player2Point))
            this.P2res = "Fifteen";
        if (this.isThirty(this.player2Point))
            this.P2res = "Thirty";
        if (this.isForty(this.player2Point))
            this.P2res = "Forty";

        this.P1res = "Love";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.player1Point > this.player2Point && this.player1Point < 4) {
        if (this.isThirty(this.player1Point))
            this.P1res = "Thirty";
        if (this.isForty(this.player1Point))
            this.P1res = "Forty";
        if (this.isFifteen(this.player2Point))
            this.P2res = "Fifteen";
        if (this.isThirty(this.player2Point))
            this.P2res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.player2Point > this.player1Point && this.player2Point < 4) {
        if (this.isThirty(this.player2Point))
            this.P2res = "Thirty";
        if (this.isForty(this.player2Point))
            this.P2res = "Forty";
        if (this.isFifteen(this.player1Point))
            this.P1res = "Fifteen";
        if (this.isThirty(this.player1Point))
            this.P1res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.player1Point > this.player2Point && this.player2Point >= 3) {
        score = "Advantage player1";
    }

    if (this.player2Point > this.player1Point && this.player1Point >= 3) {
        score = "Advantage player2";
    }

    if (this.player1Point >= 4 && this.player2Point >= 0 && (this.player1Point - this.player2Point) >= 2) {
        score = "Win for player1";
    }
    if (this.player2Point >= 4 && this.player1Point >= 0 && (this.player2Point - this.player1Point) >= 2) {
        score = "Win for player2";
    }
    return score;
};

TennisGame.prototype.isLove = function (point) {
    return point === 0;
};

TennisGame.prototype.isFifteen = function (point) {
    return point === 1;
};

TennisGame.prototype.isThirty = function (point) {
    return point === 2;
};

TennisGame.prototype.isForty = function (point) {
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
