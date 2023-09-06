"use client";

import { useEffect } from "react";
import { useAddEditWord } from "@/services/Words";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import { useRouter } from "next/navigation";
import { Plus } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import Button from "@/components/button";

export default function FormContainer({
  initialFormValues,
}: {
  initialFormValues: { front: string; back: string };
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialFormValues,
  });
  const { mutate: addEditWord, isLoading: addEditWordLoading } =
    useAddEditWord();

  const formSubmiteHandler = handleSubmit((requestBody) => {
    addEditWord(requestBody, {
      onSuccess: (response) => {
        if (response.status) {
          reset(initialFormValues);
          router.push(ROUTES_OBJECT.configCard);
        }
      },
    });
  });

  useEffect(() => {
    if (initialFormValues) {
      reset(initialFormValues);
    }
  }, [initialFormValues]);

  return (
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
        {errors.front && <p className="error_message">The Word is required</p>}
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
        <Button
          onClick={formSubmiteHandler}
          icon={<Plus className="text-2xl" />}
          loading={addEditWordLoading}
        >
          Add new card
        </Button>
      </div>
    </div>
  );
}
