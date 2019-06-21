import { Item } from "./Item";

/**
 * Linked List Data Structure
 * with Array Friendly Interface
 *
 * @export
 * @class LinkedList
 * @template T type of items to store in the list
 */
export class LinkedList<T> {

	/**
	 * Get First Value in List
	 *
	 * @readonly
	 * @type {T} type of values in the list
	 * @memberof LinkedList
	 */
	public get head(): T {
		return (this._head) ? this._head.data : undefined;
	}

	/**
	 * Get Last Value in List
	 *
	 * @readonly
	 * @type {T}
	 * @memberof LinkedList
	 */
	public get tail(): T {
		return (this._tail) ? this._tail.data : undefined;
	}

	/**
	 * Get Current Value in List
	 * Modified by push, pop, shift, unshiftCurrent, remove, next and resetCursor
	 *
	 * @readonly
	 * @type {T}
	 * @memberof LinkedList
	 */
	public get current(): T {
		return (this._current) ? this._current.data : undefined;
	}

	/**
	 * Get Number of elements in List
	 *
	 * @readonly
	 * @type {number}
	 * @memberof LinkedList
	 */
	public get length(): number {
		return this._length;
	}

	/**
	 * see get
	 *
	 * @memberof LinkedList
	 */
	public at = this.get;

	private _head: Item<T>;

	private _tail: Item<T>;
	private _next: Item<T>;
	private _current: Item<T>;

	private _length = 0;

	/**
	 * Retrieve the value at index location
	 *
	 * @param {number} index location in the list
	 * @returns {T}
	 * @memberof LinkedList
	 */
	public get(index: number): T {
		if (index < 0) { throw new Error('Index "' + index + '" out of bounds'); }

		let i = 0;
		let next = this._head;

		while (next) {
			if (i === index) {
				return next.data;
			}

			next = next.next;
			i++;
		}

		throw new Error('Index "' + index + '" out of bounds');
	}

	/**
	 * Push a value at the end
	 *
	 * @param {T} data
	 * @memberof LinkedList
	 */
	public push(data: T): void {
		this._tail = new Item(data, this._tail);
		if (this._length === 0) {
			this._head = this._tail;
			this._current = this._head;
			this._next = this._head;
		}
		this._length++;
	}

	/**
	 * Pop a value from the end
	 *
	 * @returns {T}
	 * @memberof LinkedList
	 */
	public pop(): T {
		const tail = this._tail;
		if (this._length === 0) {
			return undefined;
		}
		this._length--;
		if (this._length === 0) {
			this._head = this._tail = this._current = this._next = undefined;
			return tail.data;
		}
		this._tail = tail.prev;
		this._tail.next = undefined;
		if (this._current === tail) {
			this._current = this._tail;
			this._next = undefined;
		}
		return tail.data;
	}

	/**
	 * Removes the first element from the list and return the value
	 *
	 * @returns {T}
	 * @memberof LinkedList
	 */
	public shift(): T {
		const head = this._head;
		if (this._length === 0) {
			return undefined;
		}
		this._length--;
		if (this._length === 0) {
			this._head = this._tail = this._current = this._next = undefined;
			return head.data;
		}
		this._head = this._head.next;
		this._head.prev = undefined;
		if (this._current === head) {
			this._current = this._head;
			this._next = this._current.next;
		}
		return head.data;
	}

	/**
	 * Add an element to the start of the list and return the new length of the list
	 *
	 * @param {T} data
	 * @returns {number}
	 * @memberof LinkedList
	 */
	public unshift(data: T): number {
		this._head = new Item(data, undefined, this._head);
		if (this._length === 0) {
			this._tail = this._head;
			this._next = this._head;
		}
		this._length++;
		return this._length;
	}

	/**
	 * Moves the current element to the start of the list
	 *
	 * @returns {T}
	 * @memberof LinkedList
	 */
	public unshiftCurrent(): T {
		const current = this._current;
		if (current === this._head || this._length < 2) {
			return (current) ? current.data : undefined;
		}
		// remove
		if (current === this._tail) {
			this._tail = current.prev;
			this._tail.next = undefined;
			this._current = this._tail;
		} else {
			current.next.prev = current.prev;
			current.prev.next = current.next;
			this._current = current.prev;
		}
		this._next = this._current.next;
		// unshift
		current.next = this._head;
		current.prev = undefined;
		this._head.prev = current;
		this._head = current;
		return current.data;
	}

	/**
	 * Remove current element
	 *
	 * @returns {T}
	 * @memberof LinkedList
	 */
	public removeCurrent(): T {
		const current = this._current;
		if (this._length === 0) {
			return undefined;
		}
		this._length--;
		if (this._length === 0) {
			this._head = this._tail = this._current = this._next = undefined;
			return current.data;
		}
		if (current === this._tail) {
			this._tail = current.prev;
			this._tail.next = undefined;
			this._current = this._tail;
		} else if (current === this._head) {
			this._head = current.next;
			this._head.prev = undefined;
			this._current = this._head;
		} else {
			current.next.prev = current.prev;
			current.prev.next = current.next;
			this._current = current.prev;
		}
		this._next = this._current.next;
		return current.data;
	}

	/**
	 * Retrieve the next element value and advance current pointer
	 *
	 * @returns {T}
	 * @memberof LinkedList
	 */
	public next(): T {
		const next = this._next;
		if (next !== undefined) {
			this._next = next.next;
			this._current = next;
			return next.data;
		}
		return undefined;
	}

	/**
	 * Resets the cursor
	 *
	 * @returns {LinkedList<T>}
	 * @memberof LinkedList
	 */
	public resetCursor(): LinkedList<T> {
		this._current = this._next = this._head;
		return this;
	}

	/**
	 * Set the value of a certain position in the list
	 *
	 * @param {number} index
	 * @param {T} value
	 * @returns {T}
	 * @memberof LinkedList
	 */
	public set(index: number, value: T): T {
		if (index < 0) { throw new Error('Index "' + index + '" out of bounds'); }

		let i = 0;
		let next = this._head;

		while (next) {
			if (i === index) {
				next.data = value;
				return value;
			}

			next = next.next;
			i++;
		}

		throw new Error('Index "' + index + '" out of bounds');
	}

	/**
	 * return all elements as an array
	 *
	 * @returns
	 * @memberof LinkedList
	 */
	public toArray() {
		let next = this._head;

		const arr: T[] = [];

		while (next) {
			arr.push(next.data);
			next = next.next;
		}

		return arr;
	}

	/**
	 * Iterate over each element in linked list
	 *
	 * @param {(value: T) => void} callback
	 * @memberof LinkedList
	 */
	public forEach(callback: (value: T) => void) {
		let next = this._head;

		while (next) {
			callback(next.data);
			next = next.next;
		}
	}
}
