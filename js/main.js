(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function(){

    // 書き方❸ :配列を使った書き方
    // var results = ['大吉','中吉','小吉','末吉','凶'];

    // ===================================

    // その他：確率を自分で変更したい場合
    var n = Math.random();
    if ( n < 0.05 ) {
      this.textContent = '大吉'; // 5%
    } else if (n < 0.2 ) {
      this.textContent = '中吉'; // 15%
    } else {
      this.textContent = '凶'; // 80%
    }


    // ===================================

    // この辺りでnを定義

    // var n = Math.floor(Math.random() * results.length); //❸配列を使った書き方
    // "results.length" 元々は選択肢の要素の数(3)だったが、こうすることによって、要素の数を増やす時に変更箇所が少なくて済む
    // this.textContent = results[n]; //❸配列を使った書き方

    // ===================================

    // 書き方❶

    // if ( n === 0 ){
    //   this.textContent = '大吉';
    // } else if ( n === 1 ) {
    //   this.textContent = '中吉';
    // } else if ( n === 2 ) {
    //   this.textContent = '小吉';
    // }

    // ===================================

    // 書き方❷

    // switch (n) {
    //   case 0:
    //   this.textContent = '大吉';
    //   break;
    //   case 1:
    //   this.textContent = '中吉';
    //   break;
    //   case 2:
    //   this.textContent = '小吉';
    //   break;
    // }

    // ===================================

  });



  btn.addEventListener('mousedown', function(){
    this.className = 'pushed';
  });

  btn.addEventListener('mouseup', function(){
    this.className = '';
  });
})();
