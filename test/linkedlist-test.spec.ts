import { expect } from "chai";
import "mocha";
import LinkedList from "../src/index";

describe("LinkedList", () => {
	let list: LinkedList<string | number>;

	describe("#push()", () => {
		before(() => {
			list = new LinkedList<string>();
			for (let i = 0; i < 5; i++) {
				list.push(i.toString());
			}
		});
		it("should update length", () => {
			expect(list.length).eq(5);
		});
		it("should update head", () => {
			expect(list.head).eq("0");
		});
		it("should update tail", () => {
			expect(list.tail).to.eq("4");
		});
		it("should update current", () => {
			expect(list.current).to.eq("0");
		});
	});

	describe("#pop()", () => {
		describe("empty list", () => {
			before(() => {
				list = new LinkedList();
			});
			it("should return undefined", () => {
				expect(list.pop()).eq(undefined);
			});
			it("should not decrease length", () => {
				expect(list.length).eq(0);
			});
			it("should update head", () => {
				expect(list.head).to.eq(undefined);
			});
			it("should update tail", () => {
				expect(list.tail).to.eq(undefined);
			});
		});

		describe("cursor at head", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 5; i++) {
					list.push(i.toString());
				}
			});
			it("should return the last value", () => {
				expect(list.pop()).to.eq("4");
			});
			it("should decrease length", () => {
				expect(list.length).to.eq(4);
			});
			it("should update head", () => {
				expect(list.head).to.eq("0");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("3");
			});
			it("should update current", () => {
				expect(list.current).to.eq("0");
			});
			it("should be able to empty the list", () => {
				expect(list.pop()).to.eq("3");
				expect(list.pop()).to.eq("2");
				expect(list.pop()).to.eq("1");
				expect(list.pop()).to.eq("0");
				expect(list.length).eq(0);
				expect(list.head).to.eq(undefined);
				expect(list.tail).to.eq(undefined);
			});
			it("should return undefined on an empty list", () => {
				expect(list.pop()).to.eq(undefined);
				expect(list.length).to.eq(0);
			});
			it("should not decrease after zero", () => {
				list.pop();
				expect(list.length).to.eq(0);
			});
			it("should update current", () => {
				expect(list.current).to.eq(undefined);
			});
			it("should update next", () => {
				expect(list.next()).to.eq(undefined);
			});
		});

		describe("cursor at tail", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 5; i++) {
					list.push(i.toString());
				}
				while (list.next()) {
					// nop
				}
			});
			it("should return the last value", () => {
				expect(list.pop()).to.eq("4");
			});
			it("should decrease length", () => {
				expect(list.length).to.eq(4);
			});
			it("should update head", () => {
				expect(list.head).to.eq("0");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("3");
			});
			it("should update current", () => {
				expect(list.current).to.eq("3");
			});
			it("should update next", () => {
				expect(list.next()).to.eq(undefined);
			});
		});

		describe("cursor at middle", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
				for (let i = 0; i < 5; i++) {
					list.next();
				}
			});
			it("should return the last value", () => {
				expect(list.pop()).to.eq("9");
				expect(list.pop()).to.eq("8");
				expect(list.pop()).to.eq("7");
				expect(list.pop()).to.eq("6");
				expect(list.pop()).to.eq("5");
				expect(list.pop()).to.eq("4");
			});
			it("should not decrease length", () => {
				expect(list.length).to.eq(4);
			});
			it("should update head", () => {
				expect(list.head).to.eq("0");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("3");
			});
			it("should update current", () => {
				expect(list.current).to.eq("3");
			});
			it("should update next", () => {
				expect(list.next()).to.eq(undefined);
			});
		});
	});

	describe("#shift()", () => {
		describe("empty list", () => {
			before(() => {
				list = new LinkedList();
			});
			it("should return undefined", () => {
				expect(list.shift()).to.eq(undefined);
			});
			it("should not decrease length", () => {
				expect(list.length).to.eq(0);
			});
			it("should update head", () => {
				expect(list.head).to.eq(undefined);
			});
			it("should update tail", () => {
				expect(list.tail).to.eq(undefined);
			});
		});

		describe("cursor at head", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 5; i++) {
					list.push(i.toString());
				}
			});
			it("should return the first value", () => {
				expect(list.shift()).to.eq("0");
			});
			it("should decrease length", () => {
				expect(list.length).to.eq(4);
			});
			it("should update head", () => {
				expect(list.head).to.eq("1");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("4");
			});
			it("should be able to empty the list", () => {
				expect(list.shift()).to.eq("1");
				expect(list.shift()).to.eq("2");
				expect(list.shift()).to.eq("3");
				expect(list.shift()).to.eq("4");
				expect(list.length).to.eq(0);
				expect(list.head).to.eq(undefined);
				expect(list.tail).to.eq(undefined);
			});
			it("should return undefined on an empty list", () => {
				expect(list.shift()).to.eq(undefined);
				expect(list.length).to.eq(0);
			});
			it("should not decrease after zero", () => {
				list.shift();
				expect(list.length).to.eq(0);
			});
		});

		describe("cursor at tail", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 5; i++) {
					list.push(i.toString());
				}
				while (list.next()) {
					// nop
				}
			});
			it("should return the last value", () => {
				expect(list.shift()).to.eq("0");
			});
			it("should decrease length", () => {
				expect(list.length).to.eq(4);
			});
			it("should update head", () => {
				expect(list.head).to.eq("1");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("4");
			});
			it("should update current", () => {
				expect(list.current).to.eq("4");
			});
			it("should update next", () => {
				expect(list.next()).to.eq(undefined);
			});
		});

		describe("cursor at middle", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
				for (let i = 0; i < 5; i++) {
					list.next();
				}
			});
			it("should return the last value", () => {
				expect(list.shift()).to.eq("0");
				expect(list.shift()).to.eq("1");
				expect(list.shift()).to.eq("2");
				expect(list.shift()).to.eq("3");
				expect(list.shift()).to.eq("4");
			});
			it("should not decrease length", () => {
				expect(list.length).to.eq(5);
			});
			it("should update head", () => {
				expect(list.head).to.eq("5");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("9");
			});
			it("should update current", () => {
				expect(list.current).to.eq("5");
			});
			it("should update next", () => {
				expect(list.next()).to.eq("6");
			});
		});
	});

	describe("#unshift()", () => {
		describe("empty list", () => {
			before(() => {
				list = new LinkedList();
				list.unshift("head");
			});
			it("should update length", () => {
				expect(list.length).to.eq(1);
			});
			it("should update head", () => {
				expect(list.head).to.eq("head");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("head");
			});
		});

		describe("cursor at head", () => {
			before(() => {
				list = new LinkedList();
				list.push("foo");
				list.push("bar");
				list.push("f");
				list.push("o");
				list.push("o");
				list.push("o");
				list.unshift("head");
			});
			it("should update length", () => {
				expect(list.length).to.eq(7);
			});
			it("should update head", () => {
				expect(list.head).to.eq("head");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("o");
			});
		});
	});

	describe("#next()", () => {
		describe("empty list", () => {
			before(() => {
				list = new LinkedList();
			});
			it("should return undefined", () => {
				expect(list.next()).to.eq(undefined);
			});
		});

		describe("cursor at head", () => {
			before(() => {
				list = new LinkedList<number>();
				for (let i = 0; i < 10; i++) {
					list.push(i);
				}
			});
			it("should iterate correctly", () => {
				let i = 0;
				while (list.next() !== undefined) {
					expect(list.current).to.eq(i++);
				}
				expect(i).to.eq(10);
			});
		});
	});

	describe("#resetCursor()", () => {
		before(() => {
			list = new LinkedList();
			for (let i = 0; i < 10; i++) {
				list.push(i);
			}
			list.next();
			list.next();
			list.resetCursor();
		});
		it("should reset the cursor position", () => {
			expect(list.current).to.eq(0);
			expect(list.next()).to.eq(0);
			expect(list.next()).to.eq(1);
		});
	});

	describe("#removeCurrent()", () => {
		describe("empty list", () => {
			before(() => {
				list = new LinkedList();
			});
			it("should return undefined", () => {
				expect(list.removeCurrent()).to.eq(undefined);
			});
			it("should not decrease length", () => {
				expect(list.length).to.eq(0);
			});
			it("should update head", () => {
				expect(list.head).to.eq(undefined);
			});
			it("should update tail", () => {
				expect(list.tail).to.eq(undefined);
			});
		});

		describe("cursor at head", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
			});
			it("should return the first value", () => {
				expect(list.removeCurrent()).to.eq("0");
			});
			it("should not decrease length", () => {
				expect(list.length).to.eq(9);
			});
			it("should update head", () => {
				expect(list.head).to.eq("1");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("9");
			});
			it("should update current", () => {
				expect(list.current).to.eq("1");
			});
			it("should update next", () => {
				expect(list.next()).to.eq("2");
			});
			it("should be able to empty the list", () => {
				while (list.removeCurrent()) {
					// nop
				}
				expect(list.length).to.eq(0);
				expect(list.next()).to.eq(undefined);
				expect(list.current).to.eq(undefined);
				expect(list.head).to.eq(undefined);
				expect(list.tail).to.eq(undefined);
			});
		});

		describe("cursor at tail", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
				while (list.next()) {
					// nop
				}
			});
			it("should return the last value", () => {
				expect(list.removeCurrent()).to.eq("9");
			});
			it("should not decrease length", () => {
				expect(list.length).to.eq(9);
			});
			it("should update head", () => {
				expect(list.head).to.eq("0");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("8");
			});
			it("should update current", () => {
				expect(list.current).to.eq("8");
			});
			it("should update next", () => {
				expect(list.next()).to.eq(undefined);
			});
			it("should be able to empty the list", () => {
				while (list.removeCurrent()) {
					// nop
				}
				expect(list.length).to.eq(0);
				expect(list.next()).to.eq(undefined);
				expect(list.current).to.eq(undefined);
				expect(list.head).to.eq(undefined);
				expect(list.tail).to.eq(undefined);
			});
		});

		describe("cursor at middle", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
				for (let i = 0; i < 5; i++) {
					list.next();
				}
			});
			it("should return the last value", () => {
				expect(list.removeCurrent()).to.eq("4");
			});
			it("should not decrease length", () => {
				expect(list.length).to.eq(9);
			});
			it("should update head", () => {
				expect(list.head).to.eq("0");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("9");
			});
			it("should update current", () => {
				expect(list.current).to.eq("3");
			});
			it("should update next", () => {
				expect(list.next()).to.eq("5");
			});
			it("should be able to empty the list", () => {
				while (list.removeCurrent()) {
					// nop
				}
				expect(list.length).to.eq(0);
				expect(list.next()).to.eq(undefined);
				expect(list.current).to.eq(undefined);
				expect(list.head).to.eq(undefined);
				expect(list.tail).to.eq(undefined);
			});
		});
	});

	describe("#unshiftCurrent()", () => {
		describe("empty list", () => {
			before(() => {
				list = new LinkedList();
			});
			it("should return undefined", () => {
				expect(list.unshiftCurrent()).to.eq(undefined);
			});
		});

		describe("cursor at head", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
			});
			it("should return current value", () => {
				expect(list.unshiftCurrent()).to.eq("0");
			});
			it("should update current", () => {
				expect(list.current).to.eq("0");
			});
			it("should update next", () => {
				expect(list.next()).to.eq("0");
			});
		});

		describe("cursor at tail", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
				while (list.next()) {
					// nop
				}
			});
			it("should return undefined", () => {
				expect(list.unshiftCurrent()).to.eq("9");
			});
			it("should update tail", () => {
				expect(list.tail).to.eq("8");
			});
			it("should update head", () => {
				expect(list.head).to.eq("9");
			});
			it("should update current", () => {
				expect(list.current).to.eq("8");
			});
			it("should update next", () => {
				expect(list.next()).to.eq(undefined);
			});
			it("should bubble up nodes", () => {
				let v = 0;
				for (let i = 0; i < 20; i++) {
					v = (v + 1) % 10;
					expect(list.unshiftCurrent()).to.eq((9 - v).toString());
				}
			});
		});

		describe("cursor at middle", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
				for (let i = 0; i < 5; i++) {
					list.next();
				}
			});
			it("should return current value", () => {
				expect(list.unshiftCurrent()).to.eq("4");
			});
			it("should update current", () => {
				expect(list.current).to.eq("3");
			});
			it("should update next", () => {
				expect(list.next()).to.eq("5");
			});
		});
	});

	describe("#get()", () => {
		describe("empty list", () => {
			before(() => {
				list = new LinkedList();
			});
			it("should throw out of bounds", () => {
				expect(() => { list.get(0); }).to.throw();
			});
		});

		describe("out of bounds", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
			});
			it("should throw / < 0", () => {
				expect(() => { list.get(-1); }).to.throw();
			});
			it("should throw / > max", () => {
				expect(() => { list.get(10); }).to.throw();
			});
		});

		describe("not empty list", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
			});
			it("should return value", () => {
				for (let i = 0; i < 10; i++) {
					expect(list.get(i)).to.eq(i.toString());
				}
			});
		});
	});

	describe("#at()", () => {
		before(() => {
			list = new LinkedList();
			for (let i = 0; i < 10; i++) {
				list.push(i.toString());
			}
		});
		it("should be alias for get", () => {
			expect(list.at(1)).to.eq("1");
		});
	});

	describe("#set()", () => {
		describe("empty list", () => {
			before(() => {
				list = new LinkedList();
			});
			it("should throw error", () => {
				expect(() => { list.set(0, "hello"); }).to.throw();
			});
		});

		describe("out of bounds", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
			});
			it("should throw error / < 0", () => {
				expect(() => { list.set(-1, "hello"); }).to.throw();
			});
			it("should throw error / > max", () => {
				expect(() => { list.set(10, "hello"); }).to.throw();
			});
		});

		describe("not empty list", () => {
			before(() => {
				list = new LinkedList();
				for (let i = 0; i < 10; i++) {
					list.push(i.toString());
				}
			});
			it("should set value", () => {
				expect(list.set(5, "hello")).to.eq("hello");
				expect(list.get(5)).to.eq("hello");
			});
		});

	});
});
