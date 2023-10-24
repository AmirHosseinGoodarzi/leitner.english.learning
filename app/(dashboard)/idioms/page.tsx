"use client";

import { Example, Rule } from "@/components/grammerContents";
import PageHeader from "@/components/pageHeader";

export default function GrammarContent() {
  return (
    <div className="relative pb-10">
      <PageHeader
        hint="Advance Speaking"
        title="Idioms and expresions"
        description="Idioms and expressions are phrases that have a figurative meaning that goes beyond their literal meaning."
      />
      <div>
        <Example>Be a Sunday driver !</Example>
        <Rule>
          A Sunday driver is a person who drives slowly or inexpertly, as for
          leisure or sightseeing.
        </Rule>
        <br />
        <Example>Be in game</Example>
        <Rule>Be up for the challange ....</Rule>
        <br />
        <Example>Saving the day....</Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">Making a day...</div>
        </Rule>
        <br />
        <br />
        <Example>
          I have a memory like a Sieve
          <br />
          🔀 Like an elephant 🐘
        </Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">Memory like a fish</div>
        </Rule>
        <br />
        <Example>He’s hawk-eyed.</Example>
        <Rule>
          Someone who is hawk-eyed watches and notices everything that happens
        </Rule>
        <br />
        <Example>The money burns a hole in my pocket.</Example>
        <Rule>Someone who spends money as soon as it is earned.</Rule>
        <br />
        <Example>Knowing somewhere like the back of hand.</Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">Like palm 🖐️</div>
        </Rule>
        <br />
        <Example>He pulled the rug under my feet.</Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">Beating under the water 🌊</div>
        </Rule>
        <br />
        <Example>Being an apple polisher.</Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">Egg rubber 🥚</div>
        </Rule>
        <br />
        <Example>Someone opened a can of worms.</Example>
        <br />
        <Example>
          Feel Pink 😊
          <br />
          Feel Blue 😔
        </Example>
        <br />
        <Example>He is wishy-washi !</Example>
        <Example>She is Dilly-dally !</Example>
        <br />
        <Example>
          Excuse my back !
          <br />
          Rose is Rose !
        </Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">
            The flower doesn’t have a front and back! 🌹
          </div>
        </Rule>
        <br />
        <Example>Money talks !</Example>
        <Example>Save your money for a rainy day !</Example>
        <Example>He/She gets dolled up.</Example>
        <br />
        <Example>Beware of Greeks bearing gifts !</Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">Wolf’s saying hi isn’t without greed. 🐺</div>
        </Rule>
        <br />
        <Example>The grapes are sour.</Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">The cat’s hand can’t touch the meat. 🐈</div>
        </Rule>
        <br />
        <Example>My Cake is dough !</Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">My hand doesn’t have salt. 🧂</div>
        </Rule>
        <br />
        <Example>Time flies.</Example>
        <Example>Time is money.</Example>
        <Example>Better late than never.</Example>
        <Example>Don’t shed crocodile tears.</Example>
        <Example>If you say so.</Example>
        <Example>No sweat !</Example>
        <Rule>Confirm something... = Aight</Rule>
        <br />
        <Example>Being in charge</Example>
        <Rule>Being responsible for something ...</Rule>
        <br />
        <Example>She is as tough as old boots.</Example>
        <Rule>
          People who are physically or mentally strong and can withstand
          difficult situations.
        </Rule>
        <br />
        <Example>He gets so cocky.</Example>
        <Rule>
          Someone who is starting to believe they are better than others or that
          they can do no wrong.
        </Rule>
        <br />
        <Example>Water under the bridge.</Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">What’s done is done!</div>
        </Rule>
        <br />
        <Example>Feel in my bones.</Example>
        <Example>It’s an itsy-bitsy.</Example>
        <Example>Speak of the devil and he doth appear.</Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">Halal zade umad 😶</div>
        </Rule>
        <br />
        <Example>Eating your heart out !</Example>
        <Rule>
          <span className="bg-sky-500 rounded-md absolute p-2 text-sm -rotate-45">
            Persian
          </span>
          <div className="ml-20">Your heart should burn!</div>
        </Rule>
        <br />
        <Example>I jumped out of my skin !</Example>
        <Rule>Suddenly and extremely frightened or shocked.</Rule>
        <br />
        <Example>
          Go banana <br />
          Drive sb nuts <br />
        </Example>
        <Rule>Make somebody or someone crazy</Rule>
        <br />
        <Example>
          Be big on Something
          <span className="bg-sky-500 rounded-md p-2 text-sm ml-3">
            verb (ing)
          </span>
        </Example>
        <br />
        <Example>Let’s call it a day</Example>
        <Rule>Decide or agree to stop doing something</Rule>
        <br />
        <Example>
          <h3 className="font-bold text-3xl">Annoying</h3>
          <br />
          It annoys me as hell. <br />
          It gets on my nerve. <br />
          It’s so mind-chewing. <br />
          He/She takes my ear off !
        </Example>
      </div>
    </div>
  );
}