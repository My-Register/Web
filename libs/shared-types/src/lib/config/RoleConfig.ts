export default {
   nameMinLength: 1,
   nameMaxLength: 16,
   descriptionMinLength: 1,
   descriptionMaxLength: 2048,
   colorMaxLength: 6,
   colorMinLength: 6,
   defaultColor: 'FFFFFF',
   emojiMaxLength: 1 /*Possible bug because one emoji his length is bigger then 1*/,
   emojiMinLength: 1 /*Possible bug because one emoji his length is bigger then 1*/,
   defaultEmoji: '🧑‍💼',
   defaultPermissions: {
      addItems: false,
      editItems: false,
      deleteItems: false,
      fetchItems: true,
      createOrders: true,
   },
};
