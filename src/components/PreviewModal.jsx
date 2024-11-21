export default function ItemModal({ isOpen, book, handleCloseModal }) {
  return (
    <div
      className={`modal invisible fixed inset-0 flex flex-col justify-center items-center ${
        isOpen && '!visible'
      }`}
    >
      <div className="modal__container relative py-4 px-4 rounded-lg bg-gray-900 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)] box-border">
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close-button absolute top-[-20px] right-[-20px] size-5 cursor-pointer bg-close-icon"
        />
        <div className="flex flex-col">
          {book.img === null ? (
            book.title
          ) : (
            <img src={book.img} alt={book.title} />
          )}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl">{book.title}</h2>
            <h2 className="text-lg opacity-50">{`by ${book.subtitle}`}</h2>
            {book.des === '' ? (
              <div>{book.title}</div>
            ) : (
              <div className="py-4 max-w-[300px]">{book.des}</div>
            )}

            <a
              className="text-blue-500 underline"
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Buy ${book.title} now`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
