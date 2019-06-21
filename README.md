# LinkedList

LinkedList is a data structure which implements an array friendly interface

Note: This is a fork of linkedlist package (originally by Kilian Ciuffolo) converted to typescript and sprinked with documentation

# Class: LinkedList <**T**>

Linked List Data Structure
with Array Friendly Interface

**`export`** 

**`class`** LinkedList

**`template`** T type of items to store in the list

## Type parameters

■` T`

## Hierarchy

* **LinkedList**

### Index

#### Properties

* [at](_linkedlist_.linkedlist.md#at)

#### Accessors

* [current](_linkedlist_.linkedlist.md#current)
* [head](_linkedlist_.linkedlist.md#head)
* [length](_linkedlist_.linkedlist.md#length)
* [tail](_linkedlist_.linkedlist.md#tail)

#### Methods

* [get](_linkedlist_.linkedlist.md#get)
* [next](_linkedlist_.linkedlist.md#next)
* [pop](_linkedlist_.linkedlist.md#pop)
* [push](_linkedlist_.linkedlist.md#push)
* [removeCurrent](_linkedlist_.linkedlist.md#removecurrent)
* [resetCursor](_linkedlist_.linkedlist.md#resetcursor)
* [set](_linkedlist_.linkedlist.md#set)
* [shift](_linkedlist_.linkedlist.md#shift)
* [unshift](_linkedlist_.linkedlist.md#unshift)
* [unshiftCurrent](_linkedlist_.linkedlist.md#unshiftcurrent)

## Properties

###  at

● **at**: *[get](_linkedlist_.linkedlist.md#get)* =  this.get

Defined in LinkedList.ts:63

see get

**`memberof`** LinkedList

___

## Accessors

###  current

● **get current**(): *`T`*

Defined in LinkedList.ts:43

Get Current Value in List
Modified by push, pop, shift, unshiftCurrent, remove, next and resetCursor

**`readonly`** 

**`type`** {T}

**`memberof`** LinkedList

**Returns:** *`T`*

___

###  head

● **get head**(): *`T`*

Defined in LinkedList.ts:20

Get First Value in List

**`readonly`** 

**`type`** {T} type of values in the list

**`memberof`** LinkedList

**Returns:** *`T`*

___

###  length

● **get length**(): *number*

Defined in LinkedList.ts:54

Get Number of elements in List

**`readonly`** 

**`type`** {number}

**`memberof`** LinkedList

**Returns:** *number*

___

###  tail

● **get tail**(): *`T`*

Defined in LinkedList.ts:31

Get Last Value in List

**`readonly`** 

**`type`** {T}

**`memberof`** LinkedList

**Returns:** *`T`*

___

## Methods

###  get

▸ **get**(`index`: number): *`T`*

Defined in LinkedList.ts:80

Retrieve the value at index location

**`memberof`** LinkedList

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | location in the list |

**Returns:** *`T`*

___

###  next

▸ **next**(): *`T`*

Defined in LinkedList.ts:250

Retrieve the next element value and advance current pointer

**`memberof`** LinkedList

**Returns:** *`T`*

___

###  pop

▸ **pop**(): *`T`*

Defined in LinkedList.ts:120

Pop a value from the end

**`memberof`** LinkedList

**Returns:** *`T`*

___

###  push

▸ **push**(`data`: `T`): *void*

Defined in LinkedList.ts:104

Push a value at the end

**`memberof`** LinkedList

**Parameters:**

Name | Type |
------ | ------ |
`data` | `T` |

**Returns:** *void*

___

###  removeCurrent

▸ **removeCurrent**(): *`T`*

Defined in LinkedList.ts:217

Remove current element

**`memberof`** LinkedList

**Returns:** *`T`*

___

###  resetCursor

▸ **resetCursor**(): *[LinkedList](_linkedlist_.linkedlist.md)‹*`T`*›*

Defined in LinkedList.ts:266

Resets the cursor

**`memberof`** LinkedList

**Returns:** *[LinkedList](_linkedlist_.linkedlist.md)‹*`T`*›*

___

###  set

▸ **set**(`index`: number, `value`: `T`): *`T`*

Defined in LinkedList.ts:279

Set the value of a certain position in the list

**`memberof`** LinkedList

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`value` | `T` |

**Returns:** *`T`*

___

###  shift

▸ **shift**(): *`T`*

Defined in LinkedList.ts:145

Removes the first element from the list and return the value

**`memberof`** LinkedList

**Returns:** *`T`*

___

###  unshift

▸ **unshift**(`data`: `T`): *number*

Defined in LinkedList.ts:171

Add an element to the start of the list and return the new length of the list

**`memberof`** LinkedList

**Parameters:**

Name | Type |
------ | ------ |
`data` | `T` |

**Returns:** *number*

___

###  unshiftCurrent

▸ **unshiftCurrent**(): *`T`*

Defined in LinkedList.ts:187

Moves the current element to the start of the list

**`memberof`** LinkedList

**Returns:** *`T`*

___

# Example

```javascript

var LinkedList = require('linkedlist')

var list = new LinkedList()

for (var i = 0; i < 10; i++) {
  list.push(i.toString())
}

console.log(list.head)
console.log(list.tail)

while (list.next()) {
  console.log(list.current)
}

while (list.length) {
  console.log(list.pop())
}

for (i = 0; i < 10; i++) {
  list.unshift(i.toString())
}

while (list.length) {
  console.log(list.shift())
}

for (i = 0; i < 10; i++) {
  list.push(i.toString())
}

while (list.next()) {
  if (list.current === '5') {
    console.log('move "%s" to the start of the list', list.unshiftCurrent())
  }
  if (list.current === '8') {
    console.log('remove "%s" current from the list', list.removeCurrent())
    // now list.current points to '7'
    // now list.next() points to '9'

    list.resetCursor()
    // now list.next() points to list.head
  }
}

```

Look at the test suite for more example

## License

_This software is released under the MIT license cited below_.

    Copyright (c) 2010 Kilian Ciuffolo, me@nailik.org. All Rights Reserved.

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the 'Software'), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
