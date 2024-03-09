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
    <div className='flexStart flex-col w-full gap-3'>
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
          className={`w-full outline-0 bg-light-white-100 rounded-xl p-4 border ${
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
