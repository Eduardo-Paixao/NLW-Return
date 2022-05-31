import { feedbackTypes, IFeedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypesStepProps {
  setFeedbackType: React.Dispatch<
    React.SetStateAction<"BUG" | "IDEA" | "OTHER" | null>
  >;
}

export function FeedbackTypesStep({ setFeedbackType }: FeedbackTypesStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full ">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none transition-all duration-200 ease-linear"
            type="button"
            onClick={() => {
              setFeedbackType(key as IFeedbackTypes);
            }}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
