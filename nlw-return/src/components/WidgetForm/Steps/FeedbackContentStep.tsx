import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackTypesStepProps {
  feedbackType: "BUG" | "IDEA" | "OTHER";
  handleRestartFeedback(): void;
  setFeedbackSent: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FeedbackContentStep({
  feedbackType,
  handleRestartFeedback,
  setFeedbackSent
}: FeedbackTypesStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  function handleSubmitFeedback(event:FormEvent) {
    event.preventDefault()
    console.log({comment,screenshot})
    setFeedbackSent(true)
  }
  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={handleRestartFeedback}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-3">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          onChange={e=>setComment(e.target.value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:right-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          id=""
          cols={55}
          rows={5}
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className=" flex gap-2">
          <ScreenshotButton
            screenshot={screenshot}
            setScreenshot={setScreenshot}
          />
          <button
            disabled={comment.trim()?false:true}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
