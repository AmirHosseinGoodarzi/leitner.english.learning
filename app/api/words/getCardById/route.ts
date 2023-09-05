import { NextResponse } from "next/server";
import connectDB from "@/libs/mongodb";
import WordModel from "@/models/wordModel";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { wordId } = await req.json();
    const doc = await WordModel.findById(wordId);
    return NextResponse.json({
      status: doc ? true : false,
      data: doc,
    });
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
