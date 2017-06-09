const getprosTypeNumberInput = (language) => {
  switch (language) {
    case 'th': {
      return {
        title: 'Further options',
        header: {
          property: 'Property',
          type: 'Type',
          default: 'Default',
          description: 'Description',
        },
        detail: [
          {
            property: 'value',
            type: 'number',
            default: '""',
            description: 'ส่งมาเพื่อแสดงใน input',
          },
          {
            property: 'name',
            type: 'string',
            default: 'input',
            description: 'ชื่อของ field',
          },
          {
            property: 'label',
            type: 'string',
            default: '""',
            description: 'คำอธิบายของ input',
          },
          {
            property: 'format',
            type: 'string',
            default: '""',
            description: 'การกำหนดรูปแบบของ value และกำหนดจํานวนทศนิยม เช่น 0,000.00',
          },
          {
            property: 'placeholder',
            type: 'string',
            default: '""',
            description: 'ข้อความไว้บ่งบอกตัวอย่างการใส่ข้อความใน text field',
          },
          {
            property: 'type',
            type: 'string',
            default: 'text',
            description: 'ประเภทของ input',
          },
          {
            property: 'disabled',
            type: 'bool',
            default: 'false',
            description: 'disabled input',
          },
          {
            property: 'focus',
            type: 'bool',
            default: 'false',
            description: 'ให้ focus input',
          },
          {
            property: 'rules',
            type: 'object',
            default: '',
            description: 'กดการ Verify input เช่น { required: "value is require." }',
          },
          {
            property: 'onChange',
            type: 'function',
            default: '',
            description: 'function ที่ return value name errorMessage ทุกครั้งที่มีการเปลียนแปลงใน input',
          },
          {
            property: 'onBlur',
            type: 'function',
            default: '',
            description: 'function ที่ return value name errorMessage ทุกครั้งที่ lostfocus',
          },
          {
            property: 'handleVerify',
            type: 'function',
            default: '',
            description: 'function customize verify input เช่น (value, rules) => "error message"',
          },
          {
            property: 'onKeyCode',
            type: 'function',
            default: '',
            description: 'function get key code return (keyCode, value, name, event)',
          },
          {
            property: 'onPropsChange',
            type: 'function',
            default: '',
            description: 'function ที่จะทำงานตอนที่ value, rules มีการเปลียนแปลงจากข้างนอก form',
          },
          {
            property: 'children',
            type: 'any',
            default: '',
            description: 'สิ่งที่ต้องการแสดงเพิ่มเติม',
          },
        ],
      };
    }
    default:
      return {};
  }
};

export default getprosTypeNumberInput;
