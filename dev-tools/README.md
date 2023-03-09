# Dev Tools Tips & Tricks

## Break on

- Right-click on the button element in the Elements panel and select "Break on... > attribute modifications".
- Click the button to trigger the JavaScript code that may be modifying the "disabled" attribute.
- The Sources panel will automatically open, and the JavaScript execution will pause at the line where the attribute modification is happening.
- Inspect the code to see why the attribute modification is happening and why it may be overriding your change.

## Regular

`console.log('Hello, World!')`

## Styled

`console.log('%cHello, world!', 'color: blue; font-size: 24px; font-weight: bold;');`

- In this example, the first argument to console.log() is the message to be logged ('Hello, world!'), and the second argument is a CSS style string ('color: blue; font-size: 24px; font-weight: bold;') that is used to style the message.
- The %c in the log statement is a special formatting string that tells the console to apply the styles in the second argument to the text that follows. In this case, the text is 'Hello, world!'.

## Warning

`console.warn('Warning!')`

## Error

`console.error('Error!')`

## Info

`console.info('Info')`

## Testing

- if false it will throw error in second argument

`let num = 10;console.assert(num === 5, "The value of num is not 5");`

- The console.assert() method is then used to check if num is equal to 5.
- Since num is not equal to 5, the assertion fails and the error message "The value of num is not 5" will be displayed in the console.

- `num = 5` The assertion passes since num is equal to 5, so nothing is displayed in the console.

## clearing

`console.clear()`

## Viewing DOM Elements

- If you want to see all methods and properties of an element

`const p = document.querySelector(p)`
`console.dir(p)`

## Grouping together

## counting

## timing
