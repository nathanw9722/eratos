/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
! function(a) {
    "use strict";
    a(document).on("click", "a.page-scroll", function(e) {
        var l = a(this);
        a("html, body").stop().animate({
            scrollTop: a(l.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), e.preventDefault()
    }), a("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }), a(".navbar-collapse ul li a").click(function() {
        a(".navbar-toggle:visible").click()
    }), a("#mainNav").affix({
        offset: {
            top: 100
        }
    }), window.sr = ScrollReveal(), sr.reveal(".sr-icons", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 200), sr.reveal(".sr-button", {
        duration: 1e3,
        delay: 200
    }), sr.reveal(".sr-contact", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 300)
}(jQuery);

$(function(){
  var ttext;
  $('header').hover(function(){
    ttext = $(this).attr('title');
    $(this).removeAttr('title');
  },
  function(){
    $(this).attr('title', ttext);
  });
});

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'eu-central-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-central-1:750e4d83-1b61-482c-9257-c84c577c10c9',
});

LPAWS.sendToTopic = function() {
            var sns = new AWS.SNS();
            var params = {
                //Message: 'Hello topic', /* required */
                Message: document.querySelector('#input-msg').value,
                Subject: 'Browser SNS publish - contact form',
                TopicArn: 'arn:aws:sns:eu-central-1:322447592164:email_address'
            };
            sns.publish(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else     console.log(data);           // successful response
            });
        };
