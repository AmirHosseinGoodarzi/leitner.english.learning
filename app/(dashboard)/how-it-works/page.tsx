import PageHeader from "@/components/pageHeader";

export default function HowItWorks() {
  return (
    <div className="pb-10">
      <PageHeader
        hint="Help"
        title="How the Leitner box works?"
        description="Read the part below if you don’t know what is the Leitner box or how it works"
      />
      <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
        The Leitner system is a method of efficiently using flashcards that was
        proposed by the German science journalist Sebastian Leitner in 1972. It
        is a simple implementation of the principle of spaced repetition, where
        cards are reviewed at increasing intervals.
      </p>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
        In this method, flashcards are sorted into groups according to how well
        the learner knows each one in Leitner’s learning box. The learners try
        to recall the solution written on a flashcard. If they succeed, they
        send the card to the next group. If they fail, they send it back to the
        first group. Each succeeding group has a longer period before the
        learner is required to revisit the cards.
      </p>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
        In Leitner’s original method, published in his book “So lernt man
        Lernen”, the schedule of repetition was governed by the size of the
        partitions in the learning box. These were, 2, 5, 8, and 14 cm. Only
        when a partition became full was the learner to review some of the cards
        it contained, moving them forward or back depending on whether they
        remembered them.
      </p>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
        The Leitner system has been widely used for decades and is still popular
        today. It is an effective way to memorize information and can be used
        for various purposes such as learning new languages, studying for exams,
        and more.
      </p>
    </div>
  );
}
