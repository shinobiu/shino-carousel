# shino-carousel

### Welcome to my first project on this GitHub.

The project it self is quite simple, is a HTML/CSS3/JavaScript Carousel.

##### I'll update this Readme as I work on the project.

### How it works:

1- Just create an div with an class named item inside of the tag with the id carousel, the JS will look for all the elements with that name inside carousel and push it into an array list.

2- The start function will add the class hide to all items in the array but the first (index 0).

3- An EventListner will get the click in one of the arrows and execute the changeItem function with the direction parameter going foward or back.

4- The start function will also create an little ball like element beneath the slide, with an ID attached to it, An EventListner will get the click in one of them and change the item to it's correspondent id.
