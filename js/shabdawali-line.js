
$(document).ready(function () {
  let el = document.getElementById("shabdawali");
  let mylines = [
    'I\'m a Javascript Developer',
    'I have experience with AngularJS, Angular 6, Node.js, Ruby on Rails, PHP',
    'Few things which are on priority for me : security, performance, response, usability, and improvement',
    'I prefer to work on Mac OS',
    'I like contributing to open source projects',
    'I love writing algorithms, regular expressions and JS code',
    'I\'ve worked on many tools and technologies. And the tool which let me focus on logic more than configuration is my preferable.',
    'I\'m less talkative but loves talking',
    'Making a giant library of books is on my wishlist... no IT related book.',
    'I wanted to be a rocket scientist',
    'I am Ashish Patel.'
  ];

  var first = shabdawali(el,{
    lines : mylines,
    onCharChange : function(ch){
        $("#shabdawali").text(ch);
    },
    speed : 500,
    nextWord : function(w){
        //console.log(w);
    },
    typoEffect : true
  });

  first.start();
});
