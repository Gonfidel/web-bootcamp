console.log(
  "mango;toast;eggs;french fries;honey;milk;sweet potato fries".split(";").map(
    item => {
      let returnedItem = "";
      for (word of item.split(" ")) {
        returnedItem = `${returnedItem} ${word.charAt(0).toUpperCase() +
          word.slice(1)}`;
      }
      return returnedItem;
    },
    err => {
      return err;
    }
  )
);
