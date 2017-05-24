export const getprosType = (language) => {
  switch (language) {
    case 'en': {
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
            type: 'string | number',
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
            description: 'title field',
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
            property: 'onChange',
            type: 'function',
            default: '',
            description: 'function ที่ return value name errorMessage',
          },

        ],
      };
    }
    default:
    return {};
  }
}