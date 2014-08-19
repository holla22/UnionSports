/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        var loader = '<img src="images/ajax-loader.gif" class="loader" width="50" height="50">';
        $('#main-tabs').append(loader);

          jQuery.ajax({

                          url: 'http://www.unionsportsmag.co.za/api/?q=latest&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:120000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {
                            //first clear the current data
                            $('#main-tabs').empty();
                            $('.pages').remove();

                            $.each(data, function(i,item){
                                //alert(item.title);
                                 //console.log(item);
                                if(item.category == "In Motion") {
                                  var catstyle = '<div class="category red">'+ item.category +'</div>';
                                }else if(item.category == "Guest Column") {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }else if(item.category == "The 3rd Degree") {
                                  var catstyle = '<div class="category blue degree">'+ item.category +'</div>';
                                }else {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }

                                var news =  '<li><div class="image-cat-container"><a href="#page'+ i +'"><img src="'+ item.thumnail +'" class="image-index" ><div class="link-container"> '+ catstyle +'</div></a></div><div class="arrow-go-jump"><a href="#page'+ i +'"><img src="images/jump-to-page-arrow.png" class="arrow-jump"></a></div><div class="title-container"><a href="#page'+ i +'">'+ item.title +'</a></div><p class="date">'+ item.date +'</p><div class="excerpt">'+ item.excerpt +'</div></li>';
                                //alert(news);
                              var content = '<div data-role="page" id="page'+ i +'" class="pages"><div data-role="header"><h1>'+ item.title +'</h1></div><div data-role="content" class="single-content"><h1 class="single-heading">'+ item.title +'</h1>'+ item.content +'</div><div data-role="footer"><img src="images/small-logo.png" class="footer-logo" style="width:50px; float:left;position: relative;left: 20px;top: 4px;"><h3>Union Sports Magazine</h3></div></div>';
                            $('#main-tabs').append(news);
                            $('#page').after(content);

                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });

  $('.headlines').on('tap', function(e){

    e.preventDefault();



  if (!$('.headli').hasClass('current')) {

    $('.homeli').removeClass('current');
    $('.degreeli').removeClass('current');
    $('.headli').addClass('current');
    $('.headli').css({height:58});

  }

    //first clear the current data
    $('#main-tabs').empty();
    $('.pages').remove();

        var loader = '<img src="images/ajax-loader.gif" class="loader" width="50" height="50">';
        $('#main-tabs').append(loader);



    jQuery.ajax({

                          url: 'http://www.unionsportsmag.co.za/api/?q=headline&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:120000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {

                            //first clear the current data
                            $('#main-tabs').empty();
                            $('.pages').remove();

                            $.each(data, function(i,item){
                                //alert(item.title);

                                if(item.category == "In Motion") {
                                  var catstyle = '<div class="category red">'+ item.category +'</div>';
                                }else if(item.category == "Guest Column") {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }else if(item.category == "The 3rd Degree") {
                                  var catstyle = '<div class="category blue degree">'+ item.category +'</div>';
                                }else {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }

                                 var news =  '<li><div class="image-cat-container"><a href="#page'+ i +'"><img src="'+ item.thumnail +'" class="image-index" ><div class="link-container"> '+ catstyle +'</div></a></div><div class="arrow-go-jump"><a href="#page'+ i +'"><img src="images/jump-to-page-arrow.png" class="arrow-jump"></a></div><div class="title-container"><a href="#page'+ i +'">'+ item.title +'</a></div><p class="date">'+ item.date +'</p><div class="excerpt">'+ item.excerpt +'</div></li>';
                                //alert(news);
                              var content = '<div data-role="page" id="page'+ i +'" class="pages"><div data-role="header"><h1>'+ item.title +'</h1></div><div data-role="content" class="single-content"><h1 class="single-heading">'+ item.title +'</h1>'+ item.content +'</div><div data-role="footer"><img src="images/small-logo.png" class="footer-logo" style="width:50px; float:left;position: relative;left: 20px;top: 4px;"><h3>Union Sports Magazine</h3></div></div>';
                            $('#main-tabs').append(news);
                            $('#page').after(content);

                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });

  });

/* 3rd Degree*/
$('.3rddgree').on('tap', function(e){

    e.preventDefault();

    if (!$('.degreeli').hasClass('current')) {

    $('.homeli').removeClass('current');
    $('.headli').removeClass('current');
    $('.degreeli').addClass('current');
    $('.degreeli').css({height:58});


  }

    //first clear the current data
    $('#main-tabs').empty();
    $('.pages').remove();

        var loader = '<img src="images/ajax-loader.gif" class="loader" width="50" height="50">';
        $('#main-tabs').append(loader);

    jQuery.ajax({

                          url: 'http://www.unionsportsmag.co.za/api/?q=degree&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:120000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {
                            //first clear the current data
                            $('#main-tabs').empty();
                            $('.pages').remove();

                            $.each(data, function(i,item){
                                //alert(item.title);

                                if(item.category == "In Motion") {
                                  var catstyle = '<div class="category red">'+ item.category +'</div>';
                                }else if(item.category == "Guest Column") {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }else if(item.category == "The 3rd Degree") {
                                  var catstyle = '<div class="category blue degree">'+ item.category +'</div>';
                                }else {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }

                                 var news =  '<li><div class="image-cat-container"><a href="#page'+ i +'"><img src="'+ item.thumnail +'" class="image-index" ><div class="link-container"> '+ catstyle +'</div></a></div><div class="arrow-go-jump"><a href="#page'+ i +'"><img src="images/jump-to-page-arrow.png" class="arrow-jump"></a></div><div class="title-container"><a href="#page'+ i +'">'+ item.title +'</a></div><p class="date">'+ item.date +'</p><div class="excerpt">'+ item.excerpt +'</div></li>';
                                //alert(news);
                              var content = '<div data-role="page" id="page'+ i +'" class="pages"><div data-role="header"><h1>'+ item.title +'</h1></div><div data-role="content" class="single-content"><h1 class="single-heading">'+ item.title +'</h1>'+ item.content +'</div><div data-role="footer"><img src="images/small-logo.png" class="footer-logo" style="width:50px; float:left;position: relative;left: 20px;top: 4px;"><h3>Union Sports Magazine</h3></div></div>';
                            $('#main-tabs').append(news);
                            $('#page').after(content);

                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });

  });


        $('.latest').on('tap', function(e){

            e.preventDefault();

          if (!$('.homeli').hasClass('current')) {


            $('.headli').removeClass('current');
            $('.degreeli').removeClass('current');
            $('.homeli').addClass('current');

          }

            //first clear the current data
            $('#main-tabs').empty();
            $('.pages').remove();

            var loader = '<img src="images/ajax-loader.gif" class="loader" width="50" height="50">';
            $('#main-tabs').append(loader);

        jQuery.ajax({

                          url: 'http://www.unionsportsmag.co.za/api/?q=latest&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:120000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {
                            //first clear the current data
                            $('#main-tabs').empty();
                            $('.pages').remove();

                            $.each(data, function(i,item){
                                //alert(item.title);
                                 //console.log(item);
                                if(item.category == "In Motion") {
                                  var catstyle = '<div class="category red">'+ item.category +'</div>';
                                }else if(item.category == "Guest Column") {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }else if(item.category == "The 3rd Degree") {
                                  var catstyle = '<div class="category blue degree">'+ item.category +'</div>';
                                }else {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }

                                 var news =  '<li><div class="image-cat-container"><a href="#page'+ i +'"><img src="'+ item.thumnail +'" class="image-index" ><div class="link-container"> '+ catstyle +'</div></a></div><div class="arrow-go-jump"><a href="#page'+ i +'"><img src="images/jump-to-page-arrow.png" class="arrow-jump"></a></div><div class="title-container"><a href="#page'+ i +'">'+ item.title +'</a></div><p class="date">'+ item.date +'</p><div class="excerpt">'+ item.excerpt +'</div></li>';
                                //alert(news);
                              var content = '<div data-role="page" id="page'+ i +'" class="pages"><div data-role="header"><h1>'+ item.title +'</h1></div><div data-role="content" class="single-content"><h1 class="single-heading">'+ item.title +'</h1>'+ item.content +'</div><div data-role="footer"><img src="images/small-logo.png" class="footer-logo" style="width:50px; float:left;position: relative;left: 20px;top: 4px;"><h3>Union Sports Magazine</h3></div></div>';
                            $('#main-tabs').append(news);
                            $('#page').after(content);

                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        var pushNotification = window.plugins.pushNotification;
        pushNotification.register(app.successHandler, app.errorHandler,{"senderID":"447946943373","ecb":"app.onNotificationGCM"});
    },
    // result contains any message sent from the plugin call
    successHandler: function(result) {
        alert('Callback Success! Result = '+result)
    },
    errorHandler:function(error) {
        alert(error);
    },
    onNotificationGCM: function(e) {
        switch( e.event )
        {
            case 'registered':
                if ( e.regid.length > 0 )
                {
                    console.log("Regid " + e.regid);
                    alert('registration id = '+e.regid);
                }
            break;

            case 'message':
              // this is the actual push notification. its format depends on the data model from the push server
              alert('message = '+e.message+' msgcnt = '+e.msgcnt);
            break;

            case 'error':
              alert('GCM error = '+e.msg);
            break;

            default:
              alert('An unknown GCM event has occurred');
              break;
        }
    }
};
