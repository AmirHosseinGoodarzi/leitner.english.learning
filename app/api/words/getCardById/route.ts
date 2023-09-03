import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { wordId } = await req.json();
    // const doc = await wordModel.findById(wordId);
    return NextResponse.json({
      //   status: doc ? true : false,
      //   data: doc,
      status: true,
      data: wordId,
    });
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
