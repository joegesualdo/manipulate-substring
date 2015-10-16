## Manipulate Substring
> Manipulates substrings

## Install
```
$ npm install --save manipulate-substrings
```

##Usage
```javascript
var ManipulateSubstring = require("manipulate-substring")
ManipulateSubstring.colorize("blue", "really", "His house was really nice")
```

## API

### `colorize(color, substringToManipulate, string)`

| Name | Type | Description |
|------|------|-------------|
| colorize | `String` | string that represents a color 
| substringToManipulate | `String` | subtring to be manipulated
| string| `String` | parent string 

```javascript
ManipulateSubstring.colorize("blue", "really", "His house was really nice")
```

### `colorizeAtWordIndex(color, index, string)`
| Name | Type | Description |
|------|------|-------------|
| colorize | `String` | string that represents a color 
| index | `Number` | Index of word you want to color
| string| `String` | parent string 

```javascript
console.log(ManipulateSubstring.colorizeAtIndex("blue", 1, "Hi Joe! How are you"))
```

### `colorizeBetweenCharacterIndexes(color, startIndex, endIndex, string)`
| Name | Type | Description |
|------|------|-------------|
| colorize | `String` | string that represents a color 
| startIndex | `Number` | Index where you want to start the coloring
| endIndex | `Number` | Index where you want to stop the coloring
| string| `String` | parent string 

```javascript
console.log(ManipulateSubstring.colorizeBetweenCharacterIndexes("blue", 2, 5, "Thisss is kinda crazy I guess"))
```

## License
MIT © Joe Gesualdo
