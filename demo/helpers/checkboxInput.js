const getprosTypeCheckboxInput = (language) => {
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
            type: 'array<object> | bool',
            default: '',
            description: 'ถ้ามี options value จะเป็น array ถ้าไม่มี options value จะเป็น bool',
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
            default: '[ ]',
            description: 'options ที่ต้องการ render [{ label: "one", value: 1 }, { label: "two", value: 2, disabled: true }]'
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
            property: 'handleVerify',
            type: 'function',
            default: '',
            description: 'function customize verify input เช่น (value, rules) => "error message"',
          },
          {
            property: 'errorMessage',
            type: 'string',
            default: '',
            description: 'ถ้ามีการส่ง errorMessage function handleVerify และ rules จะไม่มีผลเพราะเชื่อค่าที่ส่งเข้ามา',
          },
          {
            property: 'onPropsChange',
            type: 'function',
            default: '',
            description: 'function ที่จะทำงานตอนที่ value, rules มีการเปลียนแปลงจากข้างนอก form',
          },
          {
            property: 'customElement',
            type: 'function',
            default: '',
            description: 'function ที่จัดการ render เอง เช่น customElement={(input, label, errorMessage) => (<div>{input}</div>)}',
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

export default getprosTypeCheckboxInput;
