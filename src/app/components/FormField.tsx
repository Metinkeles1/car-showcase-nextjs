type Props = {
  type?: string;
  name: string;
  title: string;
  value: string;
  placeholder: string;
  isTextArea?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  touched: boolean;
  errorMessage: string;
  onBlur: () => void;
};

const FormField = ({
  type,
  title,
  name,
  value,
  placeholder,
  isTextArea,
  onChange,
  touched,
  errorMessage,
  onBlur,
}: Props) => {
  return (
    <div className='flex-start flex-col w-full gap-3'>
      <label className='w-full text-black font-bold mt-2'>
        {title}
        {touched && errorMessage ? <span className='text-danger'>*</span> : ""}
      </label>

      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className='form_field-input'
          onChange={onChange}
          value={value}
        />
      ) : (
        <input
          type={type || "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          required
          className={`w-full border h-[48px]  p-4 rounded-lg max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm ${
            touched && errorMessage ? "border-danger" : ""
          }`}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    </div>
  );
};

export default FormField;
