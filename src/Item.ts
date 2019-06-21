/**
 * @ignore
 * @hidden
 * @internal
 * to prevent typedoc from documenting internal structure
 */

/**
 * Internal Item Structure
 *
 * @export
 * @class Item
 * @template T
 */
export class Item<T> {
	public next: Item<T>;
	public prev: Item<T>;
	public data: T;
	constructor(data: T, prev: Item<T>, next?: Item<T>) {
		this.next = next;
		if (next) { next.prev = this; }
		this.prev = prev;
		if (prev) { prev.next = this; }
		this.data = data;
	}
}
