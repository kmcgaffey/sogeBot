import { TypedEmitter } from 'tiny-typed-emitter';

interface Events {
  'refresh': () => void;
}

class _EventEmitter extends TypedEmitter<Events> {}
const csEmitter = new _EventEmitter();

export { csEmitter };