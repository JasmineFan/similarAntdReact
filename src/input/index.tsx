import InternalInput from './input';
import TextArea from './TextArea';

type InputType = typeof InternalInput;
interface InputInterface extends InputType {
  TextArea: typeof TextArea;
}

const Input = InternalInput as InputInterface;
Input.TextArea = TextArea;
export default Input;

