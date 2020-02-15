import React, {Component} from 'react'



   const images=
   [
        { id: 1, src: './assets/kevin-noble.jpg', description: 'bar' },
        { id: 2, src: './assets/brent.olsen.jpg',  description: 'bar' },
        { id: 3, src: './assets/courtney-kenady.jpg', description: 'bar' },
        { id: 4, src: './assets/markus-spiske.jpg',  description: 'bar' },
        { id: 5, src: './assets/kal-visuals.jpg',  description: 'bar' },
      ]
   
      function imageLoader() {
        return images;
      }
    

export default imageLoader();