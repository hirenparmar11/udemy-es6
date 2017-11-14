import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let alternameBookImage = "http://clipartix.com/wp-content/uploads/2016/06/Book-images-download-open-book-cliparts.png"
    return (
      <div>
      {
        this.props.items.map((item, index) => {
          let {title, imageLinks, infoLink} = item.volumeInfo;
          return (
            <a href={infoLink} key={index} className="book" target="_blank">
            <img
              src={imageLinks != undefined ? imageLinks.thumbnail : alternameBookImage}
              alt="book image"
              className="book-img"/>
              <div className="book-text">
                {title}
              </div>
            </a>
          )
        })
      }
      </div>
    )
  }
}

export default Gallery;
