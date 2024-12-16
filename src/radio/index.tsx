import InternalRadio from './radio';
import Group from './Group';

type radioType  = typeof InternalRadio
interface RadioInterface  extends radioType{
    Group:typeof Group
}
const Radio = InternalRadio as RadioInterface
Radio.Group= Group


export default Radio;
