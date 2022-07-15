import { useForm } from "react-hook-form";

const pageData = [
  {
    element: "input",
    type: "text",
    value: "",
    name: "name",
    placeholder: "name",
    disabled: false,
    required: false,
    options: null,
  },
  {
    element: "input",
    type: "password",
    value: "",
    name: "password",
    placeholder: "password",
    disabled: false,
    required: false,
    options: null,
  },
  {
    element: "input",
    type: "date",
    value: "",
    name: "date",
    placeholder: "date",
    disabled: false,
    required: false,
    options: null,
  },
  {
    element: "select",
    type: "",
    value: "",
    name: "country",
    placeholder: "country",
    disabled: false,
    required: false,
    options: ["america", "india", "australia"],
  },
  {
    element: "textarea",
    type: "text",
    value: "",
    name: "details",
    placeholder: "name",
    disabled: false,
    required: false,
    options: null,
  },
];

export default function Home() {
  const { register, handleSubmit } = useForm();

  const elements = pageData.map((i) => {
    if (i.element === "input") {
      return (
        <>
          <input
            type={i.type}
            {...register(i.name)}
            className="input w-full"
            placeholder={i.placeholder}
          />
        </>
      );
    } else if (i.element === "textarea") {
      return (
        <>
          <textarea
            {...register(i.name)}
            className="textarea w-full resize-none h-80"
            placeholder={i.placeholder}
          />
        </>
      );
    } else if (i.element === "select") {
      return (
        <>
          <select
            {...register(i.name)}
            className="select w-full"
            placeholder={i.placeholder}
          >
            {i?.options?.map((j) => (
              <>
                <option value={j}>{j}</option>
              </>
            ))}
          </select>
        </>
      );
    }
  });

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <div>
      <div>welcome {process.env.NEXT_PUBLIC_USERNAME}</div>
      <div className="bg-base-300 fixed right-0 top-0 bottom-0 w-96 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <button className="btn btn-accent w-full">Update</button>
          {elements}
        </form>
      </div>
    </div>
  );
}
