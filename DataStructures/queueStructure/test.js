const weave = require('./weave');
const Queue = require('./queue');

test('Queues have access to peek', () => {
    const q = new Queue();
    expect(typeof q.peek).toEqual('function')
});

test('Peek returns first value', () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    expect(q.peek()).toEqual(1);
    expect(q.peek()).toEqual(1);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
});

test('Weave is a function', () => {
  expect(typeof weave).toEqual('function');
});

test('weave can combine two queues', () => {
  const one = new Queue();
  one.add(1);
  one.add(2);
  one.add(3);
  one.add(4);
  const two = new Queue();
  two.add('hi');
  two.add('there');
  two.add('test');
  two.add('jest');

  const result = weave(one, two);
  expect(result.remove()).toEqual(1);
  expect(result.remove()).toEqual('hi');
  expect(result.remove()).toEqual(2);
  expect(result.remove()).toEqual('there');
  expect(result.remove()).toEqual(3);
  expect(result.remove()).toEqual('test');
  expect(result.remove()).toEqual(4);
  expect(result.remove()).toEqual('jest');
  expect(result.remove()).toBeUndefined();
});