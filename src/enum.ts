//list of related constants
//instead of doing the below
const small = 1
const medium = 2
const large = 3

//we do this

//values are automatically set to 0,1,2
enum Size {Small,Medium,Large}
enum NewSize {Small = 's', Medium = 'm', Large = 'l'}
//note that enums are their own custom types, so the below

let mySize:Size = Size.Large