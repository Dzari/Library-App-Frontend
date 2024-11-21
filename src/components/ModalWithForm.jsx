export default function ModalWithForm({
  children,
  title,
  onClose,
  isOpen,
  onSubmit,
}) {
  return (
    <div
      className={`modal invisible bg-black/50 fixed inset-0 flex flex-col justify-center items-center ${
        isOpen && '!visible'
      }`}
    >
      <div className="modal__container relative pt-8 pb-4 px-6 rounded-lg bg-gray-900 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)] w-[480px] box-border">
        <h2 className="modal__title m-0 mb-6">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button absolute top-[22px] right-[30px] size-5 cursor-pointer bg-close-icon"
        />
        <form onSubmit={onSubmit} className="modal__form flex flex-col">
          {children}
        </form>
      </div>
    </div>
  );
}
