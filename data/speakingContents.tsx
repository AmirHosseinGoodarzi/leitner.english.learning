import { Accordion, Example, Rule } from "@/components/grammerContents";

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
  "/directions": <div>directions</div>,
  "/reactions": <div>reactions</div>,
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
  "/suggestions": <div>suggestions</div>,
  "/offers": <div>offers</div>,
  "/requests": <div>requests</div>,
  "/complaints": <div>complaints</div>,
  "/shopping": <div>shopping</div>,
  "/time": <div>time</div>,
  "/start-end-conversations": <div>start-end-conversations</div>,
  "/opnion": <div>opnion</div>,
  "/agreeing": <div>agreeing</div>,
  "/common-things": <div>common-things</div>,
  "/brits-money": <div>brits-money</div>,
  "/fillers": <div>fillers</div>,
  "/invitation": <div>invitation</div>,
  "/punishments": <div>punishments</div>,
  "/believes": <div>believes</div>,
  "/preference": <div>preference</div>,
  "/others": <div>others</div>,
};
