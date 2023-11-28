import { Example, Rule } from "@/components/grammerContents";

export default {
  "/greetings": (
    <div className="flex flex-col">
      <p className="text-white font-bold text-3xl">Formal</p>
      <p>How are you?</p>
      <p>Good Morning.</p>
      <p>What are you doing?</p>
      <p>It’s nice to meet you.</p>
      <p>It is a pleasure to meet you.</p>
      <p>It’s an honor to meet you.</p>
      <br />
      <p className="text-white font-bold text-3xl">Informal</p>
      <p>Hi.</p>
      <p>Hey.</p>
      <p>What’s up?</p>
      <p>What’s new?</p>
      <p>What’s going on?</p>
      <p>How is it going?</p>
      <p>How are things?</p>
      <p>How’s life?</p>
      <p>Howdy!</p>
      <p>How are things going?</p>
      <p>How are things with you?</p>
      <p>How is the world treating you?</p>
      <p>What's the vibe today?</p>
      <p>What's shakin?</p>
      <br />
      <br />
      <Rule>Responding</Rule>
      <div className="text-2xl">😊</div>
      <div>Had sunshine all day long.</div>
      <div>Better now that you asked.</div>
      <div>Could'nt be better</div>
      <div>Peachy!</div>
      <br />
      <div className="text-2xl">😔</div>
      <div>Not exactly my best day.</div>
      <div>Survivng, I guess!</div>
      <div>I'd be lying if I said I'm fine.</div>
      <div>You tell me.</div>
      <br />
      <br />
      <Rule>Goodbye</Rule>
      <div>Catch you later.</div>
      <div>I'll be out of your hair.</div>
      <div>So long!</div>
      <div>I already miss you.</div>
      <div>I'm off.</div>
      <div>Peace out!</div>
      <div>I gotta jet!</div>
    </div>
  ),
  "/directions": (
    <div>
      <Rule>How to ask About addresses?</Rule>
      <img
        src="/assets/images/direction.png"
        alt="direction"
        className="mx-auto"
      />
      <br />
      <Example>
        <b>Could you show me the way to</b> Tehranpars?
      </Example>
      <Example>
        <b>Is there a</b> hospital <b>in the vicinity</b>?
      </Example>
    </div>
  ),
  "/reactions": (
    <div>
      <p className="text-white font-bold text-3xl">➕ Show interest</p>
      <p>I’m simulated to ....</p>
      <p>That seems cool.</p>
      <p>It appears to be great.</p>
      <p>It’s a wise choice.</p>
      <p>That’s the spirit.</p>
      <br />
      <p className="text-white font-bold text-3xl">➖</p>
      <p>That’s the wrong one.</p>
      <p>It’s not useful.</p>
      <br />
      <p className="text-white font-bold text-3xl">🤢 Hate something</p>
      <p>That’s bullied to me!</p>
      <p>It riles me up!</p>
      <br />
      <p className="text-white font-bold text-3xl">Nosey reactions</p>
      <p>It’s too rude !</p>
      <p>Are you kidding me?</p>
      <p>You can’t be serious !</p>
      <br />
    </div>
  ),
  "/feelings": (
    <div>
      <p className="text-white font-bold text-3xl">😊 Cool</p>
      <p>I feel thrilled.</p>
      <br />
      <p className="text-white font-bold text-3xl">50 - 50</p>
      <p>I feel neutral.</p>
      <br />
      <p className="text-white font-bold text-3xl">Angry</p>
      <p>I lose my shit when ....</p>
      <p>I get boild.</p>
      <br />
      <p className="text-white font-bold text-3xl">Sad</p>
      <p>I feel devastated.</p>
      <br />
    </div>
  ),
  "/according-to-me": (
    <div className="flex flex-col gap-2">
      <p>The way I see it, .....</p>
      <p>To me, .....</p>
      <p>If you ask me, .....</p>
      <p>As far as I’m concerned, .....</p>
      <p>As I see it, .....</p>
      <p>By my lights, .....</p>
      <p>I suppose, ……….</p>
      <p>As far as I know, ………</p>
    </div>
  ),
  "/suggestions": (
    <div>
      <p>Why don’t we ….. ?</p>
      <p>It would be beneficial to …..</p>
      <p>I was wondering if you’d like to ……</p>
      <p>Shall we …. ?</p>
      <p>Let’s ……</p>
    </div>
  ),
  "/offers": (
    <div>
      <p>Shall I ….. ? </p>
      <p>Do you want me to do that?</p>
      <p>Can I ….. ? </p>
      <p className="text-white font-bold text-3xl">Responding</p>
      <p>That’d be great.</p>
      <p>That’s a good idea.</p>
      <p>Yes, if you don’t mind.</p>
    </div>
  ),
  "/requests": (
    <div>
      <p>Could ( Can ) you …..?</p>
      <p>Will you …..?</p>
      <p>I wonder if you could …..</p>
      <p>Would you mind …. .?</p>
      <p className="text-white font-bold text-3xl">In polite way</p>
      <p>Would you please ….</p>
      <p>Would you be nice enough ….</p>
      <p>I would appreciate it if you could …..</p>
    </div>
  ),
  "/complaints": (
    <div>
      <p>I’m sorry but …….</p>
      <p>I’m afraid I’ve got a complaint.</p>
    </div>
  ),
  "/shopping": (
    <div>
      <p className="text-white font-bold text-3xl">Sales person</p>
      <p>How can I be of service?</p>
      <p>What piece of clothes are you interested in?</p>
      <p>What brings you here?</p>
      <p>What piece of clothes do you have in your mind?</p>
      <p>➕ Yes,It’s around 100$</p>
      <p>➖ No, It’s fixed.</p>
      <br />
      <p className="text-white font-bold text-3xl">Customer</p>
      <p>Can you give me a hand? I need a ……</p>
      <p>Where’s the fitting room?</p>
      <p>How much does it cost?</p>
      <p>I’m looking for a …….. size.</p>
      <p>Do you have ……….. in stock? </p>
      <p>Can I ask for a bargain?</p>
      <br />
      <p className="text-white font-bold text-3xl">Clothes</p>
      <p>It’s appealing.</p>
      <p>It suits you.</p>
      <p>It fits you.</p>
      <p>It looks dandy on you.</p>
      <p>It’s in stock.</p>
      <p>It’s not in the warehouse.</p>
    </div>
  ),
  "/start-end-conversations": (
    <div>
      <p className="text-white font-bold text-3xl">
        Starting Conversation (People you know now)
      </p>
      <p>Do you know X?</p>
      <p>How do you know X?</p>
      <p>Are you a friend of X?</p>
      <p>How do you two know each other?</p>
      <p>Where people are from or live</p>
      <p>Where are you from?</p>
      <p>Whereabouts in Tehran?</p>
      <p>Do you live near here?</p>
      <p>Meeting people in the past</p>
      <p>Didn't we meet there?</p>
      <p>People's job</p>
      <p>What do you do?</p>
      <p>You are a ( lawyer ). Aren't you?</p>
      <br />
      <p className="text-white font-bold text-3xl">Ending Conversation</p>
      <p>A. It was very nice to meet you.</p>
      <p>B. You too.</p>
      <p>A. We should get together sometime.</p>
      <p>B. Yes, that's a good idea.</p>
      <p>A. See you later maybe.</p>
      <p>B. Yes, see you.</p>
      <p>A. It's great to see you again.</p>
      <p>B. And you.</p>
    </div>
  ),
  "/opinion": (
    <div>
      <p className="text-white font-bold text-3xl">Asking</p>
      <p>What do you think?</p>
      <p>What about you?</p>
      <p>Do you think ….. ?</p>
      <p>Do you agree with …. ? </p>
      <br />
      <p className="text-white font-bold text-3xl">Telling</p>
      <p>I guess that .… (50 - 50)</p>
      <p>Correct me if i’m wrong …. (50 - 50)</p>
      <p>I’m deadly sure about that …. (100)</p>
      <p>I can dare say that .… (100)</p>
    </div>
  ),
  "/agreeing": (
    <div>
      <p className="text-white font-bold text-3xl">Agreeing</p>
      <p>I agree ( with you ).</p>
      <p>Maybe you’re right.</p>
      <p>Yes, I think so.</p>
      <p>Yes, definitely.</p>
      <p>You've persuaded me = Now, I agree with you.</p>
      <br />
      <p className="text-white font-bold text-3xl">Disagreeing</p>
      <p>I’m not sure about that.</p>
      <p>I’m sorry. I don’t agree.</p>
      <p>No, definitely not.</p>
      <p>No, I don’t think so.</p>
      <br />
      <p className="text-white font-bold text-3xl">Care</p>
      <p>I do overrate it.</p>
      <p>It matters to me.</p>
      <br />
      <p className="text-white font-bold text-3xl">Do not care</p>
      <p>I ain’t buying it.</p>
      <p>I don’t give a damn to it. (informal)</p>
      <br />
      <p className="text-white font-bold text-3xl">Not sure</p>
      <p>If I’m not wrong, ….</p>
      <p>I’m a little skeptical but …..</p>
      <p>I’m doubtful ……</p>
      <p>I’m in a dilemma ….</p>
      <br />
      <p className="text-white font-bold text-3xl">Facts</p>
      <p>It’s obvious that ….</p>
      <p>It’s clear as a day that ….</p>
      <p>Believe it or not ….</p>
    </div>
  ),
  "/common-things": (
    <div>
      <p>To say something is the same for me</p>
      <br />
      <Rule>➕ So + auxiliary or be + I</Rule>
      <Example>
        <p>A: I really love cooking.</p>
        <p>B: So do I.</p>
      </Example>
      <Rule>➖ Nor + auxiliary or be + I</Rule>
      <Example>
        <p>A: I don’t go out much during the week.</p>
        <p>B: Nor do I.</p>
      </Example>
      <br />
      <p>To say something is the different for me</p>
      <br />
      <Rule>➕ Oh, + I + auxiliary or be + not</Rule>
      <Example>
        <p>A: I’m quite a good tennis player.</p>
        <p>B: Oh, I’m not.</p>
      </Example>
      <Rule>➖ Oh, + I + auxiliary or be</Rule>
      <Example>
        <p>A: I didn't do much sport at school.</p>
        <p>B: Oh I did.</p>
      </Example>
    </div>
  ),
  "/brits-money": (
    <div>
      <Rule>
        British money is <b>‘pounds’</b> and <b>‘pence’</b> - There are a
        hundred pence in a pound.
      </Rule>
      <Rule>British people often say prices like this : </Rule>
      <Example>Three forty-five</Example>
      <Rule>
        Sometimes they say ‘pounds’ and sometimes they don’t. And they don’t
        usually say ‘pence’ :
      </Rule>
      <Example>Nine pounds twenty</Example>
      <Rule>If the price is only pence then we say ‘p’ : </Rule>
      <Example>Ninety p</Example>
    </div>
  ),
  "/fillers": (
    <div>
      <p>Well, …..</p>
      <p>You know, ….</p>
      <p>Let me tell you that, ….</p>
      <p>I’d say that, ….</p>
      <p>Actually, ….. = as a matter of fact, …..</p>
    </div>
  ),
  "/punishments": (
    <div>
      <Rule>✅Should + be + p.p </Rule>
      <Example>
        Drivers who pass the red light should be fined about $20.
      </Example>
      <Rule>The verbs we often use in this model:</Rule>
      <ul>
        <li>Sent </li>
        <li>Execute</li>
        <li>Fine</li>
        <li>Sentence to</li>
      </ul>
    </div>
  ),
  "/believes": (
    <div>
      <p>❌ I completely roll my eyes on, ……</p>
      <p>✅ I do believe in ……..</p>
      <p>✅ I’m a little skeptical about ….. </p>
    </div>
  ),
  "/preference": (
    <div>
      <p>If I had the power of choice, …..</p>
      <p>I’d rather …..</p>
    </div>
  ),
  "/wc": (
    <div>
      <p>Nature calls !</p>
      <p>I need to meet Mr.John !</p>
    </div>
  ),
  "/me-too": (
    <div>
      <p>Likewise</p>
      <p>Ditto</p>
      <p>Me neither = if the sentence was negative</p>
      <p>So am i</p>
      <p>Same here</p>
    </div>
  ),
  "/food-table": (
    <div>
      <p>I’m starving = very hungry</p>
      <p>Have a bite.</p>
      <p>Dig in, enjoy your meal.</p>
      <p>I can eat like a horse :D</p>
      <p>I’m stuffed. </p>
      <br />
      <p className="text-white font-bold text-3xl">Drinking water</p>
      <p>A: Can you pour me some water please?</p>
      <p>B: Sure, just say when !</p>
    </div>
  ),
  "/others": (
    <div className="flex flex-col gap-5">
      <p>Consider it done 👍</p>
      <p>I can't thank you enough.</p>
      <p>It’s up to you.</p>
      <p>Where are you off to? ( informal )</p>
      <p>Everything seems to be in order ….</p>
      <p>If it’s not time consuming …..</p>
      <p>If I have more spare time …..</p>
      <p>It’s for your own benefit.</p>
      <p>Frankly,..... = To be frank …… = Honestly speaking ….</p>
      <p>Look after yourself = Take care </p>
      <p>This one's on me.</p>
      <p>That’s very kind of you.</p>
      <p>
        I’ll probably see you around = We might meet each other in somewhere in
        this area
      </p>
      <p>As well = too = same ( You are 24. Me as well. )</p>
      <p>Help yourself</p>
      <p>I bet = I’m sure</p>
      <p>What do you fancy?</p>
      <p>What do you have in your bag?</p>
      <p>We missed your absence</p>
      <p>Make your money rain.</p>
      <p>I wouldn’t splash cash.</p>
      <p>It's not worth ..…ing. ( buying, trying, … )</p>
      <p>Much obliged.</p>
      <p>I’m afraid it's negative.</p>
      <p>Much obliged.</p>
      <br />
      <p>Light the cigarette.</p>
      <p>Extinguish the cigarette.</p>
    </div>
  ),
};
