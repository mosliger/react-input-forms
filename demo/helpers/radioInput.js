const getprosTypeRadioInput = (language) => {
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
            type: 'object | string | number',
            default: '',
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
            property: 'options',
            type: 'array<object>',
            default: '',
            description: 'options ที่ต้องการ rendee [{ label: "one", value: 1 }, { label: "two", value: 2, disabled: true }]',
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
            description: 'disabled all input',
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
            property: 'onPropsChange',
            type: 'function',
            default: '',
            description: 'function ที่จะทำงานตอนที่ value, rules มีการเปลียนแปลงจากข้างนอก form',
          },
          {
            property: 'handleVerify',
            type: 'function',
            default: '',
            description: 'function customize verify input เช่น (value, rules) => "error message"',
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

export default getprosTypeRadioInput;
