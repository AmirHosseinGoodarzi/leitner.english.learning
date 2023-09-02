"use client";
import PageHeader from "@/components/pageHeader";
import { Plus } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";

export default function ConfigCard() {
  // const params = useParams();
  // const navigate = useNavigate();
  const initialFormValues = {
    front: "",
    back: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialFormValues,
  });
  // const { mutate: addEditWord, isLoading: addEditWordLoading } =
  //   useAddEditWord();
  // const { mutate: getCardById, isLoading: getCardByIdLoading } =
  //   useGetCardById();

  const formSubmiteHandler = handleSubmit((requestBody) => {
    // addEditWord(
    //   { id: params.id, requestBody },
    //   {
    //     onSuccess: (response) => {
    //       if (response.status) {
    //         reset(initialFormValues);
    //         navigate(ROUTES_OBJECT.configCard);
    //       }
    //     },
    //   }
    // );
  });

  // useEffect(() => {
  //   if (params.id) {
  //     getCardById(params.id, {
  //       onSuccess: (response) => {
  //         if (response.status) {
  //           reset({
  //             front: response.data.front,
  //             back: response.data.back,
  //           });
  //         }
  //       },
  //     });
  //   }
  // }, [params]);

  return (
    <div className="relative pb-10">
      <PageHeader
        hint="Configuration"
        title=""
        description=""
        // title={params.id ? "Update Word" : "Add New Word"}
        // description={`${params.id ? "Update" : "Add"} your word information`}
      />
      <br />
      <div className="form_wrapper w-full md:w-3/4 lg:w-1/2 m-auto space-y-8">
        <div>
          <input
            id="front"
            className={`form_input ${errors.front ? "invalid" : ""}`}
            placeholder=" "
            {...register("front", { required: true })}
          />
          <label htmlFor="front" className="form_label">
            Word ( Front )
          </label>
          {errors.front && (
            <p className="error_message">The Word is required</p>
          )}
        </div>
        <div className="sm:col-span-2">
          <textarea
            id="message"
            className="form_input"
            placeholder=" "
            rows={4}
            {...register("back")}
          />
          <label htmlFor="message" className="form_label">
            Description ( Back )
          </label>
        </div>
        <div className="sm:col-span-2 mt-2.5 flex items-center justify-center">
          <button
            onClick={formSubmiteHandler}
            className="bg-slate-900 dark:bg-slate-100 py-3 px-6 rounded-md text-white dark:text-slate-700"
          >
            <div className="flex items-center justify-center gap-1">
              <span>Add new card</span>
              <Plus className="text-2xl" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
