### Naming Convections

In this project we make use of the [BEM](https://en.bem.info/methodology/naming-convention/) nameing convections

#### Javascript

##### Naming convection for Varibles

- Make use of camel case for naming variables

```javascript
//Bad
let follwcount = 23;

// Good
let followCount = 23;
```

- Variable name must be descripive

```javascript
// Bad
let b = 'john';

//Good
let firstName = 'john';
```

- Constant varibles should be written in `Uppercase` for one `word` and `UPPER_SNAKE_CASE`

```javascript
//  Bad
const nose = 1;

// Good
const NOSE = 1; #Upper case

// Bad
const daysInDecember = 31;

// Good
const DAYS_IN_DECEMBER = 31;  #Upper snake case
```

- Boolean variable should have an `is` or `has` as prefixes.

```javascript
// Bad
let open = true;

//Good
let isOpen = true;
```

##### Naming convection for Function

- Function name should be camel cased for more than two word

```javascript
// Bad
function getname() {
  return null;
}

// Good
function getName() {
  return null;
}
```

##### Naming convection for Class

- Make use of `Pascal case`(First letter is always capitalized) in naming classes.

```javascript
//Bad
class dog_movie {
  constructor(dogName) {
    this.dogName = 'freddo';
  }
}

//Good
class DogMovie {
  constructor(dogName) {
    this.dogName = 'freddo';
  }
}
```

##### Naming convection for Functional React Components

```javascript
// Bad
function dog_movie() {
  return (
    <div>
      <span> Hello world </span>
    </div>
  );
}

// Good
function DogMovie() {
  return (
    <div>
      <span> Hello world </span>
    </div>
  );
}
```

#### Files & Folders

##### Images, Folders

- Make use of `snake case` naming convection

```doc
 IMAGES
=====================
<!-- Bad -->
Flower.jpg
HomeImage.png

<!-- Good -->
flower.jpg
home_image.png


FOLDER
===========

<!-- Bad -->
HomePage
Landing

<!-- Good -->
home_page
landing

```

##### Javascript files

- Make use of `pascal case` naming convection

```doc

JAVASCRIPT FILE
================

<!-- Bad -->
home_page.js
landing.js

<!-- Good -->
Landing.js
HomePage.js

```
