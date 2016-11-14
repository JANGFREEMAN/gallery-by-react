
import React from 'react';


//css
// require("normalize.css");
require('../styles/main.scss');

// var imageDatas = require('../data/imagesDatas.json');

// imageDatas = (function genImageUrl(imageDatasArr){
//   for(var i = 0 , j = imageDatasArr.length;i < j; i++){
//     var singleImageData = imageDatasArr[i];
//     singleImageData.imageURL = require('../images/'+singleImageData.fileName);
//     imageDatasArr[i] = singleImageData;
//   }
//   return imageDatasArr;
// })(imageDatas);

var GalleryByReactApp = React.createClass({
  render:function(){
    return (
      <section className = "stage">
          <section className = "img-sec">
          </section>
          <nav className = "controller-nav">
          </nav>
      </section>
    );
  }
});
module.exports = GalleryByReactApp;
