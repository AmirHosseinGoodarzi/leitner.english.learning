import PageHeader from "@/components/pageHeader";
import FormContainer from "./formContainer";

export default function ConfigCard() {
  const initialFormValues = {
    front: "",
    back: "",
  };
  return (
    <div className="relative pb-10">
      <PageHeader
        hint="Configuration"
        title="Add New Word"
        description="Add your word information"
      />
      <br />
      <FormContainer initialFormValues={initialFormValues} />
    </div>
  );
}
