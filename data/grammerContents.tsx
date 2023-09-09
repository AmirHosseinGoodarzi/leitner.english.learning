import { Rule, Example, Accordion } from "@/components/grammerContents";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import Link from "next/link";

export default {
  "/so_questions": (
    <div className="flex flex-col gap-8">
      <Accordion title="Subject Questions (No auxiliary)">
        <Example>
          Why <b>are you studying</b> English?
        </Example>
        <Example>
          Who <b>made</b> the Tv Series?
        </Example>
        <Example>
          Who <b>lives</b> in Paris?
        </Example>
        <Example>
          Who <b>travelled</b> to London?
        </Example>
      </Accordion>
      <Accordion title="Object Questions">
        <Example>
          Where <b>do</b> you live?
        </Example>
        <Example>
          What <b>did</b> you do last holiday?
        </Example>
        <Example>
          How much <b>does</b> Luke usually spend on a return flight?
        </Example>
      </Accordion>
    </div>
  ),
  "/simple_present": (
    <div className="flex flex-col gap-8">
      <Accordion title="To be verbs">
        <Rule>➕ Subject + to be + …</Rule>
        <Example>I am a programmer. </Example>
        <br />
        <Rule>➖ Subject + to be + not + ...</Rule>
        <Example>You’re not a teacher.</Example>
        <br />
        <Rule>❓(Yes-No) to be + subject + ... ? </Rule>
        <Example>Are you crazy? </Example>
        <br />
        <Rule>❓(WH) WH-word + to be + Subject + ... ?</Rule>
        <Example>Where are we right now?</Example>
      </Accordion>
      <Accordion title="Other Verbs">
        <Rule>➕ Subject + infinitive + s (for he, she , it) +... .</Rule>
        <Example>I play football.</Example>
        <Example>she watches tv. </Example>
        <br />
        <Rule>➖ Subject + do/does + not + infinitive + ... .</Rule>
        <Example>She doesn’t Care about weather. </Example>
        <br />
        <Rule>❓(Yes-No) Do/Does + Subject + infinitive + … ?</Rule>
        <Example>Does he play video games?</Example>
        <br />
        <Rule>❓(WH) WH-word + do/does + subject + infinitive + …</Rule>
        <Example>What do you do ? </Example>
        <Example>How many cars do you have ? </Example>
      </Accordion>
      <Accordion title="Frequency adverbs ( ordered list )">
        <Rule>✅ We can add [ frequency adverbs ] after to be verbs. </Rule>
        <Example>The Brits are always happy.</Example>
        <Rule>✅ We can add [ frequency adverbs ] before other verbs. </Rule>
        <Example>I usually go to the gym.</Example>
        <ul className="text-black dark:text-white pl-5 lg:pl-10">
          <li>always</li>
          <li>usually/normally/generally</li>
          <li>often</li>
          <li>sometimes</li>
          <li>occasionally</li>
          <li>hardly ever</li>
          <li>never</li>
        </ul>
      </Accordion>
      <Accordion title="Frequency expressions">
        <Rule>
          ✅ We can add [ frequency expressions ] at the end of sentences.{" "}
        </Rule>
        <Example>They watch tv two or three times a week.</Example>
        <ul className="text-black dark:text-white pl-5 lg:pl-10">
          <li>Once a week</li>
          <li>twice a week</li>
          <li>once every six month</li>
          <li>two or three times a year</li>
          <li>every Saturday</li>
        </ul>
      </Accordion>
    </div>
  ),
  "/present_continuous": (
    <div>
      <Rule>➕ Subject + to be + verb + ing + … . </Rule>
      <Example>I am working on my new project.</Example>
      <br />
      <Rule>➖ Subject + to be + not + verb + ing + ... </Rule>
      <Example>He isn’t driving a car.</Example>
      <br />
      <Rule>❓(Yes-No) to be + Subject + verb + ing + ... </Rule>
      <Example>Is she crying ? </Example>
      <br />
      <Rule>❓(WH) WH-word + to be + verb + ing + ... </Rule>
      <Example>Who is eating dinner?</Example>
      <br />
      <Rule>✅ We don’t usually use State Verbs in the continuous forms. </Rule>
      <Example>I like him . not ( I’m liking him )</Example>
      <br />
    </div>
  ),
  "/simple_past": (
    <div className="flex flex-col gap-8">
      <Accordion title="To be verbs">
        <Rule>➕ Subject + was/were + …. .</Rule>
        <Example> I was sick yesterday.</Example>
        <br />
        <Rule>➖ Subject + was/were + not + …. .</Rule>
        <Example> She wasn’t here last week.</Example>
        <br />
        <Rule>❓(Yes-No) was/were + Subject + …. ? </Rule>
        <Example> Was the weather good when you were on holiday? </Example>
        <br />
        <Rule>❓(WH) WH-word + was/were + subject + …. ?</Rule>
        <Example> Where were they last night? </Example>
      </Accordion>
      <Accordion title="Other Verbs">
        <Rule>➕ Subject + ( verb + d/ed ) or ( past simple form )+ ... </Rule>
        <Example> I wanted some water.</Example>
        <Example> They Came late last night.</Example>
        <br />
        <Rule>➖ Subject + did + not + infinitive + ... ? </Rule>
        <Example> I didn’t drive a car</Example>
        <br />
        <Rule>❓(Yes-No) Did + subject + infinitive + ... ? </Rule>
        <Example> Did he play video games last year?</Example>
        <br />
        <Rule>❓(WH) WH - word + did + Subject + infinitive + ... </Rule>
        <Example> Where did you go?</Example>
        <Example> How long did he live there? </Example>
      </Accordion>
    </div>
  ),
  "/past_continuous": (
    <div>
      <Rule>➕ Subject + was/were + verb + ing + …. </Rule>
      <Example>
        I was travelling back from China and we met on the plane.
      </Example>
      <Example>We were standing at a bus stop.</Example>
      <Rule>➖ Subject + was/were + not + verb + ing </Rule>
      <Example>My father wasn’t waiting for me when I got there.</Example>
      <Rule>❓Question word + was/were + subject + verb + ing + … ? </Rule>
      <Example>What were they doing ?</Example>
    </div>
  ),
  "/prsent-perfect": (
    <div>
      <Rule>➕ Subject + have/has + past participle verb form </Rule>
      <Example>
        I’ve been in the USA. ( I don’t know when or I don’t care )
      </Example>
      <Example>She’s worked for many famous companies.</Example>
      <Rule>➖ Subject + have/has + not + p.p + …… </Rule>
      <Example>They haven’t been in the ceremony.</Example>
      <Rule>✅ We can use ( never ) in negatives</Rule>
      <Example>
        I haven’t given my keys to him = I’ve never given my keys to him.
      </Example>
      <Rule>❓(Yes-No) Have/Has + Subject + ever(optional)+ p.p + ...</Rule>
      <Example>Have you ever been to a concert?</Example>
      <Example>Has she heard about Daniel?</Example>
      <Rule>❓(WH) How long + have/has + Subject + p.p + ... </Rule>
      <Example>How long have you been married?</Example>
      <Example>How long has he lived here?</Example>
      <Rule>
        ✅ When we want more information about something we use ( Past Simple )
        not ( Present Perfect )
      </Rule>
      <Example>
        <p>A: Have you ever met any famous people? ( P.P ) </p>
        <p>B: Yes I have . When I was on holiday in Mexico. ( PS ) </p>
        <p>A: Really? Who did you meet? ( PS )</p>
        <p>B: Robbie Williams. I was so excited. ( PS )</p>
      </Example>
    </div>
  ),
  "/prsent-perfect-2": (
    <div>
      <Example>I’ve been in Iran since I was born.</Example>
      <Example>I’ve worked for a company since 2021.</Example>
      <Example>I’ve had my phone for 2 years.</Example>
      <br />
      <Rule>
        If we want to say something in the past and it has been finished, you
        must use Past simple form of the verb. We can use ( for and ago ) in the
        past simple form.
      </Rule>
      <Example>I was a student for 4 years. </Example>
      <Example>We were there 10 hours ago</Example>
      <br />
      <Rule>
        ✅ We use already and just in ➕ sentences and we use yet in ❓ and ➖
        forms.
      </Rule>
    </div>
  ),
  "/prsent-perfect-3": (
    <div>
      <Rule>
        We use just to say something happened recently and fresh news:
      </Rule>
      <Example>I’ve just heard he is in hospital.</Example>
      <br />
      <Rule>We use already to say something happened before now:</Rule>
      <Example>He’s already had an operation.</Example>
      <br />
      <Rule>
        We use yet to say something hasn’t happened, but we think it will happen
        in future:
      </Rule>
      <Example>I haven’t been to visit him yet.</Example>
      <Example>Have you transferred the money to his account yet?</Example>
    </div>
  ),
  "/will-might": (
    <div>
      <Rule>➕ Subject + will / might + infinitive + ….</Rule>
      <Rule>✅ We use might if we want to say will possibly.</Rule>
      <Example>I think our planet will be crowded. </Example>
      <Example>I’ll do it tomorrow. </Example>
      <br />
      <Rule>➖ Subject + will / might + not + infinitive</Rule>
      <Example>It wont ( = will not ) be easy </Example>
      <br />
      <Rule>❓(Yes-No) will + Subject + infinitive </Rule>
      <Example>Will more people use green energy? </Example>
      <br />
      <Rule>❓(WH) WH + will + subject + infinitive </Rule>
      <Example>What will our world be like in 2030? </Example>
    </div>
  ),
  "/be-going-to": (
    <div>
      <Rule>➕ Subject + to be + going to + infinitive.</Rule>
      <Example>We’re going to drive across the USA.</Example>
      <br />
      <Rule>➖ Subject + to be + not + going to + infinitive.</Rule>
      <Example>I’m not going to buy pizza tomorrow.</Example>
      <br />
      <Rule>❓(Yes-No) to be + Subject + going to + infinitive </Rule>
      <Example>Are you going to live abroad?</Example>
      <br />
      <Rule>❓(WH) WH + to be + Subject + going to + infinitive </Rule>
      <Example>When am i going to see you again ?</Example>
      <br />
      <Rule>
        Also we use these verbs to talk about plans, hopes and ambitions.
      </Rule>
      <div className="flex flex-col gap-8">
        <Accordion title="Hopes , Plans , Ambitions">
          <Rule>We are planning .... to infinitive </Rule>
          <Example>We’re planning to travel </Example>
          <Rule>I’m hoping .... to infinitive </Rule>
          <Rule>I want .... to infinitive </Rule>
          <Rule>I’d like .... to infinitive </Rule>
          <Rule>I’m thinking of .... verb + ing</Rule>
          <Example>I’m thinking of swimming</Example>
          <Rule>I’m looking forward to .... verb + ing</Rule>
        </Accordion>
      </div>
    </div>
  ),
  "/present_continuous_for_future": (
    <div>
      <Rule>
        If you don’t knwo or forget the present continuous rules,{" "}
        <Link
          href={ROUTES_OBJECT.grammar + "/present_continuous"}
          className="text-sky-500"
        >
          See this page
        </Link>
      </Rule>
      <Rule>Here are some example:</Rule>
      <Example>I’m driving a car tomorrow. (I’m sure about that.) </Example>
      <Example>
        I’m losing my job next year because I want to live abroad.
      </Example>
      <Example>Are you having any plans for next month? </Example>
    </div>
  ),
  "/have_had_to": (
    <div className="flex flex-col gap-8">
      <Accordion title="Present">
        <Rule>➕ Subject + have to / has to + infinitive </Rule>
        <Example>I have to do a course.</Example>
        <Example>She has to stay there. </Example>
        <br />
        <Rule>➖ Subject + do / does + not + have to + infinitive </Rule>
        <Example>I don’t have to pay for it.</Example>
        <Example>He doesn’t have to clean the room.</Example>
      </Accordion>
      <Accordion title="Past">
        <Rule>➕ Subject + had to + infinitive </Rule>
        <Example>She had to do that for her parents.</Example>
        <br />
        <Rule>➖ Subject + did + not + had to + infinitive </Rule>
        <Example>They didn’t have to touch that.</Example>
      </Accordion>
    </div>
  ),
  "/comparisons": (
    <div className="flex flex-col gap-8">
      <p>
        We use comparatives to compare two people, places or things that are
        different
      </p>
      <Accordion title="Comparatives">
        <Rule>A + to be ( + not for negative ) + comparative + than + B </Rule>
        <Rule>
          adjective == 1-syllable ? add -er : adjective end with Y ? add -er :
          more + adj
        </Rule>
        <Example>He is taller than his friend.</Example>
        <Example>I’m tidier than you.</Example>
        <Example>Your are more(less) polite than me</Example>
        <Example>She is more mature than her sister.</Example>
        <br />
        <Rule>
          ✅ We use a lot or much before the comparative to say there’s a big
          difference,
        </Rule>
        <Example>Tehran is much bigger than Borujerd</Example>
        <Rule>
          ✅ We use a bit before the comparative to say there’s a small
          difference:
        </Rule>
        <Example>I’m a bit older than you</Example>
      </Accordion>
      <p>
        we use superlatives to compare three or more people, places or things.
      </p>
      <Accordion title="Superlatives">
        <Rule>A + to be ( + not for negative ) + the + superlative + …. .</Rule>
        <Rule>
          adjective == 1-syllable ? add -est : adjective end with Y ? add -est :
          most + adj
        </Rule>
        <Example>She is the happiest person I know.</Example>
        <Example>He is the most( or least ) boring man I’ve ever met.</Example>
        <br />
        <Rule>
          ✅ In cases of possessive adjective and ‘s we don’t use the before the
          superlatives.
        </Rule>
        <Example>He’s Jake’s best friend.</Example>
        <Example>She’s our richest relative.</Example>
      </Accordion>
    </div>
  ),
  "/quantifiers": (
    <div>
      <Rule>
        Countable nouns: towel, toothbrush, razor, sun hat, T-shirt, ...
      </Rule>
      <Rule>Uncountable nouns: tea, shampoo, soap, chewing gum, ...</Rule>
      <Rule>✅We usually use some in positive sentences.</Rule>
      <Example>There is some tea </Example>
      <Example>There are some towels</Example>
      <br />
      <Rule>✅We usually use any in negative sentences and questions.</Rule>
      <Example>There aren’t any books </Example>
      <Example>Is there any T-shirt?</Example>
      <br />
      <Rule>✅We can use no to mean not any.</Rule>
      <Example>There is no coffee = There isn’t any coffee</Example>
      <br />
      <Rule>Other quantifiers</Rule>
      <div className="custom_table">
        <table>
          <thead>
            <tr>
              <th>Countable nouns</th>
              <th>Uncountable nouns</th>
              <th>both</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>few / a few</td>
              <td>a bit of</td>
              <td>lots of / a lot of</td>
            </tr>
            <tr>
              <td>many / not many</td>
              <td>much / not much</td>
              <td>some</td>
            </tr>
            <tr>
              <td></td>
              <td>little / a little</td>
              <td>any</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <Rule>
        ✅ We use little when we have little something and it isn’t enough, we
        use a little when we have little something and it is enough for us.
      </Rule>
      <Rule>✅We don’t often use much or many in positive sentences</Rule>
      <Example>
        I’ve got lots of free time not ( I’ve got much free time )
      </Example>
      <Example>There are a lot of chairs not ( There are many chairs )</Example>
      <br />
      Some examples:
      <Example>There are a few towels. </Example>
      <Example>There aren’t many toothbrushes. </Example>
      <Example>There is a little tea. </Example>
      <Example>There isn’t much chewing gum. </Example>
      <Example>How many T-shirts are there? </Example>
      <Example>How much coffee have we got?</Example>
      <br />
      <Rule>
        ✅ We can add quantity phrases to convert uncountable to countable nouns
      </Rule>
      <Example>A piece of chewing gum</Example>
      <Example>A bottle of perfume</Example>
      <Example>A packet of tea</Example>
      <Example>A tube of toothpaste</Example>
      <Example>A bar of soap</Example>
      <Example>A pair of shorts</Example>
    </div>
  ),
  "/possessive-pronouns": (
    <div>
      <div className="custom_table">
        <table>
          <thead>
            <tr>
              <th>Subject Pronouns</th>
              <th>Object pronouns</th>
              <th>Possessive adjectives</th>
              <th>Possessive pronouns</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>me</td>
              <td>my</td>
              <td>mine</td>
            </tr>
            <tr>
              <td>you</td>
              <td>you</td>
              <td>your</td>
              <td>yours</td>
            </tr>
            <tr>
              <td>he</td>
              <td>him</td>
              <td>his</td>
              <td>his</td>
            </tr>
            <tr>
              <td>she</td>
              <td>her</td>
              <td>her</td>
              <td>hers</td>
            </tr>
            <tr>
              <td>it</td>
              <td>it</td>
              <td>its</td>
              <td>-</td>
            </tr>
            <tr>
              <td>we</td>
              <td>us</td>
              <td>our</td>
              <td>ours</td>
            </tr>
            <tr>
              <td>they</td>
              <td>them</td>
              <td>their</td>
              <td>theirs</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <Rule>possessive adjectives or ‘s + noun = possessive pronouns</Rule>
      <Example>That’s my suitcase = That’s mine.</Example>
      <Example>Those are Esmay’s T-shirts = Those are hers.</Example>
    </div>
  ),
  "/should_must": (
    <div>
      <Rule>➕ Subject + should/must + infinitive + ….</Rule>
      <Example>You should go to hospital </Example>
      <Example>You must improve your English.</Example>
      <br />
      <Rule>➖ Subject + should/must + not + infinitive + ….</Rule>
      <Example>You shouldn’t leave after dinner immediately.</Example>
      <Example>You mustn’t sleep here.</Example>
      <br />
      <Rule>❓(Yes-No) should/must + Subject + infinitive + …. ?</Rule>
      <Example>Should I bring something to eat? </Example>
      <br />
      <Rule>❓(WH) WH + should/must + Subject + infinitive + …. ?</Rule>
      <Example>What time should I arrive? </Example>
    </div>
  ),
  "/infinitive_of_purpose": (
    <div>
      <Rule>Because: We use ( sentence + because + sentence )</Rule>
      <Example>I went to the shop because I needed some milk.</Example>

      <Rule>For: Also we can use ( for + noun )</Rule>
      <Example>
        I went to the shops For some milk. NOT ( I went to the shops For buy
        milk. )
      </Example>
      <Rule>Infinitive of purpose: ( sentence + to + infinitive + … )</Rule>
      <Example>I went to the shops to buy milk.</Example>
    </div>
  ),
  "/too-enough": (
    <div>
      <Rule>too + adjective </Rule>
      <Example>I’m too poor to buy a house.</Example>
      <Rule>too much + uncountable nouns</Rule>
      <Example>There is too much pollution in Tehran.</Example>
      <Rule>too many + countable nouns</Rule>
      <Example>There are too many cars in Tehran.</Example>
      <Rule>
        And we use enough to say something is the correct number or amount:
      </Rule>
      <Rule>not + adjective + enough</Rule>
      <Example>He is not old enough to talk.</Example>
      <Rule>adjective + enough </Rule>
      <Example>This house is big enough for us.</Example>
      <Rule>not + verb + enough + noun </Rule>
      <Example>I don’t have enough money to buy a house.</Example>
      <Rule>enough + noun </Rule>
      <Example>I have enough time to pack up. </Example>
    </div>
  ),
  "/passive": (
    <div>
      <Rule>
        We use passive in two situation
        <ul className="text-black dark:text-white pl-5 lg:pl-10 list-decimal">
          <li>Subject is unknown</li>
          <li>Emphasize on action (this is more common)</li>
        </ul>
      </Rule>
      <Rule>➕ Object + to be + p.p + ….</Rule>
      <Example>I eat dinner {"=>"} Dinner is eaten.</Example>
      <Example>I broke the window {"=>"} The window was broken.</Example>
      <Example>The books were signed by the author. </Example>
      <br />
      <Rule>➖ Object + to be + not + p.p + ….</Rule>
      <Example>Interstellar wasn’t directed by a woman.</Example>
      <br />
      <Rule>❓(Yes-No) To be + object + p.p + …. ?</Rule>
      <Example>Are mobile phones used in the metro?</Example>
      <Example>Was the window broken yesterday?</Example>
      <br />
      <Rule>❓(WH) WH + should/must + Subject + infinitive + …. ?</Rule>
      <Example>How many cars are used in Tehran these days?</Example>
      <Example>How was the car stolen?</Example>
      <br />
      <Rule>✅Verbs often are used in passive form: </Rule>
      <ul className="text-black dark:text-white pl-5 lg:pl-10">
        <li>Manufacture</li>
        <li>Publish</li>
        <li>Invent</li>
        <li>Grow</li>
        <li>Direct</li>
        <li>Build</li>
        <li>Make</li>
      </ul>
    </div>
  ),
  "/articles": (
    <div>
      <Rule>
        We use <b>a</b> and <b>an</b>:
        <ul className="text-black dark:text-white pl-5 lg:pl-10 list-decimal">
          <li>With jobs.</li>
          <li>To talk about a person or a thing for the first time.</li>
        </ul>
      </Rule>
      <Example>I’m a programmer</Example>
      <Example>I saw a cat</Example>
      <br />
      <Rule>
        We use <b>the</b>:
        <ul className="text-black dark:text-white pl-5 lg:pl-10 list-decimal">
          <li>
            To talk about a person or a thing for more than one time and we know
            it.
          </li>
          <li>When there is only one ( or one in a particular place )</li>
          <li>With superlatives</li>
        </ul>
      </Rule>
      <Example>The cat was black </Example>
      <Example>The world </Example>
      <Example>The Earth </Example>
      <Example>The first card in IRAN </Example>
      <br />
      <Rule>
        We don’t use a <b>article</b>:
        <ul className="text-black dark:text-white pl-5 lg:pl-10 list-decimal">
          <li>To talk about things in general.</li>
          <li>For most cities and countries.</li>
          <li>With superlatives</li>
        </ul>
      </Rule>
      <Example>I hate mosquitos</Example>
      <Example>
        I live in Iran (Except: The UK, The USA, The Czech Republic )
      </Example>
    </div>
  ),
  "/some-any-no": (
    <div>
      <Rule>
        We use something, somebody=someone, somewhere in positive and question
        sentences to mean one person/place/thing:
      </Rule>
      <Example>Somebody bought that car.</Example>
      <br />
      <Rule>
        We use anything,anybody=anyone,anywhere in negative and question
        sentences to mean one person/place/thing:
      </Rule>
      <Example>I don’t have anything in my bag.</Example>
      <br />
      <Rule>
        We use nothing, nobody = no one, nowhere in positive sentences to mean
        no person/place/thing:
      </Rule>
      <Example>I have nothing in my bag.</Example>
    </div>
  ),
  "/usedto": (
    <div>
      <Rule>➕ Subject + used to + infinitive + ….</Rule>
      <Example>The people used to carry cash 10 years ago </Example>
      <Rule>➖ Subject + didn’t + use to + infinitive + ….</Rule>
      <Example>The people didn’t use to play video games</Example>
      <Rule>❓(Yes-No) Did + subject + use to + infinitive + …. ?</Rule>
      <Example>Did you use to have long hair?</Example>
      <Rule>❓(WH) WH + Did + subject + use to + infinitive + …. ?</Rule>
      <Example>When Did they use to go to a trip?</Example>
      <Rule>✅ We also can use used to with state verbs:</Rule>
      <Example>It used to have special room only for men.</Example>
    </div>
  ),
  "/relative-clauses": (
    <div>
      <Rule>
        <ul className="text-black dark:text-white pl-5 lg:pl-10 list-decimal">
          <li>who/that for people </li>
          <li>which/that for things and stuff</li>
          <li>where/that for places</li>
        </ul>
      </Rule>
      <Rule>✅ We have two types of relative clauses: </Rule>
      <div className="flex flex-col gap-8">
        <Accordion title="Defining">
          <Rule>We can’t remove one of the clauses</Rule>
          <Example>
            I told you about the woman who/that lives next door.
          </Example>
          <Example>They never found the money which/that was stolen.</Example>
          <Example>That’s the place where/that they found the body.</Example>
        </Accordion>
        <Accordion title="Non-Defining">
          <Rule>
            We can remove one of the clauses and the meaning won’t change
          </Rule>
          <Example>
            The boy, who/that is looking at you, is my classmate.
          </Example>
          <Example>Do you know the girl who/that is talking to Tom?</Example>
        </Accordion>
      </div>
    </div>
  ),
  "/first-conditional": (
    <div>
      <Rule>
        <div className="flex flex-wrap">
          <div className="border-b-2 px-3 my-2">If clause(Present Simple)</div>
          <span className="text-3xl mx-5">,</span>
          <div className="border-b-2 px-3 my-2">
            Main clause( future with will)
          </div>
        </div>
      </Rule>
      <Example>If I’m late again, I’ll lose my job</Example>
      <Example>If we don’t leave soon, We won’t get there in time</Example>
      <br />
      <Rule>
        ✅Instead of If we can use some other words. ( when, as soon as ,
        before, after, until )
      </Rule>
      <Example>As soon as I get home, I’ll sleep.</Example>
      <Example>I’ll call you when I get home.</Example>
      <Example>I’ll emigrate after I get my ielts degree.</Example>
      <Example>Before I come back home, I’ll finish my work.</Example>
    </div>
  ),
  "/second-conditional": (
    <div>
      <Rule>
        <div className="flex flex-wrap">
          <div className="border-b-2 px-3 my-2">If clause(Past Simple)</div>
          <span className="text-3xl mx-5">,</span>
          <div className="border-b-2 px-3 my-2">
            Main clause( would + infinitive )
          </div>
        </div>
      </Rule>
      <Example>If I were you, I wouldn’t be a programmer </Example>
      <Example>If I saw a relative in the street, I’d run away 😁</Example>
      <Example>
        <p>What would you do if you were rich?</p>
        <p>{"=>"} The way I see it, If I were rich, I’d buy a big house.</p>
        <p>
          {"=>"} I’d buy a Camaro. ( we can remove if clause in the answer )
        </p>
      </Example>
      <Rule>✅ If I was …. ( british ) = If I were ( american )</Rule>
    </div>
  ),
  "/reported-speech": (
    <div>
      <Rule>
        We can use these forms:
        <ul className="text-black dark:text-white pl-5 lg:pl-10 list-decimal">
          <li>He said that, …</li>
          <li>He told me, …</li>
          <li>He claimed that, …</li>
        </ul>
      </Rule>
      <div className="custom_table">
        <table>
          <thead>
            <tr>
              <th>Direct speech</th>
              <th>Reported (Indirect) speech</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Present Simple
                <p className="italic">I want to work abroad.</p>
              </td>
              <td>
                Past Simple
                <p className="italic">He said that he wanted to work abroad.</p>
              </td>
            </tr>
            <tr>
              <td>
                Present Continuous
                <p className="italic">I’m working in a company.</p>
              </td>
              <td>
                Past continuous
                <p className="italic">
                  He told me he was working in a company.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                am/is/are going to
                <p className="italic">I’m going to London next week.</p>
              </td>
              <td>
                was/were going to
                <p className="italic">He said that he was going to London.</p>
              </td>
            </tr>
            <tr>
              <td>
                Will
                <p className="italic">I’ll be back next summer.</p>
              </td>

              <td>
                Would
                <p className="italic">He said that he’d be back next summer.</p>
              </td>
            </tr>
            <tr>
              <td>
                Can
                <p className="italic">I can save about 100$ a week.</p>
              </td>
              <td>
                Could
                <p className="italic">He told me he could save about 100$</p>
              </td>
            </tr>
            <tr>
              <td>May</td>
              <td>Might</td>
            </tr>
            <tr>
              <td>Must</td>
              <td>Had to</td>
            </tr>
            <tr>
              <td>Should</td>
              <td>Shall</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
  "/tag-questions": (
    <div>
      <Rule>
        <div className="flex overflow-x-auto">
          <div className="flex flex-col">
            <div className="border-b-2 px-16 my-2 pb-2">➕</div>
            <div className="px-16">➖</div>
          </div>
          <span className="text-3xl mx-5 mt-3">,</span>
          <div className="flex flex-col">
            <div className="border-b-2 px-3 my-2 pb-2">➖</div>
            <div className="px-3">➕</div>
          </div>
          <span className="text-3xl mx-5 mt-3">?</span>
        </div>
      </Rule>
      <Example>You are a programmer, aren’t you?</Example>
      <Example>She’s been in the USA, Hasn’t she?</Example>
      <Example>He wouldn’t like to buy a house. Would he? </Example>
    </div>
  ),
  "/modal-of-posibility": (
    <div>
      <Rule>Subject + ( Possibility phrase ) + be + ....</Rule>
      <Rule>Subject + ( Possibility phrase ) + infinitive + ....</Rule>
      <br />
      <Rule>
        <ul className="text-black dark:text-white pl-5 lg:pl-10 list-decimal">
          <li>Must {"-->"} 100%</li>
          <li>Could {"-->"} 80%</li>
          <li>Might {"-->"} 50%</li>
          <li>Can’t {"-->"} 0%</li>
        </ul>
      </Rule>
      <Example>
        It <b>might</b> be a snake.
      </Example>
      <Example>
        You <b>can’t</b> be serious.
      </Example>
      <Example>
        She <b>must</b> feel really tired.
      </Example>
    </div>
  ),
  "/causative": (
    <div>
      <Rule>Subject + Have or Get + object + past participle</Rule>
      <Rule> For example, we can say:</Rule>
      <Example>I cleaned my house. (This means I cleaned it myself).</Example>
      <Rule>If I paid someone to clean it, of course I can say:</Rule>
      <Example>A cleaner cleaned my house.</Example>
      <Rule>
        But, another way is to use a causative construction. So I can also say:
      </Rule>
      <Example>I had my house cleaned.</Example>
      <br />
      <Example>I had my car washed.</Example>
      <Example>John will have his house painted.</Example>
      <Example>He got his washing machine fixed.</Example>
    </div>
  ),
};
