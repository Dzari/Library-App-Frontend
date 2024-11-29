const getLargerImageUrl = (thumbnailUrl) => {
  if (thumbnailUrl) {
    return thumbnailUrl.replace('&zoom=1', '&zoom=2').replace('http', 'https');
  } else {
    return 'https://via.placeholder.com/128x192.png?text=No+Image';
  }
};

export const formatResults = (data) => {
  if (data.items) {
    const formattedBooks = data.items
      .filter(
        (book) =>
          book.volumeInfo.imageLinks && book.saleInfo.saleability === 'FOR_SALE'
      )
      .map((book) => ({
        img: getLargerImageUrl(book.volumeInfo.imageLinks?.thumbnail),
        title: book.volumeInfo.title || 'No Title Available',
        subtitle: book.volumeInfo.authors
          ? book.volumeInfo.authors.join(', ')
          : 'No Authors Available',
        link: book.saleInfo.buyLink,
      }));
    console.log(formattedBooks);
    return formattedBooks;
  } else {
    return [];
  }
};
