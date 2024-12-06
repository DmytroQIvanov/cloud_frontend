export const InstrumentsArray = [
  {
    title: "Головні сервіси",
    array: [
      { link: "https://transfer.quanticfiles.com", text: "Трансфер файлів" },
    ],
  },
  {
    title: "Робота з зображеннями",
    link: "/instruments/image",
    array: [
      {
        link: "/instruments/resize-image",

        text: "Змінити розмір зображення",
        instrument: "resize-image",
      },
      {
        link: "/instruments/compress-image",
        text: "Стиснути зображення",
        instrument: "compress-image",
      },
      {
        link: "/instruments/rotate-image",
        text: "Повернути зображення",
        instrument: "rotate-image",
      },

      {
        link: "/instruments/blur-image",
        text: "Заблюрить зображення",
        instrument: "blur-image",
      },

      {
        link: "/instruments/metadata-image",
        text: "Отримати метадані зображення",
        instrument: "metadata-image",
      },

      // {
      //   link: "/instruments/convert-image",
      //   text: "Конвертировать зображення",
      //   instrument: "convert-image",
      //   array: [
      //     {
      //       link: "/instruments/convert-image/convert-to-jpg",
      //       text: "Конвертировать JPG",
      //       instrument: "convert-image",
      //     },
      //
      //     {
      //       link: "/instruments/convert-image/convert-from-jpg",
      //       text: "Конвертировать PNG",
      //       instrument: "convert-image",
      //     },
      //
      //     // {
      //     //   link: "/instruments/convert-image",
      //     //   text: "Конвертировать зображення",
      //     //   instrument: "convert-image",
      //     // },
      //   ],
      // },
      // {
      //   link: "/instruments/crop-image",
      //   text: "Обрізати зображення",
      //   instrument: "crop-image",
      // },
      {
        link: "/instruments/greyscale-image",
        text: "Зробити зображення чорно-білим",
        instrument: "greyscale-image",
      },

      {
        link: "/instruments/flip-image",
        text: "Перегорнути зображення",
        instrument: "flip-image",
      },

      {
        link: "/instruments/flop-image",
        text: "Джеркально розгорнути зображення",
        instrument: "flop-image",
      },
    ],
  },
  {
    title: "Робота з IP",
    array: [{ link: "/instruments/your-ip", text: "Дізнатись IP" }],
  },
];
