import { Form, Formik, FormikValues } from "formik";
import InputField from "../../atoms/input";

interface LoginFormProps<T extends FormikValues> {
  title: string;
  initialValues: T;
  validationSchema: any;
  fields: { name: keyof T; label: string; type: string; placeholder: string }[];
  loading: boolean;
  onSubmit: (values: T) => void;
  backgroundColor: string;
}

function LoginForm<T extends FormikValues>({
  title,
  initialValues,
  validationSchema,
  fields,
  loading,
  onSubmit,
  backgroundColor,
}: LoginFormProps<T>) {
  return (
    <div className="flex h-screen">
      <div className={`${backgroundColor} hidden md:flex w-1/2`}></div>
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 shadow-lg rounded-lg bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {title}
          </h2>

          <Formik<T>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form>
                {fields.map((field) => (
                  <InputField
                    key={String(field.name)}
                    name={String(field.name)}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full p-2 rounded mt-4 flex items-center justify-center ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Logging in...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
