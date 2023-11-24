"use client";

import Button from "@/components/button";
import PageHeader from "@/components/pageHeader";
import { Headset } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useSpeechSynthesis } from "react-speech-kit";

export default function Prononciation() {
  const { speak, cancel, speaking, voices } = useSpeechSynthesis();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { text: "" },
  });
  const getPronunciation = handleSubmit(({ text }: { text: string }) => {
    if (speaking) {
      cancel();
    } else {
      // 105 - 106 - 107 - 108 - 109
      speak({ text, voice: voices[107], rate: 0.85 });
    }
  });
  return (
    <div className="relative pb-10">
      <PageHeader
        hint="Accent"
        title="Pronunciation"
        description="Try to find out how to pronounce the words in UK English :)"
      />
      <br />
      <br />
      <div className="form_wrapper w-full md:w-3/4 lg:w-1/2 m-auto space-y-8">
        <div className="sm:col-span-2">
          <textarea
            id="message"
            className="form_input"
            placeholder=" "
            rows={4}
            {...register("text", { required: true })}
          />
          <label htmlFor="message" className="form_label">
            Write your text in the below box, to find out the pronunciation
          </label>
          {errors.text && <p className="error_message">The Text is required</p>}
        </div>
        <div className="sm:col-span-2 mt-2.5 flex items-center justify-center">
          <Button
            onClick={getPronunciation}
            icon={<Headset className="text-2xl" />}
            loading={speaking}
          >
            Get Pronunciation
          </Button>
        </div>
      </div>
    </div>
  );
}
