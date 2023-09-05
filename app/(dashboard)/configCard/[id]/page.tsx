"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/pageHeader";
import FormContainer from "../formContainer";
import { useGetCardById } from "@/services/Words";

export default function EditCard({ params }: { params: { id: string } }) {
  const [initialFormValues, setInitialFormValues] = useState({
    front: "",
    back: "",
  });
  const { mutate: getCardById, isLoading: getCardByIdLoading } =
    useGetCardById();
  useEffect(() => {
    if (params.id) {
      getCardById(params.id, {
        onSuccess: (response) => {
          if (response.status) {
            setInitialFormValues(response.data);
          }
        },
      });
    }
  }, [params]);

  return (
    <div className="relative pb-10">
      <PageHeader
        hint="Configuration"
        title="Update Word"
        description="Edit and Update your word information"
      />
      <br />
      <FormContainer initialFormValues={initialFormValues} />
    </div>
  );
}
