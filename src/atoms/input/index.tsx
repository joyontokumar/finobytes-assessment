import { useFormikContext } from "formik";

interface SimpleInputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  readOnly?: boolean;
}

const InputField = ({
  name,
  label,
  type = "text",
  placeholder,
  readOnly = false,
}: SimpleInputProps) => {
  const formik = useFormikContext<any>();
  const { values, handleChange, errors, touched } = formik;

  const showError = touched[name] && errors[name];

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={values[name] || ""}
        onChange={handleChange}
        readOnly={readOnly}
        className={`w-full p-2 border rounded ${
          showError ? "border-red-500" : "border-gray-300"
        }`}
      />
      {showError && typeof errors[name] === "string" && (
        <div className="text-red-500 text-sm mt-1">{errors[name]}</div>
      )}
    </div>
  );
};

export default InputField;
