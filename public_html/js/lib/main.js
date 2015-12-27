function showMainScreen() {
  $page.html(mainTmpl());

  $page.find('.js-scoreboard').on('click', showScoreboardScreen);
  $page.find('.js-start-game').on('click', showGameScreen);
}

function hideMainScreen() {
  $page.find('.js-scoreboard').off('click', showScoreboardScreen);
  $page.find('.js-start-game').off('click', showGameScreen);
}

function showScoreboardScreen() {
  hideMainScreen();
}

function hideScoreboardScreen() {}