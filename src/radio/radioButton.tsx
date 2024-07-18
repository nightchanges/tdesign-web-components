import '../common/check';

import { OmiProps, tag } from 'omi';

import { convertToLightDomNode } from '../_util/lightDom';
import Radio, { RadioProps } from './radio';
import { TdRadioProps } from './type';

@tag('t-radio-button')
export default class RadioButton extends Radio {
  static propTypes = {
    allowUncheck: Boolean,
    checked: Boolean,
    defaultChecked: Boolean,
    children: [String, Number, Object, Function],
    disabled: Boolean,
    label: [String, Number, Object, Function],
    name: String,
    value: [String, Number],
    onChange: Function,
    onClick: Function,
  };

  static defaultProps: TdRadioProps = {
    allowUncheck: false,
    defaultChecked: false,
    disabled: undefined,
    value: undefined,
  };

  render(props: OmiProps<RadioProps>) {
    // 如果Radio本身是lightDom了，要让Check组件也变为lightDom，否则外层样式调整无法穿透生效
    if ((this.constructor as any).isLightDOM) {
      return convertToLightDomNode(<t-check type="radio-button" {...props} />);
    }
    return <t-check type="radio-button" {...props} />;
  }
}
