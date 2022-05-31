import { CloseButton } from "../CloseButton";
import bugImagUrl from "../../assets/bug.svg";
import ideaImagUrl from "../../assets/idea.svg";
import thoghtImagUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypesStep } from "./Steps/FeedbackTypesStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImagUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImagUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoghtImagUrl,
      alt: "Imagem de um balão de pensamentos",
    },
  },
};

export type IFeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<IFeedbackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep handleRestartFeedback={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypesStep setFeedbackType={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              handleRestartFeedback={handleRestartFeedback}
              setFeedbackSent={setFeedbackSent}
            />
          )}
        </>
      )}

      <footer className="text-sx text-neutral-400">
        Feito com ♥ pelo{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/Eduardo-Paixao"
        >
          Paixão
        </a>
      </footer>
    </div>
  );
}
