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

## License
MIT © Joe Gesualdo
