export default function ModalWithForm({
  children,
  title,
  onClose,
  isOpen,
  onSubmit,
}) {
  return (
    <div
      className={`modal invisible fixed inset-0 flex flex-col justify-center items-center ${
        isOpen && '!visible'
      }`}
    >
      <div className="modal__container relative p-6 rounded-[20px] bg-emerald-500 m-auto text-black w-[436px] box-border">
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
